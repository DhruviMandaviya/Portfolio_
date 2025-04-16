"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.js":
/*!********************************!*\
  !*** ./src/pages/_document.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n// import { Html, Head, Main, NextScript } from 'next/document'\n// import Script from 'next/script'\n// export default function Document() {\n//   return (\n//     <Html lang=\"en\">\n//       <Head />\n//       <body>\n//         <Script id='theme-switcher' strategy='beforeInteractive'>\n//           {`\n//           document.documentElement.classList.toggle(\"dark\",localStorage.theme === \"dark\" ||\n//     (!(\"theme\" in localStorage) && window.matchMedia(\"(prefers-color-scheme: dark)\").matches),\n// );\n// `}\n//         </Script>\n//         <Main />\n//         <NextScript />\n//       </body>\n//     </Html>\n//   )\n// }\n\n\nfunction Document() {\n    const setInitialTheme = `\n    (function () {\n      try {\n        const storedTheme = localStorage.getItem('theme');\n        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n        const theme = storedTheme || (prefersDark ? 'dark' : 'light');\n        if (theme === 'dark') {\n          document.documentElement.classList.add('dark');\n        } else {\n          document.documentElement.classList.remove('dark');\n        }\n      } catch (_) {}\n    })();\n  `;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"/Users/dhruvimandaviya/Downloads/Portfolio/src/pages/_document.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        dangerouslySetInnerHTML: {\n                            __html: setInitialTheme\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/dhruvimandaviya/Downloads/Portfolio/src/pages/_document.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                        fileName: \"/Users/dhruvimandaviya/Downloads/Portfolio/src/pages/_document.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                        fileName: \"/Users/dhruvimandaviya/Downloads/Portfolio/src/pages/_document.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dhruvimandaviya/Downloads/Portfolio/src/pages/_document.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dhruvimandaviya/Downloads/Portfolio/src/pages/_document.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsK0RBQStEO0FBQy9ELG1DQUFtQztBQUVuQyx1Q0FBdUM7QUFDdkMsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakIsZUFBZTtBQUNmLG9FQUFvRTtBQUNwRSxlQUFlO0FBQ2YsOEZBQThGO0FBQzlGLGlHQUFpRztBQUNqRyxLQUFLO0FBQ0wsS0FBSztBQUNMLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2QsTUFBTTtBQUNOLElBQUk7O0FBRXlEO0FBRTlDLFNBQVNJO0lBQ3RCLE1BQU1DLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7O0VBYXpCLENBQUM7SUFFRCxxQkFDRSw4REFBQ0wsK0NBQUlBOzswQkFDSCw4REFBQ0MsK0NBQUlBOzs7OzswQkFDTCw4REFBQ0s7O2tDQUVDLDhEQUFDQzt3QkFBT0MseUJBQXlCOzRCQUFFQyxRQUFRSjt3QkFBZ0I7Ozs7OztrQ0FDM0QsOERBQUNILCtDQUFJQTs7Ozs7a0NBQ0wsOERBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wZXItcG9ydGZvbGlvLXN0YXJ0ZXItY29kZS8uL3NyYy9wYWdlcy9fZG9jdW1lbnQuanM/YzUwNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCdcbi8vIGltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50KCkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxIdG1sIGxhbmc9XCJlblwiPlxuLy8gICAgICAgPEhlYWQgLz5cbi8vICAgICAgIDxib2R5PlxuLy8gICAgICAgICA8U2NyaXB0IGlkPSd0aGVtZS1zd2l0Y2hlcicgc3RyYXRlZ3k9J2JlZm9yZUludGVyYWN0aXZlJz5cbi8vICAgICAgICAgICB7YFxuLy8gICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiLGxvY2FsU3RvcmFnZS50aGVtZSA9PT0gXCJkYXJrXCIgfHxcbi8vICAgICAoIShcInRoZW1lXCIgaW4gbG9jYWxTdG9yYWdlKSAmJiB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcyksXG4vLyApO1xuLy8gYH1cbi8vICAgICAgICAgPC9TY3JpcHQ+XG4vLyAgICAgICAgIDxNYWluIC8+XG4vLyAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4vLyAgICAgICA8L2JvZHk+XG4vLyAgICAgPC9IdG1sPlxuLy8gICApXG4vLyB9XG5cbmltcG9ydCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jdW1lbnQoKSB7XG4gIGNvbnN0IHNldEluaXRpYWxUaGVtZSA9IGBcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3RvcmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgICAgICAgY29uc3QgcHJlZmVyc0RhcmsgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXM7XG4gICAgICAgIGNvbnN0IHRoZW1lID0gc3RvcmVkVGhlbWUgfHwgKHByZWZlcnNEYXJrID8gJ2RhcmsnIDogJ2xpZ2h0Jyk7XG4gICAgICAgIGlmICh0aGVtZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChfKSB7fVxuICAgIH0pKCk7XG4gIGA7XG5cbiAgcmV0dXJuIChcbiAgICA8SHRtbD5cbiAgICAgIDxIZWFkIC8+XG4gICAgICA8Ym9keT5cbiAgICAgICAgey8qIFRoaXMgc2NyaXB0IHJ1bnMgYmVmb3JlIHRoZSBSZWFjdCBhcHAgbW91bnRzICovfVxuICAgICAgICA8c2NyaXB0IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2V0SW5pdGlhbFRoZW1lIH19IC8+XG4gICAgICAgIDxNYWluIC8+XG4gICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9IdG1sPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJEb2N1bWVudCIsInNldEluaXRpYWxUaGVtZSIsImJvZHkiLCJzY3JpcHQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_document.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.js")));
module.exports = __webpack_exports__;

})();