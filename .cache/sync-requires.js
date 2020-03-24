const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-test-post-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/templates/test-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/pages/404.js"))),
  "component---src-pages-digitalcommerce-non-programatic-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/pages/digitalcommerce-nonProgramatic.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/pages/index.js"))),
  "component---src-pages-interactivemedia-non-programatic-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/pages/interactivemedia-nonProgramatic.js"))),
  "component---src-pages-massmedia-non-programatic-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/pages/massmedia-nonProgramatic.js"))),
  "component---src-pages-test-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/pages/test.js"))),
  "component---src-pages-webapps-non-programatic-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/pages/webapps-nonProgramatic.js")))
}

