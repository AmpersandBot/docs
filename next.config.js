const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  images: {
    domains: ["cdn.discordapp.com", "localhost"],
  },
  i18n: {
    locales: ["en-US", "pl"],
    defaultLocale: "en-US",
  },
  redirects: () => [
    {
      source: "/docs",
      destination: "/docs/intro",
      statusCode: 301,
    },
  ],
});
