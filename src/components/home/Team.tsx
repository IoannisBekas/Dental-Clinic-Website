'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import styles from './Team.module.css';

const team = [
    {
        name: 'Δρ. Αλέξανδρος Παππάς',
        role: 'Χειρουργός Οδοντίατρος',
        image: '/images/doctor_male.png',
    },
    {
        name: 'Δρ. Μαρία Γεωργίου',
        role: 'Ειδική Ορθοδοντικός',
        image: '/images/doctor_female.png',
    }
];

export default function Team() {
    return (
        <section className={styles.section} id="team">
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Η Επιστημονική Ομάδα
                </motion.h2>
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Άρτια καταρτισμένοι επιστήμονες που μοιράζονται το ίδιο πάθος για την τελειότητα.
                </motion.p>

                <div className={styles.grid}>
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className={styles.image}
                            />
                            <div className={styles.overlay}>
                                <div className={styles.info}>
                                    <span className={styles.role}>{member.role}</span>
                                    <h3 className={styles.name}>{member.name}</h3>
                                    <div className={styles.socials}>
                                        <Linkedin size={20} className={styles.socialIcon} />
                                        <Mail size={20} className={styles.socialIcon} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
