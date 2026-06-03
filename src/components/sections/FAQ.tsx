import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "We provide custom web/app development, cloud solutions, UX/UI design, and more."
  },
  {
    question: "How do I know if this is right for my business?",
    answer: "Book a free consult — we’ll assess your goals and recommend the right approach."
  },
  {
    question: "How much does a project cost?",
    answer: "Every project is different. Let’s talk about your needs to get a tailored estimate."
  },
  {
    question: "How long does it take?",
    answer: "Depends on scope — but we always prioritize quality and deadlines."
  },
  {
    question: "Can I start with a small project first?",
    answer: "Absolutely. We often begin with MVPs or pilot projects."
  }
];

export const FAQ = () => {
  
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-bg-main py-20 px-4 sm:px-6 lg:px-8 text-text-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-600/60 pb-8 mb-12 gap-4">
          <h2 className="text-text-main text-3xl sm:text-4xl font-bold tracking-tight max-w-md">
            Need Help? Start Here.
          </h2>
          <p className="text-text-muted text-sm sm:text-base md:text-right font-medium tracking-wide">
            Everything you need to know — all in one place.
          </p>
        </div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* SISI KIRI: DAFTAR ACCORDION FAQ */}
          <div className="lg:col-span-2 divide-y divide-gray-800/60">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="py-6 first:pt-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-semibold tracking-wide text-text-main group-hover:text-text-main transition-colors duration-200">
                      {item.question}
                    </span>
                    
                    {/* Ikon Indikator Plus / Minus */}
                    <span className="text-xl sm:text-2xl text-gray-400 shrink-0 select-none w-6 text-center">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {/* Wrapper Animasi Konten */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-24 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SISI KANAN: KARTU CTA KONSULTASI */}
          <div className="w-full bg-[#CD4A32] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div>
              <h3 className="text-3xl sm:text-3xl font-bold tracking-tight text-white">
                Let’s talk it through
              </h3>
              <p className="text-white/80 text-sm sm:text-base mt-2 mb-6 font-medium">
                book a free consultation with our team.
              </p>
            </div>

            {/* Frame Gambar Wadah */}
            <div className="w-full aspect-16/10 rounded-xl overflow-hidden bg-black/10 mb-8 border border-white/10 shadow-inner">
              <img
                src={new URL('../../assets/consultationImage.png', import.meta.url).href}
                alt="Consultation Room"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Tombol Aksi */}
            <button className="w-full bg-white hover:bg-gray-50 text-black font-semibold py-3.5 px-6 rounded-full text-sm sm:text-base transition-colors duration-200 shadow-md">
              <a href="#contact">
              Free Consultation
              </a>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}