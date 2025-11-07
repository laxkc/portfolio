import ProfileComponent from "./components/profile.component";
import SkillsComponent from "./components/skills.components";
import RecentProjectsComponent from "./components/recentProjects.component";
import RecentBlogsComponent from "./components/recentBlogs.component";
import AboutComponent from "./components/about.component";
import ExperienceComponent from "./components/experience.component";

export default function HomePage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-4 sm:px-6 py-8 sm:py-12 font-sans md:px-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 pt-8 sm:pt-12">
        {/*  Left Side (Fixed Panel) - Desktop Only */}
        <div className="hidden lg:flex flex-col gap-8 sticky top-0 h-screen overflow-y-auto pr-6 border-r border-border/40 hide-scrollbar">
          <ProfileComponent />
          <SkillsComponent />
        </div>

        {/*  Mobile: Profile & Skills at Top */}
        <div className="lg:hidden flex flex-col gap-6 sm:gap-8 mb-6 sm:mb-8">
          <ProfileComponent />
          <SkillsComponent />
        </div>

        {/*  Right Side (Scrollable Content) */}
        <div className="flex flex-col gap-8 sm:gap-10 lg:top-0 lg:overflow-y-auto lg:h-screen lg:pb-20 lg:[mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] hide-scrollbar">
          <AboutComponent />
          <ExperienceComponent />
          <RecentProjectsComponent />
          <RecentBlogsComponent />
        </div>
      </div>
    </div>
  );
}
