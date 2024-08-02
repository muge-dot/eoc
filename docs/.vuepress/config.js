import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: "/eoc/",

  bundler: viteBundler(),
  theme: defaultTheme({
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      {
        text: '社区',
        prefix: '/community.md',
        link: 'community.md',
      },
      // SidebarItem
      {
        text: '常见问题',
        prefix: '/faq/',
        link: '/faq/',
        //children: [
          // SidebarItem
          //{
          //  text: 'github',
          //  link: 'https://github.com',
          //  children: [],
          //},
          // 字符串 - 页面文件路径
          //'bar.md', // 解析为 `/foo/bar.md`
          //'/ray.md', // 解析为 `/ray.md`
        //],
      },
      // 字符串 - 页面文件路径
    ],
  }),
})