import { motion } from 'motion/react';
import { Target, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl p-2 shadow-2xl shadow-red-900/10">
          <div className="absolute inset-0 bg-[url('/Chandelier.jpeg')] bg-cover bg-center opacity-60 mix-blend-luminosity rounded-[1.25rem]"></div>
          {/* Decorative graphic element */}
          <div className="absolute -right-12 bottom-12 w-48 h-48 bg-[#E63946] rounded-full mix-blend-screen filter blur-3xl opacity-30" />
        </div>

        <div>
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
           >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              The <span className="italic font-serif text-[#E63946]">Brand Story.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              At Sishir Electrical, we recognized a gap in the market: beautiful interiors often masked poor, unsafe electrical setups. We bridged that gap. We are a unified team of interior designers and master electricians building homes that are as safe globally as they are visually stunning.
            </p>

            <div className="space-y-6 mt-12 relative z-10">
              <div className="flex items-start space-x-6 p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm group">
                <div className="mt-1 text-zinc-500 group-hover:text-[#E63946] transition-colors">
                  <ShieldCheck size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest font-bold mb-1">Uncompromising Safety</h4>
                  <p className="text-zinc-500 text-[11px] uppercase leading-relaxed">Using fire-resistant casing, branded copper wiring, and optimal load distribution across circuits.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm group">
                <div className="mt-1 text-zinc-500 group-hover:text-[#E63946] transition-colors">
                  <Target size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest font-bold mb-1">Precision Design</h4>
                  <p className="text-zinc-500 text-[11px] uppercase leading-relaxed">Meticulous spatial planning for 1BHK-3BHK flats, maximizing both utility and luxurious aesthetic.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm group">
                <div className="mt-1 text-zinc-500 group-hover:text-[#E63946] transition-colors">
                  <Zap size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest font-bold mb-1">Smart Ready</h4>
                  <p className="text-zinc-500 text-[11px] uppercase leading-relaxed">Future-proofing your home with concealed conduits ready for home automation drops.</p>
                </div>
              </div>
            </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
