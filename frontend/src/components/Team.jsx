import { MaskedLines, Reveal } from './MaskedLines';
import { TiltCard } from './TiltCard';
import { TEAM } from '../data/content';

const Frame = ({ member }) => (
    <TiltCard testId={`team-frame-${member.id}`} intensity={6} className="rounded-2xl">
        <div className="group relative aspect-[3/4] rounded-2xl border border-ink-line bg-ink-surface overflow-hidden">
            <div className="absolute inset-0 opacity-[0.14]" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
            <span className="absolute top-4 left-4 text-ink-sub text-lg leading-none select-none">+</span>
            <span className="absolute top-4 right-4 text-ink-sub text-lg leading-none select-none">+</span>
            <span className="absolute bottom-4 left-4 text-ink-sub text-lg leading-none select-none">+</span>
            <span className="absolute bottom-4 right-4 text-ink-sub text-lg leading-none select-none">+</span>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink-sub">Socxio · Portrait</span>
                <div className="w-14 h-14 rounded-full border border-dashed border-ink-accent flex items-center justify-center text-ink-accent text-xl animate-pulseGlow">◎</div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-sub max-w-[180px] leading-relaxed">
                    Photo frame awaiting studio portrait
                </span>
            </div>
            <span className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.25em] uppercase text-ink-bright">
                {member.discipline}
            </span>
        </div>
    </TiltCard>
);

export const Team = ({ view }) => {
    const ordered = view === 'marketing' ? [TEAM[2], TEAM[0], TEAM[1]] : TEAM;
    return (
        <section className="relative py-24 sm:py-32 px-5 sm:px-10" id="team" data-testid="team-section-container">
            <div className="max-w-7xl mx-auto">
                <div className="mb-14">
                    <span className="font-mono text-xs tracking-[0.3em] text-ink-bright uppercase block mb-5">The triumvirate</span>
                    <MaskedLines
                        lines={['Three people.', 'One table.', 'Zero handoffs.']}
                        className="font-display text-3xl sm:text-5xl leading-[1.08] text-ink-text"
                    />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ordered.map((m, i) => (
                        <Reveal key={m.id} delay={i * 0.12}>
                            <Frame member={m} />
                            <div className="mt-6 px-1">
                                <h3 className="font-display text-2xl text-ink-text">{m.name}</h3>
                                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-bright mt-2">{m.role}</p>
                                <p className="text-sm text-ink-sub mt-3">{m.specs}</p>
                                <p className="text-sm text-ink-sub mt-4 border-t border-ink-line pt-4">
                                    <span className="text-ink-accent font-mono text-[10px] uppercase tracking-[0.2em] block mb-1.5">Signature</span>
                                    {m.signature}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
