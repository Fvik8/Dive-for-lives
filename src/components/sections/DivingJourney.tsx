import {motion} from 'motion/react';
import {ArrowDown, Anchor, BookOpen, Recycle} from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'The Descent',
    subtitle: 'COLLECTION',
    description: 'Volunteer divers descend to mapped polluted zones, manually collecting micro-plastics and ghost nets.',
    icon: Anchor,
    color: 'bg-blue-500'
  },
  {
    id: '02',
    title: 'The Harvest',
    subtitle: 'SORTING & DATA',
    description: 'We categorize waste with marine biologists to track the sources of pollution and local impact.',
    icon: BookOpen,
    color: 'bg-cyan-500'
  },
  {
    id: '03',
    title: 'The Rebirth',
    subtitle: 'CIRCULAR ECONOMY',
    description: 'Collected plastic is processed into sustainable materials, funding future educational programs.',
    icon: Recycle,
    color: 'bg-emerald-500'
  }
];

export default function DivingJourney() {
  return (
    <section id="journey" className="py-32 px-10 overflow-hidden bg-ocean">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="border-l-2 border-aqua/30 pl-10 group"
            >
              <div className="text-aqua font-black text-[0.75rem] uppercase tracking-[3px] mb-4">
                {step.id}. {step.title}
              </div>
              <h3 className="text-2xl font-display font-black mb-6 text-white group-hover:text-aqua transition-colors">
                {step.subtitle}
              </h3>
              <p className="text-ink/50 text-[0.85rem] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
