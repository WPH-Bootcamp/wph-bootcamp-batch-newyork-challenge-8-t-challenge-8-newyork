import React, { useState } from 'react';

import messageSuccessImg from '../../assets/icon/messageSuccess.png';
import messageFailImg from '../../assets/icon/messageFail.png';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: [] as string[]
  });
  
  const [status, setStatus] = useState<FormStatus>('idle');

  const availableServices = [
    "Web Development",
    "Cloud Solutions",
    "Mobile App Development",
    "Software Development",
    "UI/UX Design",
    "Other"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => {
      const isExist = prev.services.includes(service);
      if (isExist) {
        return { ...prev, services: prev.services.filter(s => s !== service) };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulasi pengiriman data API selama 1.5 detik
    setTimeout(() => {
      // Ubah ke 'error' jika ingin menguji tampilan gagal
      setStatus('success'); 
    }, 1500);
  };

  return (
    <section id="contact" className="w-full bg-bg-main py-20 px-4 sm:px-6 lg:px-8 text-text-main relative">
      <div className="max-w-3xl mx-auto">
        
        {/* HEADER FORM */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to Start? Let’s Talk.
          </h2>
          <p className="text-text-muted text-sm sm:text-base mt-3 font-medium">
            Tell us what you need, and we’ll get back to you soon.
          </p>
        </div>

        {/* MAIN FORMAL FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* FIELD: NAME */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm font-semibold tracking-wide text-text-main">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full bg-bg-card border border-gray-800 rounded-xl px-4 py-3.5 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-all duration-200"
            />
          </div>

          {/* FIELD: EMAIL */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-semibold tracking-wide text-text-main">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full bg-bg-card border border-gray-800 rounded-xl px-4 py-3.5 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-all duration-200"
            />
          </div>

          {/* FIELD: MESSAGE */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-sm font-semibold tracking-wide text-text-main">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              className="w-full bg-bg-card border border-gray-800 rounded-xl px-4 py-3.5 text-sm sm:text-base text-text-main placeholder-gray-600 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-all duration-200 resize-none"
            />
          </div>

          {/* FIELD: SERVICES GRID */}
          <div className="flex flex-col space-y-4 pt-2">
            <span className="text-sm font-semibold tracking-wide text-text-main">
              Services
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {availableServices.map((service) => {
                const isChecked = formData.services.includes(service);
                return (
                  <label
                    key={service}
                    className="flex items-center space-x-3 cursor-pointer group select-none text-sm sm:text-base text-text-main hover:text-brand-primary transition-colors duration-150"
                  >
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleCheckboxChange(service)}
                        className="sr-only" 
                      />
                      {/* Custom Checkbox Box */}
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-200 ${
                        isChecked 
                          ? 'bg-brand-primary border-brand-primary' 
                          : 'bg-transparent border-gray-700 group-hover:border-gray-500'
                      }`}>
                        {isChecked && (
                          <svg className="w-3.5 h-3.5 text-white stroke-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span>{service}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-brand-primary hover:bg-[#E05333] disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-full text-base tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(255,98,62,0.2)] focus:outline-none"
            >
              {status === 'submitting' ? 'Sending Message...' : 'Send'}
            </button>
          </div>

        </form>

        {/* ─── MODAL NOTIFIKASI STATUS (MOCKUP SUCCESS & FAILED STATES) ─── */}
        {status !== 'idle' && status !== 'submitting' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-[#0D111A] border border-gray-800 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl flex flex-col items-center">
              
              {/* Gambar / Icon Amplop */}
              <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                {/* Amplop Jingga */}
                <img 
                  src={status === 'success' ? messageSuccessImg : messageFailImg}
                  alt="Envelope Icon"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Teks Status */}
              <h3 className="text-xl font-bold tracking-wide text-white mb-2">
                {status === 'success' ? 'Message Received!' : 'Oops! Something went wrong.'}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {status === 'success' 
                  ? 'Thanks for reaching out — we’ll get back to you as soon as possible.' 
                  : 'We couldn’t send your message. Please try again or check your connection.'
                }
              </p>

              {/* Tombol Aksi Modal */}
              <button
                onClick={() => {
                  if (status === 'success') {
                    window.location.href = '#home'; // Kembali ke Hero section
                    }
                  setStatus('idle'); // Menutup modal
                }}
                className={`w-full py-2.5 px-6 rounded-xl font-semibold text-sm transition-colors duration-150 ${
                  status === 'success'
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-brand-primary hover:bg-[#E05333] text-white'
                  }`}
                >
                {status === 'success' ? 'Back to Home' : 'Try Again'}
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}