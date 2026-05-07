import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop')] bg-cover bg-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/60 to-[#050505]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[#E63946] font-mono text-sm mb-4 tracking-[0.2em] uppercase block">
            Premium Interiors & Smart Wiring
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Light <br/> <span className="italic font-serif">Redefined.</span>
        </motion.h1>

        <motion.p
          className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-sm mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Bespoke home interiors integrated with intelligent electrical systems for the modern homeowner.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a href="#gallery" className="px-8 py-4 bg-[#E63946] text-white font-bold tracking-widest text-xs uppercase hover:bg-red-700 transition-all shadow-lg shadow-red-900/20">
            Explore Work
          </a>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute bottom-0 left-8 h-32 w-px bg-gradient-to-t from-[#A8A8A8]/50 to-transparent hidden md:block" />
      <div className="absolute bottom-0 right-8 h-32 w-px bg-gradient-to-t from-[#A8A8A8]/50 to-transparent hidden md:block" />
    </section>
  );
}
