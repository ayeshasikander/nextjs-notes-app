import React from 'react';
import styles from './Footer.module.css'; // Import the CSS module

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
            <div className={styles.links}>
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/contact">Contact Us</a>
            </div>
        </footer>
    );
};

export default Footer;
