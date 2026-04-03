import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./issues.module.css";

const issues = [
  {
    name: "EKS Scaling Failure",
    path: "/docs/issues/eks-scaling-issue",
    desc: "Pods not scaling under load • Fixed with Karpenter tuning",
  },
  {
    name: "ArgoCD Sync Failure",
    path: "/docs/issues/argocd-sync-failure",
    desc: "GitOps sync stuck • Resolved RBAC & repo access issues",
  },
  {
    name: "High AWS Cost",
    path: "/docs/issues/high-cost-aws",
    desc: "40% cost reduction using Spot + rightsizing",
  },
  {
    name: "Pod CrashLoopBackOff",
    path: "/docs/issues/pod-crashloop",
    desc: "Application crashes due to env misconfig",
  },
  {
    name: "ALB Routing Issue",
    path: "/docs/issues/alb-routing-issue",
    desc: "Traffic not reaching services • Fixed ingress rules",
  },
];

export default function IssuesPage() {
  return (
    <Layout title="Issues & Fixes">
      <div className={styles.heroFullWidth}>
<div className={styles.hero}>

  {/* Background Effects */}
  <div className={styles.bgGrid}></div>
  <div className={styles.glow1}></div>
  <div className={styles.glow2}></div>

  <h1 className={styles.heroTitle}>
    <span className={styles.gradientText}>Issues & Fixes</span>
  </h1>

  <p className={styles.heroSubtitle}>
    Real-world DevOps and cloud challenges with proven solutions,
    troubleshooting strategies, and production fixes.
  </p>

  <div className={styles.heroButtons}>
    <a href="/bala-portfolio/contact" className={styles.primaryBtn}>
      Solve My Issue
    </a>

    <a href="/bala-portfolio/labs" className={styles.secondaryBtn}>
      Explore Labs
    </a>
  </div>

</div>

<div className={styles.grid}>
  {issues.map((item, index) => {
    const icons = ["🚨", "⚙️", "💰", "🐞", "🌐"];

    return (
      <Link key={index} to={item.path} className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.icon}>
            {icons[index % icons.length]}
          </span>
          <div className={styles.title}>{item.name}</div>
        </div>

        <div className={styles.desc}>{item.desc}</div>

        <div className={styles.cta}>View Fix →</div>
      </Link>
    );
  })}
</div>
      </div>
    </Layout>
  );
}