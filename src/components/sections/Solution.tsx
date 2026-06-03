// 1. DATA LAYER (Memisahkan data konten dengan struktur UI)

interface SolutionItem {
  title: string;
  description: string;
  iconName: string;
}

const solutions: SolutionItem[] = [
  {
    title: "Web Development",
    description: "Build fast, scalable, and SEO-friendly websites.",
    iconName: "webDevelopment.svg" 
  },
  {
    title: "Mobile App Development",
    description: "Native & cross-platform apps tailored to user needs.",
    iconName: "mobileAppDevelopment.svg"
  },
  {
    title: "UI/UX Design",
    description: "Delight users with intuitive and beautiful interfaces.",
    iconName: "uiUxDesign.svg"
  },
  {
    title: "Cloud Solutions",
    description: "Secure and flexible cloud infrastructure for your growth.",
    iconName: "cloudSolutions.svg"
  },
  {
    title: "Software Development",
    description: "Custom solutions built around your business logic.",
    iconName: "softwareDevelopment.svg"
  },
  {
    title: "IT Infrastructure",
    description: "Scale your backend with reliable tech foundations.",
    iconName: "itInfrastructure.svg"
  },
  {
    title: "Cybersecurity Services",
    description: "Stay protected with enterprise-grade security.",
    iconName: "cyberSecurityServices.svg"
  },
  {
    title: "QA Solutions",
    description: "Ensure performance with rigorous testing frameworks.",
    iconName: "qaSolutions.svg"
  },
  {
    title: "IT Consulting & Support",
    description: "Make smarter tech decisions with expert guidance.",
    iconName: "itConsultingSupport.svg"
  }
];

// 2. PRESENTATION LAYER (UI JSX)
export const Solution = () => {
  return (
    <section id="services" className="relative w-full bg-bg-main text-text-main py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-150 h-150 bg-brand-primary/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center flex flex-col items-center justify-center mb-20 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Smart IT Solutions That Grow With You
          </h2>
          <p className="text-text-muted text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        {/* GRID CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group relative bg-bg-card border border-bg-border-card border-neutral-600 rounded-2xl px-6 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-14 transition-all duration-300 hover:border-brand-primary/40 hover:shadow-2xl hover:shadow-brand-primary/5 flex flex-col items-start"
            >
              
              {/* IKON 3D */}
              <img 
                src={new URL(`../../assets/icon/${item.iconName}`, import.meta.url).href}
                alt={`${item.title} Icon`}
                
                className="absolute -top-8 left-6 sm:left-8 w-16 h-16 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_10px_20px_rgba(255,98,62,0.25)]"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />

              {/* TITLE */}
              <h3 className="text-lg sm:text-xl font-bold text-text-main tracking-wide group-hover:text-brand-primary transition-colors duration-300">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-text-muted mt-2 leading-relaxed font-medium">
                {item.description}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}