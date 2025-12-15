'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Activity, ShieldCheck, Gem, UserRound, Microscope } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        icon: Sparkles,
        title: 'Αισθητική Οδοντιατρική',
        description: 'Σχεδιασμός χαμόγελου (Smile Design), όψεις πορσελάνης και λεύκανση για ένα λαμπερό αποτέλεσμα.'
    },
    {
        icon: Activity,
        title: 'Εμφυτεύματα',
        description: 'Αποκατάσταση ελλειπόντων δοντιών με τεχνητές ρίζες τιτανίου και κορυφαία προσθετικά υλικά.'
    },
    {
        icon: Gem,
        title: 'Ορθοδοντική',
        description: 'Μοντέρνες μέθοδοι ευθυγράμμισης, συμπεριλαμβανομένων των αόρατων ναρθήκων (Invisalign).'
    },
    {
        icon: ShieldCheck,
        title: 'Γενική Οδοντιατρική',
        description: 'Προληπτικός έλεγχος, σφραγίσματα και θεραπείες με υλικά τελευταίας γενιάς.'
    },
    {
        icon: UserRound,
        title: 'Παιδοδοντία',
        description: 'Εξειδικευμένη φροντίδα για τους μικρούς μας φίλους σε ένα ευχάριστο περιβάλλον.'
    },
    {
        icon: Microscope,
        title: 'Ενδοδοντία',
        description: 'Θεραπείες απονεύρωσης με μικροσκόπιο για τη διάσωση των φυσικών δοντιών.'
    }
];

export default function Services() {
    return (
        <section className={styles.section} id="services">
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        className={styles.eyebrow}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        ΕΞΕΙΔΙΚΕΥΣΗ
                    </motion.span>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Υπηρεσίες Υψηλών Προδιαγραφών
                    </motion.h2>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className={styles.iconWrapper}>
                                <service.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.description}</p>
                            <div className={styles.cardLink}>
                                Περισσότερα <ArrowRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
