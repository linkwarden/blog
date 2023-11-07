// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Linkwarden",
  tagline: "Blog",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://linkwarden.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "linkwarden", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "deployment",

  scripts: [
    {
      src: "https://linkwarden-meta.xyz/js/script.js",
      async: true,
      defer: true,
      "data-domain": "blog.linkwarden.app",
    },
  ],

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          // sidebarPath: require.resolve("./sidebars.js"),
          blogSidebarTitle: "All our posts",
          blogSidebarCount: "ALL",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/linkwarden/blog/blob/main/",
        },
        docs: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo.png",
      navbar: {
        title: "Linkwarden",
        logo: {
          alt: "Linkwarden Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "/",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://github.com/linkwarden",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Linkwarden.`,
        links: [
          {
            title: "Explore",
            items: [
              {
                label: "Our Website",
                to: "https://linkwarden.app",
              },
              {
                label: "Read our blog",
                to: "https://blog.linkwarden.app",
              },
              {
                label: "Our public roadmap",
                to: "https://github.com/orgs/linkwarden/projects/1",
              },
              {
                label: "Study the documentation",
                to: "https://docs.linkwarden.app",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/linkwarden",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/LinkwardenHQ",
              },
              {
                label: "Mastodon",
                href: "https://fosstodon.org/@linkwarden",
              },
              {
                label: "Discord",
                href: "https://discord.gg/CtuYV47nuJ",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
