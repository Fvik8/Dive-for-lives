import {Droplets, Instagram, Twitter, Facebook, Mail} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-32 px-10 border-t border-white/5 bg-ocean">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-20">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-8">
            <span className="font-display font-black text-2xl tracking-tighter uppercase text-aqua">
              Dive for Lives
            </span>
          </div>
          <p className="text-ink/40 mb-10 leading-relaxed text-sm font-medium">
            Protecting the heartbeat of the planet through tactical community action and circular education.
          </p>
          <div className="flex items-center gap-4">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="p-4 glass rounded-sm text-ink/40 hover:text-aqua hover:border-aqua transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
          <div>
            <h4 className="text-white font-black uppercase text-[0.6rem] tracking-[0.4em] mb-8">The Mission</h4>
            <ul className="space-y-4 text-ink/40 text-[0.8rem] font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-aqua transition-colors">Our Impact</a></li>
              <li><a href="#" className="hover:text-aqua transition-colors">The Journey</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase text-[0.6rem] tracking-[0.4em] mb-8">Community</h4>
            <ul className="space-y-4 text-ink/40 text-[0.8rem] font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-aqua transition-colors">Find a Dive</a></li>
              <li><a href="#" className="hover:text-aqua transition-colors">Member Hub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase text-[0.6rem] tracking-[0.4em] mb-8">Newsletter</h4>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="ACCESS_EMAIL" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-4 text-[0.7rem] font-black tracking-widest focus:outline-none focus:border-aqua transition-all pr-14"
              />
              <button className="absolute right-2 top-2 p-2 bg-aqua text-ocean rounded-sm group-hover:scale-105 transition-transform">
                <Mail size={16} />
              </button>
            </div>
            <p className="text-[10px] text-ink/20 mt-6 uppercase font-black tracking-[0.3em]">Direct intel for 45K+ divers</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
