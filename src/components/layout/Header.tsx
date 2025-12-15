'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Hexagon } from 'lucide-react';
import styles from './Header.module.css';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Η Κλινική', href: '#clinic' },
        { name: 'Υπηρεσίες', href: '#services' },
        { name: 'Ομάδα', href: '#team' },
        { name: 'Τεχνολογία', href: '#tech' },
        { name: 'Επικοινωνία', href: '#contact' },
    ];

    return (
        <>
            <header className={clsx(styles.header, scrolled && styles.headerScrolled)}>
                <div className={styles.container}>
                    <Link href="/" className={styles.logo}>
                        <Hexagon className={styles.logoIcon} strokeWidth={1.5} />
                        <span>DENTAL<span style={{ color: 'var(--secondary)' }}>CLINIC</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className={styles.nav}>
                        {links.map((link) => (
                            <Link key={link.name} href={link.href} className={styles.navLink}>
                                {link.name}
                            </Link>
                        ))}
                        <Link href="#contact" className={styles.ctaButton}>
                            Κλείστε Ραντεβού
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button className={styles.mobileToggle} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={styles.navLink}
                                onClick={() => setMobileOpen(false)}
                                style={{ fontSize: '1.5rem' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className={styles.ctaButton}
                            onClick={() => setMobileOpen(false)}
                        >
                            Κλείστε Ραντεβού
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
