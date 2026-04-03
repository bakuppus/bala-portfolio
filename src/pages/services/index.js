import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./services.module.css";

export default function ServicesPage() {
  return (
    <Layout title="Services">

      {/* HERO */}
        {/* HERO */}
<div className={styles.heroFullWidth}>
  <div className={styles.hero}>

    {/* Background Effects */}
    <div className={styles.bgGrid}></div>
    <div className={styles.glow1}></div>
    <div className={styles.glow2}></div>

    <h1 className={styles.heroTitle}>
      <span className={styles.gradientText}>Services</span>
    </h1>

    <p className={styles.heroSubtitle}>
      Helping businesses design, scale, and optimize cloud, Kubernetes, DevOps, and AI infrastructure.
    </p>

    <div className={styles.heroButtons}>
      <a href="/bala-portfolio/contact" className={styles.primaryBtn}>
        Discuss Architecture
      </a>

      <a href="/bala-portfolio/expertise" className={styles.secondaryBtn}>
        My Expertise
      </a>
    </div>

  </div>
</div>







      {/* GRID */}
      <div className={styles.grid}>

        {/* AWS Cloud Consulting */}
        <div className={styles.card}>
          <h3>AWS Cloud Consulting</h3>
          <ul>
            <li>Architecture design & planning</li>
            <li>Secure & scalable AWS setup</li>
            <li>Production-ready infrastructure</li>
          </ul>
          <Link to="/docs/services/cloud/aws/aws-cloud-consulting" className={styles.link}>
            Know more →
          </Link>
        </div>

              {/* AI Infrastructure */} 
      <div className={styles.card}>
        <h3>AI Infrastructure</h3>
        <ul>
          <li>GPU cluster design & deployment</li>
          <li>Kubernetes for AI workloads</li>
          <li>MLOps & AIOps implementation</li>
        </ul>
        <Link to="/docs/services/ai/ai-infrastructure" className={styles.link}>
          Know more →
        </Link> 
        </div>

        {/* Cost Optimization */}
        <div className={styles.card}>
          <h3>AWS Cloud Cost Control</h3>
          <ul>
            <li>Reduce AWS cloud spend</li>
            <li>Spot & savings strategy</li>
            <li>Rightsizing workloads</li>
          </ul>
          <Link to="/docs/services/cloud/aws/aws-cloud-cost-control" className={styles.link}>
            Know more →
          </Link>
        </div>

        {/* Migration */}
        <div className={styles.card}>
          <h3>AWS Cloud Migration</h3>
          <ul>
            <li>Zero downtime migration</li>
            <li>Database & workload migration</li>
            <li>Cloud modernization strategy</li>
          </ul>
          <Link to="/docs/services/cloud/aws/aws-cloud-migration" className={styles.link}>
            Know more →
          </Link>
        </div>

        {/* Architect */}
        <div className={styles.card}>
          <h3>Cloud Solution Architect</h3>
          <ul>
            <li>Design high-scale architectures</li>
            <li>Multi-region & HA systems</li>
            <li>Best practices implementation</li>
          </ul>
          <Link to="/docs/services/cloud/aws/aws-cloud-solution-architect" className={styles.link}>
            Know more →
          </Link>
        </div>

        {/* Kubernetes */}
        <div className={styles.card}>
          <h3>Kubernetes Consulting</h3>
          <ul>
            <li>Cluster design & scaling</li>
            <li>Production-grade deployments</li>
            <li>Security & observability</li>
          </ul>
          <Link to="/docs/services/kubernetes/kubernetes-consulting" className={styles.link}>
            Know more →
          </Link>
        </div>

        {/* DevOps */}
        <div className={styles.card}>
          <h3>DevOps Consulting</h3>
          <ul>
            <li>CI/CD pipeline implementation</li>
            <li>Automation & GitOps workflows</li>
            <li>Release strategy design</li>
          </ul>
          <Link to="/docs/services/devops/devops-consulting" className={styles.link}>
            Know more →
          </Link>
        </div>

        {/* DevSecOps */}
        <div className={styles.card}>
          <h3>DevSecOps</h3>
          <ul>
            <li>Secure CI/CD pipelines</li>
            <li>Vulnerability scanning</li>
            <li>Compliance & automation</li>
          </ul>
          <Link to="/docs/services/devsecops/devsecops-consulting" className={styles.link}>
            Know more →
          </Link>
        </div>

        {/* GitOps */}
        <div className={styles.card}>
          <h3>GitOps Platform</h3>
          <ul>
            <li>ArgoCD & Flux setup</li>
            <li>Automated deployments</li>
            <li>Environment management</li>
          </ul>
          <Link to="/docs/services/gitops/gitops-platform" className={styles.link}>
            Know more →
          </Link>
        </div>

        {/* Service Mesh */}
        <div className={styles.card}>
          <h3>Service Mesh</h3>
          <ul>
            <li>Istio & Linkerd setup</li>
            <li>Service-to-service communication</li>
            <li>Traffic management & observability</li>
          </ul>
          <Link to="/docs/services/service-mesh/service-mesh-consulting" className={styles.link}>
            Know more →
          </Link>
        </div>

      {/* Observability */ }
      <div className={styles.card}>
        <h3>Observability</h3>
        <ul>
          <li>Monitoring & alerting</li>
          <li>Logging & analysis</li>
          <li>Tracing & debugging</li>
        </ul>
        <Link to="/docs/services/observability/observability-consulting" className={styles.link}>
          Know more →
        </Link>
      </div>




        {/* Custom Solutions */ }
        <div className={styles.card}>
          <h3>Custom Solutions</h3>
          <ul>
            <li>Tailored architecture design</li>
            <li>Proof of concept development</li>
            <li>Technical strategy consulting</li>
          </ul>
          <Link to="/docs/services/custom/custom-solutions" className={styles.link}>
            Know more →
          </Link> 
        </div>


        {/* Managed Services  */} 
        <div className={styles.card}>
          <h3>Managed Services</h3>
          <ul>
            <li>24/7 infrastructure monitoring</li>
            <li>Incident response & support</li>
            <li>Performance optimization</li>
          </ul>
          <Link to="/docs/services/managed/managed-services" className={styles.link}>
            Know more →
          </Link> 
        </div>


        {/* Operations & Support  */}
        <div className={styles.card}>
          <h3>Operations & Support</h3>
          <ul>
            <li>Ongoing maintenance & updates</li>
            <li>Performance tuning</li>
            <li>Security patching</li>
          </ul>
          <Link to="/docs/services/operations/operations-support" className={styles.link}>
            Know more →
          </Link> 
        </div>




      </div>

    </Layout>
  );
}