import React from 'react';
import Link from '@docusaurus/Link';
import styles from './TechMarquee.module.css';

// Organized by Data Stack categories - matching the actual project structure
const technologies = [
  {
    name: "Cloud Architecture",
    category: "Design & Scaling",
    gradient: "linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)",
    icon: <span>☁️</span>
  },
  {
    name: "Kubernetes Consulting",
    category: "EKS / GKE / AKS / OpenShift",
    gradient: "linear-gradient(135deg, #326CE5 0%, #00BCD4 100%)",
    icon: <span>⚙️</span>
  },
  {
    name: "DevOps & CI/CD",
    category: "Automation",
    gradient: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
    icon: <span>🚀</span>
  },
  {
    name: "Cloud Migration",
    category: "Modernization",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
    icon: <span>🔄</span>
  },

  {
    name: "Infrastructure as Code",
    category: "Terraform / OpenTofu",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
    icon: <span>📦</span>
  },
  {
    name: "DevSecOps",
    category: "Security & Compliance",
    gradient: "linear-gradient(135deg, #DC2626 0%, #F87171 100%)",
    icon: <span>🔐</span>
  },
  {
    name: "Observability",
    category: "Monitoring & Logging",
    gradient: "linear-gradient(135deg, #0891B2 0%, #22D3EE 100%)",
    icon: <span>📊</span>
  },
  {
    name: "Cost Optimization",
    category: "FinOps",
    gradient: "linear-gradient(135deg, #16A34A 0%, #4ADE80 100%)",
    icon: <span>💰</span>
  },

  {
    name: "AI Infrastructure",
    category: "AIOPs & MLOps & GPU",
    gradient: "linear-gradient(135deg, #DB2777 0%, #F472B6 100%)",
    icon: <span>🤖</span>
  },
  {
    name: "High Availability",
    category: "Resilience",
    gradient: "linear-gradient(135deg, #EA580C 0%, #FDBA74 100%)",
    icon: <span>🛡️</span>
  },
  {
    name: "Performance Optimization",
    category: "Scaling",
    gradient: "linear-gradient(135deg, #9333EA 0%, #C084FC 100%)",
    icon: <span>⚡</span>
  },
  {
    name: "Consulting & Support",
    category: "Advisory",
    gradient: "linear-gradient(135deg, #1F2937 0%, #6B7280 100%)",
    icon: <span>💼</span>
  }
];



export default function TechMarquee() {
  return (
    <div className={styles.techShowcase}>
      <div className={styles.showcaseHeader}>
        <h2 className={styles.showcaseTitle}>My Expertise Spans</h2>
        <p className={styles.showcaseSubtitle}>
          Reliable, scalable infrastructure for mission-critical applications
        </p>
      </div>

      

      <div className={styles.techGrid}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.techCard}>
            <div className={styles.iconWrapper} style={{ background: tech.gradient }}>
              {tech.icon}
            </div>
            <div className={styles.techInfo}>
              <h3 className={styles.techName}>{tech.name}</h3>
              <span className={styles.techCategory}>{tech.category}</span>
            </div>
          </div>
        ))}
      </div>


  {/* 🔥 Separate CTA Section */}
<div className={styles.ctaSection}>
  
  <p className={styles.ctaText}>
    Explore how I can help you build, scale, and optimize your infrastructure.
  </p>

  <div className={styles.ctaWrapper}>
    <a href="/services" className={styles.primaryBtn}>
      What I Do →
    </a>

    <a href="/expertise" className={styles.secondaryBtn}>
      My Expertise →
    </a>
  </div>

</div>


    </div>
  );
}
