module.exports = {
  title: 'Hello rubytomato',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      { text: 'GitHub', link: 'https://github.com/rubytomato' }
    ],
    sidebar: {
      // fallback
      '/': [
        '',        /* / */
        'about'    /* /about.html */
      ]
    }
  },
  dest: 'docs'
}
