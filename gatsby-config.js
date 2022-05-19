module.exports = {
  siteMetadata: {
    title: `Wicak | Front-end Developer`,
    description: `I’m Wicak, a 22 years old Front-end Developer, from Bogor, West Java, Indonesia.`,
    author: `Wicak`,
    siteUrl: 'https://dev-wicak.netlify.app',
    social: {
      linkedin: 'adityaiwd',
      telegram: 'adwicaksono',
      github: 'adityaiwd',
      email: 'adityad.wck@gmail.com'
    },
    imageShare: `share.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `Montserrat\:200,300,400,400i,600,600i,700`,
        ],
        display: 'swap'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noreferrer'
            }
          }
        ]
      }
    },
    `gatsby-plugin-offline`
  ],
};
