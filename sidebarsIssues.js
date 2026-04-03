// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarsIssues = {
  issuesSidebar: [
    {
      type: "category",
      label: "Issues & Fixes",
      items: [
        "eks-scaling-issue/index",
        "argocd-sync-failure/index",
        "high-cost-aws/index",
        "pod-crashloop/index",
        "alb-routing-issue/index",
      ],
    },
  ],
};

module.exports = sidebarsIssues;