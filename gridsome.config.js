module.exports = {
  siteName: '임경민 - Full Stack Developer',
  siteDescription: '사용자 경험을 최우선하는 Full Stack Developer. TypeScript, Node.js, React 전문. 확장 가능한 아키텍처와 클린 코드를 추구합니다.',
  siteUrl: 'https://kyungmin-resume.surge.sh',
  
  // SEO 최적화를 위한 메타 정보
  metadata: {
    author: '임경민 (Kyungmin Lim)',
    keywords: 'Full Stack Developer, TypeScript, Node.js, React, Next.js, 개발자, 프론트엔드, 백엔드, 풀스택',
    language: 'ko',
    ogTitle: '임경민 - Full Stack Developer Portfolio',
    ogDescription: '사용자 경험을 최우선하는 Full Stack Developer의 포트폴리오입니다.',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image',
    twitterCreator: '@ljlm0402',
  },
  
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
      scss: {
        sassOptions: {
          quietDeps: true, // Bootstrap 등 외부 라이브러리의 deprecation warning 숨김
          silenceDeprecations: [
            'legacy-js-api',
            'import',
            'global-builtin',
            'color-functions',
            'abs-percent'
          ]
        }
      }
    }
  },
  
  // 성능 최적화 설정
  chainWebpack: (config, { isServer }) => {
    // 클라이언트 빌드에만 splitChunks 적용
    if (!isServer) {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            enforce: true
          },
          common: {
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      })
    }
  }
}