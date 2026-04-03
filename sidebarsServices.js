// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarsServices = {
  servicesSidebar: [
    {
      type: 'category',
      label: 'Services',
      items: [
        {
          type: 'category',
          label: 'Cloud',
          items: [
            'cloud/aws/aws-cloud-consulting',
            'cloud/aws/aws-cloud-solution-architect',
            'cloud/aws/aws-cloud-cost-optimization',
            'cloud/aws/aws-cloud-migration',
          ],
        },
        {
          type: 'category',
          label: 'DevOps',
          items: [
            'devops/devops-consulting',
            'devops/devops-architect',
            'devops/devops-engineer',
          ],
        },
        {
          type: 'category',
          label: 'GitOps Platform Solution',
          items: [
            'gitops/argocd',
            'gitops/flux',
          ],
        },
        {
          type: 'category',
          label: 'DevSecOps',
          items: [
            'devsecops/devsecops-consulting',
            'devsecops/devsecops-engineer',
          ],
        },
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            'kubernetes/kubernetes-consulting',
            'kubernetes/kubernetes-administrator',
          ],
        },
        {
          type: 'category',
          label: 'Service Mesh Expert',
          items: [
            'service-mesh/istio',
            'service-mesh/linkerd',
          ],
        },
        {
          type: 'category',
          label: 'Observability',
          items: [
            'observability/monitoring',
            'observability/logging',
            'observability/alerting',
            'observability/tracing',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebarsServices;