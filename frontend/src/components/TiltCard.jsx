import { useRef } from 'react';

export const TiltCard = ({ children, className = '', intensity = 7, testId }) => {
    const ref = useRef(null);

    const onMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.style.transform = `perspective(900px) rotateY(${(px - 0.5) * intensity * 2}deg) rotateX(${(0.5 - py) * intensity * 2}deg) translateY(-4px)`;
        el.style.setProperty('--gx', `${px * 100}%`);
        el.style.setProperty('--gy', `${py * 100}%`);
    };

    const onLeave = () => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)';
    };

    return (
        <div
            ref={ref}
            data-testid={testId}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={`relative transition-transform duration-500 ease-silk will-change-transform ${className}`}
        >
            <div className="tilt-glare absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            {children}
        </div>
    );
};
