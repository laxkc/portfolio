import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RecentProjectsComponent() {
  const projects = [
    {
      title: "Ontario Legal AI Agent",
      description:
        "An intelligent RAG-powered assistant that analyzes and explains Ontario rental contracts under the Residential Tenancies Act. It helps tenants and landlords understand clauses, identify risks, and get context-aware legal summaries.",
      techStack:
        "LangGraph,LangChain, FastAPI, Pinecone, Anthropic Claude, PostgreSQL — Deployed on Azure.",
      image: "https://picsum.photos/400/250?random=10",
      github: "https://github.com/your-repo/your-project",
    },
    {
      title: "AI Mental Health Companion",
      description:
        "An empathetic AI agent built to support mental wellness conversations. It leverages context-aware dialogue and curated mental health resources to offer reflective, supportive, and non-diagnostic interactions.",
      techStack:
        "FastAPI, LangChain, LangGraph, Claude, React, Neo4j, Pinecone, Tailwind CSS — Hosted on Vercel.",
      image: "https://picsum.photos/400/250?random=12",
      github: "https://github.com/your-repo/your-project",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-2 sm:px-4 py-6 sm:py-10 flex flex-col gap-6 sm:gap-8"
    >
      <header>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-1 sm:mb-2">
          Recent Projects
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm">
          A few projects that highlight my work in full-stack, AI, and
          cloud-based development.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/60"
          >
            <CardImage src={project.image} alt={project.title} />

            <CardContent className="p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
              <h3 className="text-base sm:text-lg font-semibold">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Tech Stack:</span>{" "}
                {project.techStack}
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
          onClick={() => window.open("/projects", "_blank")}
        >
          View More →
        </Button>
      </div>
    </section>
  );
}

// ✅ Clean image component
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
