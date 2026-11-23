import { motion } from 'framer-motion';
import { ThreeScene } from './ThreeScene';
import { MaskedLines } from './MaskedLines';
import { TiltCard } from './TiltCard';
import { SocxioLogo } from './SocxioLogo';

const EASE = [0.16, 1, 0.3, 1];

const CARDS = [
    {
        view: 'tech', index: '01', title: 'Tech', tag: 'Engineering',
        desc: 'Interfaces, engines, infrastructure.',
        teaser: '120k req/s · 60fps · zero dropped frames',
        img: 'https://images.unsplash.com/photo-1546414701-81cc6963c67f?crop=entropy&cs=srgb&fm=jpg&auto=format&fit=crop&q=85&w=900',
    },
    {
        view: 'marketing', index: '02', title: 'Marketing', tag: 'Narrative',
        desc: 'Positioning, story, demand.',
        teaser: '$42M launch · 7 markets · one category',
        img: 'https://images.unsplash.com/photo-1496865534669-25ec2a3a0fd3?crop=entropy&cs=srgb&fm=jpg&auto=format&fit=crop&q=85&w=900',
    },
    {
        view: 'both', index: '03', title: 'Both', tag: 'Synergy',
        desc: 'From silicon to story, in one house.',
        teaser: 'Design · Build · Launch — no handoffs',
        img: 'https://images.pexels.com/photos/18620026/pexels-photo-18620026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
];

const Card = ({ card, onHover, onSelect, dimmed }) => (
    <motion.button
        data-testid={`gate-card-${card.view}`}
        onMouseEnter={() => onHover(card)}
        onClick={() => onSelect(card.view)}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="group relative text-left rounded-2xl border border-ink-line bg-ink-surface overflow-hidden h-[380px] sm:h-[460px] lg:h-[540px] flex flex-col justify-end"
        style={{ opacity: dimmed ? 0.45 : 1 }}
    >
        <div
            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-silk scale-105 group-hover:scale-100"
            style={{ backgroundImage: `url(${card.img})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0204] via-[#0D0204]/40 to-transparent" />
        <div className="absolute top-5 left-5 right-5 flex items-start justify-between z-10">
            <span className="font-mono text-xs text-ink-sub tracking-[0.25em]">{card.index} / {card.tag}</span>
            <span className="w-9 h-9 rounded-full border border-ink-line flex items-center justify-center text-ink-sub group-hover:bg-ink-accent group-hover:border-ink-accent group-hover:text-white transition-all duration-500">
                →
            </span>
        </div>
        <div className="relative z-10 p-6 sm:p-8">
            <h2 className="font-display text-5xl sm:text-6xl text-[#FAF5F0] mb-2">{card.title}</h2>
            <p className="text-[#B59E9E] text-sm mb-4">{card.desc}</p>
            <p className="font-mono text-[11px] tracking-[0.18em] text-ink-bright uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                {card.teaser}
            </p>
        </div>
    </motion.button>
);

export const Gate = ({ onSelect }) => {
    const onHover = () => {};
    return (
        <motion.div
            className="relative min-h-screen grain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
            transition={{ duration: 0.6, ease: EASE }}
        >
            <ThreeScene color="#B82346" />
            <div className="relative z-10 min-h-screen flex flex-col px-6 sm:px-10 lg:px-16 py-8">
                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-ink-text">
                        <SocxioLogo />
                        <span className="font-display tracking-[0.35em] text-sm uppercase">Socxio</span>
                    </div>
                    <span className="font-mono text-[11px] tracking-[0.25em] text-ink-sub uppercase hidden sm:block">
                        The Atelier · Est. MMXXIV
                    </span>
                </header>

                <div className="flex-1 flex flex-col justify-center py-12">
                    <span className="font-mono text-xs tracking-[0.3em] text-ink-bright uppercase mb-6 block">
                        Choose your lens
                    </span>
                    <MaskedLines
                        lines={['Two architects of code.', 'One architect of desire.', 'Select what you came for.']}
                        className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-ink-text max-w-4xl"
                        delay={0.15}
                    />
                    <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5" data-testid="gate-selection-container">
                        {CARDS.map((c, i) => (
                            <motion.div
                                key={c.view}
                                initial={{ opacity: 0, y: 48 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.5 + i * 0.15, ease: EASE }}
                            >
                                <Card card={c} onHover={onHover} onSelect={onSelect} dimmed={false} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <footer className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-ink-sub uppercase">
                    <span>Scroll not required — click to enter</span>
                    <span className="hidden sm:block">3 people · 1 table · 0 handoffs</span>
                </footer>
            </div>
        </motion.div>
    );
};
