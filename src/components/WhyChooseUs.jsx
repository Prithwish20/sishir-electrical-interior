import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const points = [
    { num: '01', title: 'Unified Expertise', desc: 'No more fighting between your carpenter and electrician. We handle both, ensuring seamless integration of lights and furniture.' },
    { num: '02', title: 'Modern Aesthetics', desc: 'Sleek profiles, hidden wires, and architectural lighting usually reserved for 5-star hotels, now in your flat.' },
    { num: '03', title: 'Transparent Costing', desc: 'Premium quality does not mean unpredictable billing. We provide crystal clear layout diagrams and itemized quotes.' },
    { num: '04', title: 'Zero Compromise', desc: 'Only branded cables, MCBs, modular switches, and premium plies/laminates enter our work sites.' }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Why <br/>
              <span className="italic font-serif text-[#E63946]">Choose Us?</span>
            </h2>
            <div className="w-20 h-px bg-[#E63946] mb-8"></div>
            <p className="text-zinc-400 font-light leading-relaxed">Renovating a home is a tremendous undertaking. By choosing Sishir Electrical, you are hiring a dedicated unit that minimizes stress while maximizing the elegance and safety of your space.</p>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-12">
          {points.map((pt, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.15 }}
               className="relative border-t border-white/10 pt-8 mt-4 bg-gradient-to-b from-white/5 to-transparent p-6 rounded-b-2xl border-x border-b border-transparent hover:border-white/5 transition-all"
             >
               <span className="absolute -top-6 left-6 font-mono text-3xl text-zinc-700/50 font-bold tracking-tighter">{pt.num}</span>
               <h4 className="text-sm font-bold uppercase tracking-widest text-[#E63946] mb-3 pt-2">{pt.title}</h4>
               <p className="text-zinc-500 text-[11px] uppercase leading-relaxed font-normal">{pt.desc}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
