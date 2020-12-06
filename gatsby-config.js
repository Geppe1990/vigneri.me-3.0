module.exports = {
  siteMetadata: {
    name: "vigneri.me",
    description: "Sono uno sviluppatore Web e Software specializzato in Javascript, React e Python",
    keywords: ["tech", "blog", "developer"],
    siteUrl: "https://www.vigneri.me",
    siteImage: "terminal-open-graph-image.jpg",
    profileImage: ``,
    lang: `it`,
    config: {
      sidebarWidth: 280
    }
  },
  plugins: [
    {
      resolve: "@pauliescanlon/gatsby-theme-terminal",
      options: {
        source: ["posts"]
      }
    }
  ]
};
