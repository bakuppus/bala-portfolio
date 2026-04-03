import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./case-study.module.css";




const caseStudies = [
  {
    name: "360alumni",
    desc: "High-scale alumni platform • EKS • Istio • ArgoCD",
    path: "/docs/case-studies/360alumni",
  },
  {
    name: "Volumebilling",
    desc: "Billing system • Kubernetes • Cost optimization",
    path: "/docs/case-studies/volumebilling",
  },

  {
    name: "Sutter",
    desc: "Healthcare platform • CI/CD • AZURE scaling",
    path: "/docs/case-studies/sutter",
  },

  {
    name: "FuzzyGreenTomato",
    desc: "Microservices • GitOps • Observability",
    path: "/docs/case-studies/fuzzygreentomato",
  },
  {
    name: "Soltice",
    desc: "Cloud migration • Terraform • AWS infra",
    path: "/docs/case-studies/soltice",
  },
  {
    name: "Caramel",
    desc: "AWS Cloud • Terraform • Mobile app backend",
    path: "/docs/case-studies/caramel",
  },

  {
    name: "Azure Web Infrastructure",
    desc: "Azure Cloud • Active Directory• High availability • AKS scaling",
    path: "/docs/case-studies/azure-web-infrastructure",
  },

  {
    name: "WTG",
    desc: "IoT • On-Premise • Kubernetes • CI/CD • Edge computing • cloudflare",
    path: "/docs/case-studies/wtg",
  },
    {
    name: "OneAcademy",
    desc: "EdTech platform • CI/CD • AWS scaling",
    path: "/docs/case-studies/oneacademy",
  },
    {
    name: "Real Estate Marketing client",
    desc:"Real Estate platform • AWS • ECS • CI/CD • Blue-green deployment",
    path: "/docs/case-studies/afisado",
  },
  

  
  
];

export default function CaseStudyPage() {
  return (
    <Layout title="Case Studies">
      <div className={styles.heroFullWidth}>

<div className={styles.hero}>

  {/* Background Effects */}
  <div className={styles.bgGrid}></div>
  <div className={styles.glow1}></div>
  <div className={styles.glow2}></div>

  <h1 className={styles.heroTitle}>
    <span className={styles.gradientText}>Case Studies</span>
  </h1>

  <p className={styles.heroSubtitle}>
    Real-world cloud, DevOps, and Kubernetes implementations delivering
    scalable, secure, and cost-optimized platforms.
  </p>

  <div className={styles.heroButtons}>
    <a href="/contact" className={styles.primaryBtn}>
      Discuss Your Project
    </a>

    <a href="/services" className={styles.secondaryBtn}>
      View Services
    </a>
  </div>

</div>


        <div className={styles.grid}>
          {caseStudies.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={styles.card}
            >
              <h3>{item.name}</h3>
              <p>{item.desc}</p>

              <span className={styles.link}>
                View Case Study →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}