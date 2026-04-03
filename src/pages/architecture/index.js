import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./architecture.module.css";

const architectures = [
  {
    name: "Monolith to Microservices",
    path: "/docs/architecture/monolith-to-microservices",
    desc: "Modernize legacy apps using Kubernetes, API Gateway & event-driven design",
  },
  {
    name: "GitHub Actions + EKS + GitOps",
    path: "/docs/architecture/github-actions-eks-gitops",
    desc: "End-to-end CI/CD using GitHub Actions, ArgoCD & AWS EKS",
  },
  {
    name: "High Scale SaaS Architecture",
    path: "/docs/architecture/high-scale-saas",
    desc: "Design systems to handle 20K+ concurrent users with HA",
  },
  {
    name: "Cost Optimized AWS Architecture",
    path: "/docs/architecture/cost-optimization",
    desc: "Reduce cloud cost using Spot, Karpenter & rightsizing",
  },
  {
    name: "AI Infrastructure on Kubernetes",
    path: "/docs/architecture/ai-infrastructure",
    desc: "GPU clusters, MLOps pipelines & scalable AI workloads",
  },
];

export default function ArchitecturePage() {
  return (
    <Layout title="Architecture">
      <div className={styles.heroFullWidth}>


<div className={styles.hero}>

  {/* Background Effects */}
  <div className={styles.bgGrid}></div>
  <div className={styles.glow1}></div>
  <div className={styles.glow2}></div>

  <h1 className={styles.heroTitle}>
    <span className={styles.gradientText}>Architecture</span>
  </h1>

  <p className={styles.heroSubtitle}>
    Explore reference architectures across Cloud, DevOps, Kubernetes, 
    and modern platform engineering.
  </p>

  <div className={styles.heroButtons}>
    <a href="/bala-portfolio/contact" className={styles.primaryBtn}>
      Discuss Architecture
    </a>

    <a href="/bala-portfolio/services" className={styles.secondaryBtn}>
      View Services
    </a>
  </div>

</div>



        <div className={styles.grid}>
          {architectures.map((item, index) => {
            const icons = ["🏗️", "⚙️", "🚀", "💰", "🤖"];

            return (
              <Link key={index} to={item.path} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.icon}>
                    {icons[index % icons.length]}
                  </span>
                  <div className={styles.title}>{item.name}</div>
                </div>

                <div className={styles.desc}>{item.desc}</div>

                <div className={styles.cta}>View Architecture →</div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}