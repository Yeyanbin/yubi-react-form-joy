_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [18],
  {
    '9uAx': function (e, n, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/demo',
        function () {
          return t('oIiN')
        },
      ])
    },
    Qetd: function (e, n, t) {
      'use strict'
      var i = Object.assign.bind(Object)
      ;(e.exports = i), (e.exports.default = e.exports)
    },
    oIiN: function (e, n, t) {
      'use strict'
      t.r(n)
      var i = t('nKUr'),
        o = t('q1tI')
      n.default = function () {
        var e = Object(o.useRef)(null),
          n = Object(o.useRef)(null),
          t = function (e) {
            console.log('Event target: '.concat(e.currentTarget.id)), e.stopPropagation()
          }
        return Object(i.jsx)('div', {
          id: 'outer',
          ref: e,
          onClickCapture: t,
          children: Object(i.jsx)('div', {
            id: 'inner',
            ref: n,
            onClickCapture: t,
            children: 'Click me!',
          }),
        })
      }
    },
  },
  [['9uAx', 0, 1]],
])
