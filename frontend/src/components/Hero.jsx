import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ThreeScene } from './ThreeScene';
import { MaskedLines } from './MaskedLines';
import { PORTFOLIOS, THEMES } from '../data/content';

export const Hero = ({ view }) => {
    const p = PORTFOLIOS[view];
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
    const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative min-h-[92vh] flex items-center overflow-hidden pt-16">
            <ThreeScene color={THEMES[view].webgl} />
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-10 grid lg:grid-cols-12 gap-10 items-center py-16">
                <motion.div style={{ y: textY, opacity: fade }} className="lg:col-span-7">
                    <span className="font-mono text-xs tracking-[0.3em] text-ink-bright uppercase block mb-6">
                        {p.kicker}
                    </span>
                    <MaskedLines
                        lines={p.heroLines}
                        className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-ink-text"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-7 max-w-xl text-sm sm:text-base leading-relaxed text-ink-sub"
                    >
                        {p.sub}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-9 flex flex-wrap items-center gap-4"
                    >
                        <a href="#works" className="inline-flex items-center gap-3 rounded-full bg-ink-accent text-white px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] hover:bg-ink-bright transition-colors duration-300" data-testid="hero-cta-works">
                            See the work <span aria-hidden>→</span>
                        </a>
                        <a href="#team" className="font-mono text-xs uppercase tracking-[0.15em] text-ink-sub hover:text-ink-text transition-colors duration-300 border-b border-ink-line pb-1">
                            Meet the three
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.94, clipPath: 'inset(12% 12% 12% 12%)' }}
                    animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                    transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-5 relative"
                >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink-line">
                        <motion.img
                            src={p.image}
                            alt=""
                            style={{ y: imgY, scale: 1.18 }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, var(--bg) 130%)' }} />
                        <div className="absolute inset-0 mix-blend-overlay" style={{ background: 'radial-gradient(circle at 50% 30%, var(--glow), transparent 70%)' }} />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-ink-sub">
                            <span>Fig. 01 — {p.label}</span>
                            <span>Socxio Atelier</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
