import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RecentBlogsComponent() {
  const blogs = [
    {
      title: "Building Fast APIs with FastAPI",
      description:
        "Learn how to design, structure, and deploy scalable backend APIs using Python’s FastAPI — from schema validation to async routes.",
      image: "https://picsum.photos/400/250?random=1",
    },
    {
      title: "Understanding React Server Components",
      description:
        "A deep dive into how RSCs change rendering patterns, improve performance, and simplify state management for modern web apps.",
      image: "https://picsum.photos/400/250?random=2",
    },
    {
      title: "Deploying AI Models with LangGraph",
      description:
        "An introduction to LangGraph pipelines, node orchestration, and deploying your first AI workflow into production.",
      image: "https://picsum.photos/400/250?random=3",
    },
    {
      title: "Improving UX with Tailwind + shadcn/ui",
      description:
        "How to create clean, accessible, and responsive UIs using Tailwind CSS and shadcn components — the modern design system for React & Preact.",
      image: "https://picsum.photos/400/250?random=4",
    },
  ];

  return (
    <section
      id="blogs"
      className="max-w-5xl mx-auto px-2 sm:px-4 py-6 sm:py-10 flex flex-col gap-6 sm:gap-10"
    >
      {/* Header */}
      <header className="text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-1 sm:mb-2">
          Recent Blogs
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm">
          Insights, experiments, and lessons learned while building software,
          AI, and data systems.
        </p>
      </header>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {blogs.map((blog) => (
          <Card
            key={blog.title}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/60"
          >
            <CardImage src={blog.image} alt={blog.title} />
            <CardHeader className="pb-2 px-3 sm:px-6">
              <CardTitle className="text-base sm:text-lg font-semibold">
                {blog.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 sm:px-6">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {blog.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-4">
        <Button
          variant="outline"
          size="lg"
          className="font-medium min-h-[44px] min-w-[120px] touch-manipulation"
          onClick={() => window.open("/blogs", "_blank")}
        >
          View More →
        </Button>
      </div>
    </section>
  );
}

// 🧩 Helper Image Component
const CardImage = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    width={400}
    height={250}
    loading="lazy"
    className="w-full h-40 object-cover"
  />
);
