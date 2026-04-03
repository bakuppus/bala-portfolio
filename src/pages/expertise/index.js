import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './expertise.module.css';



const sections = [
  {
    title: 'Cloud Architecture',
    color: 'linear-gradient(135deg, #6B73FF, #000DFF)',
    items: [
      { name: 'Landing Zone', desc: 'Multi-account AWS setup', link: '#' },
      { name: 'High Availability', desc: 'Multi-AZ / Multi-region design', link: '#' },
      { name: 'Reliability', desc: 'Fault-tolerant architecture', link: '#' },
      { name: 'Disaster Recovery', desc: 'Backup & DR strategies', link: '#' },
      { name: 'Multi-Region', desc: 'Global architecture design', link: '#' },
    ],
  },
  {
    title: 'DevOps CI/CD',
    color: 'linear-gradient(135deg, #00C9FF, #92FE9D)',
    items: [
      { name: 'GitHub Actions', desc: 'CI/CD pipelines using GitHub', link: '#' },
      { name: 'GitLab CI/CD', desc: 'End-to-end DevOps pipelines', link: '#' },
      { name: 'Jenkins', desc: 'Enterprise automation server', link: '#' },
      { name: 'Pipeline Design', desc: 'Scalable CI/CD architecture', link: '#' },
    ],
  },
  {
    title: 'DevSecOps',
    color: 'linear-gradient(135deg, #43E97B, #38F9D7)',
    items: [
      { name: 'Testing', desc: 'Automated security testing', link: '#' },
      { name: 'Scanning', desc: 'SAST/DAST & vulnerability scan', link: '#' },
      { name: 'Container Security', desc: 'Image scanning & runtime security', link: '#' },
      { name: 'Compliance', desc: 'Policy & governance automation', link: '#' },
    ],
  },
  {
    title: 'GitOps',
    color: 'linear-gradient(135deg, #FF7EB3, #FF758C)',
    items: [
      { name: 'ArgoCD', desc: 'GitOps continuous delivery', link: '#' },
      { name: 'Flux', desc: 'Kubernetes GitOps operator', link: '#' },
      { name: 'Multi-Cluster GitOps', desc: 'Manage multiple clusters', link: '#' },
    ],
  },
  {
    title: 'Kubernetes Platforms',
    color: 'linear-gradient(135deg, #667EEA, #764BA2)',
    items: [
      { name: 'AWS EKS', desc: 'Managed Kubernetes on AWS', link: '#' },
      { name: 'Azure AKS', desc: 'Managed Kubernetes on Azure', link: '#' },
      { name: 'GCP GKE', desc: 'Managed Kubernetes on GCP', link: '#' },
      { name: 'On-Prem Kubernetes', desc: 'Bare-metal / Rancher setups', link: '#' },
    ],
  },
  {
    title: 'Microservices Architecture',
    color: 'linear-gradient(135deg, #F7971E, #FFD200)',
    items: [
      { name: 'API Gateway', desc: 'Routing & API management', link: '#' },
      { name: 'Service Communication', desc: 'Async & sync patterns', link: '#' },
      { name: 'Event-Driven', desc: 'Kafka / RabbitMQ systems', link: '#' },
    ],
  },
  {
    title: 'Service Mesh',
    color: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    items: [
      { name: 'Istio Architecture', desc: 'Traffic & security control', link: '#' },
      { name: 'Linkerd Architecture', desc: 'Lightweight service mesh', link: '#' },
      { name: 'mTLS Setup', desc: 'Secure service communication', link: '#' },
    ],
  },
  {
    title: 'Observability',
    color: 'linear-gradient(135deg, #30cfd0, #330867)',
    items: [
      { name: 'Monitoring', desc: 'Metrics & dashboards', link: '#' },
      { name: 'Logging', desc: 'Centralized logs', link: '#' },
      { name: 'Tracing', desc: 'Distributed tracing', link: '#' },
      { name: 'Alerting', desc: 'Incident notifications', link: '#' },
    ],
  },
  {
    title: 'Data & Storage',
    color: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    items: [
      { name: 'Database Architecture', desc: 'RDS / NoSQL design', link: '#' },
      { name: 'Caching', desc: 'Redis / Elasticache', link: '#' },
      { name: 'Data Pipelines', desc: 'ETL / streaming pipelines', link: '#' },
    ],
  },
  {
    title: 'Networking',
    color: 'linear-gradient(135deg, #43cea2, #185a9d)',
    items: [
      { name: 'VPC Design', desc: 'Secure network architecture', link: '#' },
      { name: 'Private Networking', desc: 'Peering / endpoints', link: '#' },
      { name: 'Load Balancing', desc: 'ALB / NLB / Ingress', link: '#' },
    ],
  },
];

export default function Expertise() {
  const [hovered, setHovered] = useState(null);

  return (
    <Layout title="Expertise | BalaSubramani K">
      <main>

        {/* HERO */}
<div className={styles.heroFullWidth}>
  <div className={styles.hero}>

    {/* Background Effects */}
    <div className={styles.bgGrid}></div>
    <div className={styles.glow1}></div>
    <div className={styles.glow2}></div>

    <h1 className={styles.heroTitle}>
      <span className={styles.gradientText}>Expertise</span>
    </h1>

    <p className={styles.heroSubtitle}>
      Helping businesses design, scale, and optimize cloud, Kubernetes, DevOps, and AI infrastructure.
    </p>

    <div className={styles.heroButtons}>
      <a href="/contact" className={styles.primaryBtn}>
        Discuss Architecture
      </a>

      <a href="/services" className={styles.secondaryBtn}>
        View Services
      </a>
    </div>

  </div>
</div>

        {/* GRID */}
<div className={styles.grid}>
  {sections.map((section, i) => (
    <div key={i} className={styles.card}>

      <div className={styles.cardHeader}>
        <div
          className={styles.iconBox}
          style={{ background: section.color }} // keep dynamic
        />
        <h2>{section.title}</h2>
      </div>

              {section.items.map((item, idx) => {
                const key = `${i}-${idx}`;
                const isHover = hovered === key;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHovered(key)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      marginBottom: '12px',
                      background: isHover ? '#eef2ff' : '#f9fafb',
                      transform: isHover ? 'translateY(-2px)' : 'translateY(0)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600 }}>{item.name}</div>
                      <div style={{ fontSize: '13px', color: '#6b7280' }}>{item.desc}</div>
                    </div>
                    <div style={{ fontSize: '18px', color: isHover ? '#4f46e5' : '#6366f1' }}>→</div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

      </main>
    </Layout>
  );
}
