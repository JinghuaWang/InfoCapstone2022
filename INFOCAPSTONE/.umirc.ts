import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    '@primary-color': '#a78cf2',
  },
  routes: [
    { path: '/', component: '@/pages/index', exact:true },
    { path: '/courseInfo', component: '@/layouts/index', 
      routes: [{path: '/courseInfo/detail', component: '@/pages/courseInfoPage/index'},
               {path: '/courseInfo/QA', component: '@/pages/QAPage/QAPage.tsx'}]
    },
  ],
  fastRefresh: {},
  antd: {},
  dva: {hmr: true},
});
