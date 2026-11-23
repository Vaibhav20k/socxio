import { useState } from 'react';
import { MaskedLines, Reveal } from './MaskedLines';
import { PORTFOLIOS } from '../data/content';

export const Capabilities = ({ view }) => {
    const p = PORTFOLIOS[view];
    const [open, setOpen] = useState(0);
    return (
        <section className="relative py-24 sm:py-32 px-5 sm:px-10 border-t border-ink-line" id="capabilities">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                    <span className="font-mono text-xs tracking-[0.3em] text-ink-bright uppercase block mb-5">Capabilities</span>
                    <MaskedLines
                        lines={['What we', 'do all day.']}
                        className="font-display text-3xl sm:text-5xl leading-[1.08] text-ink-text"
                    />
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                    {p.capabilities.map((c, i) => (
                        <Reveal key={c.n} delay={i * 0.08}>
                            <button
                                onClick={() => setOpen(open === i ? -1 : i)}
                                data-testid={`capability-row-${c.n}`}
                                className="w-full text-left group border-b border-ink-line py-6 first:border-t"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-baseline gap-5">
                                        <span className="font-mono text-xs text-ink-accent">{c.n}</span>
                                        <span className={`font-display text-xl sm:text-2xl transition-colors duration-300 ${open === i ? 'text-ink-bright' : 'text-ink-text group-hover:text-ink-bright'}`}>{c.title}</span>
                                    </div>
                                    <span className={`font-mono text-ink-sub transition-transform duration-500 ease-silk ${open === i ? 'rotate-45' : ''}`}>+</span>
                                </div>
                                <div
                                    className="overflow-hidden transition-all duration-500 ease-silk"
                                    style={{ maxHeight: open === i ? 80 : 0, opacity: open === i ? 1 : 0 }}
                                >
                                    <p className="text-sm text-ink-sub pt-4 pl-10">{c.desc}</p>
                                </div>
                            </button>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
