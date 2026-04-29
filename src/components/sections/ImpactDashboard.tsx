import {motion} from 'motion/react';
import {Users, Trash2, Building2, MapPin} from 'lucide-react';

const stats = [
  { id: 1, label: 'Active divers', value: '16K+', icon: Users, color: 'text-aqua' },
  { id: 2, label: 'Tons collected', value: '450+', icon: Trash2, color: 'text-seafoam' },
  { id: 3, label: 'Corporate allies', value: '120+', icon: Building2, color: 'text-aqua' },
  { id: 4, label: 'Global hotspots', value: '24', icon: MapPin, color: 'text-seafoam' },
];

export default function ImpactDashboard() {
  return (
    <section id="impact" className="py-32 px-6 bg-ocean">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-sm relative overflow-hidden group border-white/5"
            >
              <stat.icon className={`${stat.color} mb-8 opacity-40 group-hover:opacity-100 transition-opacity`} size={28} />
              <div className="text-5xl font-display font-black mb-2 tracking-tighter text-white">
                {stat.value}
              </div>
              <div className="text-seafoam opacity-40 font-black uppercase text-[0.6rem] tracking-[0.3em] mt-4">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 glass p-8 md:p-20 rounded-sm flex flex-col md:flex-row items-center gap-16 border-white/5">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-8 leading-tight">
              Real-Time <br />
              <span className="text-aqua">Global Reach</span>
            </h2>
            <p className="text-ink/60 text-lg leading-relaxed mb-10 max-w-md">
              From the Pacific Gyre to the Mediterranean, our network is coordinated where the crisis is most acute.
            </p>
            <div className="flex items-center gap-4 text-[0.7rem] font-black text-aqua uppercase tracking-[0.2em]">
              <span className="w-2 h-2 bg-aqua rounded-full animate-ping" />
              Live Deployment Network
            </div>
          </div>
          <div className="w-full md:w-1/2 aspect-video bg-white/[0.02] rounded-sm border border-white/10 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 light-rays opacity-20" />
             <div className="relative flex items-center justify-center">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ repeat: Infinity, duration: 4, delay: i * 0.7 }}
                    className="absolute bg-aqua w-2 h-2 rounded-full shadow-[0_0_10px_#2EC4B6]"
                    style={{ 
                      top: `${Math.random() * 80 + 10}%`, 
                      left: `${Math.random() * 80 + 10}%` 
                    }}
                  />
                ))}
                <span className="text-seafoam/20 font-display text-[0.6rem] tracking-[0.5em] uppercase font-black">Tactical Operations View</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
