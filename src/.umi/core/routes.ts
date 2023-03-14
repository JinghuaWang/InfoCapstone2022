// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/johnwang/development/InfoCapstone2022/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/pages/index').default,
    "exact": true
  },
  {
    "path": "/courseInfo",
    "component": require('@/pages/courseInfo').default,
    "routes": [
      {
        "path": "/courseInfo/detail",
        "component": require('@/pages/courseInfoPage').default,
        "exact": true
      },
      {
        "path": "/courseInfo/QA",
        "component": require('@/pages/QAPage').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
