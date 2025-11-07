import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useLocation } from "preact-iso";
import { useEffect, useState } from "preact/hooks";

export default function Header() {
  const { route, url } = useLocation();
  const [activeSection, setActiveSection] = useState("");

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    if (url !== "/") {
      route("/");
      setTimeout(() => scrollToSection(sectionId), 200);
      return;
    }

    const element = document.getElementById(sectionId);
    if (!element) return;

    // Find the scrollable container (right side on desktop)
    const scrollContainer = document.querySelector('[class*="overflow-y-auto"]:not([class*="hidden"])') as HTMLElement;
    
    if (scrollContainer && window.innerWidth >= 1024) {
      // Desktop: Scroll within the container
      const containerRect = scrollContainer.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const offset = 20; // Small offset from top
      const scrollTop = scrollContainer.scrollTop + (elementRect.top - containerRect.top) - offset;
      
      scrollContainer.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    } else {
      // Mobile: Use window scroll with header offset
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    if (url !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "blogs"];
      const isDesktop = window.innerWidth >= 1024;
      
      // Find the scrollable container (right side on desktop)
      const scrollContainer = document.querySelector('[class*="overflow-y-auto"]:not([class*="hidden"])') as HTMLElement;
      
      if (!isDesktop || !scrollContainer) {
        // Mobile/Tablet: Use viewport-based detection
        const headerHeight = 120; // Account for header height
        const viewportTop = window.scrollY + headerHeight;
        
        // Check which section is currently most visible in viewport
        let activeSectionId = "";
        let maxVisibility = 0;
        
        for (let i = 0; i < sections.length; i++) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const sectionBottom = sectionTop + rect.height;
            
            // Calculate how much of the section is visible in viewport
            const visibleTop = Math.max(viewportTop, sectionTop);
            const visibleBottom = Math.min(window.scrollY + window.innerHeight, sectionBottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const visibility = visibleHeight / rect.height;
            
            // If section is significantly visible and above viewport center
            if (visibility > 0.3 && rect.top < window.innerHeight * 0.6) {
              if (visibility > maxVisibility) {
                maxVisibility = visibility;
                activeSectionId = sections[i];
              }
            }
          }
        }
        
        // If we found an active section, use it
        if (activeSectionId) {
          setActiveSection(activeSectionId);
          return;
        }
        
        // Fallback: Check which section's top is closest to viewport top
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= headerHeight + 50 && rect.bottom > headerHeight) {
              setActiveSection(sections[i]);
              return;
            }
          }
        }
        
        // If scrolled to top, set about as active
        if (window.scrollY < 100) {
          setActiveSection("about");
        }
        return;
      }

      // Desktop: Calculate which section is in view within the container
      const containerRect = scrollContainer.getBoundingClientRect();
      const viewportTop = containerRect.top + 150; // Offset for header
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionRect = section.getBoundingClientRect();
          if (sectionRect.top <= viewportTop && sectionRect.bottom > viewportTop) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }

      // If scrolled to top, set about as active
      if (scrollContainer.scrollTop < 100) {
        setActiveSection("about");
      }
    };

    // Determine which scroll element to listen to
    const isDesktop = window.innerWidth >= 1024;
    const scrollContainer = document.querySelector('[class*="overflow-y-auto"]:not([class*="hidden"])') as HTMLElement;
    
    // Always listen to window scroll for mobile/tablet
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Also listen to container scroll on desktop
    if (isDesktop && scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    }
    
    handleScroll(); // Initial check

    // Handle window resize to switch between modes
    const handleResize = () => {
      handleScroll();
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [url]);

  const goToGithub = () => {
    window.open("https://github.com/laxkc", "_blank");
  };

  const goToLinkedin = () => {
    window.open("https://www.linkedin.com/in/laxmankc/", "_blank");
  };

  const navItems = [
    { id: "about", label: "About", onClick: () => scrollToSection("about"), isRoute: false },
    { id: "experience", label: "Experience", onClick: () => scrollToSection("experience"), isRoute: false },
    { id: "projects", label: "Projects", onClick: () => scrollToSection("projects"), isRoute: false },
    { id: "blogs", label: "Blogs", onClick: () => scrollToSection("blogs"), isRoute: false },
  ];

  return (
    <NavigationMenu className="w-full max-w-full p-2 sm:p-4 m-2 sm:m-4 sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <NavigationMenuList className="flex flex-row justify-around sm:justify-center flex-wrap gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full text-xs sm:text-sm md:text-base lg:text-lg">
        {navItems.map((item) => {
          const isActive =
            (item.id === activeSection && url === "/") ||
            (item.id === "about" && url === "/" && !activeSection);

          return (
            <NavigationMenuItem key={item.id}>
              <button
                onClick={item.onClick}
                className={`cursor-pointer transition-colors duration-200 px-1.5 sm:px-2 py-1 rounded-md text-center ${
                  isActive
                    ? "text-foreground font-semibold bg-muted/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
              >
                {item.label}
              </button>
            </NavigationMenuItem>
          );
        })}

        <NavigationMenuItem>
          <button
            onClick={goToGithub}
            className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors duration-200 px-1.5 sm:px-2 py-1 rounded-md hover:bg-muted/30 text-center"
          >
            Github
          </button>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <button
            onClick={goToLinkedin}
            className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors duration-200 px-1.5 sm:px-2 py-1 rounded-md hover:bg-muted/30 text-center"
          >
            Linkedin
          </button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
