'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section className={styles.hero} ref={containerRef}>
            <motion.div className={styles.bgContainer} style={{ y, opacity }}>
                <Image
                    src="/images/hero_bg.png"
                    alt="Luxury Dental Interior"
                    fill
                    className={styles.bgImage}
                    priority
                />
                <div className={styles.overlay} />
            </motion.div>

            <div className={styles.content}>
                <motion.span
                    className={styles.eyebrow}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    EST. 2025 • ATHENS
                </motion.span>

                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    Η Τέχνη της Οδοντιατρικής<br />
                    Η Επιστήμη του Χαμόγελου
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    Ζήστε μια μοναδική εμπειρία φροντίδας σε ένα περιβάλλον υψηλής αισθητικής και τεχνολογικής αιχμής.
                </motion.p>

                <motion.div
                    className={styles.ctaWrapper}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <a href="#contact" className={styles.primaryBtn}>
                        Κλείστε Ραντεβού <ArrowRight size={18} />
                    </a>
                    <a href="#services" className={styles.secondaryBtn}>
                        Οι Υπηρεσίες Μας
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
