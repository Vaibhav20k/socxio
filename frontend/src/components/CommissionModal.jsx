import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';
import { MaskedLines } from './MaskedLines';

const EASE = [0.16, 1, 0.3, 1];

export const CommissionModal = ({ open, onClose, view }) => {
    const [budget, setBudget] = useState(45);
    if (!open) return null;
    return (
        <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            data-testid="commission-modal"
        >
            <div className="absolute inset-0 backdrop-blur-md bg-black/60" onClick={onClose} />
            <motion.div
                initial={{ y: 48, opacity: 0, scale: 0.97 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 24, opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="relative w-full max-w-lg rounded-2xl border border-ink-line bg-ink-surface p-7 sm:p-9 max-h-[88vh] overflow-y-auto"
            >
                <button onClick={onClose} data-testid="commission-modal-close" className="absolute top-5 right-5 text-ink-sub hover:text-ink-text text-xl leading-none">×</button>
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-bright block mb-3">Commission · {view}</span>
                <h3 className="font-display text-2xl sm:text-3xl text-ink-text mb-7">Tell us what you're building.</h3>
                <form
                    onSubmit={(e) => { e.preventDefault(); onClose(); toast.success('Brief received. The three of us will reply within 48 hours.'); }}
                    className="space-y-5"
                >
                    <input required placeholder="Your name" className="w-full bg-transparent border border-ink-line rounded-lg px-4 py-3 text-sm text-ink-text placeholder:text-ink-sub focus:border-ink-accent outline-none transition-colors" data-testid="commission-input-name" />
                    <input required type="email" placeholder="Email" className="w-full bg-transparent border border-ink-line rounded-lg px-4 py-3 text-sm text-ink-text placeholder:text-ink-sub focus:border-ink-accent outline-none transition-colors" data-testid="commission-input-email" />
                    <div>
                        <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.15em] text-ink-sub mb-3">
                            <span>Budget</span><span className="text-ink-bright">${(budget * 2)}k — ${(budget * 2 + 30)}k</span>
                        </div>
                        <input type="range" min="10" max="90" value={budget} onChange={(e) => setBudget(+e.target.value)} className="w-full accent-[var(--accent)]" data-testid="commission-budget-slider" />
                    </div>
                    <button type="submit" data-testid="commission-modal-submit" className="w-full rounded-lg bg-ink-accent text-white py-3.5 font-mono text-xs uppercase tracking-[0.2em] hover:bg-ink-bright transition-colors duration-300">
                        Send the brief
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
};
