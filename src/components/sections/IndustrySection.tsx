import { useState } from 'react';

// Memanggil data industri dari file terpisah yang sudah Anda buat
import { industryData } from '../../data/industry';

export default function IndustrySection() {
  const [activeTab, setActiveTab] = useState<string>(industryData[0].id);

  return (
    <section className='py-20 bg-white dark:bg-black text-white'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Judul & Subjudul di Kiri */}
        <div className='mb-16'>
          <h2 className='text-4xl text-black dark:text-white md:text-5xl font-semibold mb-4 text-left'>
            Built for Your Industry
          </h2>
          <p className='text-gray-500 text-[18px] lg:text-[14px] dark:text-gray-500 max-w-2xl text-left tracking-wide'>
            We've helped companies across industries launch smarter, faster, and
            more securely
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-0 items-start'>
          {/* Sidebar Menu */}
          <div className='flex flex-col gap-7 w-full md:w-1/4'>
            {/* Menggunakan industryData untuk melooping menu sebelah kiri */}
            {industryData.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center cursor-pointer transition-all duration-300 
        ${activeTab === tab.id ? 'border-l-4 border-[#FF6B4A]' : 'border-l-4 border-gray-700'}
      `}
              >
                <h3
                  className={`ml-4 text-xl font-semibold 
        ${activeTab === tab.id ? 'text-black dark:text-white' : 'text-gray-500'}
      `}
                >
                  {tab.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Konten: Penjelasan di Atas Gambar */}
          <div className='flex-1 w-full'>
            {industryData.map(
              (tab) =>
                activeTab === tab.id && (
                  <div key={tab.id} className='animate-in fade-in duration-500'>
                    {/* Penjelasan di atas */}
                    <p className='px-3 py-7 md:py-2 lg:text-[18px] mb-4 text-[19px] text-black dark:text-white font-light leading-relaxed'>
                      {tab.description}
                    </p>
                    {/* Gambar di bawah */}
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className='w-full h-auto rounded-2xl shadow-2xl border border-gray-800'
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
