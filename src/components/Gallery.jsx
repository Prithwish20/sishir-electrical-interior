import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: '/Kitchen Interior.jpeg', category: 'Kitchen Interior', aspect: '4/3' },
    { src: '/Bedroom Interior.jpeg', category: 'Bedroom Lighting', aspect: '3/4' },
    { src: '/Living Interior.jpeg', category: 'Living Space', aspect: '3/4' },
    { src: '/Dining Room.jpeg', category: 'DINING SPACE', aspect: '3/4' },
    { src: '/Washroom Interior.jpeg', category: 'Washroom Interior', aspect: '3/4' },
  ];

  return (
    <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Our <span className="italic font-serif text-[#E63946]">Portfolio.</span></h2>
          <p className="text-zinc-400 font-light max-w-md">Browse through our recently completed 1BHK, 2BHK, and 3BHK flat interior and electrical works.</p>
        </div>
        <a href="#contact" className="text-xs font-bold uppercase tracking-widest border-b border-[#E63946]/50 text-white pb-1 hover:text-[#E63946] hover:border-[#E63946] transition-colors">Start Your Project</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`relative group overflow-hidden rounded-xl bg-gray-900 ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            style={{ aspectRatio: img.aspect }}
          >
            <img 
              src={img.src} 
              alt={img.category} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0A0A0A] to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-[#E63946] text-xs font-bold uppercase tracking-widest">{img.category}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center flex flex-col items-center justify-center gap-6">
        <p className="text-zinc-500 text-xs md:text-sm tracking-wide uppercase">
          More exclusive works and before/after projects are available on our Google Drive.
        </p>
        <a 
          href="https://drive.google.com/drive/folders/19lBlQ0eYWqWUM03gC8nlgx9CErazYPPD" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-3.5 bg-[#E63946] text-white font-medium text-sm md:text-base rounded-full shadow-[0_0_15px_rgba(230,57,70,0.4)] hover:shadow-[0_0_25px_rgba(230,57,70,0.6)] hover:bg-red-500 hover:scale-[1.02] transition-all duration-300"
        >
          View Full Gallery
        </a>
      </div>
    </section>
  );
}
