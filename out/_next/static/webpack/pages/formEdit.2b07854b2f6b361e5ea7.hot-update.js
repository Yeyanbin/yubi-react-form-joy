webpackHotUpdate_N_E('pages/formEdit', {
  /***/ './pagesComponents/editForm/formConfig.ts':
    /*!************************************************!*\
  !*** ./pagesComponents/editForm/formConfig.ts ***!
  \************************************************/
    /*! exports provided: schemaItemBaseForm, schemaInputForm, schemaInputDefaultValue, getAntdComponentSchema */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"schemaItemBaseForm\", function() { return schemaItemBaseForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"schemaInputForm\", function() { return schemaInputForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"schemaInputDefaultValue\", function() { return schemaInputDefaultValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAntdComponentSchema\", function() { return getAntdComponentSchema; });\n/* harmony import */ var src_components_YubiForm_antdComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/components/YubiForm/antdComponents */ \"./src/components/YubiForm/antdComponents.ts\");\nvar _s = $RefreshSig$();\n\n\nvar schemaItemBaseForm = {\n  config: {\n    name: '表单项的基础属性表单'\n  },\n  content: [{\n    prop: 'component',\n    component: 'Select',\n    label: '选择表单组件',\n    options: [{\n      value: 'Input',\n      label: '输入框'\n    }, {\n      value: 'Select',\n      label: '选择框'\n    }, {\n      value: 'Radio',\n      label: '单选'\n    }],\n    rules: [{\n      required: true\n    }]\n  }, {\n    prop: 'prop',\n    component: 'Input',\n    label: '字段',\n    attr: {\n      placeholder: '请输入该表单项的字段'\n    },\n    rules: [{\n      required: true\n    }]\n  }, {\n    prop: 'label',\n    component: 'Input',\n    label: '标签',\n    attr: {\n      placeholder: '请输入该表单项的标签文本'\n    },\n    rules: [{\n      required: true\n    }]\n  }]\n};\nvar schemaInputForm = {\n  config: {\n    name: '输入框的表单'\n  },\n  content: [{\n    prop: 'deriveComponent',\n    component: 'Select',\n    label: '选择派生组件',\n    options: [{\n      value: 'Input',\n      label: '输入框'\n    }, {\n      value: 'Input.Password',\n      label: '密码输入框'\n    }, {\n      value: 'Input.TextArea',\n      label: '文本输入框'\n    }]\n  }, {\n    prop: 'attr.placeholder',\n    component: 'Input',\n    label: 'placeholder',\n    attr: {\n      placeholder: '请输入该输入框的介绍文本'\n    }\n  }]\n};\nvar schemaInputDefaultValue = {// prop: ''\n};\nvar ANTD_COMPONENT_SCHEMA_MAP = {\n  Input: schemaInputForm\n};\nvar getAntdComponentSchema = function getAntdComponentSchema(componentType) {\n  _s();\n\n  return componentType ? Object(src_components_YubiForm_antdComponents__WEBPACK_IMPORTED_MODULE_0__[\"useAntdComponent\"])(ANTD_COMPONENT_SCHEMA_MAP[componentType]) : undefined;\n};\n\n_s(getAntdComponentSchema, \"2Fq2zZkVXDdDbUSj/hm81ueK8Y0=\", false, function () {\n  return [src_components_YubiForm_antdComponents__WEBPACK_IMPORTED_MODULE_0__[\"useAntdComponent\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXNDb21wb25lbnRzL2VkaXRGb3JtL2Zvcm1Db25maWcudHM/Yzc4NCJdLCJuYW1lcyI6WyJzY2hlbWFJdGVtQmFzZUZvcm0iLCJjb25maWciLCJuYW1lIiwiY29udGVudCIsInByb3AiLCJjb21wb25lbnQiLCJsYWJlbCIsIm9wdGlvbnMiLCJ2YWx1ZSIsInJ1bGVzIiwicmVxdWlyZWQiLCJhdHRyIiwicGxhY2Vob2xkZXIiLCJzY2hlbWFJbnB1dEZvcm0iLCJzY2hlbWFJbnB1dERlZmF1bHRWYWx1ZSIsIkFOVERfQ09NUE9ORU5UX1NDSEVNQV9NQVAiLCJJbnB1dCIsImdldEFudGRDb21wb25lbnRTY2hlbWEiLCJjb21wb25lbnRUeXBlIiwidXNlQW50ZENvbXBvbmVudCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUdPLElBQU1BLGtCQUErQixHQUFHO0FBQzdDQyxRQUFNLEVBQUU7QUFDTkMsUUFBSSxFQUFFO0FBREEsR0FEcUM7QUFJN0NDLFNBQU8sRUFBRSxDQUNQO0FBQ0VDLFFBQUksRUFBRSxXQURSO0FBRUVDLGFBQVMsRUFBRSxRQUZiO0FBR0VDLFNBQUssRUFBRSxRQUhUO0FBSUVDLFdBQU8sRUFBRSxDQUNQO0FBQUVDLFdBQUssRUFBRSxPQUFUO0FBQWtCRixXQUFLLEVBQUU7QUFBekIsS0FETyxFQUVQO0FBQUVFLFdBQUssRUFBRSxRQUFUO0FBQW1CRixXQUFLLEVBQUU7QUFBMUIsS0FGTyxFQUdQO0FBQUVFLFdBQUssRUFBRSxPQUFUO0FBQWtCRixXQUFLLEVBQUU7QUFBekIsS0FITyxDQUpYO0FBU0VHLFNBQUssRUFBRSxDQUFDO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQUQ7QUFUVCxHQURPLEVBWVA7QUFDRU4sUUFBSSxFQUFFLE1BRFI7QUFFRUMsYUFBUyxFQUFFLE9BRmI7QUFHRUMsU0FBSyxFQUFFLElBSFQ7QUFJRUssUUFBSSxFQUFFO0FBQ0pDLGlCQUFXLEVBQUU7QUFEVCxLQUpSO0FBT0VILFNBQUssRUFBRSxDQUFDO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQUQ7QUFQVCxHQVpPLEVBcUJQO0FBQ0VOLFFBQUksRUFBRSxPQURSO0FBRUVDLGFBQVMsRUFBRSxPQUZiO0FBR0VDLFNBQUssRUFBRSxJQUhUO0FBSUVLLFFBQUksRUFBRTtBQUNKQyxpQkFBVyxFQUFFO0FBRFQsS0FKUjtBQU9FSCxTQUFLLEVBQUUsQ0FBQztBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUFEO0FBUFQsR0FyQk87QUFKb0MsQ0FBeEM7QUFxQ0EsSUFBTUcsZUFBNEIsR0FBRztBQUMxQ1osUUFBTSxFQUFFO0FBQ05DLFFBQUksRUFBRTtBQURBLEdBRGtDO0FBSTFDQyxTQUFPLEVBQUUsQ0FDUDtBQUNFQyxRQUFJLEVBQUUsaUJBRFI7QUFFRUMsYUFBUyxFQUFFLFFBRmI7QUFHRUMsU0FBSyxFQUFFLFFBSFQ7QUFJRUMsV0FBTyxFQUFFLENBQ1A7QUFBRUMsV0FBSyxFQUFFLE9BQVQ7QUFBa0JGLFdBQUssRUFBRTtBQUF6QixLQURPLEVBRVA7QUFBRUUsV0FBSyxFQUFFLGdCQUFUO0FBQTJCRixXQUFLLEVBQUU7QUFBbEMsS0FGTyxFQUdQO0FBQUVFLFdBQUssRUFBRSxnQkFBVDtBQUEyQkYsV0FBSyxFQUFFO0FBQWxDLEtBSE87QUFKWCxHQURPLEVBV1A7QUFDRUYsUUFBSSxFQUFFLGtCQURSO0FBRUVDLGFBQVMsRUFBRSxPQUZiO0FBR0VDLFNBQUssRUFBRSxhQUhUO0FBSUVLLFFBQUksRUFBRTtBQUNKQyxpQkFBVyxFQUFFO0FBRFQ7QUFKUixHQVhPO0FBSmlDLENBQXJDO0FBMEJBLElBQU1FLHVCQUF1QixHQUFHLENBQ3JDO0FBRHFDLENBQWhDO0FBSVAsSUFBTUMseUJBQXlCLEdBQUc7QUFDaENDLE9BQUssRUFBRUg7QUFEeUIsQ0FBbEM7QUFJTyxJQUFNSSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLGFBQUQ7QUFBQTs7QUFBQSxTQUFtQ0EsYUFBYSxHQUFHQywrRkFBZ0IsQ0FBQ0oseUJBQXlCLENBQUNHLGFBQUQsQ0FBMUIsQ0FBbkIsR0FBZ0VFLFNBQWhIO0FBQUEsQ0FBL0I7O0dBQU1ILHNCO1VBQTRFRSx1RiIsImZpbGUiOiIuL3BhZ2VzQ29tcG9uZW50cy9lZGl0Rm9ybS9mb3JtQ29uZmlnLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVENvbXBvbmVudFR5cGUsIHVzZUFudGRDb21wb25lbnQgfSBmcm9tIFwic3JjL2NvbXBvbmVudHMvWXViaUZvcm0vYW50ZENvbXBvbmVudHNcIjtcbmltcG9ydCB7IElGb3JtU2NoZW1hIH0gZnJvbSBcInNyYy9jb21wb25lbnRzL1l1YmlGb3JtL3R5cGVcIjtcblxuZXhwb3J0IGNvbnN0IHNjaGVtYUl0ZW1CYXNlRm9ybTogSUZvcm1TY2hlbWEgPSB7XG4gIGNvbmZpZzoge1xuICAgIG5hbWU6ICfooajljZXpobnnmoTln7rnoYDlsZ7mgKfooajljZUnXG4gIH0sXG4gIGNvbnRlbnQ6IFtcbiAgICB7XG4gICAgICBwcm9wOiAnY29tcG9uZW50JyxcbiAgICAgIGNvbXBvbmVudDogJ1NlbGVjdCcsXG4gICAgICBsYWJlbDogJ+mAieaLqeihqOWNlee7hOS7ticsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdmFsdWU6ICdJbnB1dCcsIGxhYmVsOiAn6L6T5YWl5qGGJyB9LFxuICAgICAgICB7IHZhbHVlOiAnU2VsZWN0JywgbGFiZWw6ICfpgInmi6nmoYYnIH0sXG4gICAgICAgIHsgdmFsdWU6ICdSYWRpbycsIGxhYmVsOiAn5Y2V6YCJJyB9LFxuICAgICAgXSxcbiAgICAgIHJ1bGVzOiBbeyByZXF1aXJlZDogdHJ1ZSB9XVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvcDogJ3Byb3AnLFxuICAgICAgY29tcG9uZW50OiAnSW5wdXQnLFxuICAgICAgbGFiZWw6ICflrZfmrrUnLFxuICAgICAgYXR0cjoge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeivpeihqOWNlemhueeahOWtl+autSdcbiAgICAgIH0sXG4gICAgICBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUgfV1cbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3A6ICdsYWJlbCcsXG4gICAgICBjb21wb25lbnQ6ICdJbnB1dCcsXG4gICAgICBsYWJlbDogJ+agh+etvicsXG4gICAgICBhdHRyOiB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl6K+l6KGo5Y2V6aG555qE5qCH562+5paH5pysJ1xuICAgICAgfSxcbiAgICAgIHJ1bGVzOiBbeyByZXF1aXJlZDogdHJ1ZSB9XVxuICAgIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IHNjaGVtYUlucHV0Rm9ybTogSUZvcm1TY2hlbWEgPSB7XG4gIGNvbmZpZzoge1xuICAgIG5hbWU6ICfovpPlhaXmoYbnmoTooajljZUnXG4gIH0sXG4gIGNvbnRlbnQ6IFtcbiAgICB7XG4gICAgICBwcm9wOiAnZGVyaXZlQ29tcG9uZW50JyxcbiAgICAgIGNvbXBvbmVudDogJ1NlbGVjdCcsXG4gICAgICBsYWJlbDogJ+mAieaLqea0vueUn+e7hOS7ticsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdmFsdWU6ICdJbnB1dCcsIGxhYmVsOiAn6L6T5YWl5qGGJyB9LFxuICAgICAgICB7IHZhbHVlOiAnSW5wdXQuUGFzc3dvcmQnLCBsYWJlbDogJ+Wvhueggei+k+WFpeahhicgfSxcbiAgICAgICAgeyB2YWx1ZTogJ0lucHV0LlRleHRBcmVhJywgbGFiZWw6ICfmlofmnKzovpPlhaXmoYYnIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm9wOiAnYXR0ci5wbGFjZWhvbGRlcicsXG4gICAgICBjb21wb25lbnQ6ICdJbnB1dCcsXG4gICAgICBsYWJlbDogJ3BsYWNlaG9sZGVyJyxcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXor6XovpPlhaXmoYbnmoTku4vnu43mlofmnKwnXG4gICAgICB9LFxuICAgIH0sXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IHNjaGVtYUlucHV0RGVmYXVsdFZhbHVlID0ge1xuICAvLyBwcm9wOiAnJ1xufVxuXG5jb25zdCBBTlREX0NPTVBPTkVOVF9TQ0hFTUFfTUFQID0ge1xuICBJbnB1dDogc2NoZW1hSW5wdXRGb3JtLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldEFudGRDb21wb25lbnRTY2hlbWEgPSAoY29tcG9uZW50VHlwZTogVENvbXBvbmVudFR5cGUpID0+IGNvbXBvbmVudFR5cGUgPyB1c2VBbnRkQ29tcG9uZW50KEFOVERfQ09NUE9ORU5UX1NDSEVNQV9NQVBbY29tcG9uZW50VHlwZV0pIDogdW5kZWZpbmVkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pagesComponents/editForm/formConfig.ts\n",
      )

      /***/
    },
})
