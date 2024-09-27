import { flatRoutes } from 'remix-flat-routes';

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  routes: async (defineRoutes) => {
    return flatRoutes('routes', defineRoutes);
  },
  serverModuleFormat: "esm",
  publicPath: "/docs/build/",
  assetsBuildDirectory: "docs/build",
  serverBuildTarget: "client",
};