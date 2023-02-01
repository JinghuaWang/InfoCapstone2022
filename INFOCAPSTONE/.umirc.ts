import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    '@primary-color': '#a78cf2',
  },
  routes: [
    { path: '/', component: '@/pages/homePage', exact:true },
    { path: '/courseInfo', component: '@/pages/courseInfo', 
      routes: [{path: '/courseInfo/detail', component: '@/pages/courseInfoPage'},
               {path: '/courseInfo/QA', component: '@/pages/QAPage'}]
    },
  ],
  fastRefresh: {},
  antd: {},
  dva: {hmr: true},
});
