export const SocxioLogo = ({ className = 'w-8 h-8' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="socxio-logo">
        <path d="M50 10 L85 30 L50 50 L15 30 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <path d="M15 45 L50 65 L85 45" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <path d="M15 65 L50 85 L85 65" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
);

export const Wordmark = () => (
    <span className="font-display tracking-[0.35em] text-sm uppercase">Socxio</span>
);
