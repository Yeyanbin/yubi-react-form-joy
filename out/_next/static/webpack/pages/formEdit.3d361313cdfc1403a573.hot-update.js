webpackHotUpdate_N_E('pages/formEdit', {
  /***/ './src/libs/schemaHooks/useFormContent.ts':
    /*!************************************************!*\
  !*** ./src/libs/schemaHooks/useFormContent.ts ***!
  \************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {var useFormContent = function useFormContent(content, _ref) {\n  var toReversePolishNotation = _ref.toReversePolishNotation,\n      computeReversePolishNotation = _ref.computeReversePolishNotation;\n\n  /**\n   * 深拷贝处理一个item的所有属性\n   * @param item content中的某一行\n   * @returns \n   */\n  var handleNormalObject = function handleNormalObject(item) {\n    var newItem = {};\n    Object.keys(item).forEach(function (key) {\n      if (['component', 'renderComponent'].some(function (whiteListItem) {\n        return whiteListItem === key;\n      })) {\n        // console.log('key component')\n        newItem[key] = item[key];\n        return;\n      }\n\n      if (typeof item[key] === 'string') {\n        // 发现一个值其是字符串\n        newItem[key] = item[key];\n      } else if (typeof item[key] === 'number') {\n        newItem[key] = item[key];\n      } else if (Array.isArray(item[key])) {\n        // 是数组\n        newItem[key] = item[key];\n      } else if (typeof item[key] === 'object') {\n        // 发现一个值其是对象\n        if (item[key].value !== undefined || item[key].expression !== undefined) {\n          // 查看是否带有value或者expression属性，是则认为其是值对象\n          newItem[key] = handleValueObject(item[key]);\n        } else {\n          // 继续深拷贝\n          newItem[key] = handleNormalObject(item[key]);\n        }\n      } else {\n        // 兜底\n        newItem[key] = item[key];\n      }\n    });\n    return newItem;\n  };\n  /**\n   * 值对象处理\n   * @param valueObject \n   */\n\n\n  var handleValueObject = function handleValueObject(valueObject) {\n    var value = valueObject.value,\n        expression = valueObject.expression; // if (type ==='string') {\n    //   computeValue = `${handleExpression(expression) || value}`;\n    // } else if (type === 'number') {\n    //   // console.log(expression);\n    //   computeValue = +(expression && handleExpression(expression) || value);\n    // } else if (type === 'array') {\n    //   // computeValue = +(handleExpression(expression) || value);\n    // } else if (type === 'boolean') {\n    //   computeValue = handleExpression(expression) || value;\n    //   computeValue = computeValue === 'false' ? false : Boolean(computeValue);\n    // }\n\n    return expression && handleExpression(expression) || value;\n  };\n\n  var handleExpression = function handleExpression(expression) {\n    return (// console.log(expression);\n      // console.log(toReversePolishNotation(expression));\n      // console.log(computeReversePolishNotation(toReversePolishNotation(expression)));\n      computeReversePolishNotation(toReversePolishNotation(expression))\n    );\n  };\n\n  var newContent = [];\n  content.forEach(function (item) {\n    if (item.show) {\n      // 处理show\n      var show = handleExpression(item.show.expression) || item.show.value;\n\n      if (show && show !== 'false') {\n        // console.log('show');\n        newContent.push(handleNormalObject(item));\n      }\n    } else {\n      // 普通情况\n      newContent.push(handleNormalObject(item));\n    }\n  });\n  return newContent;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFormContent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYnMvc2NoZW1hSG9va3MvdXNlRm9ybUNvbnRlbnQudHM/MmE1NCJdLCJuYW1lcyI6WyJ1c2VGb3JtQ29udGVudCIsImNvbnRlbnQiLCJ0b1JldmVyc2VQb2xpc2hOb3RhdGlvbiIsImNvbXB1dGVSZXZlcnNlUG9saXNoTm90YXRpb24iLCJoYW5kbGVOb3JtYWxPYmplY3QiLCJpdGVtIiwibmV3SXRlbSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic29tZSIsIndoaXRlTGlzdEl0ZW0iLCJBcnJheSIsImlzQXJyYXkiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImV4cHJlc3Npb24iLCJoYW5kbGVWYWx1ZU9iamVjdCIsInZhbHVlT2JqZWN0IiwiaGFuZGxlRXhwcmVzc2lvbiIsIm5ld0NvbnRlbnQiLCJzaG93IiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQSxrREFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxPQUFELFFBQW9GO0FBQUEsTUFBNURDLHVCQUE0RCxRQUE1REEsdUJBQTREO0FBQUEsTUFBbkNDLDRCQUFtQyxRQUFuQ0EsNEJBQW1DOztBQUV6RztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0UsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFELEVBQVU7QUFDbkMsUUFBTUMsT0FBTyxHQUFHLEVBQWhCO0FBRUFDLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZSCxJQUFaLEVBQWtCSSxPQUFsQixDQUEwQixVQUFBQyxHQUFHLEVBQUk7QUFDL0IsVUFBSSxDQUFDLFdBQUQsRUFBYyxpQkFBZCxFQUFpQ0MsSUFBakMsQ0FBc0MsVUFBQ0MsYUFBRDtBQUFBLGVBQW1CQSxhQUFhLEtBQUtGLEdBQXJDO0FBQUEsT0FBdEMsQ0FBSixFQUFxRjtBQUNuRjtBQUNBSixlQUFPLENBQUNJLEdBQUQsQ0FBUCxHQUFlTCxJQUFJLENBQUNLLEdBQUQsQ0FBbkI7QUFDQTtBQUNE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c0NvbnRlbnQiOlsiXG5jb25zdCB1c2VGb3JtQ29udGVudCA9IChjb250ZW50OiBBcnJheTxhbnk+LCB7IHRvUmV2ZXJzZVBvbGlzaE5vdGF0aW9uLCBjb21wdXRlUmV2ZXJzZVBvbGlzaE5vdGF0aW9uIH0pID0+IHtcblxuICAvKipcbiAgICog5rex5ou36LSd5aSE55CG5LiA5LiqaXRlbeeahOaJgOacieWxnuaAp1xuICAgKiBAcGFyYW0gaXRlbSBjb250ZW505Lit55qE5p+Q5LiA6KGMXG4gICAqIEByZXR1cm5zIFxuICAgKi9cbiAgY29uc3QgaGFuZGxlTm9ybWFsT2JqZWN0ID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBuZXdJdGVtID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoWydjb21wb25lbnQnLCAncmVuZGVyQ29tcG9uZW50J10uc29tZSgod2hpdGVMaXN0SXRlbSkgPT4gd2hpdGVMaXN0SXRlbSA9PT0ga2V5KSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygna2V5IGNvbXBvbmVudCcpXG4gICAgICAgIG5ld0l0ZW1ba2V5XSA9IGl0ZW1ba2V5XTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBpdGVtW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIOWPkeeOsOS4gOS4quWAvOWFtuaYr+Wtl+espuS4slxuICAgICAgICBuZXdJdGVtW2tleV0gPSBpdGVtW2tleV07XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtW2tleV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIG5ld0l0ZW1ba2V5XSA9IGl0ZW1ba2V5XTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpdGVtW2tleV0pKSB7XG4gICAgICAgIC8vIOaYr+aVsOe7hFxuICAgICAgICBuZXdJdGVtW2tleV0gPSBpdGVtW2tleV07XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIOWPkeeOsOS4gOS4quWAvOWFtuaYr+WvueixoVxuICAgICAgICBpZiAoaXRlbVtrZXldLnZhbHVlICE9PSB1bmRlZmluZWQgfHwgaXRlbVtrZXldLmV4cHJlc3Npb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIOafpeeci+aYr+WQpuW4puaciXZhbHVl5oiW6ICFZXhwcmVzc2lvbuWxnuaAp++8jOaYr+WImeiupOS4uuWFtuaYr+WAvOWvueixoVxuICAgICAgICAgIG5ld0l0ZW1ba2V5XSA9IGhhbmRsZVZhbHVlT2JqZWN0KGl0ZW1ba2V5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8g57un57ut5rex5ou36LSdXG4gICAgICAgICAgbmV3SXRlbVtrZXldID0gaGFuZGxlTm9ybWFsT2JqZWN0KGl0ZW1ba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWFnOW6lVxuICAgICAgICBuZXdJdGVtW2tleV0gPSBpdGVtW2tleV07XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gbmV3SXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlgLzlr7nosaHlpITnkIZcbiAgICogQHBhcmFtIHZhbHVlT2JqZWN0IFxuICAgKi9cbiAgY29uc3QgaGFuZGxlVmFsdWVPYmplY3QgPSAodmFsdWVPYmplY3QpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBleHByZXNzaW9uIH0gPSB2YWx1ZU9iamVjdDtcblxuICAgIC8vIGlmICh0eXBlID09PSdzdHJpbmcnKSB7XG4gICAgLy8gICBjb21wdXRlVmFsdWUgPSBgJHtoYW5kbGVFeHByZXNzaW9uKGV4cHJlc3Npb24pIHx8IHZhbHVlfWA7XG4gICAgLy8gfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgIC8vICAgLy8gY29uc29sZS5sb2coZXhwcmVzc2lvbik7XG4gICAgLy8gICBjb21wdXRlVmFsdWUgPSArKGV4cHJlc3Npb24gJiYgaGFuZGxlRXhwcmVzc2lvbihleHByZXNzaW9uKSB8fCB2YWx1ZSk7XG4gICAgLy8gfSBlbHNlIGlmICh0eXBlID09PSAnYXJyYXknKSB7XG4gICAgLy8gICAvLyBjb21wdXRlVmFsdWUgPSArKGhhbmRsZUV4cHJlc3Npb24oZXhwcmVzc2lvbikgfHwgdmFsdWUpO1xuICAgIC8vIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gICBjb21wdXRlVmFsdWUgPSBoYW5kbGVFeHByZXNzaW9uKGV4cHJlc3Npb24pIHx8IHZhbHVlO1xuICAgIC8vICAgY29tcHV0ZVZhbHVlID0gY29tcHV0ZVZhbHVlID09PSAnZmFsc2UnID8gZmFsc2UgOiBCb29sZWFuKGNvbXB1dGVWYWx1ZSk7XG4gICAgLy8gfVxuICAgIHJldHVybiBleHByZXNzaW9uICYmIGhhbmRsZUV4cHJlc3Npb24oZXhwcmVzc2lvbikgfHwgdmFsdWU7XG4gIH1cblxuICBjb25zdCBoYW5kbGVFeHByZXNzaW9uID0gKGV4cHJlc3Npb24pID0+XG4gICAgLy8gY29uc29sZS5sb2coZXhwcmVzc2lvbik7XG4gICAgLy8gY29uc29sZS5sb2codG9SZXZlcnNlUG9saXNoTm90YXRpb24oZXhwcmVzc2lvbikpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbXB1dGVSZXZlcnNlUG9saXNoTm90YXRpb24odG9SZXZlcnNlUG9saXNoTm90YXRpb24oZXhwcmVzc2lvbikpKTtcbiAgICBjb21wdXRlUmV2ZXJzZVBvbGlzaE5vdGF0aW9uKHRvUmV2ZXJzZVBvbGlzaE5vdGF0aW9uKGV4cHJlc3Npb24pKVxuXG5cbiAgY29uc3QgbmV3Q29udGVudDogYW55W10gPSBbXTtcblxuICBjb250ZW50LmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0uc2hvdykge1xuICAgICAgLy8g5aSE55CGc2hvd1xuICAgICAgY29uc3Qgc2hvdyA9IGhhbmRsZUV4cHJlc3Npb24oaXRlbS5zaG93LmV4cHJlc3Npb24pIHx8IGl0ZW0uc2hvdy52YWx1ZTtcbiAgICAgIGlmIChzaG93ICYmIHNob3cgIT09ICdmYWxzZScpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Nob3cnKTtcbiAgICAgICAgbmV3Q29udGVudC5wdXNoKGhhbmRsZU5vcm1hbE9iamVjdChpdGVtKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOaZrumAmuaDheWGtVxuICAgICAgbmV3Q29udGVudC5wdXNoKGhhbmRsZU5vcm1hbE9iamVjdChpdGVtKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG5ld0NvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUZvcm1Db250ZW50OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/schemaHooks/useFormContent.ts\n",
      )

      /***/
    },
})
