import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "../labs/labs.module.css";
import styles from "../architecture/architecture.module.css";

const labs = [
  {
    name: "Running Microservice in AWS EKS",
    path: "/docs/labs/eks-microservice",
    desc: "Deploy and scale microservices in Kubernetes using AWS EKS",
  },
  {
    name: "Istio Ambient Mode Demo",
    path: "/docs/labs/istio-ambient",
    desc: "Service mesh without sidecars using Istio Ambient mode",
  },
];

export default function LabsPage() {
  return (
    <Layout title="Labs">
      <div className={styles.heroFullWidth}>

<div className={styles.hero}>

  {/* Background Effects */}
  <div className={styles.bgGrid}></div>
  <div className={styles.glow1}></div>
  <div className={styles.glow2}></div>

  <h1 className={styles.heroTitle}>
    <span className={styles.gradientText}>Poc / Labs</span>
  </h1>

  <p className={styles.heroSubtitle}>
    Hands-on labs to learn, build, and deploy real-world cloud, Kubernetes,
    and DevOps solutions with production-ready practices.
  </p>

  <div className={styles.heroButtons}>
    <a href="/bala-portfolio/contact" className={styles.primaryBtn}>
      Build With Me
    </a>

    <a href="/bala-portfolio/architecture" className={styles.secondaryBtn}>
      View Architectures
    </a>
  </div>

</div>


        <div className={styles.grid}>
          {labs.map((item, index) => {
            const icons = ["🧪", "☸️", "⚙️", "🚀", "🔐"];

            return (
              <Link key={index} to={item.path} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.icon}>
                    {icons[index % icons.length]}
                  </span>
                  <div className={styles.title}>{item.name}</div>
                </div>

                <div className={styles.desc}>{item.desc}</div>

                <div className={styles.cta}>Start Lab →</div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}