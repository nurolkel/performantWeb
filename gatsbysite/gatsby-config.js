import dotenv from 'dotenv';

dotenv.config({ path:'.env'})


export default {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Performant Web Design",
    description: 'Fast and Affordable Websites'
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-portal",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "xifljow3",
        dataset: 'production',
        watchMode: true,
        token: process.env.GATSBY_TOKEN
      },
      __key: "images",
    },
  ],
};
