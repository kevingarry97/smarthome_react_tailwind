import './App.css';
import HeroSection from './components/hero';
import Navbar from './components/navbar';
import PartnerSection from './components/partner';
import ServiceSection from './components/service';

function App() {
  return (
    <div className='max-w-[2000px] mx-auto text-neutral-900 bg-white dark:bg-neutral-800'>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <PartnerSection />
    </div>
  );
}

export default App;
