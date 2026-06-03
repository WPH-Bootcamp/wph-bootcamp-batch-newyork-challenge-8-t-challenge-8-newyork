import Button from '../ui/Button';

// Memanggil data yang sudah dirapikan dari file hero
import { heroData } from '../../data/hero';

const HeroSection = () => {
  return (
    <section
      id='home'
      className='w-full bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300 pt-28 pb-16 md:pt-36 md:pb-24 lg:min-h-[85vh] flex flex-col justify-center relative overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center w-full'>
          {/* KIRI: Teks & Tombol */}
          <div className='space-y-6 text-left flex flex-col justify-center'>
            <h1 className='text-5xl sm:text-5xl lg:text-[50px] font-semibold leading-[1.15] tracking-tight text-slate-900 dark:text-white tracking-wide'>
              {heroData.titleLine1}
              <br className='hidden lg:block' />
              <span className='text-[#FF6B4A]'>{heroData.titleHighlight}</span>
            </h1>

            <p className='text-[20px] md:text-[18px] text-black dark:text-slate-400 leading-relaxed font-normal max-w-lg'>
              {heroData.description}
            </p>

            <div className='flex justify-center md:justify-start pt-2 w-full'>
              <Button
                variant='primary'
                className='w-full md:w-auto px-10 md:px-20 py-3.5 text-lg font-semibold text-white rounded-full bg-gradient-to-b from-[#FF6B4A] to-[#FF6B4A] transition-all duration-300 hover:-translate-y-1 shadow-md'
              >
                {heroData.buttonText}
              </Button>
            </div>
          </div>

          {/* KANAN: Gambar Hero Dinamis Mode Terang & Gelap */}
          <div className='flex justify-center md:justify-end items-center relative w-full h-full'>
            <div className='w-full max-w-md lg:max-w-lg xl:max-w-xl'>
              {/* Gambar Light Mode */}
              <img
                src={heroData.images.light}
                alt='Hero Illustration Light'
                className='w-full h-auto object-contain select-none rounded-xl block dark:hidden'
                draggable='false'
              />

              {/* Gambar Dark Mode */}
              <img
                src={heroData.images.dark}
                alt='Hero Illustration Dark'
                className='w-full h-auto object-contain select-none rounded-xl hidden dark:block'
                draggable='false'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
