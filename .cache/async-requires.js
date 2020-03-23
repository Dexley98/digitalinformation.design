// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-test-post-js": () => import("./../src/templates/test-post.js" /* webpackChunkName: "component---src-templates-test-post-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-digitalcommerce-non-programatic-js": () => import("./../src/pages/digitalcommerce-nonProgramatic.js" /* webpackChunkName: "component---src-pages-digitalcommerce-non-programatic-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-interactivemedia-non-programatic-js": () => import("./../src/pages/interactivemedia-nonProgramatic.js" /* webpackChunkName: "component---src-pages-interactivemedia-non-programatic-js" */),
  "component---src-pages-massmedia-non-programatic-js": () => import("./../src/pages/massmedia-nonProgramatic.js" /* webpackChunkName: "component---src-pages-massmedia-non-programatic-js" */),
  "component---src-pages-test-js": () => import("./../src/pages/test.js" /* webpackChunkName: "component---src-pages-test-js" */),
  "component---src-pages-webapps-non-programatic-js": () => import("./../src/pages/webapps-nonProgramatic.js" /* webpackChunkName: "component---src-pages-webapps-non-programatic-js" */)
}

