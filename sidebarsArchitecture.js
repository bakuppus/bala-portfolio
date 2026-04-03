/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarsArchitecture = {
  architectureSidebar: [
    {
      type: 'category',
      label: 'Architecture',
      collapsed: false,
      items: [
        'index',
        'monolith-to-microservices/index',
        'github-actions-eks-gitops/index',
      ],
    },
  ],
};

module.exports = sidebarsArchitecture;

