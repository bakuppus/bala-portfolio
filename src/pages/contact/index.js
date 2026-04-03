import React from 'react';
import Layout from '@theme/Layout';
import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <Layout title="Contact | BalaSubramani K">

      {/* 🔥 HERO */}
      <div className={styles.heroFullWidth}>
        <div className={styles.hero}>

          <div className={styles.bgGrid}></div>
          <div className={styles.glow1}></div>
          <div className={styles.glow2}></div>

          <h1 className={styles.heroTitle}>
            <span className={styles.gradientText}>Let’s Work Together</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Ready to build scalable cloud, Kubernetes, and AI infrastructure?  

            <br />
            Let’s discuss your project and design the right solution.
          </p>

          <div className={styles.heroButtons}>
            <a href="https://calendly.com/bala-kubelancer/30min" target="_blank" className={styles.primaryBtn}>
              Book a Call
            </a>

            <a href="mailto:bala@kubelancer.com" className={styles.secondaryBtn}>
              Email Me
            </a>
          </div>

        </div>
      </div>

      {/* 🔥 CONTACT DETAILS */}
      <div className="container">
        <div className={styles.contactGrid}>

          <a href="mailto:bala@kubelancer.com" className={styles.card}>
            <h3>Email</h3>
            <p>bala@kubelancer.com</p>
          </a>

          <a href="https://www.linkedin.com/in/bakuppus" target="_blank" className={styles.card}>
            <h3>LinkedIn</h3>
            <p>Connect professionally</p>
          </a>

          <a href="https://github.com/bakuppus" target="_blank" className={styles.card}>
            <h3>GitHub</h3>
            <p>View projects & code</p>
          </a>

          <a href="https://calendly.com/bala-kubelancer/30min" target="_blank" className={styles.card}>
            <h3>Schedule Call</h3>
            <p>Book a 30-min consultation</p>
          </a>

          <div className={styles.card}>
            <h3>Location</h3>
            <p>Bangalore, Karnataka, India</p>
          </div>

        </div>
      </div>

    </Layout>
  );
}