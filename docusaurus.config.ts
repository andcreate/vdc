import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import path from "path";

// import tailwindPlugin from "./plugins/tailwind-config.cjs"; // add this

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "#StudioLouie Documents",
  tagline: "アセットの使い方や小ネタ",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://andcreate.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/vdc",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "andcreate", // Usually your GitHub org/user name.
  projectName: "vdc", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "ko", "en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  // themes: ["@docusaurus/theme-search-algolia"],

  themeConfig: {
    // algolia: {
    //   appId: "testtest",
    //   apiKey: "testtes",
    //   indexName: "test",
    //   contextualSearch: true,
    // },

    docs: {
      sidebar: {
        // hideable: false,
        autoCollapseCategories: true,
      },
    },

    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "#StudioLouie",
      logo: {
        alt: "#StudioLouie Logo",
        src: "img/svg-dog.svg",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        {
          type: "docSidebar",
          sidebarId: "studioLouieSidebar",
          position: "left",
          label: "Documents",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          type: "localeDropdown",
          position: "right",
        },
        // {
        //   href: "https://andcreate.github.io/",
        //   label: "#andCreate",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "#StudioLouie",
          items: [
            {
              label: "Document",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "Booth - #StudioLouie",
              href: "https://andcreate.booth.pm/",
            },
            {
              label: "VR Portfolio - ROGIX Activity",
              href: "https://virtual.andcre.com/",
            },
            {
              label: "X - ROGIX_VR",
              href: "https://x.com/ROGIX_VR",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "andCreate",
              href: "https://www.andcre.com/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} #StudioLouie. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [path.resolve(__dirname, "./plugins/tailwind-config.cjs")],
};

export default config;
