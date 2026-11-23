import { MaskedLines, Reveal } from './MaskedLines';
import { TiltCard } from './TiltCard';
import { PORTFOLIOS } from '../data/content';

export const Works = ({ view }) => {
    const p = PORTFOLIOS[view];
    return (
        <section className="relative py-24 sm:py-32 px-5 sm:px-10 bg-ink-surface/40 border-y border-ink-line" id="works">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
                    <div>
                        <span className="font-mono text-xs tracking-[0.3em] text-ink-bright uppercase block mb-5">Selected work</span>
                        <MaskedLines
                            lines={['Built quietly.', 'Felt loudly.']}
                            className="font-display text-3xl sm:text-5xl leading-[1.08] text-ink-text"
                        />
                    </div>
                    <Reveal delay={0.2}>
                        <p className="font-mono text-xs text-ink-sub tracking-[0.15em] uppercase">
                            {String(p.projects.length).padStart(2, '0')} case studies — {p.label} lens
                        </p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {p.projects.map((pr, i) => (
                        <Reveal key={pr.title} delay={i * 0.1} className={i === 0 ? 'md:col-span-2' : ''}>
                            <TiltCard testId="project-card-interactive" className="h-full rounded-2xl" intensity={5}>
                                <article className="group h-full rounded-2xl border border-ink-line bg-ink-surface p-7 sm:p-9 flex flex-col hover:border-ink-accent transition-colors duration-500 cursor-pointer">
                                    <div className="flex items-start justify-between mb-10">
                                        <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-sub">{pr.meta}</span>
                                        <span className="font-mono text-[11px] text-ink-sub">{String(i + 1).padStart(2, '0')}</span>
                                    </div>
                                    <h3 className="font-display text-2xl sm:text-3xl text-ink-text group-hover:text-ink-bright transition-colors duration-500">{pr.title}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-ink-sub flex-1">{pr.desc}</p>
                                    <div className="mt-10 pt-5 border-t border-ink-line flex items-center justify-between">
                                        <span className="font-mono text-2xl text-ink-bright">{pr.metric}</span>
                                        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-sub group-hover:text-ink-text group-hover:translate-x-1 transition-all duration-500">Open →</span>
                                    </div>
                                </article>
                            </TiltCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
