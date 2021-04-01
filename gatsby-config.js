module.exports = {
  siteMetadata: {
    title: 'Dvaya | Sfi Gec Idukki',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Dvaya Sfi Gec Idukki',
        short_name: 'Dvaya',
        start_url: '/',
        icon: 'src/images/dvayaLogo.webp',
      },
    },
  ],
};
