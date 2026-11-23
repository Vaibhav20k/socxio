import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import { Toaster } from 'sonner';
import { THEMES, PORTFOLIOS } from './data/content';
import { Gate } from './components/Gate';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Story } from './components/Story';
import { Works } from './components/Works';
import { Team } from './components/Team';
import { Capabilities } from './components/Capabilities';
import { Footer } from './components/Footer';
import { CommissionModal } from './components/CommissionModal';

const EASE = [0.16, 1, 0.3, 1];

const WipeOverlay = ({ label }) => (
    <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
        transition={{ duration: 0.65, ease: EASE }}
        style={{ background: 'var(--accent)' }}
    >
        <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
            className="font-display italic text-4xl sm:text-6xl text-white"
        >
            {label}
        </motion.span>
    </motion.div>
);

export default function App() {
    const [view, setView] = useState(() => {
        const h = window.location.hash.replace('#', '');
        return PORTFOLIOS[h] ? h : null;
    });
    const [wipe, setWipe] = useState(null);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        window.location.hash = view || '';
    }, [view]);

    useEffect(() => {
        if (!view) return;
        const lenis = new Lenis({ lerp: 0.09, anchors: true });
        let rafId;
        const raf = (t) => { lenis.raf(t); rafId = requestAnimationFrame(raf); };
        rafId = requestAnimationFrame(raf);
        return () => { cancelAnimationFrame(rafId); lenis.destroy(); };
    }, [view]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    const select = (v) => {
        if (wipe) return;
        setWipe(v);
        setTimeout(() => {
            setView(v);
            setWipe(null);
        }, 680);
    };

    const theme = THEMES[view || 'gate'];

    return (
        <div
            className={`grain min-h-screen transition-colors duration-700 ${view ? 'bg-ink-bg text-ink-text' : 'bg-ink-bg'}`}
            style={{
                '--bg': theme.bg,
                '--surface': theme.surface,
                '--surface-2': theme.surface2,
                '--text': theme.text,
                '--text-2': theme.text2,
                '--accent': theme.accent,
                '--highlight': theme.highlight,
                '--border': theme.border,
                '--glow': theme.glow,
                background: theme.bg,
                color: theme.text,
            }}
        >
            <AnimatePresence>
                {wipe && <WipeOverlay label={PORTFOLIOS[wipe].label} />}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {!view ? (
                    <Gate key="gate" onSelect={select} />
                ) : (
                    <motion.div
                        key={view}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: EASE }}
                        data-testid="portfolio-view"
                    >
                        <Header
                            view={view}
                            onSwitch={select}
                            onGate={() => select(null)}
                            onCommission={() => setModal(true)}
                        />
                        <main>
                            <Hero view={view} />
                            <Marquee />
                            <Story view={view} />
                            <Works view={view} />
                            <Team view={view} />
                            <Capabilities view={view} />
                            <Marquee flip />
                            <Footer onCommission={() => setModal(true)} />
                        </main>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {modal && <CommissionModal open onClose={() => setModal(false)} view={PORTFOLIOS[view || 'gate'].label} />}
            </AnimatePresence>

            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: { background: theme.surface, color: theme.text, border: `1px solid ${theme.border}` },
                }}
            />
        </div>
    );
}
