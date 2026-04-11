// @ts-check
const path = require('path');
const sidebarsArchitecture = require('./sidebarsArchitecture');
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BalaSubramani K',
  tagline: 'Trusted Cloud, Kubernetes & AI Infrastructure Partner',
  url: 'https://bala.kubelancer.com',
  baseUrl: '/',

  trailingSlash: false,
  onBrokenLinks: 'warn',
  favicon: 'img/header-icon.png',

  organizationName: 'bakuppus',
  projectName: 'bala-portfolio',

  future: {
    experimental_faster: true,
    v4: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

presets: [
  [
    'classic',
    {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
      },

      // ✅ ENABLE BLOG HERE
      blog: {
        showReadingTime: true,
        routeBasePath: 'blog', // keeps /blog URL
      },

      theme: {
        customCss: [
          require.resolve('./src/css/custom.css'),
          require.resolve('./src/css/fonts.css'),
        ],
      },
    },
  ],
],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    navbar: {
      logo: {
        alt: 'Logo',
        src: 'img/header-icon.png',
      },


      
      items: [
          {
            to: '/case-study',
            label: 'Case Studies',
            position: 'left',
          },
        {
          to: '/services',
          label: 'Services',
          position: 'left',
        },


        {
          to: '/expertise',
          label: 'Expertise',
          position: 'left',
        },

        {
          label: 'Architecture',
          to: '/architecture',
          position: 'left',
        },

        {
          to: '/contact',
          label: 'Contact',
          position: 'right',
        },

        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },

        {
          to: '/labs',
          label: 'Labs',
          position: 'left',
        },

        {
          label: 'About',
          to: '/about',   
          position: 'left',
        },
            {
              href: 'https://github.com/bakuppus',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

footer: {
  style: 'dark',
  links: [
    {
      title: 'Services',
      items: [
        { label: 'AWS Cloud Consulting', to: '/docs/services/cloud/aws/aws-cloud-consulting' },
        { label: 'Cloud Migration', to: '/docs/services/cloud/aws/aws-cloud-migration' },
        { label: 'Kubernetes Consulting', to: '/docs/services/kubernetes/kubernetes-consulting' },
        { label: 'DevOps & GitOps', to: '/docs/services/devops/devops-consulting' },
      ],
    },

    {
      title: 'Solutions',
      items: [
        { label: 'AI Infrastructure', to: '/docs/services/ai/ai-infrastructure' },
        { label: 'Observability', to: '/docs/services/observability/observability-consulting' },
        { label: 'Service Mesh', to: '/docs/services/service-mesh/service-mesh-consulting' },
        { label: 'DevSecOps', to: '/docs/services/devsecops/devsecops-consulting' },
      ],
    },

    {
      title: 'Resources',
      items: [
        { label: 'Case Studies', to: '/case-study' },
        { label: 'Labs', to: '/labs' },
        { label: 'Blog', to: '/blog' },
      ],
    },

    {
      title: 'Company',
      items: [
        { label: 'Home', to: '/' },
        { label: 'Contact', to: '/contact' },
        {label: 'About Me', to: '/about' },
        {
          label: 'GitHub',
          href: 'https://github.com/bakuppus',
        },
      ],
    },
  ],

  copyright: `© ${new Date().getFullYear()} BalaSubramani K. All rights reserved.`,
},

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: [
        'bash',
        'yaml',
        'python',
        'javascript',
        'typescript',
        'java',
        'go',
        'sql',
        'json',
      ],
    },
  },

  plugins: [
  require.resolve('docusaurus-lunr-search'),

  () => ({
    name: 'layout-elk-alias',
    configureWebpack: () => ({
      resolve: {
        alias: {
          '@mermaid-js/layout-elk': path.resolve(
            __dirname,
            'node_modules/@mermaid-js/layout-elk/dist/mermaid-layout-elk.core.mjs'
          ),
        },
      },
    }),
  }),

  ],

};

module.exports = config;
