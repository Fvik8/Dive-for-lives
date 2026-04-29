import {motion} from 'motion/react';
import {Droplets, Menu, X} from 'lucide-react';
import {useState} from 'react';

export default function Navbar({ onJoinClick }: { onJoinClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Impact', href: '#impact' },
    { name: 'The Journey', href: '#journey' },
    { name: 'Education', href: '#education' },
    { name: 'Corporates', href: '#corporate' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-white/[0.1] pb-6 px-10">
        <div className="flex items-center gap-2">
          <span className="font-display font-black text-2xl tracking-tighter uppercase text-seafoam">
            Dive for Lives
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[0.7rem] font-bold text-ink/70 hover:text-aqua transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onJoinClick}
            className="btn-primary"
          >
            Join Mission
          </button>
        </div>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-6 right-6 glass rounded-2xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-display text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onJoinClick}
            className="bg-cyan-vibrant text-ocean-950 w-full py-3 rounded-xl font-bold text-lg"
          >
            Join Mission
          </button>
        </motion.div>
      )}
    </nav>
  );
}
