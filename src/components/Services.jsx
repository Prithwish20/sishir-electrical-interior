import { motion } from 'motion/react';
import { Sofa, Lightbulb, PenTool, Bath, Hammer, Plug, Home, Bell, Phone, Bed, Flame, Camera, Network } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Kitchen Interior + Electrical",
      desc: "Modular layouts fully integrated with safe appliance wiring and hidden strip lighting.",
      icon: <PenTool size={24} className="text-[#A8A8A8]" />
    },
    {
      title: "Living Room Lighting",
      desc: "Cinematic layered lighting (ambient, task, accent) paired with modern false ceilings.",
      icon: <Sofa size={24} className="text-[#A8A8A8]" />
    },
    {
      title: "Bathroom Fittings",
      desc: "Moisture-proof electrical points, exhaust systems, and elegant vanity mirrors.",
      icon: <Bath size={24} className="text-[#A8A8A8]" />
    },
    {
      title: "Bedroom Interior",
      desc: "Cozy lighting, concealed routing, and custom furniture tailored to your comfort.",
      icon: <Bed size={24} className="text-[#A8A8A8]" />
    },
    {
      title: "Electrical Main Installation",
      desc: "Complete main line setup for all property types including residential, commercial, and industrial with safe meter connections and distribution systems.",
      icon: <Plug size={24} className="text-[#A8A8A8]" />
    },
    {
      title: "Smart Lighting",
      desc: "Wi-Fi controlled dimmers, RGB accents, and automated switches for modern homes.",
      icon: <Lightbulb size={24} className="text-[#A8A8A8]" />
    },
    {
      title: "Full Interior Electrical Work",
      desc: "Complete wiring for entire home interiors, blending aesthetics with uncompromising safety.",
      icon: <Home size={24} className="text-[#A8A8A8]" />
    },
    {
      title: "Calling Bell Installation",
      desc: "Reliable doorbell systems and modern smart bell setups for seamless access.",
      icon: <Bell size={24} className="text-[#A8A8A8]" />
    },
    {
      title: "Telephone Wiring & Setup",
      desc: "Concealed landline wiring and intercom systems for connected home environments.",
      icon: <Phone size={24} className="text-[#A8A8A8]" />
    },
    {
      title: "Renovation & Rewiring",
      desc: "Upgrading spaces with modern safety electrical standards and striking aesthetics.",
      icon: <Hammer size={24} className="text-[#A8A8A8]" />
    },
    {
      title: "Fire Alarm Setup",
      desc: "Advanced fire alarm system installation for homes and commercial spaces ensuring safety and early detection.",
      icon: <Flame size={24} className="text-[#A8A8A8]" />
    },
    {
      title: "CCTV Setup",
      desc: "High-quality CCTV camera installation with complete surveillance solutions for security and monitoring.",
      icon: <Camera size={24} className="text-[#A8A8A8]" />
    },
    {
      title: "LAN / Network Setup",
      desc: "Professional LAN and network wiring for homes and offices ensuring fast, stable, and organized connectivity.",
      icon: <Network size={24} className="text-[#A8A8A8]" />
    }
  ];

  return (
    <section id="services" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="mb-20 grid md:grid-cols-2 gap-12 items-end">
        <div>
          <h2 className="text-4xl md:text-6xl text-white font-light leading-[1.05] mb-6">
            Mastery in <br />
            <span className="italic font-serif text-[#E63946]">Design & Power.</span>
          </h2>
        </div>
        <div>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
            We don't just design beautiful spaces; we engineer their heartbeat. Our dual expertise ensures that your interior aesthetics are perfectly matched with robust, hidden, and safe electrical systems.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
            className="p-8 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer group backdrop-blur-sm"
          >
            <div className="text-zinc-400 mb-4 group-hover:text-[#E63946] group-hover:scale-110 transition-all delay-75 inline-block">
              {service.icon}
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">{service.title}</h3>
            <p className="text-xs text-zinc-500 uppercase leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
