require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Selva Verde Website",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: process.env.SNIPCART_TOKEN,
        autopop: true
      }
    },
    'gatsby-plugin-fontawesome-css',
    {
      resolve: `gatsby-source-google-calendar`,
      options: {
        // options to retrieve the next 10 upcoming events
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
        calendarIds: [
          '783oo0gr304hacppllb16jsh38@group.calendar.google.com',
        ],
      }
    },
  ],
};
