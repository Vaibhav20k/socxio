import { toast } from 'sonner';
import { MaskedLines, Reveal } from './MaskedLines';
import { SocxioLogo } from './SocxioLogo';

export const Footer = ({ onCommission }) => (
    <footer className="relative pt-24 pb-10 px-5 sm:px-10 border-t border-ink-line overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-8">
                    <MaskedLines
                        lines={["Let's build something", 'they remember.']}
                        className="font-display text-4xl sm:text-6xl leading-[1.05] text-ink-text"
                    />
                    <Reveal delay={0.2}>
                        <button
                            onClick={onCommission}
                            className="mt-9 inline-flex items-center gap-3 rounded-full bg-ink-accent text-white px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] hover:bg-ink-bright transition-colors duration-300"
                            data-testid="footer-commission-cta"
                        >
                            Initiate Commission <span aria-hidden>→</span>
                        </button>
                    </Reveal>
                </div>
                <div className="lg:col-span-4 space-y-4 font-mono text-xs text-ink-sub">
                    {[
                        ['Email', 'studio@socxio.com', () => { navigator.clipboard?.writeText('studio@socxio.com'); toast.success('Email copied to clipboard'); }],
                        ['Based in', 'Everywhere · GMT+1', null],
                        ['Response', 'Within 48 hours', null],
                    ].map(([label, val, action]) => (
                        <button
                            key={label}
                            onClick={action || undefined}
                            data-testid={action ? 'footer-copy-email' : undefined}
                            className={`w-full flex items-center justify-between border-b border-ink-line pb-3 text-left ${action ? 'hover:text-ink-text transition-colors' : 'cursor-default'}`}
                        >
                            <span className="uppercase tracking-[0.25em]">{label}</span>
                            <span className="text-ink-text">{val}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="mt-20 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-sub">
                <div className="flex items-center gap-3 text-ink-text">
                    <SocxioLogo className="w-6 h-6" />
                    <span>Socxio — The Atelier</span>
                </div>
                <span>© MMXXVI Socxio. All craft reserved.</span>
            </div>
        </div>
    </footer>
);
