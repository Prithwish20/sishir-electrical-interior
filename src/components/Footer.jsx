export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-transparent mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
           <div className="flex items-center gap-3 mb-4">
             <div className="w-8 h-8 bg-gradient-to-br from-[#E63946] to-[#991B1B] flex items-center justify-center rounded-sm rotate-45 border border-white/20">
               <div className="-rotate-45 font-bold text-white text-sm">S</div>
             </div>
             <span className="text-sm font-light tracking-[0.3em] uppercase text-white">Sishir Electrical</span>
           </div>
           <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest max-w-xs leading-relaxed">Premium Full Home Interior Design & Electrical Solutions.</p>
        </div>
        
        <div className="flex space-x-6 text-xs font-bold uppercase tracking-widest text-zinc-500">
           <a href="#services" className="hover:text-[#E63946] transition-colors">Services</a>
           <a href="#gallery" className="hover:text-[#E63946] transition-colors">Works</a>
           <a href="#contact" className="hover:text-[#E63946] transition-colors">Contact</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 flex items-center justify-center border-t border-white/5 pt-8 relative z-10">
        <p className="text-zinc-600 text-[10px] uppercase tracking-widest">&copy; {year} Sishir Electrical & Interior. All rights reserved.</p>
      </div>
    </footer>
  );
}
