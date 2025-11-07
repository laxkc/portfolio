export default function ExperienceComponent() {
  const experiences = [
    {
      company: "The Alpha Nova",
      role: "Freelance Software Developer",
      period: "2024 - Present",
      location: "Sudbury, Canada",
      description: [
        "Designed and developed end-to-end web and mobile solutions for local businesses, including a ride-sharing style application tailored for Sudbury’s transportation market.",
        "Implemented CI/CD pipelines using GitLab and Docker for automated testing, containerization, and seamless deployment across staging and production environments.",
        "Built scalable APIs with FastAPI and integrated real-time features to improve service efficiency and reliability.",
        "Collaborated directly with clients to gather requirements, optimize UX workflows, and ensure smooth user experiences across platforms.",
      ],
    },
    {
      company: "Cambrian College - RND",
      role: "Software Developer Intern",
      period: "2025 - 2026",
      location: "Sudbury, Canada",
      description: [
        "Developed interactive analytics dashboards for monitoring and visualizing data from electric mining vehicles, transforming large datasets into actionable business insights.",
        "Built and maintained a CRM platform to manage employees, operations, and company workflows, integrating frontend (React) with backend APIs (Node.js) deployed on Azure.",
        "Collaborated with an AI startup initiative to design and deploy an AI agent with a knowledge base and Model Context Protocol (MCP) integration for intelligent query handling.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-2 sm:px-4 py-6 sm:py-10 flex flex-col gap-6 sm:gap-8"
    >
      <header>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-1 sm:mb-2">
          Experience
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm">
          My professional journey and the roles I've held in software
          development.
        </p>
      </header>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border/60 hidden md:block"></div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-3 sm:gap-6">
              {/* Timeline dot */}
              <div className="hidden md:flex flex-shrink-0 items-start pt-1">
                <div className="relative z-10 w-8 h-8 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-background shadow-sm"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-6 sm:pb-8 md:pb-0">
                <div className="bg-card border border-border/60 rounded-lg p-4 sm:p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2 sm:mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <p className="text-xs sm:text-sm font-medium text-foreground">
                        {exp.period}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
