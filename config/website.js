const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Bahador Izadpanah | Software Engineer | Toronto, CA.', // Navigation and Site Title
  siteTitleAlt: 'Bahador Izadpanah | Full Stack Engineer', // Alternative Site title for SEO
  siteTitleShort: 'Bahador Izadpanah', // short_name for manifest
  siteHeadline: 'Bahador Izadpanah - Home page', // Headline for schema.org JSONLD
  siteUrl: 'https://baiz.ca', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: '9+ years of professional experience in web development, analytical and passionate about web & mobile, a knack for UX and strong problem-solving skills',
  author: 'Bahador Izadpanah', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@baiz_ca', // Twitter Username
  ogSiteName: 'baha2r', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-142979517-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
