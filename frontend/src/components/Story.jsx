import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MaskedLines, Reveal } from './MaskedLines';
import { PORTFOLIOS } from '../data/content';

export const Story = ({ view }) => {
    const p = PORTFOLIOS[view];
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const imgY = useTransform(scrollYProgress, [0, 1], ['-14%', '14%']);

    return (
        <section ref={ref} className="relative py-24 sm:py-32 px-5 sm:px-10" id="philosophy">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5">
                    <Reveal>
                        <span className="font-mono text-xs tracking-[0.3em] text-ink-bright uppercase block mb-6">The story</span>
                    </Reveal>
                    <MaskedLines
                        lines={['Nothing gets', 'lost in', 'translation.']}
                        className="font-display text-3xl sm:text-5xl leading-[1.08] text-ink-text"
                        delay={0.1}
                    />
                    <div className="relative mt-10 aspect-[3/4] max-w-sm overflow-hidden rounded-2xl border border-ink-line hidden lg:block">
                        <motion.img
                            src="https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?crop=entropy&cs=srgb&fm=jpg&auto=format&fit=crop&q=85&w=1200"
                            alt=""
                            style={{ y: imgY, scale: 1.25 }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 mix-blend-overlay" style={{ background: 'radial-gradient(circle at 40% 40%, var(--glow), transparent 70%)' }} />
                        <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-sub">Fig. 02 — Method</div>
                    </div>
                </div>
                <div className="lg:col-span-6 lg:col-start-7 space-y-8">
                    {p.story.map((para, i) => (
                        <Reveal key={i} delay={i * 0.12}>
                            <p className="text-base sm:text-lg leading-relaxed text-ink-sub border-l-2 border-ink-accent pl-6">
                                {para}
                            </p>
                        </Reveal>
                    ))}
                    <Reveal delay={0.3}>
                        <div className="flex gap-10 pt-4">
                            {[['3', 'People'], ['0', 'Handoffs'], ['1', 'Table']].map(([n, l]) => (
                                <div key={l}>
                                    <div className="font-mono text-4xl sm:text-5xl font-light text-ink-text">{n}</div>
                                    <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-sub mt-1">{l}</div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
