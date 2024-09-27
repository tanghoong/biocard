/** @type {import('@remix-run/dev').AppConfig} */
export default {
    ignoredRouteFiles: ["**/.*"],
    serverBuildTarget: "static",
    publicPath: "./build/",
    assetsBuildDirectory: "docs/build",
};