export const Footer = () => {
  const navLinks = ["About", "Services", "Projects", "Testimonials", "FAQ"];
  
  const socialMedias = [
    { name: "facebook", fileName: "facebook.svg", url: "#" },
    { name: "instagram", fileName: "instagram.svg", url: "#" },
    { name: "linkedin", fileName: "linkedIn.svg", url: "#" },
    { name: "tiktok", fileName: "tiktok.svg", url: "#" },    
  ];

  return (
    <footer className="w-full bg-bg-main py-20 px-4 sm:px-6 lg:px-8 text-text-main">
      {/* KARTU UTAMA FOOTER */}
      <div className="max-w-7xl mx-auto dark:bg-bg-card border border-gray-600/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
        
        {/* BARIS ATAS: LOGO (Mobile: Stacked Vertikal | Desktop: Horizontal Row) */}
        <div className="flex flex-col sm:flex-row-reverse sm:justify-between sm:items-center gap-6 items-start">
          
          {/* LOGO PERUSAHAAN (Paling atas di HP, Sebelah Kanan di Desktop) */}
          <div className="select-none">
            <a href="#home" className="flex items-center gap-3">
              <img 
                src={new URL('../../assets/icon/logoSymbol.png', import.meta.url).href} 
                alt="Logo Icon" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg font-bold tracking-wide text-text-main">
                Your Logo
              </span>
            </a>
          </div>

          <div className="select-none">
            <a href="#contact">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight uppercase">
              LET'S DISCUSS <br /> YOUR IDEAS
              </h2>
            </a>
          </div>
      </div>

        {/* GARIS PEMISAH HORIZONTAL */}
        <hr className="border-gray-800/30 my-8 sm:my-10"/>

        {/* BARIS BAWAH: NAVIGASI & SOSMED */}
        <div className="flex flex-col md:flex-row justify-between items-start     md:items-center gap-8">
          
          {/* MENU NAVIGASI */}
          <nav className="flex flex-col sm:flex-row md:flex-row gap-y-4 sm:gap-x-6 text-sm font-medium text-text-main w-full md:w-auto text-left">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-brand-primary transition-colors duration-200 tracking-wide block"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* ICON SOSIAL MEDIA KANAN (Horizontal row di semua device, rata kiri di HP) */}
          <div className="flex items-center space-x-3 pt-2 md:pt-0">
            {socialMedias.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="w-10 h-10 rounded-full border border-gray-600/20 flex items-center justify-center bg-bg-card transition-all duration-200"
                aria-label={`Follow us on ${social.name}`}
              >
                <img
                  src={new URL(`../../assets/icon/${social.fileName}`, import.meta.url).href}
                  alt={`${social.name} icon`}
                  className="w-4 h-4 object-contain dark:invert"
                />
              </a>
            ))}
          </div>
       </div>
      </div>
    </footer>
  );
}