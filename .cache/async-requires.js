// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-student-page-js": () => import("./../src/templates/studentPage.js" /* webpackChunkName: "component---src-templates-student-page-js" */),
  "component---src-templates-parent-page-js": () => import("./../src/templates/parentPage.js" /* webpackChunkName: "component---src-templates-parent-page-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-our-people-js": () => import("./../src/pages/our-people.js" /* webpackChunkName: "component---src-pages-our-people-js" */),
  "component---src-pages-question-submitted-js": () => import("./../src/pages/question-submitted.js" /* webpackChunkName: "component---src-pages-question-submitted-js" */),
  "component---src-pages-questions-js": () => import("./../src/pages/questions.js" /* webpackChunkName: "component---src-pages-questions-js" */),
  "component---src-pages-student-work-js": () => import("./../src/pages/student-work.js" /* webpackChunkName: "component---src-pages-student-work-js" */)
}

