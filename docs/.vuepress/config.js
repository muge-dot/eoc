import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: "/eoc/",

  bundler: viteBundler(),
  theme: defaultTheme(),
  
  sidebar:[
  {
    text: "常见问题",
    link: "/faq/index.md",
    collapsible: false,
  },
  {
    text: "社区",
    link: "/community.md",
    collapsible: false,
  }
    ]
})