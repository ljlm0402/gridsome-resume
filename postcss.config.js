const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    ...(process.env.NODE_ENV === 'production' ? [
      purgecss({
        // Vue 컴포넌트와 JS 파일에서 사용되는 클래스 스캔
        content: [
          './src/**/*.vue',
          './src/**/*.js',
          './src/layouts/**/*.vue'
        ],
        
        // 제거하지 않을 클래스 (동적 클래스, 서드파티 라이브러리)
        safelist: {
          standard: [
            // 다크 테마 관련
            /^dark-theme/,
            /^theme-/,
            
            // FontAwesome 아이콘
            /^fa/,
            /^fab/,
            /^far/,
            /^fas/,
            
            // Bootstrap 유틸리티
            /^btn/,
            /^badge/,
            /^card/,
            /^navbar/,
            /^nav-/,
            /^text-/,
            /^bg-/,
            /^d-/,
            /^flex-/,
            /^justify-/,
            /^align-/,
            /^m[tblrxy]?-/,
            /^p[tblrxy]?-/,
            /^w-/,
            /^h-/,
            /^container/,
            /^row/,
            /^col/,
            
            // 커스텀 컴포넌트
            /^resume-/,
            /^timeline/,
            /^loading/,
            /^scroll-progress/,
          ],
          deep: [
            // v-cloak 등 Vue 디렉티브
            /^v-/,
          ],
          greedy: [
            // 반응형 클래스
            /^.*-(sm|md|lg|xl)$/,
          ]
        },
        
        // Vue의 동적 클래스 바인딩 지원
        defaultExtractor: content => {
          const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
          return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]/g) || []
        }
      })
    ] : [])
  ]
}
