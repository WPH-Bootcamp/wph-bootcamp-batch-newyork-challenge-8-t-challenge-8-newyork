export const Statistics = () => {
  
  const statItems = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '5+', label: 'Years of Experience' },
    { value: '10+', label: 'Industry Awards Won' },
    { value: '100%', label: 'Client Satisfaction Rate' },
  ];

  return (
      <section 
        className="w-full bg-bg-main py-20 text-center">
        <div 
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          {/* Header Teks */}
          <div 
            className="max-w-3xl mb-12 space-y-4">
            <h2 
              className="text-2xl sm:text-4xl font-bold text-text-main tracking-tight leading-tight">
              End-to-End IT Solutions <br className="sm:hidden" /> That Drive Results
            </h2>
            <p 
              className="text-text-muted text-sm sm:text-base mt-3 max-w-xs sm:max-w-xl leading-relaxed mx-auto">
              From strategy to execution, we deliver solutions that grow your business.
            </p>
          </div>

          {/* Grid Lingkaran Statistik */}
          {/* Menggunakan grid: 2 kolom di HP & Tablet dan 4 kolom di Desktop */}
          <div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6lg:gap-8 justify-items-center w-full max-w-sm sm:max-w-xl lg:max-w-none">
            {statItems.map((item, index) => (
              <div
                key={index}
                className="w-43.75 h-43.75 sm:w-50 sm:h-50 md:w-62.5 md:h-62.5 rounded-full bg-bg-card flex flex-col items-center justify-center p-4 sm:p-6 shadow-2xl transition-transform duration-300 hover:scale-105 border border-[#DEDCDC] dark:bg-[#0A0D12] dark:border-[#181D27]"
                >
                {/* Angka Statistik */}
                <span 
                  className="text-2xl sm:text-4xl font-bold text-brand-primary mb-1 sm:mb-3 tracking-tight">
                  {item.value}
                </span>
                
                {/* Label Deskripsi */}
                <p 
                  className={'text-text-main text-[15px] sm:text-sm md:text-base font-medium max-w-375 sm:max-w-50 leading-snug'}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
  );
};