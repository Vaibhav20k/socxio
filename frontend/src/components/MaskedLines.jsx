import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export const MaskedLines = ({ lines, className = '', lineClass = '', delay = 0, as: Tag = 'span' }) => (
    <Tag className={`block ${className}`} data-testid="hero-masked-headline">
        {lines.map((l, i) => (
            <motion.span
                key={i}
                className="block overflow-hidden pb-[0.08em] -mb-[0.08em]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.span
                    className={`block ${lineClass}`}
                    variants={{
                        hidden: { y: '115%' },
                        visible: { y: '0%', transition: { duration: 1.1, delay: delay + i * 0.13, ease: EASE } },
                    }}
                >
                    {l}
                </motion.span>
            </motion.span>
        ))}
    </Tag>
);

export const Reveal = ({ children, className = '', delay = 0, y = 36 }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
    >
        {children}
    </motion.div>
);
