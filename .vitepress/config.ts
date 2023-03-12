import { defineConfig } from 'vitepress'
import pkg from '../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端小册",
  titleTemplate: 'Custom Suffix',
  description: "A VitePress Site",
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ]
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  // base: '/vitepress/',
  cleanUrls: false,
  srcDir: './src',  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: '始于前端，但不止于前端',
    logo: '/logo.png',
    nav: nav(),
    sidebar: {
      '/source/': sidebarSourceAnalysis(),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

function nav() {
  return [
    {
      text: '源码分析',
      link: '/source/index',
      activeMatch: '/source/'
    },
    {
      text: pkg.version,
      items: [
        {
          text: 'Docs',
          link: 'https://github.com/lnden/docs'
        },
        {
          text: 'Github',
          link: 'https://github.com/lnden'
        }
      ]
    }
  ]
}

function sidebarSourceAnalysis() {
  return [
    {
      text: 'Source code analysis',
      items: [
        { text: 'ni', link: '/source/ni' },
        { text: 'ejs', link: '/source/ejs' },
      ]
    }
  ]
}