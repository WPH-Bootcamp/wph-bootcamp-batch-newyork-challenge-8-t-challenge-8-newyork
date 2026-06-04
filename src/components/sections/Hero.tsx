import { Button } from '../ui/Button';
import heroLightImg from '../../assets/heroLight.png';
import heroDarkImg from '../../assets/heroDark.png';

export const Hero = () => {
  return (
    <section
      id='home'
      className='relative w-full overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20 bg-bg-main'
    >
      {/* 1. KONTAINER UTAMA */}

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-7 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center w-full'>
        {/* 2. SISI KIRI (Kolom 1: Tempat Teks) */}

        <div className='flex flex-col justify-center items-start space-y-6 z-10 w-full'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-text-main leading-tight tracking-tight'>
            Your Tech Partner for
            <br />
            <span className='text-brand-primary bg-linear-to-r from-brand-primary to-orange-400 bg-clip-text'>
              Smarter Growth
            </span>
          </h1>

          <p className='text-text-main text-lg max-w-xl font-medium leading-relaxed'>
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>

          <div className='flex flex-wrap justify-center lg:justify-start gap-4 pt-2 w-full'>
            <a href='#contact' className='w-full md:w-auto'>
              <Button
                variant='primary'
                size='md'
                className='w-full md:w-auto rounded-full md:px-16 shadow-lg shadow-brand-primary/20 hover:scale-105 transition-transform text-center'
              >
                Let's Talk
              </Button>
            </a>
          </div>
        </div>

        {/* 3. SISI KANAN (Kolom 2: Tempat Gambar Ilustrasi) */}
        
        <div className='w-full max-w-md mx-auto lg:max-w-none lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-4 lg:w-[50%] flex justify-center lg:justify-end animate-fade-in'>
          {/* Gambar Light Mode */}
          <img
            src={heroLightImg}
            alt='Company Overview Illustration Light'
            className='w-full mx-auto h-auto object-contain drop-shadow-xl dark:hidden'
            style={{
              maskImage:
                'radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage:
                'radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
            }}
          />

          {/* Gambar Dark Mode */}
          <img
            src={heroDarkImg}
            alt='Company Overview Illustration Dark'
            className='hidden dark:block w-full mx-auto h-auto object-contain drop-shadow-xl'
          />
        </div>
      </div>
    </section>
  );
};
