import {motion} from 'motion/react';
import {CheckCircle2, Globe, TrendingUp} from 'lucide-react';

export default function CorporateCSR() {
  return (
    <section id="corporate" className="py-32 px-10 bg-ocean">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-sm p-10 md:p-24 overflow-hidden relative border-white/5">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-aqua/5 blur-[120px] rounded-full" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-aqua font-black uppercase text-[0.7rem] tracking-[0.5em] mb-6 block">
                Partner Protocol
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-[1.05]">
                Corporate <br />
                <span className="text-seafoam opacity-80">Catalyst</span>
              </h2>
              <p className="text-ink/60 text-lg mb-12 leading-relaxed">
                Join 120+ forward-thinking organizations. We provide a tactical platform for real environmental action and ESG transparency.
              </p>
              
              <ul className="space-y-6 mb-12">
                {[
                  { icon: Globe, text: "Tactical ESG Compliance" },
                  { icon: CheckCircle2, text: "Direct Employee Infiltration" },
                  { icon: TrendingUp, text: "High-Visibility Heroism" }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5 text-white font-bold text-sm tracking-wide"
                  >
                    <item.icon className="text-aqua" size={20} />
                    {item.text}
                  </motion.li>
                ))}
              </ul>
              
              <button className="btn-primary px-12 py-5 text-sm">
                Request Protocol Brief
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4">
                  <div className="aspect-square rounded-sm overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all">
                    <img className="w-full h-full object-cover opacity-30 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400" alt="Team" />
                  </div>
                  <div className="aspect-[3/4] rounded-sm overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all">
                    <img className="w-full h-full object-cover opacity-30 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" alt="Meeting" />
                  </div>
               </div>
               <div className="space-y-4 pt-12">
                  <div className="aspect-[3/4] rounded-sm overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all">
                    <img className="w-full h-full object-cover opacity-30 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" alt="Action" />
                  </div>
                  <div className="aspect-square rounded-sm overflow-hidden bg-aqua flex items-center justify-center p-6 text-center">
                    <div className="text-ocean font-black font-display text-4xl leading-tight">120+</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
