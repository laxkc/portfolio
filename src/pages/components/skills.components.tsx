export default function SkillsComponent() {
    const sections = [
      {
        title: "Programming Languages",
        items: ["Python", "JavaScript", "TypeScript", "C/C++"],
      },
      {
        title: "Backend",
        items: ["FastAPI", "Node.js (Express.js)"],
      },
      {
        title: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS"],
      },
      {
        title: "AI / Data",
        items: ["LangChain", "LangGraph", "Pinecone", "Pandas", "Airflow"],
      },
      {
        title: "Databases / DevOps",
        items: ["MySQL", "GitHub Actions", "Docker", "AWS / Azure"],
      },
      {
        title: "Testing & Quality",
        items: ["Pytest", "Jest", "Postman", "Selenium", "Playwright"],
      },
    ];
  
    const softSkills = [
      "Problem-solving mindset",
      "Collaboration & teamwork",
      "Curiosity & continuous learning",
      "Entrepreneurial drive / building real MVPs",
      "Independence (building full projects end-to-end)",
    ];
  
    return (
      <section id="skills" className="flex flex-col gap-6 sm:gap-10 py-4 sm:py-8">
        {/* Title */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-1 sm:mb-2">
            Technical Stack
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Technologies and tools I use to design, build, and deploy modern web
            applications.
          </p>
        </div>
  
        {/* Technical Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-base font-semibold mb-2">{section.title}</h3>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
                {section.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
  
        {/* Soft Skills */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2 sm:mb-3">
            Soft Skills
          </h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs sm:text-sm">
            {softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  