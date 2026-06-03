import { useState } from 'react';
import starIcon from '../../assets/icon/star.png';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  stars: number;
  avatarPath: string; // File disimpan di src/assets/
}

const testimonials: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "John Lee",
    role: "Director at Innovate Corp",
    quote: "\"The team was a game-changer for our project. They turned our complex vision into reality efficiently and effectively.\"",
    stars: 5,
    avatarPath: "johnLee.png" 
  },
  {
    id: "testimonial-2",
    name: "Sarah Tan",
    role: "Product Manager at Finovate",
    quote: "\"The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.\"",
    stars: 5,
    avatarPath: "sarahTan.png" 
  },
  {
    id: "testimonial-3",
    name: "Emily Chen",
    role: "Marketing Head at TechStart",
    quote: "\"The collaboration was seamless. They exceeded our expectations and their technical expertise transformed our product successfully.\"",
    stars: 5,
    avatarPath: "emilyChen.png" 
  }
];

export const Testimonials = () => {
  
  const [activeIndex, setActiveIndex] = useState<number>(1);

  return (
    <section id="testimonials" className="w-full bg-bg-main py-20 px-4 sm:px-6 lg:px-8 text-text-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            What Partners Say About <span className="block sm:inline mt-1">Working With Us</span>
          </h2>
          <p className="text-text-muted text-md sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        {/* CARDS GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-95">
          {testimonials.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`relative w-full bg-bg-card border rounded-2xl p-6 sm:p-8 pt-14 pb-12 text-center transition-all duration-500 select-none ${
                  isActive
                    ? 'flex flex-col z-10 scale-100 opacity-100 border-transparent ring-1 ring-brand-primary/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)]'
                    : 'hidden lg:flex lg:flex-col scale-95 opacity-15 border-gray-800/40 blur-[0.5px] cursor-pointer hover:opacity-40'
                }`}
              >
                {/* IKON DOUBLE QUOTE ORANYE AMBIENT */}
                <img
                  src={new URL('../../assets/icon/quote.png', import.meta.url).href}
                  alt="Quote Icon"
                  className={`absolute -top-9 left-6 w-16 h-16 object-contain transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-25'
                  }`}
                  loading="lazy"
                />

                {/* RATING BINTANG EMAS */}
                <div className="flex justify-center space-x-1 mb-5">
                  {[...Array(item.stars)].map((_, i) => (
                    <img 
                      key={i} 
                      src={starIcon}
                      alt="Star Rating"                      
                      className={`w-6 h-6 object-contain transition-all duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-20 grayscale'
                      }`} 
                    />
                  ))}
                </div>

                {/* ISI TESTIMONIAL */}
                <p className={`text-md sm:text-base font-medium leading-relaxed transition-colors duration-500 grow ${
                  isActive ? 'text-text-main' : 'text-text-muted'
                }`}>
                  {item.quote}
                </p>

                {/* NAMA PARTNER */}
                <h3 className={`text-base font-bold mt-6 tracking-wide transition-colors duration-500 ${
                  isActive ? 'text-text-main' : 'text-text-muted'
                }`}>
                  {item.name}
                </h3>

                {/* JABATAN / PERUSAHAAN */}
                <p className={`text-md sm:text-sm font-medium mt-1 transition-colors duration-500 ${
                  isActive ? 'text-brand-primary' : 'text-text-muted'
                }`}>
                  {item.role}
                </p>

                {/* FOTO AVATAR */}
                <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full overflow-hidden border-2 transition-all duration-500 shadow-lg ${
                  isActive ? 'border-brand-primary scale-110' : 'border-gray-800/40 scale-100'
                }`}>
                  <img
                    src={new URL(`../../assets/${item.avatarPath}`, import.meta.url).href}
                    alt={`${item.name} Avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            );
          })}
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex justify-center items-center space-x-3 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-8 bg-brand-primary' : 'w-2.5 bg-gray-800 hover:bg-gray-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}