module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "brandonngo",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-breakpoints",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
 // change breakpoint md to 800px width then use bp.md instead