import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const rooms = [
  {
    id: 'living',
    name: 'Living Room',
    label: 'Modern Lighting Setup',
    image: '/Living.jpeg',
    desc: 'Elegant living room lighting with concealed wiring and premium interior finishing.'
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    label: 'Appliance & Task Flow',
    image: '/Kitchen.jpeg',
    desc: 'Under-cabinet task lights and heavy-duty concealed appliance circuits.'
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    label: 'Comfort & Reading Lighting',
    image: '/Bedroom.jpeg',
    desc: 'Two-way bedside controls with warm ambient lighting.'
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    label: 'Safe Moisture-Proof Setup',
    image: '/Bathroom.jpeg',
    desc: 'Safe moisture-proof setup with premium fittings and concealed wiring.'
  }
];

export default function RoomFocusExperience() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play feature
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rooms.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Touch and Swipe Support
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % rooms.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + rooms.length) % rooms.length);

  const currentRoom = rooms[activeIndex];

  return (
    <section 
      id="experience" 
      className="relative h-[80vh] md:h-[100vh] w-full overflow-hidden bg-[#0A0A0A]"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentRoom.id}
          className="absolute inset-0 bg-cover bg-center origin-center"
          style={{ backgroundImage: `url(${currentRoom.image})` }}
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeOut" },
            scale: { duration: 10, ease: "linear" }
          }}
        />
      </AnimatePresence>

      {/* Dimmed Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-[60vh] bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent pointer-events-none z-10" />

      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 flex flex-col justify-end pointer-events-none">
         <AnimatePresence mode="wait">
           <motion.div
             key={currentRoom.id}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ duration: 0.8 }}
             className="max-w-md md:max-w-xl pointer-events-auto"
           >
             <div className="flex items-center gap-3 mb-4">
               <div className="h-[2px] w-6 bg-[#E63946]" />
               <span className="text-zinc-200 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">{currentRoom.label}</span>
             </div>
             <h3 className="text-4xl md:text-6xl font-light text-white mb-4 drop-shadow-md">
               {currentRoom.name}
             </h3>
             <p className="text-zinc-300 text-sm md:text-base leading-relaxed drop-shadow-sm font-light">
               {currentRoom.desc}
             </p>
           </motion.div>
         </AnimatePresence>
      </div>

      {/* Slide Controls (Desktop / Manual) */}
      <div className="absolute right-6 md:right-12 bottom-12 md:bottom-24 flex gap-4 z-30">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/30 backdrop-blur-md text-white hover:bg-white/10 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/30 backdrop-blur-md text-white hover:bg-white/10 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Bullet Indicators */}
      <div className="absolute left-6 md:left-12 bottom-8 md:bottom-12 flex gap-2 z-30">
        {rooms.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-1 rounded-full transition-all duration-500 hover:bg-white/80 ${
              idx === activeIndex ? 'w-8 bg-[#E63946]' : 'w-4 bg-white/30'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
