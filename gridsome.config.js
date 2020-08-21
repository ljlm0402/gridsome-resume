module.exports = {
  siteName: '개발자 임경민입니다.',
  siteDescription: '개발자 임경민을 소개합니다.',
  siteUrl: 'https://kyungmin-resume.surge.sh',
  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-11'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}