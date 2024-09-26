// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Yongqi Zhang",
  tagline: "Documentation",

  // Set the production url of your site here
  url: "https://zhang-yongqi.onrender.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "yongqi8899", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/yongqi8899",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Yongqi Zhang",
        items: [
          {
            type: "docSidebar",
            sidebarId: "portfolioSidebar",
            position: "left",
            label: "Portfolio",
          },
          {
            type: "docSidebar",
            sidebarId: "printMyStrideSidebar",
            position: "left",
            label: "PrintMyStride",
          },
          {
            type: "docSidebar",
            sidebarId: "3DMusikSidebar",
            position: "left",
            label: "3D Musik",
          },
          {
            type: "docSidebar",
            sidebarId: "mapSidebar",
            position: "left",
            label: "3D Map",
          },
          {
            type: "docSidebar",
            sidebarId: "hundfutterSidebar",
            position: "left",
            label: "Hundfutter",
          },

          {
            href: "https://github.com/yongqi8899",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Yongqi Zhang`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
