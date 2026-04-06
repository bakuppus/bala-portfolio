---
title: WTG Case Study
---

<div className="caseStudy">

<div className="section">

<h1 className="heroTitle">WTG</h1>

<p className="heroSubtitle">
End-to-end platform engineering transformation with Kubernetes, GitOps, and on-premise infrastructure modernization.
</p>

</div>

---

<div className="section">

<h2 className="sectionHeading">Project Overview</h2>

<p className="sectionText">
WTG required modernization of its legacy container platform and infrastructure. The solution involved migrating from Docker Swarm to Kubernetes, designing a multi-cluster on-premise architecture, and implementing a full DevOps platform including CI/CD, GitOps, observability, and security.
</p>

</div>

---

<div className="section">

<h2 className="sectionHeading">Industry</h2>

<div className="gridList">
  <div className="gridItem">Enterprise Platform Engineering</div>
  <div className="gridItem">On-Prem Infrastructure</div>
  <div className="gridItem">Cloud-Native Transformation</div>
  <div className="gridItem">DevOps & GitOps</div>
</div>

</div>

---

<div className="section">

<h2 className="sectionHeading">Context and Challenges</h2>

<div className="accentList">
  <div>Legacy Docker Swarm architecture limiting scalability</div>
  <div>Lack of centralized CI/CD and deployment strategy</div>
  <div>No standardized Kubernetes platform</div>
  <div>Limited observability and monitoring</div>
  <div>Security and policy enforcement gaps</div>
</div>

</div>

---

<div className="section">

<h2 className="sectionHeading">Client Requirements</h2>

<div className="twoCol">
  <div>
    <p>Modern Kubernetes-based platform</p>
    <p>Multi-environment clusters (Dev, QA, UAT, Prod)</p>
    <p>Automated CI/CD and GitOps workflows</p>
  </div>
  <div>
    <p>On-premise infrastructure design</p>
    <p>Observability and monitoring stack</p>
    <p>Security and policy enforcement</p>
  </div>
</div>

</div>

---

<div className="section">

<h2 className="sectionHeading">My Role</h2>

<div className="highlightCard">
Architected and implemented a complete on-premise Kubernetes platform, including infrastructure design, CI/CD pipelines, GitOps deployment model, and security frameworks.
</div>

</div>

---

<div className="section">

<h2 className="sectionHeading">Strategy and Solution</h2>

<div className="timeline">

  <div>
    <span>01</span>
    <p>Migrated workloads from Docker Swarm to Kubernetes (RKE2)</p>
  </div>

  <div>
    <span>02</span>
    <p>Designed multi-cluster architecture using Rancher</p>
  </div>

  <div>
    <span>03</span>
    <p>Implemented CI/CD using GitHub Actions</p>
  </div>

  <div>
    <span>04</span>
    <p>Enabled GitOps deployment using ArgoCD</p>
  </div>

  <div>
    <span>05</span>
    <p>Integrated observability, security, and storage solutions</p>
  </div>

</div>

</div>

---

<div className="section">

<h2 className="sectionHeading">Architecture Highlights</h2>

<div className="gridList">
  <div className="gridItem">Rancher RKE2 multi-cluster Kubernetes setup</div>
  <div className="gridItem">Proxmox-based virtualization infrastructure</div>
  <div className="gridItem">HAProxy and Cloudflare for traffic management</div>
  <div className="gridItem">MetalLB for load balancing</div>
  <div className="gridItem">Traefik as ingress controller</div>
  <div className="gridItem">Tailscale VPN for secure connectivity</div>
</div>

</div>

---

<div className="section">

<h2 className="sectionHeading">Platform Implementation</h2>

<div className="gridList">
  <div className="gridItem">CI/CD pipelines using GitHub Actions</div>
  <div className="gridItem">ArgoCD for GitOps continuous delivery</div>
  <div className="gridItem">Prometheus & Grafana for monitoring</div>
  <div className="gridItem">ELK / Loki stack for logging</div>
  <div className="gridItem">Jaeger & Kiali for tracing</div>
  <div className="gridItem">Keycloak for identity and access management</div>
