'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { prefixPath } from '@/utils/basePath';
import styles from './Technology.module.css';

export default function Technology() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <section className={styles.section} id="tech" ref={containerRef}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.span
                        className={styles.highlight}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        DIGITAL DENTISTRY
                    </motion.span>
                    <h2 className={styles.title}>
                        Τεχνολογία Αιχμής <br />
                        για Ακρίβεια & Άνεση
                    </h2>

                    <ul className={styles.featureList}>
                        <motion.li
                            className={styles.feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className={styles.featureTitle}>3D Intraoral Scanner</h3>
                            <p className={styles.featureDesc}>Ψηφιακή αποτύπωση χωρίς δυσφορία. Ακρίβεια μικροστών για τέλεια εφαρμογή.</p>
                        </motion.li>
                        <motion.li
                            className={styles.feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className={styles.featureTitle}>Dental Laser</h3>
                            <p className={styles.featureDesc}>Ανώδυνη θεραπεία μαλακών ιστών με ταχύτερη επούλωση και ελαχιστοποίηση της αναισθησίας.</p>
                        </motion.li>
                        <motion.li
                            className={styles.feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <h3 className={styles.featureTitle}>Digital Smile Design</h3>
                            <p className={styles.featureDesc}>Δείτε το νέο σας χαμόγελο πριν καν ξεκινήσει η θεραπεία.</p>
                        </motion.li>
                    </ul>
                </div>

                <div className={styles.visual}>
                    <div className={`${styles.circle} ${styles.circle1}`} />
                    <div className={`${styles.circle} ${styles.circle2}`} />

                    <motion.div style={{ rotate, scale, width: '100%', height: '100%', position: 'relative' }}>
                        <Image
                            src={prefixPath("/images/dental_scanner.png")}
                            alt="Latest generation Dental Scanner"
                            fill
                            className={styles.scannerImage}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
