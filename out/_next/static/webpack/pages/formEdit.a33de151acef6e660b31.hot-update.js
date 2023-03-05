webpackHotUpdate_N_E('pages/formEdit', {
  /***/ './src/components/YubiForm/antdComponents.ts':
    /*!***************************************************!*\
  !*** ./src/components/YubiForm/antdComponents.ts ***!
  \***************************************************/
    /*! exports provided: componetMap, getAntdComponent, useAntdComponent, useAntdComponentByFormSchema */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componetMap", function() { return componetMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAntdComponent", function() { return getAntdComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAntdComponent", function() { return useAntdComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAntdComponentByFormSchema", function() { return useAntdComponentByFormSchema; });\n/* harmony import */ var _Users_yubi_study_yubi_react_form_joy_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");\n/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");\n/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");\n/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_yubi_study_yubi_react_form_joy_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar componetMap = {\n  Input: antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a,\n  "Input.Password": antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Password,\n  "Input.Search": antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Search,\n  "Input.TextArea": antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.TextArea,\n  Select: antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a,\n  Radio: antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a.Group\n};\nvar getAntdComponent = function getAntdComponent(componentName, deriveComponentName) {\n  if (deriveComponentName) {\n    return componetMap[deriveComponentName];\n  }\n\n  return componetMap[componentName];\n};\nvar useAntdComponent = function useAntdComponent(content) {\n  return content.map(function (item) {\n    return _objectSpread(_objectSpread({}, item), {}, {\n      renderComponent: getAntdComponent(item.component, item.deriveComponent)\n    });\n  });\n};\nvar useAntdComponentByFormSchema = function useAntdComponentByFormSchema(schema) {\n  _s();\n\n  var newSchema = {\n    config: _objectSpread({}, schema === null || schema === void 0 ? void 0 : schema.config),\n    content: useAntdComponent(schema.content)\n  };\n  return newSchema;\n};\n\n_s(useAntdComponentByFormSchema, "2Fq2zZkVXDdDbUSj/hm81ueK8Y0=", false, function () {\n  return [useAntdComponent];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvWXViaUZvcm0vYW50ZENvbXBvbmVudHMudHM/OTQ4MSJdLCJuYW1lcyI6WyJjb21wb25ldE1hcCIsIklucHV0IiwiUGFzc3dvcmQiLCJTZWFyY2giLCJUZXh0QXJlYSIsIlNlbGVjdCIsIlJhZGlvIiwiR3JvdXAiLCJnZXRBbnRkQ29tcG9uZW50IiwiY29tcG9uZW50TmFtZSIsImRlcml2ZUNvbXBvbmVudE5hbWUiLCJ1c2VBbnRkQ29tcG9uZW50IiwiY29udGVudCIsIm1hcCIsIml0ZW0iLCJyZW5kZXJDb21wb25lbnQiLCJjb21wb25lbnQiLCJkZXJpdmVDb21wb25lbnQiLCJ1c2VBbnRkQ29tcG9uZW50QnlGb3JtU2NoZW1hIiwic2NoZW1hIiwibmV3U2NoZW1hIiwiY29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdPLElBQU1BLFdBQVcsR0FBRztBQUN6QkMsT0FBSyx1REFEb0I7QUFFekIsb0JBQWtCLHNEQUFNQyxRQUZDO0FBR3pCLGtCQUFnQixzREFBTUMsTUFIRztBQUl6QixvQkFBa0Isc0RBQU1DLFFBSkM7QUFLekJDLFFBQU0sd0RBTG1CO0FBTXpCQyxPQUFLLEVBQUUsc0RBQU1DO0FBTlksQ0FBcEI7QUFXQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLGFBQUQsRUFBd0JDLG1CQUF4QixFQUFvRTtBQUNsRyxNQUFJQSxtQkFBSixFQUF5QjtBQUN2QixXQUFPVixXQUFXLENBQUNVLG1CQUFELENBQWxCO0FBQ0Q7O0FBQ0QsU0FBT1YsV0FBVyxDQUFDUyxhQUFELENBQWxCO0FBQ0QsQ0FMTTtBQU9BLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsT0FBRDtBQUFBLFNBQTRCQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFDQyxJQUFEO0FBQUEsMkNBQ25FQSxJQURtRTtBQUV0RUMscUJBQWUsRUFBRVAsZ0JBQWdCLENBQUNNLElBQUksQ0FBQ0UsU0FBTixFQUFpQkYsSUFBSSxDQUFDRyxlQUF0QjtBQUZxQztBQUFBLEdBQVosQ0FBNUI7QUFBQSxDQUF6QjtBQUtBLElBQU1DLDRCQUE0QixHQUFHLFNBQS9CQSw0QkFBK0IsQ0FBQ0MsTUFBRCxFQUF5QjtBQUFBOztBQUNuRSxNQUFNQyxTQUFTLEdBQUc7QUFDaEJDLFVBQU0sb0JBQ0RGLE1BREMsYUFDREEsTUFEQyx1QkFDREEsTUFBTSxDQUFFRSxNQURQLENBRFU7QUFJaEJULFdBQU8sRUFBRUQsZ0JBQWdCLENBQUNRLE1BQU0sQ0FBQ1AsT0FBUjtBQUpULEdBQWxCO0FBTUEsU0FBT1EsU0FBUDtBQUNELENBUk07O0dBQU1GLDRCO1VBS0FQLGdCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvWXViaUZvcm0vYW50ZENvbXBvbmVudHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgU2VsZWN0LCBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBJRm9ybVNjaGVtYSwgSVNjaGVtYUl0ZW0gfSBmcm9tIFwiLi90eXBlXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wb25ldE1hcCA9IHtcbiAgSW5wdXQsXG4gIFwiSW5wdXQuUGFzc3dvcmRcIjogSW5wdXQuUGFzc3dvcmQsXG4gIFwiSW5wdXQuU2VhcmNoXCI6IElucHV0LlNlYXJjaCxcbiAgXCJJbnB1dC5UZXh0QXJlYVwiOiBJbnB1dC5UZXh0QXJlYSxcbiAgU2VsZWN0LFxuICBSYWRpbzogUmFkaW8uR3JvdXAsXG59O1xuXG5leHBvcnQgdHlwZSBUQ29tcG9uZW50VHlwZSA9ICdJbnB1dCcgfCAnU2VsZWN0JyB8ICdSYWRpbycgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBnZXRBbnRkQ29tcG9uZW50ID0gKGNvbXBvbmVudE5hbWU6IHN0cmluZywgZGVyaXZlQ29tcG9uZW50TmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG4gIGlmIChkZXJpdmVDb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIGNvbXBvbmV0TWFwW2Rlcml2ZUNvbXBvbmVudE5hbWVdO1xuICB9XG4gIHJldHVybiBjb21wb25ldE1hcFtjb21wb25lbnROYW1lXTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUFudGRDb21wb25lbnQgPSAoY29udGVudDogSVNjaGVtYUl0ZW1bXSkgPT4gY29udGVudC5tYXAoKGl0ZW0pID0+ICh7XG4gIC4uLml0ZW0sXG4gIHJlbmRlckNvbXBvbmVudDogZ2V0QW50ZENvbXBvbmVudChpdGVtLmNvbXBvbmVudCwgaXRlbS5kZXJpdmVDb21wb25lbnQpLFxufSkpO1xuXG5leHBvcnQgY29uc3QgdXNlQW50ZENvbXBvbmVudEJ5Rm9ybVNjaGVtYSA9IChzY2hlbWE6IElGb3JtU2NoZW1hKSA9PiB7XG4gIGNvbnN0IG5ld1NjaGVtYSA9IHtcbiAgICBjb25maWc6IHtcbiAgICAgIC4uLnNjaGVtYT8uY29uZmlnXG4gICAgfSxcbiAgICBjb250ZW50OiB1c2VBbnRkQ29tcG9uZW50KHNjaGVtYS5jb250ZW50KSxcbiAgfVxuICByZXR1cm4gbmV3U2NoZW1hO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/YubiForm/antdComponents.ts\n',
      )

      /***/
    },
})
