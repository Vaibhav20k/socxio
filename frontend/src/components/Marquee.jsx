import { MARQUEE_ITEMS } from '../data/content';

export const Marquee = ({ flip = false }) => {
    const row = MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="flex items-center shrink-0">
            <span className="font-display italic text-2xl sm:text-4xl px-6 whitespace-nowrap">{item}</span>
            <span className="text-ink-accent text-xl">✦</span>
        </span>
    ));
    return (
        <div className="relative py-10 border-y border-ink-line overflow-hidden mask-fade-x" data-testid="marquee-ribbon">
            <div className={`flex w-max animate-marquee ${flip ? '[animation-direction:reverse]' : ''}`}>
                <div className="flex shrink-0 text-ink-sub">{row}</div>
                <div className="flex shrink-0 text-ink-sub" aria-hidden="true">{row}</div>
            </div>
        </div>
    );
};
