import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function About() {
  return (
    <Layout title="About BalaSubramani K">

      <div className={styles.container}>

        {/* HERO */}
        <section className={styles.hero}>
          <h1>Balasubramani Kuppusamy</h1>
          <p className={styles.subtitle}>
            Cloud & Kubernetes Consultant • Head of DevOps • Infrastructure Engineering • Cloud Cost Optimization
          </p>
          <p className={styles.location}>
            Bengaluru, Karnataka, India
          </p>

          <div className={styles.heroActions}>
  <a href="/files/bala-resume.pdf" download className={styles.primaryBtn}>
    Download Resume
  </a>

  <a href="https://calendly.com/bala-kubelancer/30min" target="_blank" className={styles.secondaryBtn}>
    Book a Call
  </a>
</div>

        </section>

        {/* METRICS */}
        <section className={styles.metrics}>
          <div><h2>18+</h2><p>Years IT Experience</p></div>
          <div><h2>10+</h2><p>Successful Projects</p></div>
          <div><h2>30%</h2><p>Proven Cost Reduction</p></div>
          <div><h2>Multi-Cloud</h2><p>AWS • GCP • Azure</p></div>
        </section>

        {/* SUMMARY */}
        <section className={styles.section}>
          <h2>Summary</h2>
          <p>
            Your trusted advisor for Cloud Platforms AWS (Primary), GCP, and Azure with 18+ years of enterprise IT experience.
            I specialize in Cloud-Native technologies, Kubernetes, and DevOps transformation.
          </p>
        </section>

        {/* VALUE */}
        <section className={styles.section}>
          <h2>What I Help Clients Achieve</h2>
          <ul className={styles.gridList}>
            <li>Scale platforms to millions of users</li>
            <li>Reduce cloud costs without compromising performance</li>
            <li>Improve production stability & release confidence</li>
            <li>Accelerate delivery with DevOps & GitOps</li>
            <li>Build secure, compliant platforms</li>
          </ul>
        </section>

        {/* WORK STYLE */}
        <section className={styles.section}>
          <h2>How I Work</h2>
          <p>
            I collaborate with founders, product leaders, and engineering teams to translate business goals into scalable technical architectures.
            I deliver results through POCs, MVPs, and production rollouts.
          </p>
        </section>

        {/* EXPERTISE */}
        <section className={styles.section}>
          <h2>Core Expertise</h2>

          <div className={styles.expertiseGrid}>
            <div>Cloud Architecture & Strategy</div>
            <div>Cloud Migration & Modernization</div>
            <div>Kubernetes & Cloud-Native</div>
            <div>DevOps, GitOps & CI/CD</div>
            <div>DevSecOps & Security</div>
            <div>Cloud Cost Optimization</div>
            <div>Observability & Reliability</div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className={styles.section}>
          <h2>Experience</h2>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <span>2019 – Present</span>
              <p>Kubelancer – Founder & Cloud Consultant</p>
            </div>

            <div className={styles.timelineItem}>
              <span>2016 – 2017</span>
              <p>Oracle – Cloud Operations Engineer</p>
            </div>

            <div className={styles.timelineItem}>
              <span>2010 – 2016</span>
              <p>Cisco – DevOps Engineer & Linux Admin</p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
<section className={styles.section}>
  <h2 className={styles.sectionTitle}>Certifications</h2>

  {/* Credly CTA */}
  <div className={styles.credlyBanner}>
    <p>Verified certifications from Credly</p>
    <a
      href="https://www.credly.com/users/balasubramani-kuppusamy.ad3f4026/badges"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.credlyBtn}
    >
      View All Certifications →
    </a>
  </div>

  {/* Certification Cards */}
  <div className={styles.certGrid}>

    <div className={styles.certCard}>
      <h3>AWS Solutions Architect</h3>
      <p>Associate</p>
    </div>

    <div className={styles.certCard}>
      <h3>CKA</h3>
      <p>Kubernetes Administrator</p>
    </div>

    <div className={styles.certCard}>
      <h3>CKAD</h3>
      <p>Kubernetes Application Developer</p>
    </div>

    <div className={styles.certCard}>
      <h3>OpenShift Administrator</h3>
      <p>Red Hat Certified OpenShift Administrator</p>
    </div>

    <div className={styles.certCard}>
      <h3>RHCE</h3>
      <p>Red Hat Certified Engineer</p>
    </div>

    <div className={styles.certCard}>
      <h3>Rancher</h3>
      <p>Certified Operator</p>
    </div>

  </div>
</section>

        {/* CTA */}
        <section className={styles.cta}>
          <h2>Let’s Build Your Cloud Platform</h2>
          <p>Looking for a trusted cloud architect?</p>

          <a href="https://calendly.com/bala-kubelancer/30min" target="_blank">
            Schedule a Free Call →
          </a>

          <p className={styles.email}>bala@kubelancer.com</p>
        </section>

      </div>

    </Layout>
  );
}