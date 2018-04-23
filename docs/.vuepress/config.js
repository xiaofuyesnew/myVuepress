module.exports = {
  title: 'Allen Wong\'s Blog',
  base: '/',
  themeConfig: {
    nav: [
      {
        text: '首页', link: '/'
      },
      {
        text: '前端技术',
        link: '/frontend/'
      },
      {
        text: '操作系统',
        items: [
          {
            text: 'Windows',
            link: '/os/'
          },
          {
            text: 'Linux',
            link: '/os/'
          },
          {
            text: 'Mac',
            link: '/os/'
          }
        ]
      },
      {
        text: '关于本站',
        link: '/about_me/'
      }
    ],
    sidebar: {
      '/about_me/': [
        '',
      ],
      '/os/': [
        '',
      ],
      '/frontend/': [
        '',
      ]
    }
  }
}