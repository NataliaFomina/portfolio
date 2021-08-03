const withImages = require('next-images');

module.exports = withImages({
  i18: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'https://nataliafomina.com',
        defaultLocale: 'en',
      },
      {
        domain: 'https://nataliafomina.ru',
        defaultLocale: 'ru',
      },
    ]
  }
})
