import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "CycleOps",
  tagline: "Dinosaurs are cool",
  favicon: "img/cycleops.png",

  // Set the production url of your site here
  url: "https://docs.cycleops.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "docusaurus-biel",
      {
        enable: false,
        project: "o750bbke2o",
        headerTitle: "Biel.ai chatbot",
        version: "latest",
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          routeBasePath: "changelog",
          path: "changelog",
          blogTitle: "Changelog",
          blogDescription:
            "Keep up with the latest updates and improvements to CycleOps",
          blogSidebarCount: 0,
          blogSidebarTitle: "Posts",
          showReadingTime: true,
          feedOptions: {
            type: "all",
            title: "CycleOps Changelog",
            description:
              "Keep up with the latest updates and improvements to CycleOps",
            copyright: `Copyright © ${new Date().getFullYear()} CycleOps`,
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content: "cycleops, changelog, updates, features, improvements",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
    // Open Graph and Twitter card images.
    image: "img/cycleops.png",
    navbar: {
      title: "CycleOps",
      logo: {
        alt: "CycleOps",
        src: "img/cycleops.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        // {
        //   to: "/changelog",
        //   label: "Changelog",
        //   position: "left",
        // },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
