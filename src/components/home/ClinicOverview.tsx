'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ClinicOverview.module.css';

export default function ClinicOverview() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

    return (
        <section className={styles.section} id="clinic" ref={containerRef}>
            <div className={styles.container}>
                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.div style={{ height: '120%', width: '100%', position: 'absolute', top: '-10%', y }}>
                        <Image
                            src="/images/clinic_interior.png"
                            alt="Modern Dental Clinic Interior"
                            fill
                            className={styles.image}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.contentWrapper}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.label}>Η ΚΛΙΝΙΚΗ ΜΑΣ</span>
                    <h2 className={styles.title}>
                        Πρότυπο Κέντρο <br />
                        Οδοντιατρικής Αισθητικής
                    </h2>
                    <p className={styles.description}>
                        Σχεδιάσαμε έναν χώρο που αποπνέει ηρεμία και ασφάλεια. Η κλινική μας συνδυάζει την
                        αρχιτεκτονική κομψότητα με τον πιο εξελιγμένο ιατροτεχνολογικό εξοπλισμό, προσφέροντας
                        μια εμπειρία που ξεπερνά τα καθιερωμένα πρότυπα της οδοντιατρικής φροντίδας.
                    </p>

                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>15+</span>
                            <span className={styles.statLabel}>Ετη Εμπειριας</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>2k+</span>
                            <span className={styles.statLabel}>Χαμογελα</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>100%</span>
                            <span className={styles.statLabel}>Εγγυηση</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
