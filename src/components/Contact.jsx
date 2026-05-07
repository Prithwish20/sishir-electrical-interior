import { Phone, Mail, MessageCircle, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-6xl text-white font-light mb-6">
            Let's <span className="italic font-serif text-[#E63946]">Talk.</span>
          </h2>
          <p className="text-zinc-400 mb-12 max-w-md font-light text-lg">
            Ready to transform your home? Reach out to us for a consultation, layout planning, or a complete renovation quote.
          </p>

          <div className="space-y-8">
            <a href="tel:+919088454739" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 group p-4 border-l-2 border-white/10 hover:border-[#E63946] bg-gradient-to-r hover:from-white/5 to-transparent transition-all">
              <div className="w-12 h-12 flex items-center justify-center">
                <Phone className="text-zinc-500 group-hover:text-[#E63946] transition-colors" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-1">Call Us</p>
                <p className="text-white text-lg font-light tracking-wider group-hover:text-[#E63946] transition-colors">+91 90884 54739</p>
              </div>
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sishirelectrical@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 group p-4 border-l-2 border-white/10 hover:border-[#E63946] bg-gradient-to-r hover:from-white/5 to-transparent transition-all">
              <div className="w-12 h-12 flex items-center justify-center">
                <Mail className="text-zinc-500 group-hover:text-[#E63946] transition-colors" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-1">Email Us</p>
                <p className="text-white text-lg font-light tracking-wider group-hover:text-[#E63946] transition-colors">sishirelectrical@gmail.com</p>
              </div>
            </a>

            <a href="https://wa.me/919088454739" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 group p-4 border-l-2 border-[#25D366]/30 hover:border-[#25D366] bg-gradient-to-r hover:from-[#25D366]/10 to-transparent transition-all">
              <div className="w-12 h-12 flex items-center justify-center">
                <MessageCircle className="text-[#25D366]" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-1">WhatsApp</p>
                <p className="text-white text-lg font-light tracking-wider">Chat with us instantly</p>
              </div>
            </a>

            <a href="https://www.facebook.com/share/1EEj489C3x/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 group p-4 border-l-2 border-white/10 hover:border-[#E63946] bg-gradient-to-r hover:from-white/5 to-transparent transition-all">
              <div className="w-12 h-12 flex items-center justify-center">
                <Facebook className="text-zinc-500 group-hover:text-[#E63946] transition-colors" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-1">Facebook</p>
                <p className="text-white text-lg font-light tracking-wider group-hover:text-[#E63946] transition-colors">Visit our page</p>
              </div>
            </a>

            <a href="https://www.instagram.com/sishirelectrical?igsh=aW1iYzI0cDM5cGp4" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 group p-4 border-l-2 border-white/10 hover:border-[#E63946] bg-gradient-to-r hover:from-white/5 to-transparent transition-all">
              <div className="w-12 h-12 flex items-center justify-center">
                <Instagram className="text-zinc-500 group-hover:text-[#E63946] transition-colors" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-1">Instagram</p>
                <p className="text-white text-lg font-light tracking-wider group-hover:text-[#E63946] transition-colors">@sishirelectrical</p>
              </div>
            </a>
          </div>

        </div>

        {/* Location Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl relative shadow-2xl flex flex-col justify-center">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 w-32 h-32 bg-[#E63946] rounded-full blur-[60px] opacity-30 pointer-events-none" />
          
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#E63946] mb-8">Our Location</h3>
          
          <div className="relative w-full h-[60%] min-h-[250px] rounded-2xl overflow-hidden bg-zinc-900 group mb-8">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <div className="w-16 h-16 bg-[#E63946]/20 rounded-full flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(230,57,70,0.3)]">
                 <MapPin className="text-[#E63946]" size={32} />
               </div>
               <p className="text-white text-md tracking-wide font-medium drop-shadow-md">Our Location</p>
            </div>
          </div>

          <a 
            href="https://maps.app.goo.gl/TpEtwr59P4eo4npW7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-[#E63946] text-white font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-red-700 hover:shadow-[0_0_20px_rgba(230,57,70,0.4)] transition-all mt-auto backdrop-blur-sm text-center flex items-center justify-center"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
