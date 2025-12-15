import Link from 'next/link';
import { Hexagon } from 'lucide-react';
import { prefixPath } from '@/utils/basePath';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brandCol}>
                        <div className={styles.logo}>
                            <Hexagon className={styles.logoIcon} strokeWidth={1.5} />
                            <span>DENTAL<span style={{ color: 'var(--secondary)' }}>CLINIC</span></span>
                        </div>
                        <p className={styles.description}>
                            Παρέχουμε υψηλού επιπέδου οδοντιατρική φροντίδα με επίκεντρο τον άνθρωπο και σύμμαχο την τεχνολογία.
                        </p>
                    </div>

                    <div className={styles.linkCol}>
                        <h4 className={styles.colTitle}>Πλοήγηση</h4>
                        <div className={styles.links}>
                            <Link href="/" className={styles.link}>Αρχική</Link>
                            <Link href="#clinic" className={styles.link}>Η Κλινική</Link>
                            <Link href="#services" className={styles.link}>Υπηρεσίες</Link>
                            <Link href="#team" className={styles.link}>Ομάδα</Link>
                        </div>
                    </div>

                    <div className={styles.linkCol}>
                        <h4 className={styles.colTitle}>Υπηρεσίες</h4>
                        <div className={styles.links}>
                            <Link href="#" className={styles.link}>Αισθητική</Link>
                            <Link href="#" className={styles.link}>Εμφυτεύματα</Link>
                            <Link href="#" className={styles.link}>Ορθοδοντική</Link>
                            <Link href="#" className={styles.link}>Λεύκανση</Link>
                        </div>
                    </div>

                    <div className={styles.linkCol}>
                        <h4 className={styles.colTitle}>Social</h4>
                        <div className={styles.links}>
                            <Link href="#" className={styles.link}>Instagram</Link>
                            <Link href="#" className={styles.link}>Facebook</Link>
                            <Link href="#" className={styles.link}>LinkedIn</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <span className={styles.copyright}>
                            © {new Date().getFullYear()} Premium Dental Clinic. All rights reserved.
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.7 }}>
                            <span className={styles.copyright} style={{ fontSize: '0.8rem' }}>
                                Created by
                            </span>
                            <a href="https://ioannisbekas.github.io/BI-Solutions-Advanced-Analytics-AI-Consulting/#/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'none' }}>
                                <img src={prefixPath("/images/bi_logo.png")} alt="BI Solutions Logo" width={20} height={20} style={{ objectFit: 'contain' }} />
                                <span className={styles.copyright} style={{ fontSize: '0.8rem', textDecoration: 'underline' }}>BI Solutions</span>
                            </a>
                        </div>
                    </div>
                    <div className={styles.legalLinks}>
                        <Link href="#" className={styles.link}>Privacy Policy</Link>
                        <Link href="#" className={styles.link}>Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
