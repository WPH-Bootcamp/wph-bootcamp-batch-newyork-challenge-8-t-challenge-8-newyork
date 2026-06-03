import adobeLogo from '../../assets/companylogo/adobe-logo.png';
import upworkLogo from '../../assets/companylogo/upwork-logo.png';
import zoomLogo from '../../assets/companylogo/zoom-logo.png';
import postmanLogo from '../../assets/companylogo/postman-logo.png';
import databricksLogo from '../../assets/companylogo/databricks-logo.png';
import airbnbLogo from '../../assets/companylogo/airbnb-logo.png';
import dropboxLogo from '../../assets/companylogo/dropbox-logo.png';
import paypalLogo from '../../assets/companylogo/paypal-logo.png';
import netflixLogo from '../../assets/companylogo/netflix-logo.png';

export const LogoCloud = () => {
  const brandLogos = [
    { name: 'Adobe', src: adobeLogo },
    { name: 'Upwork', src: upworkLogo },
    { name: 'Zoom', src: zoomLogo },
    { name: 'Postman', src: postmanLogo },
    { name: 'Databricks', src: databricksLogo },
    { name: 'Airbnb', src: airbnbLogo },
    { name: 'Dropbox', src: dropboxLogo },
    { name: 'PayPal', src: paypalLogo },
    { name: 'Netflix', src: netflixLogo },
  ];

  return (
    <section id="about" className="w-full bg-bg-main py-20">
      <div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-8">
        <h2 
          className="text-text-main text-xl md:text-2xl font-bold tracking-wide text-center">
          Trusted by Global Innovators & Leading Brands
        </h2>

        {/* Area Efek Berjalan dengan batas tepi pudar */}
        <div className="relative w-full overflow-hidden mask-gradient-edges">
          
          {/* Track Animasi (Gabungan kelas css kustom & tailwind) */}
          <div className="animate-marquee-left space-x-16 hover:[animation-play-state:paused]">
            
            {/* KELOMPOK LOGO UTAMA */}
            {brandLogos.map((logo, index) => (
              <div key={`main-${index}`} className="flex items-center justify-center w-40 h-16 shrink-0">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-9 w-auto object-contain filter grayscale opacity-75 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            ))}

            {/* DUPLIKASI KELOMPOK LOGO (Wajib ada agar animasi menyambung tanpa putus) */}
            {brandLogos.map((logo, index) => (
              <div key={`dup-${index}`} className="flex items-center justify-center w-40 h-16 shrink-0">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-9 w-auto object-contain filter grayscale opacity-75 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
