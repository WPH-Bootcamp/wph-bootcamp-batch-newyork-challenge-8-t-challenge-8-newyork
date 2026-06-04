import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { LogoCloud } from './components/sections/LogoCloud';
import { Statistics } from './components/sections/Statistics';
import { OurProcess } from './components/sections/OurProcess';
import { Solution } from './components/sections/Solution';
import { Industry } from './components/sections/Industry';
import { Projects } from './components/sections/Projects';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className='min-h-screen bg-bg-main overflow-x-hidden'>
      <Navbar />

      <main>
        <Hero /> 
        <LogoCloud /> 
        <Statistics /> 
        <OurProcess /> 
        <Solution /> 
        <Industry /> 
        <Projects /> 
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
