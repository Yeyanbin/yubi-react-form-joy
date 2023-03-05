_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [20],
  {
    '+R3d': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '__N_SSG', function () {
          return g
        })
      var r = n('nKUr'),
        a = n('q1tI'),
        o = n('JFdn'),
        c = n('1JHv'),
        u = n.n(c),
        i = n('cpVT'),
        l = n('4IMT'),
        s = n.n(l),
        f = n('iJl9'),
        d = n.n(f),
        p = n('QpBz'),
        v = n.n(p),
        b = n('xvhg'),
        h = n('dhJC')
      function m(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                Object(i.a)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var O = function (e) {
          var t = e.content,
            n = e.change,
            a = Object(h.a)(e, ['content', 'change']),
            o = JSON.stringify(t),
            c = v.a.useMessage(),
            u = Object(b.a)(c, 2),
            i = u[0],
            l = u[1]
          return Object(r.jsxs)(
            'div',
            j(
              j({}, a),
              {},
              {
                children: [
                  l,
                  Object(r.jsx)(d.a.TextArea, {
                    style: { height: '500px' },
                    onChange: function (e) {
                      o = e.target.value
                    },
                    rows: 4,
                    defaultValue: o,
                  }),
                  Object(r.jsx)(s.a, {
                    onClick: function () {
                      try {
                        n(JSON.parse(o))
                      } catch (e) {
                        i.open({ type: 'error', content: 'json\u4e0d\u5408\u6cd5', duration: 5 })
                      }
                    },
                    children: '\u4fee\u6539',
                  }),
                ],
              },
            ),
          )
        },
        y = n('lIGE'),
        g = !0
      t.default = function (e) {
        var t = Object(a.useState)(e.formContent),
          n = t[0],
          c = t[1],
          i = Object(a.useState)(Object(y.a)(n)),
          l = i[0],
          s = i[1],
          f = Object(a.useState)({}),
          d = f[0],
          p = f[1]
        return (
          Object(a.useEffect)(
            function () {
              console.log('originFormContent', n), s(Object(y.a)(n)), console.log('formContent', l)
            },
            [n],
          ),
          Object(r.jsxs)('div', {
            className: u.a.container,
            children: [
              Object(r.jsx)(O, {
                className: u.a.container_jsonSchema,
                content: e.formContent,
                change: c,
              }),
              Object(r.jsxs)('div', {
                children: [
                  Object(r.jsx)(o.a, {
                    style: { width: '400px' },
                    content: l,
                    change: function (e) {
                      console.log('change formValue', e), p(e)
                    },
                  }),
                  Object(r.jsx)('span', { children: JSON.stringify(d) }),
                ],
              }),
            ],
          })
        )
      }
    },
    '1JHv': function (e, t, n) {
      e.exports = {
        container: 'editFormDemo_container__2Hsak',
        container_jsonSchema: 'editFormDemo_container_jsonSchema__2jDtF',
      }
    },
    '1Ot+': function (e, t, n) {
      'use strict'
      var r = n('284h'),
        a = n('TqRt')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var o = a(n('pVnL')),
        c = a(n('lSNA')),
        u = a(n('cDf5')),
        i = a(n('J4zp')),
        l = r(n('q1tI')),
        s = a(n('TSYQ')),
        f = n('vgIT'),
        d = a(n('5u0s')),
        p = n('KEtS'),
        v = r(n('hf16')),
        b = function (e, t) {
          var n = {}
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]])
          }
          return n
        },
        h =
          ((0, p.tuple)('top', 'middle', 'bottom', 'stretch'),
          (0, p.tuple)('start', 'end', 'center', 'space-around', 'space-between'),
          l.forwardRef(function (e, t) {
            var n,
              r = e.prefixCls,
              a = e.justify,
              p = e.align,
              h = e.className,
              m = e.style,
              j = e.children,
              O = e.gutter,
              y = void 0 === O ? 0 : O,
              g = e.wrap,
              x = b(e, [
                'prefixCls',
                'justify',
                'align',
                'className',
                'style',
                'children',
                'gutter',
                'wrap',
              ]),
              w = l.useContext(f.ConfigContext),
              _ = w.getPrefixCls,
              S = w.direction,
              N = l.useState({ xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0 }),
              C = (0, i.default)(N, 2),
              P = C[0],
              E = C[1],
              A = l.useRef(y)
            l.useEffect(function () {
              var e = v.default.subscribe(function (e) {
                var t = A.current || 0
                ;((!Array.isArray(t) && 'object' === (0, u.default)(t)) ||
                  (Array.isArray(t) &&
                    ('object' === (0, u.default)(t[0]) || 'object' === (0, u.default)(t[1])))) &&
                  E(e)
              })
              return function () {
                return v.default.unsubscribe(e)
              }
            }, [])
            var T = _('row', r),
              R = (function () {
                var e = [0, 0]
                return (
                  (Array.isArray(y) ? y : [y, 0]).forEach(function (t, n) {
                    if ('object' === (0, u.default)(t))
                      for (var r = 0; r < v.responsiveArray.length; r++) {
                        var a = v.responsiveArray[r]
                        if (P[a] && void 0 !== t[a]) {
                          e[n] = t[a]
                          break
                        }
                      }
                    else e[n] = t || 0
                  }),
                  e
                )
              })(),
              I = (0, s.default)(
                T,
                ((n = {}),
                (0, c.default)(n, ''.concat(T, '-no-wrap'), !1 === g),
                (0, c.default)(n, ''.concat(T, '-').concat(a), a),
                (0, c.default)(n, ''.concat(T, '-').concat(p), p),
                (0, c.default)(n, ''.concat(T, '-rtl'), 'rtl' === S),
                n),
                h,
              ),
              J = (0, o.default)(
                (0, o.default)(
                  (0, o.default)(
                    {},
                    R[0] > 0 ? { marginLeft: R[0] / -2, marginRight: R[0] / -2 } : {},
                  ),
                  R[1] > 0 ? { marginTop: R[1] / -2, marginBottom: R[1] / 2 } : {},
                ),
                m,
              )
            return l.createElement(
              d.default.Provider,
              { value: { gutter: R, wrap: g } },
              l.createElement('div', (0, o.default)({}, x, { className: I, style: J, ref: t }), j),
            )
          }))
      h.displayName = 'Row'
      var m = h
      t.default = m
    },
    '5u0s': function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = (0, n('q1tI').createContext)({})
      t.default = r
    },
    '6cGi': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var r = n('ODXe'),
        a = n('q1tI')
      function o(e) {
        var t = a.useRef()
        return (
          (t.current = e),
          a.useCallback(function () {
            for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
              r[a] = arguments[a]
            return null === (e = t.current) || void 0 === e
              ? void 0
              : e.call.apply(e, [t].concat(r))
          }, [])
        )
      }
      var c = n('TNol'),
        u = n('dm2S')
      function i(e) {
        return void 0 !== e
      }
      function l(e, t) {
        var n = t || {},
          a = n.defaultValue,
          l = n.value,
          s = n.onChange,
          f = n.postState,
          d = Object(u.a)(function () {
            return i(l)
              ? l
              : i(a)
              ? 'function' === typeof a
                ? a()
                : a
              : 'function' === typeof e
              ? e()
              : e
          }),
          p = Object(r.a)(d, 2),
          v = p[0],
          b = p[1],
          h = void 0 !== l ? l : v,
          m = f ? f(h) : h,
          j = o(s),
          O = Object(u.a)([h]),
          y = Object(r.a)(O, 2),
          g = y[0],
          x = y[1]
        return (
          Object(c.b)(
            function () {
              var e = g[0]
              v !== e && j(v, e)
            },
            [g],
          ),
          Object(c.b)(
            function () {
              i(l) || b(l)
            },
            [l],
          ),
          [
            m,
            o(function (e, t) {
              b(e, t), x([h], t)
            }),
          ]
        )
      }
    },
    NZBZ: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/formEdit/demo',
        function () {
          return n('+R3d')
        },
      ])
    },
    Y7j8: function (e, t, n) {
      'use strict'
      var r = n('284h'),
        a = n('TqRt')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var o = a(n('lSNA')),
        c = a(n('pVnL')),
        u = a(n('cDf5')),
        i = r(n('q1tI')),
        l = a(n('TSYQ')),
        s = a(n('5u0s')),
        f = n('vgIT'),
        d = function (e, t) {
          var n = {}
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]])
          }
          return n
        }
      var p = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        v = i.forwardRef(function (e, t) {
          var n,
            r = i.useContext(f.ConfigContext),
            a = r.getPrefixCls,
            v = r.direction,
            b = i.useContext(s.default),
            h = b.gutter,
            m = b.wrap,
            j = e.prefixCls,
            O = e.span,
            y = e.order,
            g = e.offset,
            x = e.push,
            w = e.pull,
            _ = e.className,
            S = e.children,
            N = e.flex,
            C = e.style,
            P = d(e, [
              'prefixCls',
              'span',
              'order',
              'offset',
              'push',
              'pull',
              'className',
              'children',
              'flex',
              'style',
            ]),
            E = a('col', j),
            A = {}
          p.forEach(function (t) {
            var n,
              r = {},
              a = e[t]
            'number' === typeof a ? (r.span = a) : 'object' === (0, u.default)(a) && (r = a || {}),
              delete P[t],
              (A = (0, c.default)(
                (0, c.default)({}, A),
                ((n = {}),
                (0, o.default)(
                  n,
                  ''.concat(E, '-').concat(t, '-').concat(r.span),
                  void 0 !== r.span,
                ),
                (0, o.default)(
                  n,
                  ''.concat(E, '-').concat(t, '-order-').concat(r.order),
                  r.order || 0 === r.order,
                ),
                (0, o.default)(
                  n,
                  ''.concat(E, '-').concat(t, '-offset-').concat(r.offset),
                  r.offset || 0 === r.offset,
                ),
                (0, o.default)(
                  n,
                  ''.concat(E, '-').concat(t, '-push-').concat(r.push),
                  r.push || 0 === r.push,
                ),
                (0, o.default)(
                  n,
                  ''.concat(E, '-').concat(t, '-pull-').concat(r.pull),
                  r.pull || 0 === r.pull,
                ),
                (0, o.default)(n, ''.concat(E, '-rtl'), 'rtl' === v),
                n),
              ))
          })
          var T = (0, l.default)(
              E,
              ((n = {}),
              (0, o.default)(n, ''.concat(E, '-').concat(O), void 0 !== O),
              (0, o.default)(n, ''.concat(E, '-order-').concat(y), y),
              (0, o.default)(n, ''.concat(E, '-offset-').concat(g), g),
              (0, o.default)(n, ''.concat(E, '-push-').concat(x), x),
              (0, o.default)(n, ''.concat(E, '-pull-').concat(w), w),
              n),
              _,
              A,
            ),
            R = (0, c.default)({}, C)
          return (
            h &&
              (R = (0, c.default)(
                (0, c.default)(
                  (0, c.default)(
                    {},
                    h[0] > 0 ? { paddingLeft: h[0] / 2, paddingRight: h[0] / 2 } : {},
                  ),
                  h[1] > 0 ? { paddingTop: h[1] / 2, paddingBottom: h[1] / 2 } : {},
                ),
                R,
              )),
            N &&
              ((R.flex = (function (e) {
                return 'number' === typeof e
                  ? ''.concat(e, ' ').concat(e, ' auto')
                  : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e)
                  ? '0 0 '.concat(e)
                  : e
              })(N)),
              'auto' !== N || !1 !== m || R.minWidth || (R.minWidth = 0)),
            i.createElement('div', (0, c.default)({}, P, { style: R, className: T, ref: t }), S)
          )
        })
      v.displayName = 'Col'
      var b = v
      t.default = b
    },
    hf16: function (e, t, n) {
      'use strict'
      var r = n('TqRt')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.responsiveMap = t.responsiveArray = void 0)
      var a = r(n('lSNA')),
        o = r(n('pVnL'))
      t.responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs']
      var c = {
        xs: '(max-width: 575px)',
        sm: '(min-width: 576px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 992px)',
        xl: '(min-width: 1200px)',
        xxl: '(min-width: 1600px)',
      }
      t.responsiveMap = c
      var u = new Map(),
        i = -1,
        l = {},
        s = {
          matchHandlers: {},
          dispatch: function (e) {
            return (
              (l = e),
              u.forEach(function (e) {
                return e(l)
              }),
              u.size >= 1
            )
          },
          subscribe: function (e) {
            return u.size || this.register(), (i += 1), u.set(i, e), e(l), i
          },
          unsubscribe: function (e) {
            u.delete(e), u.size || this.unregister()
          },
          unregister: function () {
            var e = this
            Object.keys(c).forEach(function (t) {
              var n = c[t],
                r = e.matchHandlers[n]
              null === r ||
                void 0 === r ||
                r.mql.removeListener(null === r || void 0 === r ? void 0 : r.listener)
            }),
              u.clear()
          },
          register: function () {
            var e = this
            Object.keys(c).forEach(function (t) {
              var n = c[t],
                r = function (n) {
                  var r = n.matches
                  e.dispatch((0, o.default)((0, o.default)({}, l), (0, a.default)({}, t, r)))
                },
                u = window.matchMedia(n)
              u.addListener(r), (e.matchHandlers[n] = { mql: u, listener: r }), r(u)
            })
          },
        }
      t.default = s
    },
  },
  [['NZBZ', 0, 1, 2, 3, 7, 9, 10]],
])
