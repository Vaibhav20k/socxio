import { motion } from 'framer-motion';
import { SocxioLogo } from './SocxioLogo';

const EASE = [0.16, 1, 0.3, 1];

export const Header = ({ view, onSwitch, onGate, onCommission }) => {
    const views = ['tech', 'both', 'marketing'];
    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-ink-line"
            style={{ background: 'color-mix(in srgb, var(--bg) 75%, transparent)' }}
        >
            <div className="flex items-center justify-between px-5 sm:px-10 h-16">
                <button data-testid="gate-return-button" onClick={onGate} className="flex items-center gap-3 text-ink-text hover:opacity-70 transition-opacity duration-300">
                    <SocxioLogo className="w-7 h-7" />
                    <span className="font-display tracking-[0.3em] text-xs uppercase hidden xs:inline sm:inline">Socxio</span>
                </button>

                <div className="flex items-center rounded-full border border-ink-line p-1 gap-1 bg-ink-surface/60">
                    {views.map((v) => (
                        <button
                            key={v}
                            data-testid={`view-filter-${v}`}
                            onClick={() => onSwitch(v)}
                            className={`relative px-3 sm:px-4 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 ${view === v ? 'text-ink-text' : 'text-ink-sub hover:text-ink-text'}`}
                        >
                            {view === v && (
                                <motion.span
                                    layoutId="view-pill"
                                    className="absolute inset-0 rounded-full bg-ink-accent"
                                    transition={{ duration: 0.45, ease: EASE }}
                                />
                            )}
                            <span className="relative z-10">{v}</span>
                        </button>
                    ))}
                </div>

                <button
                    data-testid="commission-modal-trigger"
                    onClick={onCommission}
                    className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink-accent text-white px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] hover:bg-ink-bright transition-colors duration-300"
                >
                    Initiate Commission
                </button>
            </div>
        </motion.header>
    );
};
