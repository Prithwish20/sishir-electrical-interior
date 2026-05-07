import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import RoomFocusExperience from './components/RoomFocusExperience';
import Gallery from './components/Gallery';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-zinc-800/30 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Custom Global Cursor Glow */}
      <div 
        className="cursor-glow hidden lg:block pointer-events-none z-50"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />
      
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Services />
        <RoomFocusExperience />
        <Gallery />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
