import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: "/eoc/",

  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/EdgeOfCollapse.png',

    navbar:[
      // NavbarLink
      {
        text: '常见问题',
        link: '/faq/index.md',
      },
      // NavbarGroup
      {
        text: '指南',
        prefix: '/guide/',
        children: ['install.md'],
      },
      // 字符串 - 页面文件路径
      // '/bar/README.md',
    ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    // sidebar: [
    //   {
    //     text: '社区',
    //     link: 'community.md',
    //   },
      // SidebarItem
      // {
      //   text: '常见问题',
      //   link: '/faq/',
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
      // },
      // 字符串 - 页面文件路径
    // ],
  }),
})