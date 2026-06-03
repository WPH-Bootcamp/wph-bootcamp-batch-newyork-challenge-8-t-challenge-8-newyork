import { useState } from 'react';

interface IndustryItem {
  id: string;
  name: string;
  description: string;
  imagePath: string;
}

const industries: IndustryItem[] = [
  {
    id: "fintech",
    name: "Fintech",
    description: "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    imagePath: "fintech.png" 
  },
  {
    id: "e-commerce",
    name: "E-Commerce",
    description: "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    imagePath: "e-commerce.png"
  },
  {
    id: "healthcare",
    name: "Healthcare", 
    description: "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    imagePath: "healthCare.png"
  }
];

export const Industry = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="w-full bg-bg-main text-text-main py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-main">
            Built for Your Industry
          </h2>
          <p className="text-text-muted text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
            We've helped companies across industries launch smarter, faster, and more securely.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* MENU TAB KIRI (4 Kolom) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {industries.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className="relative pl-6 py-3 cursor-pointer transition-all duration-300 select-none group"
                >
                  {/* Garis Indikator Vertikal Oranye di Sebelah Kiri */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-0.75 rounded-r transition-all duration-300 ${
                      isActive 
                        ? 'bg-brand-primary scale-y-100' 
                        : 'bg-transparent scale-y-0 group-hover:scale-y-50 group-hover:bg-gray-700'
                    }`}
                  />
                  
                  {/* Nama Menu */}
                  <h3 
                    className={`text-lg font-bold tracking-wide transition-colors duration-300 ${
                      isActive 
                        ? 'text-brand-primary' 
                        : 'text-text-muted group-hover:text-text-main'
                    }`}
                  >
                    {item.name}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* DISPLAY KONTEN KANAN (8 Kolom) */}
          <div className="lg:col-span-8 flex flex-col space-y-6 min-h-100">
            
            {/* Bagian Deskripsi */}
            <div className="min-h-18">
              <p className="text-text-main text-sm sm:text-base leading-relaxed font-medium transition-all duration-300">
                {industries[activeIndex].description}
              </p>
            </div>

            {/* Bagian Gambar */}
            <div className="relative w-full aspect-video lg:aspect-21/10 rounded-3xl overflow-hidden  shadow-2xl">
              {industries.map((item, index) => (
                <img
                  key={item.id}
                  src={new URL(`../../assets/${item.imagePath}`, import.meta.url).href}
                  alt={`${item.name} Industry Solutions`}
                  className={`absolute inset-0 w-full h-full object-cover rounded-3xl transition-all duration-500 ease-in-out ${
                    activeIndex === index 
                      ? 'opacity-100 scale-100 pointer-events-auto' 
                      : 'opacity-0 scale-98 pointer-events-none'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}