</div>

</div>

---

<div className="section">

<h2 className="sectionHeading">Security and Governance</h2>

<div className="gridList">
  <div className="gridItem">Keycloak for IAM</div>
  <div className="gridItem">Trivy for container security scanning</div>
  <div className="gridItem">OPA Gatekeeper for policy enforcement</div>
  <div className="gridItem">Vault for secrets management</div>
</div>

</div>

---

<div className="section">

<h2 className="sectionHeading">Storage and Data</h2>

<div className="gridList">
  <div className="gridItem">Rook (Ceph) for distributed storage</div>
  <div className="gridItem">Longhorn for block storage</div>
  <div className="gridItem">Backup and restore strategies implemented</div>
</div>

</div>

---

<div className="section">

<h2 className="sectionHeading">Architecture</h2>

<div className="imageContainer">
  <img src="/bala-portfolio/img/case-studies/wtg/architecture.png" />
  <p className="imageCaption">
    On-prem Kubernetes platform with Rancher, GitOps, service mesh, and observability stack.
  </p>
</div>

</div>

---

<div className="section">

<h2 className="sectionHeading">Technologies and Tools</h2>

<div className="techGrid">

  <div className="techCard">
    <h3>Infrastructure</h3>
    <ul>
      <li>Proxmox</li>
      <li>On-Prem Servers</li>
    </ul>
  </div>

  <div className="techCard">
    <h3>Container Platform</h3>
    <ul>
      <li>Kubernetes (RKE2)</li>
      <li>Rancher</li>
    </ul>
  </div>

  <div className="techCard">
    <h3>CI/CD & GitOps</h3>
    <ul>
      <li>GitHub Actions</li>
      <li>ArgoCD</li>
    </ul>
  </div>

  <div className="techCard">
    <h3>Networking</h3>
    <ul>
      <li>HAProxy</li>
      <li>Cloudflare</li>
      <li>MetalLB</li>
      <li>Traefik</li>
    </ul>
  </div>

  <div className="techCard">
    <h3>Security</h3>
    <ul>
      <li>Keycloak</li>
      <li>Vault</li>
      <li>OPA Gatekeeper</li>
      <li>Trivy</li>
    </ul>
  </div>

  <div className="techCard">
    <h3>Observability</h3>
    <ul>
      <li>Prometheus</li>
      <li>Grafana</li>
      <li>ELK / Loki</li>
      <li>Jaeger</li>
    </ul>
  </div>

</div>

</div>

---

<div className="section">

<h2 className="sectionHeading">Highlights</h2>

<div className="gridList">
  <div className="gridItem">Migrated from Docker Swarm to Kubernetes</div>
  <div className="gridItem">Built multi-cluster on-prem platform</div>
  <div className="gridItem">Implemented GitOps deployment model</div>
  <div className="gridItem">Full observability and monitoring stack</div>
  <div className="gridItem">Enterprise-grade security and governance</div>
</div>

</div>

---

<div className="section">

<h2 className="sectionHeading">Outcome</h2>

<div className="gridList">
  <div className="gridItem">Modernized infrastructure with Kubernetes</div>
  <div className="gridItem">Improved scalability and reliability</div>
  <div className="gridItem">Reduced deployment complexity</div>
  <div className="gridItem">Enabled platform-level automation</div>
</div>

</div>

---

<div className="section">

<h2 className="sectionHeading">Benefits</h2>

<div className="twoCol">

  <div>
    <p><strong>Business</strong></p>
    <p>Faster delivery of applications</p>
    <p>Reliable and scalable infrastructure</p>
    <p>Reduced operational risks</p>
  </div>

  <div>
    <p><strong>Technical</strong></p>
    <p>Cloud-native platform architecture</p>
    <p>Automated CI/CD and GitOps workflows</p>
    <p>Secure and observable infrastructure</p>
  </div>

</div>

</div>

</div>