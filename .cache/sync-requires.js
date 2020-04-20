const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-student-page-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/templates/studentPage.js"))),
  "component---src-templates-parent-page-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/templates/parentPage.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/pages/index.js"))),
  "component---src-pages-our-people-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/pages/our-people.js"))),
  "component---src-pages-question-submitted-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/pages/question-submitted.js"))),
  "component---src-pages-questions-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/pages/questions.js"))),
  "component---src-pages-student-work-js": hot(preferDefault(require("/Users/thesqueeze/Desktop/DIFD451/digitalinformation.design/src/pages/student-work.js")))
}

