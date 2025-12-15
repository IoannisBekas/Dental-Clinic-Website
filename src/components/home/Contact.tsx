'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <motion.div
                    className={styles.infoSide}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.eyebrow}>ΕΠΙΚΟΙΝΩΝΙΑ</span>
                    <h2 className={styles.title}>
                        Κλείστε το Ραντεβού σας
                    </h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
                        Είμαστε εδώ για να ακούσουμε τις ανάγκες σας και να σχεδιάσουμε μαζί
                        το ιδανικό πλάνο θεραπείας.
                    </p>

                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <MapPin className={styles.detailIcon} />
                            <div className={styles.detailText}>
                                <h4>Διεύθυνση</h4>
                                <p>Λεωφόρος Κηφισίας 123, Αμπελόκηποι<br />Αθήνα, 115 24</p>
                            </div>
                        </div>
                        <div className={styles.detailItem}>
                            <Phone className={styles.detailIcon} />
                            <div className={styles.detailText}>
                                <h4>Τηλέφωνο</h4>
                                <p>+30 210 1234567</p>
                            </div>
                        </div>
                        <div className={styles.detailItem}>
                            <Mail className={styles.detailIcon} />
                            <div className={styles.detailText}>
                                <h4>Email</h4>
                                <p>info@premiumdental.gr</p>
                            </div>
                        </div>
                        <div className={styles.detailItem}>
                            <Clock className={styles.detailIcon} />
                            <div className={styles.detailText}>
                                <h4>Ωράριο Λειτουργίας</h4>
                                <p>Δευ - Παρ: 09:00 - 21:00<br />Σάββατο: 10:00 - 14:00</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.formSide}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Ονοματεπώνυμο</label>
                            <input type="text" className={styles.input} placeholder="π.χ. Γιώργος Παπαδόπουλος" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Email</label>
                            <input type="email" className={styles.input} placeholder="name@example.com" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Τηλέφωνο</label>
                            <input type="tel" className={styles.input} placeholder="+30 69..." />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Μήνυμα</label>
                            <textarea className={styles.textarea} placeholder="Πώς μπορούμε να σας βοηθήσουμε;" />
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Αποστολή Μηνύματος
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
