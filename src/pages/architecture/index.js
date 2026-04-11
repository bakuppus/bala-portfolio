import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./architecture.module.css";

const architectures = [

  {
    name: "Migrating a Monolith to a Multi-Tenant Microservices Architecture on AWS",
    path: "/docs/architecture/monolith-to-microservices-multi-tenant-aws",
    desc: "Modernize legacy apps using Kubernetes, API Gateway & event-driven design",
  },


  {
    name: "Multi-Cluster Istio Service Mesh on GCP GKE",
    path: "/docs/architecture/gcp-gke-istio-multicluster-mesh",
    desc: "Deploying and managing a secure, scalable multi-cluster service mesh on Google Kubernetes Engine using Istio and GCP load balancing",
  },
  {
    name: "Deploying Applications on AWS EKS with Jenkins X",
    path: "/docs/architecture/aws-eks-jenkinsx-cicd",
    desc: "Modern CI/CD pipeline on AWS EKS using Jenkins X with advanced deployment strategies like canary releases, rollouts, and multi-environment delivery",
  },

  {
    name: "Deploying Applications on DigitalOcean Kubernetes with Jenkins CI/CD",
    path: "/docs/architecture/digitalocean-kubernetes-jenkins-cicd",
    desc: "Modern CI/CD pipeline on DigitalOcean Kubernetes using Jenkins with advanced deployment strategies like canary releases, rollouts, and multi-environment delivery",
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
    name: "Monolith to Microservices",
    path: "/docs/architecture/monolith-to-microservices",
    desc: "Modernize legacy apps using Kubernetes, API Gateway & event-driven design",
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
    <a href="/contact" className={styles.primaryBtn}>
      Discuss Architecture
    </a>

    <a href="/services" className={styles.secondaryBtn}>
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