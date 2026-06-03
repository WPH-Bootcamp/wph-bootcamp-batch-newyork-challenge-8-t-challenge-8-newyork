
import { useProcessTimeLine } from '../../types/useProcessTimeLine';

export const OurProcess = () => {
  const dataSteps = [
    { title: "Discovery & Consultation & Strategy", desc: "Understand Your Needs & Goals" },
    { title: "Planning & Strategy", desc: "Build a Clear, Scalable Roadmap" },
    { title: "Design & Prototyping", desc: "Craft UX That Converts" },
    { title: "Development & Implementation", desc: "Deliver With Speed & Precision" },
    { title: "Testing & Optimization", desc: "Ensure Quality at Every Step" },
    { title: "Launch & Growth", desc: "Scale, Measure & Improve Continuously" },
  ];

  // Memanggil logic dari custom hook
  const { steps, toggleAccordion, isStepOpen, isLineActive } = useProcessTimeLine(dataSteps);

  return (
    <section className="relative w-full bg-bg-main text-text-main py-20 px-4 sm:px-6 lg:px-8">
      {/* HEADER */}
      <div className="text-center flex flex-col items-center justify-center mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-main tracking-tight">
          Our Process
        </h2>
        <p className="text-text-muted text-sm sm:text-base mt-3 max-w-md sm:max-w-xl">
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="relative max-w-5xl mx-auto">
        <div className="space-y-0">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            const isOpen = isStepOpen(index);
            const lineActive = isLineActive(index);
            
            return (
              <div 
                key={index} 
                className="relative flex flex-col lg:flex-row items-start w-full pb-8 lg:pb-12"
              >
                {/* GARIS PENGHUBUNG DINAMIS (Hanya muncul jika bukan baris terakhir) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 lg:left-1/2 top-13 bottom-0 w-px -translate-x-1/2 z-0">
                    {/* Garis Dasar (Mati/Abu-abu) */}
                    <div className="relative max-w-6xl mx-auto py-14 bg-[#DFDFDF]"/>
                    {/* Garis Aktif (Menyala/Orange ketika accordion di bawahnya di-klik) */}
                    <div 
                      className={`absolute top-0 left-0 w-full bg-[#FF6F43] transition-all duration-500 ease-in-out ${
                        lineActive ? 'h-[calc(100%+32px)]' : 'h-0'
                      }`} 
                    />
                  </div>
                )}

                {/* LINGKARAN ANGKA */}
                <div className="absolute left-6 lg:left-1/2 top-3 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-md z-10 shadow-lg shadow-[#FF6F43]/20">
                  {index + 1}
                </div>

                {/* KARTU ACCORDION */}
                <div className={`w-full lg:w-[calc(50%-32px)] pl-14 lg:pl-0 ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full bg-bg-card border rounded-xl p-5 text-left flex items-start justify-between shadow-xl transition-all duration-300 group ${
                      isOpen ? 'border-neutral-700' : 'border-neutral-900 hover:border-neutral-600'
                    }`}
                  >
                    <div className="flex flex-col pr-4">
                      <h3 className="text-base sm:text-lg font-semibold text-text-main tracking-wide group-hover:text-[#FF6F43] transition-colors">
                        {step.title}
                      </h3>
                      
                      {/* SUBTITLE (Tetap tampil bersandar pada state isOpen) */}
                      <div className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                      }`}>
                        <p className="overflow-hidden text-xs sm:text-sm text-text-muted font-medium leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* CHEVRON ICON */}
                    <span className="text-neutral-500 mt-1 shrink-0">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2.5} 
                        stroke="currentColor" 
                        className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-text-main' : ''}`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}