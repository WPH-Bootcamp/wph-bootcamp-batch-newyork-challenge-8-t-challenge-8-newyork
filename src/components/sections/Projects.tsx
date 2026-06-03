interface ProjectItem {
  id: string;
  category: string;
  title: string;
  imagePath: string; 
  projectUrl?: string; // Opsional jika nanti ingin diberi link tautan
}

const projects: ProjectItem[] = [
  {
    id: "project-1",
    category: "Landing Page",
    title: "Portfolio 1",
    imagePath: "pf1.png"
  },
  {
    id: "project-2",
    category: "Landing Page",
    title: "Portfolio 2",
    imagePath: "pf2.png", 
  },
  {
    id: "project-3",
    category: "Landing Page",
    title: "Portfolio 3",
    imagePath: "pf3.png" 
  }
];

export const Projects = () => {
  return (
      <section id="projects" className="w-full bg-bg-main py-20 px-4 sm:px-6 lg:px-8 text-text-main">
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER SECTION */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              From Vision to Launch! Projects We’re Proud Of
            </h2>
            <p className="text-text-muted text-sm mt-4 mx-auto leading-relaxed 
              max-w-80 sm:max-w-2xl lg:max-w-none text-balancelg:whitespace-nowrap">
              Take a closer look at our recent work powering startups, enterprises, and everything in between.
            </p>
          </div>

          {/* PROJECTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {projects.map((project) => (
              <div key={project.id} className="group flex flex-col w-full cursor-pointer">
                
                {/* MOCKUP CARD */}
                <div className="relative w-full aspect-[373px_373px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]">
                  <img
                    src={new URL(`../../assets/${project.imagePath}`, import.meta.url).href}
                    alt={`${project.title} Preview`}
                    className={'w-full h-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105'}
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="mt-5 text-left pl-2">
                  <span className="text-brand-primary text-xs sm:text-sm font-medium tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-text-main mt-1 tracking-wide group-hover:text-brand-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
  );
}