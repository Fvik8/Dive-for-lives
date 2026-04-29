import {motion} from 'motion/react';
import {ArrowUpRight, Leaf, Waves, Wind} from 'lucide-react';

const materials = [
  {
    title: 'Seaweed Bio-plastic',
    category: 'RENEWABLE',
    impact: '100% Biodegradable in water',
    icon: Waves,
    image: '/regenerated_image_1777476332523.png'
  },
  {
    title: 'Mycelium Packaging',
    category: 'CIRCULAR',
    impact: 'Composts in 45 days',
    icon: Leaf,
    image: '/regenerated_image_1777476340036.png'
  },
  {
    title: 'Plant Fiber Nets',
    category: 'INNOVATION',
    impact: 'Zero ghost fishing risk',
    icon: Wind,
    image: '/regenerated_image_1777476347770.png'
  }
];

export default function EducationHub() {
  return (
    <section id="education" className="py-32 px-10 bg-ocean/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
              Circular <br />
              <span className="text-aqua text-glow">Solutions</span>
            </h2>
            <p className="text-ink/60 max-w-xl text-lg">
              Education is the strongest anchor for change. We promote the next generation of ocean-safe materials.
            </p>
          </div>
          <button className="flex items-center gap-2 text-aqua font-black uppercase text-[0.7rem] tracking-[0.3em] hover:gap-4 transition-all group">
            Research Library <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {materials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 border border-white/5">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-8 left-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[0.6rem] font-black tracking-[0.3em] text-aqua">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-black text-white group-hover:text-aqua transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="text-ink/40 font-bold text-[0.8rem] px-2 tracking-wide uppercase">
                {item.impact}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
