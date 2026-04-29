import {motion} from 'motion/react';
import {ArrowRight, ChevronDown} from 'lucide-react';

export default function Hero({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 bg-ocean-radial z-0" />
      <div className="absolute inset-0 light-rays z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="urgent-tag mb-6 inline-block">
            Ocean Crisis Alert
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.95] mb-8 text-white uppercase tracking-tighter">
            The Depths <br />
            Are Calling.
          </h1>
          <p className="text-lg md:text-xl text-ink/70 mb-12 leading-relaxed max-w-lg">
            We don't just watch the ocean fade—we submerge. Join 16,000+ divers in the world's largest underwater plastic recovery mission. From the sea floor to the circular economy.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button 
              onClick={onJoinClick}
              className="btn-primary px-10 py-5 text-sm"
            >
              Join the Next Dive
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary px-10 py-5 text-sm">
              Corporate ESG
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="impact-card glass p-12 rounded-[2rem] flex flex-col justify-center relative min-h-[400px]"
        >
           <div className="text-[5rem] font-display font-black text-aqua leading-none text-glow">
             16,420
           </div>
           <div className="text-[0.75rem] text-seafoam/60 font-extrabold uppercase tracking-[4px] mt-4">
             Global Divers Enrolled
           </div>
           
           <div className="h-px bg-white/10 my-10" />
           
           <div className="grid grid-cols-2 gap-10">
             <div>
               <div className="text-3xl font-display font-bold text-white">428t</div>
               <div className="text-[0.6rem] text-ink/40 uppercase tracking-widest font-black mt-2">Waste Collected</div>
             </div>
             <div>
               <div className="text-3xl font-display font-bold text-white">100%</div>
               <div className="text-[0.6rem] text-ink/40 uppercase tracking-widest font-black mt-2">Recycled Output</div>
             </div>
           </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 opacity-50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Explore More</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
