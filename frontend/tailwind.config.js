/** @type {import('tailwindcss').Config} */
module.exports = {
    blocklist: ["overline"],
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['"Bodoni Moda"', 'serif'],
                sans: ['"Outfit"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            colors: {
                ink: {
                    bg: 'var(--bg)',
                    surface: 'var(--surface)',
                    elev: 'var(--surface-2)',
                    text: 'var(--text)',
                    sub: 'var(--text-2)',
                    accent: 'var(--accent)',
                    bright: 'var(--highlight)',
                    line: 'var(--border)',
                    glow: 'var(--glow)'
                }
            },
            transitionTimingFunction: {
                silk: 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
            keyframes: {
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '0.5' },
                    '50%': { opacity: '1' },
                }
            },
            animation: {
                marquee: 'marquee 60s linear infinite',
                pulseGlow: 'pulseGlow 3s ease-in-out infinite',
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
