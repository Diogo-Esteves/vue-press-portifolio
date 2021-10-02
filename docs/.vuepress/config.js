module.exports = {
    lang: 'en-US',
    title: 'Diogo Portifolio!',
    description: 'An engineer that enjoy tech and math.',
    theme: 'vuepress-theme-maker',
    docsDir: 'docs',
    editLinks: true,
    search: '',
    themeConfig: {
        logo: 'https://avatars.githubusercontent.com/u/36523479?v=4',
        nav: [
            { text: '🏠 Home', link: '/vue-press-portifolio/' },
            { text: '📚 Books', link: '/vue-press-portifolio/books/'},
            { text: '🚀 Projects', link: '/vue-press-portifolio/projects/' },
            { text: '💡 Ideas', link: '/vue-press-portifolio/ideas/' },
            { text: '📽 Movies', link: '/vue-press-portifolio/movies/' },
          ],
          searchMaxSuggestions: 10,
          social: [
            {
              type: 'github',
              link: 'https://github.com/Diogo-Esteves'
            },
            {
              type: 'linkedin',
              link: 'https://www.linkedin.com/in/diogo-esteves-a4b420b7/?locale=en_US'
            }
          ],
          blog: {
            directories: [
              {
                id: 'post',
                dirname: '_post',
                path: '/vue-press-portifolio/',
                itemPermalink: '/post/:year/:month/:day/:slug.html',
                frontmatter: { title: '' },
                pagination: {
                  perPagePosts: 10,
                  prevText: '',
                  nextText: ''
                },
              }
            ],
            frontmatters: [
              {
                id: "tag",
                keys: ['tag', 'tags'],
                path: '/tags/',
                frontmatter: { title: 'Tag' },
                pagination: {
                  lengthPerPage: 10,
                  prevText: '',
                  nextText: ''
                }
              },
              {
                id: "category",
                keys: ['category', 'categories'],
                path: '/categories/',
                frontmatter: { title: 'Category' },
                pagination: {
                  lengthPerPage: 10,
                  prevText: '',
                  nextText: ''
                }
              }
            ],
            sitemap: {
              hostname: 'https://diogo-esteves.github.io/vue-press-portifolio/',
              exclude: ['/404.html']
            },
            feed: {
              canonical_base: 'https://diogo-esteves.github.io/vue-press-portifolio/',
            },
            palette: {},
            comment: {},
          }
    },
  }