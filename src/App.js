import './App.css';
import ActionSection from './components/action';
import HeroSection from './components/hero';
import Navbar from './components/navbar';
import PartnerSection from './components/partner';
import ServiceSection from './components/service';

function App() {
  return (
    <div className='max-w-[2000px] mx-auto text-neutral-900'>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <PartnerSection />
      <ActionSection />
    </div>
  );
}

export default App;
