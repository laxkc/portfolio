export default function AboutComponent() {
    return (
        <section id="about" className="max-w-2xl mx-auto pt-0 pb-6 sm:pb-10 text-center px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3 sm:mb-4">About Me</h2>
      
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
          I’m a <span className="font-medium text-foreground">software developer</span> based in Sudbury, Canada, 
          passionate about building intelligent, data-driven web applications that solve real problems. 
          My work blends modern full-stack development with applied AI, using 
          <span className="font-medium text-foreground"> React, FastAPI, LangChain, LangGraph,</span> and 
          <span className="font-medium text-foreground"> TypeScript</span> to create fast, scalable products.
        </p>
      
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mt-3 sm:mt-4">
          I’ve developed solutions ranging from analytics dashboards for electric mining vehicles 
          to AI agents powered by custom knowledge bases. I enjoy turning complex systems into 
          simple, usable tools that make data and intelligence more accessible.
        </p>
      
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mt-3 sm:mt-4">
          I thrive in collaborative environments where engineering meets creativity—working with 
          cross-functional teams to design clean architectures, automate deployments, and deliver 
          high-impact results. Outside of work, I’m constantly learning and experimenting with new 
          technologies in AI and data engineering.
        </p>
      </section>
      
    );
  }
  