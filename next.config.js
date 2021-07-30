const withImages = require('next-images');

module.exports = withImages({
  i18: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'nataliafomina.com',
        defaultLocale: 'en',
      },
      {
        domain: 'nataliafomina.ru',
        defaultLocale: 'ru',
      },
    ]
  }
})
