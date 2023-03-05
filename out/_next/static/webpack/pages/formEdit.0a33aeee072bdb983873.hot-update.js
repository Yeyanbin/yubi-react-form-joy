webpackHotUpdate_N_E('pages/formEdit', {
  /***/ './pagesComponents/editForm/formConfig.ts':
    /*!************************************************!*\
  !*** ./pagesComponents/editForm/formConfig.ts ***!
  \************************************************/
    /*! exports provided: schemaItemBaseForm, schemaInputForm, schemaInputDefaultValue, getAntdComponentSchema */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"schemaItemBaseForm\", function() { return schemaItemBaseForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"schemaInputForm\", function() { return schemaInputForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"schemaInputDefaultValue\", function() { return schemaInputDefaultValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAntdComponentSchema\", function() { return getAntdComponentSchema; });\nvar schemaItemBaseForm = {\n  config: {\n    name: '表单项的基础属性表单'\n  },\n  content: [{\n    prop: 'component',\n    component: 'Select',\n    label: '选择表单组件',\n    options: [{\n      value: 'Input',\n      label: '输入框'\n    }, {\n      value: 'Select',\n      label: '选择框'\n    }, {\n      value: 'Radio',\n      label: '单选'\n    }],\n    rules: [{\n      required: true\n    }]\n  }, {\n    prop: 'prop',\n    component: 'Input',\n    label: '字段',\n    attr: {\n      placeholder: '请输入该表单项的字段'\n    },\n    rules: [{\n      required: true\n    }]\n  }, {\n    prop: 'label',\n    component: 'Input',\n    label: '标签',\n    attr: {\n      placeholder: '请输入该表单项的标签文本'\n    },\n    rules: [{\n      required: true\n    }]\n  }]\n};\nvar schemaInputForm = {\n  config: {\n    name: '输入框的表单'\n  },\n  content: [{\n    prop: 'deriveComponent',\n    component: 'Select',\n    label: '选择派生组件',\n    options: [{\n      value: 'Input',\n      label: '输入框'\n    }, {\n      value: 'Input.Password',\n      label: '密码输入框'\n    }, {\n      value: 'Input.TextArea',\n      label: '文本输入框'\n    }]\n  }, {\n    prop: 'attr.placeholder',\n    component: 'Input',\n    label: 'placeholder',\n    attr: {\n      placeholder: '请输入该输入框的介绍文本'\n    }\n  }]\n};\nvar schemaInputDefaultValue = {// prop: ''\n};\nvar ANTD_COMPONENT_SCHEMA_MAP = {\n  Input: schemaInputForm\n};\nvar getAntdComponentSchema = function getAntdComponentSchema(componentType) {\n  return componentType ? ANTD_COMPONENT_SCHEMA_MAP[componentType] : undefined;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXNDb21wb25lbnRzL2VkaXRGb3JtL2Zvcm1Db25maWcudHM/Yzc4NCJdLCJuYW1lcyI6WyJzY2hlbWFJdGVtQmFzZUZvcm0iLCJjb25maWciLCJuYW1lIiwiY29udGVudCIsInByb3AiLCJjb21wb25lbnQiLCJsYWJlbCIsIm9wdGlvbnMiLCJ2YWx1ZSIsInJ1bGVzIiwicmVxdWlyZWQiLCJhdHRyIiwicGxhY2Vob2xkZXIiLCJzY2hlbWFJbnB1dEZvcm0iLCJzY2hlbWFJbnB1dERlZmF1bHRWYWx1ZSIsIkFOVERfQ09NUE9ORU5UX1NDSEVNQV9NQVAiLCJJbnB1dCIsImdldEFudGRDb21wb25lbnRTY2hlbWEiLCJjb21wb25lbnRUeXBlIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsa0JBQStCLEdBQUc7QUFDN0NDLFFBQU0sRUFBRTtBQUNOQyxRQUFJLEVBQUU7QUFEQSxHQURxQztBQUk3Q0MsU0FBTyxFQUFFLENBQ1A7QUFDRUMsUUFBSSxFQUFFLFdBRFI7QUFFRUMsYUFBUyxFQUFFLFFBRmI7QUFHRUMsU0FBSyxFQUFFLFFBSFQ7QUFJRUMsV0FBTyxFQUFFLENBQ1A7QUFBRUMsV0FBSyxFQUFFLE9BQVQ7QUFBa0JGLFdBQUssRUFBRTtBQUF6QixLQURPLEVBRVA7QUFBRUUsV0FBSyxFQUFFLFFBQVQ7QUFBbUJGLFdBQUssRUFBRTtBQUExQixLQUZPLEVBR1A7QUFBRUUsV0FBSyxFQUFFLE9BQVQ7QUFBa0JGLFdBQUssRUFBRTtBQUF6QixLQUhPLENBSlg7QUFTRUcsU0FBSyxFQUFFLENBQUM7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBRDtBQVRULEdBRE8sRUFZUDtBQUNFTixRQUFJLEVBQUUsTUFEUjtBQUVFQyxhQUFTLEVBQUUsT0FGYjtBQUdFQyxTQUFLLEVBQUUsSUFIVDtBQUlFSyxRQUFJLEVBQUU7QUFDSkMsaUJBQVcsRUFBRTtBQURULEtBSlI7QUFPRUgsU0FBSyxFQUFFLENBQUM7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBRDtBQVBULEdBWk8sRUFxQlA7QUFDRU4sUUFBSSxFQUFFLE9BRFI7QUFFRUMsYUFBUyxFQUFFLE9BRmI7QUFHRUMsU0FBSyxFQUFFLElBSFQ7QUFJRUssUUFBSSxFQUFFO0FBQ0pDLGlCQUFXLEVBQUU7QUFEVCxLQUpSO0FBT0VILFNBQUssRUFBRSxDQUFDO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQUQ7QUFQVCxHQXJCTztBQUpvQyxDQUF4QztBQXFDQSxJQUFNRyxlQUE0QixHQUFHO0FBQzFDWixRQUFNLEVBQUU7QUFDTkMsUUFBSSxFQUFFO0FBREEsR0FEa0M7QUFJMUNDLFNBQU8sRUFBRSxDQUNQO0FBQ0VDLFFBQUksRUFBRSxpQkFEUjtBQUVFQyxhQUFTLEVBQUUsUUFGYjtBQUdFQyxTQUFLLEVBQUUsUUFIVDtBQUlFQyxXQUFPLEVBQUUsQ0FDUDtBQUFFQyxXQUFLLEVBQUUsT0FBVDtBQUFrQkYsV0FBSyxFQUFFO0FBQXpCLEtBRE8sRUFFUDtBQUFFRSxXQUFLLEVBQUUsZ0JBQVQ7QUFBMkJGLFdBQUssRUFBRTtBQUFsQyxLQUZPLEVBR1A7QUFBRUUsV0FBSyxFQUFFLGdCQUFUO0FBQTJCRixXQUFLLEVBQUU7QUFBbEMsS0FITztBQUpYLEdBRE8sRUFXUDtBQUNFRixRQUFJLEVBQUUsa0JBRFI7QUFFRUMsYUFBUyxFQUFFLE9BRmI7QUFHRUMsU0FBSyxFQUFFLGFBSFQ7QUFJRUssUUFBSSxFQUFFO0FBQ0pDLGlCQUFXLEVBQUU7QUFEVDtBQUpSLEdBWE87QUFKaUMsQ0FBckM7QUEwQkEsSUFBTUUsdUJBQXVCLEdBQUcsQ0FDckM7QUFEcUMsQ0FBaEM7QUFJUCxJQUFNQyx5QkFBeUIsR0FBRztBQUNoQ0MsT0FBSyxFQUFFSDtBQUR5QixDQUFsQztBQUlPLElBQU1JLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsYUFBRDtBQUFBLFNBQW1DQSxhQUFhLEdBQUdILHlCQUF5QixDQUFDRyxhQUFELENBQTVCLEdBQThDQyxTQUE5RjtBQUFBLENBQS9CIiwiZmlsZSI6Ii4vcGFnZXNDb21wb25lbnRzL2VkaXRGb3JtL2Zvcm1Db25maWcudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUQ29tcG9uZW50VHlwZSB9IGZyb20gXCJzcmMvY29tcG9uZW50cy9ZdWJpRm9ybS9hbnRkQ29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSUZvcm1TY2hlbWEgfSBmcm9tIFwic3JjL2NvbXBvbmVudHMvWXViaUZvcm0vdHlwZVwiO1xuXG5leHBvcnQgY29uc3Qgc2NoZW1hSXRlbUJhc2VGb3JtOiBJRm9ybVNjaGVtYSA9IHtcbiAgY29uZmlnOiB7XG4gICAgbmFtZTogJ+ihqOWNlemhueeahOWfuuehgOWxnuaAp+ihqOWNlSdcbiAgfSxcbiAgY29udGVudDogW1xuICAgIHtcbiAgICAgIHByb3A6ICdjb21wb25lbnQnLFxuICAgICAgY29tcG9uZW50OiAnU2VsZWN0JyxcbiAgICAgIGxhYmVsOiAn6YCJ5oup6KGo5Y2V57uE5Lu2JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyB2YWx1ZTogJ0lucHV0JywgbGFiZWw6ICfovpPlhaXmoYYnIH0sXG4gICAgICAgIHsgdmFsdWU6ICdTZWxlY3QnLCBsYWJlbDogJ+mAieaLqeahhicgfSxcbiAgICAgICAgeyB2YWx1ZTogJ1JhZGlvJywgbGFiZWw6ICfljZXpgIknIH0sXG4gICAgICBdLFxuICAgICAgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlIH1dXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm9wOiAncHJvcCcsXG4gICAgICBjb21wb25lbnQ6ICdJbnB1dCcsXG4gICAgICBsYWJlbDogJ+Wtl+autScsXG4gICAgICBhdHRyOiB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl6K+l6KGo5Y2V6aG555qE5a2X5q61J1xuICAgICAgfSxcbiAgICAgIHJ1bGVzOiBbeyByZXF1aXJlZDogdHJ1ZSB9XVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvcDogJ2xhYmVsJyxcbiAgICAgIGNvbXBvbmVudDogJ0lucHV0JyxcbiAgICAgIGxhYmVsOiAn5qCH562+JyxcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXor6XooajljZXpobnnmoTmoIfnrb7mlofmnKwnXG4gICAgICB9LFxuICAgICAgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlIH1dXG4gICAgfSxcbiAgXVxufVxuXG5leHBvcnQgY29uc3Qgc2NoZW1hSW5wdXRGb3JtOiBJRm9ybVNjaGVtYSA9IHtcbiAgY29uZmlnOiB7XG4gICAgbmFtZTogJ+i+k+WFpeahhueahOihqOWNlSdcbiAgfSxcbiAgY29udGVudDogW1xuICAgIHtcbiAgICAgIHByb3A6ICdkZXJpdmVDb21wb25lbnQnLFxuICAgICAgY29tcG9uZW50OiAnU2VsZWN0JyxcbiAgICAgIGxhYmVsOiAn6YCJ5oup5rS+55Sf57uE5Lu2JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyB2YWx1ZTogJ0lucHV0JywgbGFiZWw6ICfovpPlhaXmoYYnIH0sXG4gICAgICAgIHsgdmFsdWU6ICdJbnB1dC5QYXNzd29yZCcsIGxhYmVsOiAn5a+G56CB6L6T5YWl5qGGJyB9LFxuICAgICAgICB7IHZhbHVlOiAnSW5wdXQuVGV4dEFyZWEnLCBsYWJlbDogJ+aWh+acrOi+k+WFpeahhicgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3A6ICdhdHRyLnBsYWNlaG9sZGVyJyxcbiAgICAgIGNvbXBvbmVudDogJ0lucHV0JyxcbiAgICAgIGxhYmVsOiAncGxhY2Vob2xkZXInLFxuICAgICAgYXR0cjoge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeivpei+k+WFpeahhueahOS7i+e7jeaWh+acrCdcbiAgICAgIH0sXG4gICAgfSxcbiAgXVxufVxuXG5leHBvcnQgY29uc3Qgc2NoZW1hSW5wdXREZWZhdWx0VmFsdWUgPSB7XG4gIC8vIHByb3A6ICcnXG59XG5cbmNvbnN0IEFOVERfQ09NUE9ORU5UX1NDSEVNQV9NQVAgPSB7XG4gIElucHV0OiBzY2hlbWFJbnB1dEZvcm0sXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QW50ZENvbXBvbmVudFNjaGVtYSA9IChjb21wb25lbnRUeXBlOiBUQ29tcG9uZW50VHlwZSkgPT4gY29tcG9uZW50VHlwZSA/IEFOVERfQ09NUE9ORU5UX1NDSEVNQV9NQVBbY29tcG9uZW50VHlwZV0gOiB1bmRlZmluZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pagesComponents/editForm/formConfig.ts\n",
      )

      /***/
    },
})