import {motion, AnimatePresence} from 'motion/react';
import {X, CheckCircle2, Waves, Droplet, User} from 'lucide-react';
import React, {useState} from 'react';

export default function RegistrationModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ocean-950/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass rounded-sm overflow-hidden border-white/10"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-ink/30 hover:text-white transition-colors">
              <X size={24} />
            </button>

            {!submitted ? (
              <div className="p-10 md:p-16">
                <div className="flex gap-2 mb-12">
                  {[1, 2, 3].map((s) => (
                    <div 
                      key={s} 
                      className={`h-1 flex-1 transition-all duration-500 ${s <= step ? 'bg-aqua' : 'bg-white/5'}`} 
                    />
                  ))}
                </div>

                <div className="mb-10">
                  <h3 className="text-4xl font-display font-black uppercase mb-4 leading-tight">
                    Mission <br />
                    <span className="text-aqua">Activation</span>
                  </h3>
                  <p className="text-ink/40 text-sm font-bold uppercase tracking-widest">Deployment Profile Setup</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {step === 1 && (
                    <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                       <div>
                          <label className="block text-[0.6rem] font-black text-ink/40 uppercase tracking-[0.3em] mb-4">Operator Name</label>
                          <div className="relative">
                             <input required type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-6 py-5 focus:border-aqua focus:outline-none transition-all font-bold text-sm tracking-widest" placeholder="J. COUSTEAU" />
                          </div>
                       </div>
                       <button type="button" onClick={() => setStep(2)} className="btn-primary w-full py-5 text-base">Next Protocol</button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                       <label className="block text-[0.6rem] font-black text-ink/40 uppercase tracking-[0.3em] mb-4">Experience Clearances</label>
                       <div className="grid grid-cols-2 gap-3">
                          {['Level 1', 'Advanced', 'SAR Spec', 'Master'].map((level) => (
                            <button type="button" key={level} className="py-4 glass rounded-sm border-white/5 hover:border-aqua hover:text-aqua transition-all font-black text-[0.7rem] uppercase tracking-widest">{level}</button>
                          ))}
                       </div>
                       <div className="flex gap-4 pt-4">
                          <button type="button" onClick={() => setStep(1)} className="flex-1 py-4 border border-white/10 rounded-sm font-black text-[0.7rem] uppercase tracking-[0.2em] opacity-40 hover:opacity-100">Back</button>
                          <button type="button" onClick={() => setStep(3)} className="btn-primary flex-1 py-4 text-sm">Finalize</button>
                       </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                       <div>
                          <label className="block text-[0.6rem] font-black text-ink/40 uppercase tracking-[0.3em] mb-4">Target Sector</label>
                          <div className="relative">
                             <select className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-6 py-5 focus:border-aqua focus:outline-none transition-all appearance-none font-bold text-sm tracking-widest">
                                <option>Atlantic Sector</option>
                                <option>Pacific Basin</option>
                                <option>Mediterranean Hub</option>
                                <option>Indian Sector</option>
                             </select>
                          </div>
                       </div>
                       <div className="flex gap-4 pt-4">
                          <button type="button" onClick={() => setStep(2)} className="flex-1 py-4 border border-white/10 rounded-sm font-black text-[0.7rem] uppercase tracking-[0.2em] opacity-40 hover:opacity-100">Back</button>
                          <button type="submit" className="flex-1 bg-seafoam text-ocean py-4 rounded-sm font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-seafoam/20">Full Deployment</button>
                       </div>
                    </motion.div>
                  )}
                </form>
              </div>
            ) : (
              <div className="p-16 text-center">
                <motion.div 
                  initial={{ rotate: -180, scale: 0 }} 
                  animate={{ rotate: 0, scale: 1 }} 
                  className="w-20 h-20 bg-aqua rounded-sm flex items-center justify-center text-ocean mx-auto mb-10 shadow-2xl shadow-aqua/30"
                >
                  <CheckCircle2 size={40} />
                </motion.div>
                <h3 className="text-4xl font-display font-black uppercase mb-6 leading-tight">Protocol <br /><span className="text-aqua">Locked</span></h3>
                <p className="text-ink/40 mb-12 font-medium leading-relaxed">Identity verified. Browse active mission grids in your dashboard.</p>
                <button onClick={onClose} className="btn-secondary w-full py-5 text-sm">Return to Surface</button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
