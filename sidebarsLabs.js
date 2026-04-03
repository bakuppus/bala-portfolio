/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarsLabs = {
  labsSidebar: [
    {
      type: 'category',
      label: 'Labs',
      collapsed: false,
      items: [
        'eks-microservice/index',
        'istio-ambient/index',
      ],
    },
  ],
};

module.exports = sidebarsLabs;