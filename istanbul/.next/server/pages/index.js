"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./src/components/About.js
var About = __webpack_require__(9210);
// EXTERNAL MODULE: ./src/components/Blog.js + 1 modules
var Blog = __webpack_require__(3513);
// EXTERNAL MODULE: ./src/components/Contact.js
var Contact = __webpack_require__(8376);
// EXTERNAL MODULE: ./src/components/Home.js + 2 modules
var Home = __webpack_require__(6073);
// EXTERNAL MODULE: ./src/layouts/Layouts.js + 5 modules
var Layouts = __webpack_require__(9869);
;// CONCATENATED MODULE: external "aws-amplify"
const external_aws_amplify_namespaceObject = require("aws-amplify");
;// CONCATENATED MODULE: ./pages/index.js








//import awsExports from "./aws-exports";
external_aws_amplify_namespaceObject.Amplify.configure(awsExports);
const Work = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../src/components/Work"
        ]
    },
    ssr: false
});
const Index = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layouts/* default */.Z, {
        bodyCls: "dark fullscreendark",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Home/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(About/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Work, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Blog/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const pages = (Index);


/***/ }),

/***/ 8655:
/***/ ((module) => {

module.exports = require("emailjs-com");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6977:
/***/ ((module) => {

module.exports = require("react-moving-text");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152,869,239], () => (__webpack_exec__(4553)));
module.exports = __webpack_exports__;

})();