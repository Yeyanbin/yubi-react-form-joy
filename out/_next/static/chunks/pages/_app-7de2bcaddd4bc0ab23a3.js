_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [15],
  {
    0: function (e, t, n) {
      n('74v/'), (e.exports = n('nOHt'))
    },
    '0r0h': function (e, t, n) {
      'use strict'
      var r = n('TqRt').default
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function e(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = []
          return (
            o.default.Children.forEach(t, function (t) {
              ;((void 0 !== t && null !== t) || n.keepEmpty) &&
                (Array.isArray(t)
                  ? (r = r.concat(e(t)))
                  : (0, a.isFragment)(t) && t.props
                  ? (r = r.concat(e(t.props.children, n)))
                  : r.push(t))
            }),
            r
          )
        })
      var o = r(n('q1tI')),
        a = n('t6Hw')
    },
    '2SVd': function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
      }
    },
    '5oMp': function (e, t, n) {
      'use strict'
      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
      }
    },
    '65HD': function (e, t, n) {
      'use strict'
      var r = n('284h'),
        o = n('TqRt')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = t.SiderContext = void 0)
      var a = o(n('lSNA')),
        i = o(n('pVnL')),
        s = o(n('J4zp')),
        c = r(n('q1tI')),
        u = o(n('TSYQ')),
        l = o(n('BGR+')),
        f = o(n('T1rO')),
        d = o(n('fEPi')),
        p = o(n('DFhj')),
        h = n('foUO'),
        g = n('vgIT'),
        v = o(n('FbXp')),
        m = function (e, t) {
          var n = {}
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]])
          }
          return n
        },
        y = {
          xs: '479.98px',
          sm: '575.98px',
          md: '767.98px',
          lg: '991.98px',
          xl: '1199.98px',
          xxl: '1599.98px',
        },
        b = c.createContext({})
      t.SiderContext = b
      var x = (function () {
          var e = 0
          return function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''
            return (e += 1), ''.concat(t).concat(e)
          }
        })(),
        O = function (e) {
          var t = e.prefixCls,
            n = e.className,
            r = e.trigger,
            o = e.children,
            O = e.defaultCollapsed,
            w = void 0 !== O && O,
            k = e.theme,
            j = void 0 === k ? 'dark' : k,
            C = e.style,
            S = void 0 === C ? {} : C,
            E = e.collapsible,
            N = void 0 !== E && E,
            L = e.reverseArrow,
            P = void 0 !== L && L,
            T = e.width,
            R = void 0 === T ? 200 : T,
            A = e.collapsedWidth,
            M = void 0 === A ? 80 : A,
            _ = e.zeroWidthTriggerStyle,
            I = e.breakpoint,
            F = e.onCollapse,
            U = e.onBreakpoint,
            z = m(e, [
              'prefixCls',
              'className',
              'trigger',
              'children',
              'defaultCollapsed',
              'theme',
              'style',
              'collapsible',
              'reverseArrow',
              'width',
              'collapsedWidth',
              'zeroWidthTriggerStyle',
              'breakpoint',
              'onCollapse',
              'onBreakpoint',
            ]),
            D = (0, c.useContext)(h.LayoutContext).siderHook,
            q = (0, c.useState)('collapsed' in z ? z.collapsed : w),
            B = (0, s.default)(q, 2),
            H = B[0],
            V = B[1],
            J = (0, c.useState)(!1),
            K = (0, s.default)(J, 2),
            W = K[0],
            G = K[1]
          ;(0, c.useEffect)(
            function () {
              'collapsed' in z && V(z.collapsed)
            },
            [z.collapsed],
          )
          var Q = function (e, t) {
              'collapsed' in z || V(e), F && F(e, t)
            },
            X = (0, c.useRef)()
          ;(X.current = function (e) {
            G(e.matches), U && U(e.matches), H !== e.matches && Q(e.matches, 'responsive')
          }),
            (0, c.useEffect)(function () {
              function e(e) {
                return X.current(e)
              }
              var t
              if ('undefined' !== typeof window) {
                var n = window.matchMedia
                if (n && I && I in y) {
                  t = n('(max-width: '.concat(y[I], ')'))
                  try {
                    t.addEventListener('change', e)
                  } catch (r) {
                    t.addListener(e)
                  }
                  e(t)
                }
              }
              return function () {
                try {
                  null === t || void 0 === t || t.removeEventListener('change', e)
                } catch (r) {
                  null === t || void 0 === t || t.removeListener(e)
                }
              }
            }, []),
            (0, c.useEffect)(function () {
              var e = x('ant-sider-')
              return (
                D.addSider(e),
                function () {
                  return D.removeSider(e)
                }
              )
            }, [])
          var Y = function () {
              Q(!H, 'clickTrigger')
            },
            $ = (0, c.useContext)(g.ConfigContext).getPrefixCls
          return c.createElement(
            b.Provider,
            { value: { siderCollapsed: H, collapsedWidth: M } },
            (function () {
              var e,
                s = $('layout-sider', t),
                h = (0, l.default)(z, ['collapsed']),
                g = H ? M : R,
                m = (0, v.default)(g) ? ''.concat(g, 'px') : String(g),
                y =
                  0 === parseFloat(String(M || 0))
                    ? c.createElement(
                        'span',
                        {
                          onClick: Y,
                          className: (0, u.default)(
                            ''.concat(s, '-zero-width-trigger'),
                            ''.concat(s, '-zero-width-trigger-').concat(P ? 'right' : 'left'),
                          ),
                          style: _,
                        },
                        r || c.createElement(f.default, null),
                      )
                    : null,
                b = {
                  expanded: P ? c.createElement(d.default, null) : c.createElement(p.default, null),
                  collapsed: P
                    ? c.createElement(p.default, null)
                    : c.createElement(d.default, null),
                }[H ? 'collapsed' : 'expanded'],
                x =
                  null !== r
                    ? y ||
                      c.createElement(
                        'div',
                        { className: ''.concat(s, '-trigger'), onClick: Y, style: { width: m } },
                        r || b,
                      )
                    : null,
                O = (0, i.default)((0, i.default)({}, S), {
                  flex: '0 0 '.concat(m),
                  maxWidth: m,
                  minWidth: m,
                  width: m,
                }),
                w = (0, u.default)(
                  s,
                  ''.concat(s, '-').concat(j),
                  ((e = {}),
                  (0, a.default)(e, ''.concat(s, '-collapsed'), !!H),
                  (0, a.default)(e, ''.concat(s, '-has-trigger'), N && null !== r && !y),
                  (0, a.default)(e, ''.concat(s, '-below'), !!W),
                  (0, a.default)(e, ''.concat(s, '-zero-width'), 0 === parseFloat(m)),
                  e),
                  n,
                )
              return c.createElement(
                'aside',
                (0, i.default)({ className: w }, h, { style: O }),
                c.createElement('div', { className: ''.concat(s, '-children') }, o),
                N || (W && y) ? x : null,
              )
            })(),
          )
        }
      t.default = O
    },
    '74v/': function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n('cha2')
        },
      ])
    },
    '8Rtz': function (e, t, n) {
      'use strict'
      var r = n('cpVT'),
        o = n('dhJC'),
        a = n('nKUr'),
        i = (n('q1tI'), n('YFqc')),
        s = n.n(i)
      function c(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      t.a = function (e) {
        var t = e.href,
          n = e.title,
          r = e.target,
          i = e.onClick,
          c = e.className,
          l = e.children,
          f = Object(o.a)(e, ['href', 'title', 'target', 'onClick', 'className', 'children']),
          d = '_blank' === r,
          p = d ? 'noreferrer noopener' : void 0,
          h = function (e) {
            null === i || void 0 === i || i(e)
          }
        return (function (e) {
          return !e || ('string' === typeof e && /^(https?:)?\/\//.test(e))
        })(t) || d
          ? Object(a.jsx)('a', {
              className: c,
              href: t,
              title: n,
              target: r,
              rel: p,
              onClick: h,
              children: l,
            })
          : Object(a.jsx)(
              s.a,
              u(
                u({ href: t }, f),
                {},
                { children: Object(a.jsx)('a', { onClick: h, children: l }) },
              ),
            )
      }
    },
    '9Odx': function (e, t, n) {
      'use strict'
      var r = n('TqRt'),
        o = n('cDf5')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = r(n('3tO9')),
        i = (function (e, t) {
          if (!t && e && e.__esModule) return e
          if (null === e || ('object' !== o(e) && 'function' !== typeof e)) return { default: e }
          var n = u(t)
          if (n && n.has(e)) return n.get(e)
          var r = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var i in e)
            if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var s = a ? Object.getOwnPropertyDescriptor(e, i) : null
              s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i])
            }
          ;(r.default = e), n && n.set(e, r)
          return r
        })(n('q1tI')),
        s = r(n('FhTr')),
        c = r(n('KQxl'))
      function u(e) {
        if ('function' !== typeof WeakMap) return null
        var t = new WeakMap(),
          n = new WeakMap()
        return (u = function (e) {
          return e ? n : t
        })(e)
      }
      var l = function (e, t) {
        return i.createElement(
          c.default,
          (0, a.default)((0, a.default)({}, e), {}, { ref: t, icon: s.default }),
        )
      }
      l.displayName = 'RightOutlined'
      var f = i.forwardRef(l)
      t.default = f
    },
    '9rSQ': function (e, t, n) {
      'use strict'
      var r = n('xTJ+')
      function o() {
        this.handlers = []
      }
      ;(o.prototype.use = function (e, t, n) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        )
      }),
        (o.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null)
        }),
        (o.prototype.forEach = function (e) {
          r.forEach(this.handlers, function (t) {
            null !== t && e(t)
          })
        }),
        (e.exports = o)
    },
    CgaS: function (e, t, n) {
      'use strict'
      var r = n('xTJ+'),
        o = n('MLWZ'),
        a = n('9rSQ'),
        i = n('UnBK'),
        s = n('SntB'),
        c = n('hIuj'),
        u = c.validators
      function l(e) {
        ;(this.defaults = e), (this.interceptors = { request: new a(), response: new a() })
      }
      ;(l.prototype.request = function (e) {
        'string' === typeof e ? ((e = arguments[1] || {}).url = arguments[0]) : (e = e || {}),
          (e = s(this.defaults, e)).method
            ? (e.method = e.method.toLowerCase())
            : this.defaults.method
            ? (e.method = this.defaults.method.toLowerCase())
            : (e.method = 'get')
        var t = e.transitional
        void 0 !== t &&
          c.assertOptions(
            t,
            {
              silentJSONParsing: u.transitional(u.boolean, '1.0.0'),
              forcedJSONParsing: u.transitional(u.boolean, '1.0.0'),
              clarifyTimeoutError: u.transitional(u.boolean, '1.0.0'),
            },
            !1,
          )
        var n = [],
          r = !0
        this.interceptors.request.forEach(function (t) {
          ;('function' === typeof t.runWhen && !1 === t.runWhen(e)) ||
            ((r = r && t.synchronous), n.unshift(t.fulfilled, t.rejected))
        })
        var o,
          a = []
        if (
          (this.interceptors.response.forEach(function (e) {
            a.push(e.fulfilled, e.rejected)
          }),
          !r)
        ) {
          var l = [i, void 0]
          for (
            Array.prototype.unshift.apply(l, n), l = l.concat(a), o = Promise.resolve(e);
            l.length;

          )
            o = o.then(l.shift(), l.shift())
          return o
        }
        for (var f = e; n.length; ) {
          var d = n.shift(),
            p = n.shift()
          try {
            f = d(f)
          } catch (h) {
            p(h)
            break
          }
        }
        try {
          o = i(f)
        } catch (h) {
          return Promise.reject(h)
        }
        for (; a.length; ) o = o.then(a.shift(), a.shift())
        return o
      }),
        (l.prototype.getUri = function (e) {
          return (
            (e = s(this.defaults, e)), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, '')
          )
        }),
        r.forEach(['delete', 'get', 'head', 'options'], function (e) {
          l.prototype[e] = function (t, n) {
            return this.request(s(n || {}, { method: e, url: t, data: (n || {}).data }))
          }
        }),
        r.forEach(['post', 'put', 'patch'], function (e) {
          l.prototype[e] = function (t, n, r) {
            return this.request(s(r || {}, { method: e, url: t, data: n }))
          }
        }),
        (e.exports = l)
    },
    DFhj: function (e, t, n) {
      'use strict'
      var r
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var o = (r = n('GGyF')) && r.__esModule ? r : { default: r }
      ;(t.default = o), (e.exports = o)
    },
    DfZB: function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t)
        }
      }
    },
    FbXp: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
      }
      t.default = r
    },
    FhTr: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      t.default = {
        icon: {
          tag: 'svg',
          attrs: { viewBox: '64 64 896 896', focusable: 'false' },
          children: [
            {
              tag: 'path',
              attrs: {
                d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
              },
            },
          ],
        },
        name: 'right',
        theme: 'outlined',
      }
    },
    GGyF: function (e, t, n) {
      'use strict'
      var r = n('TqRt'),
        o = n('cDf5')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = r(n('3tO9')),
        i = (function (e, t) {
          if (!t && e && e.__esModule) return e
          if (null === e || ('object' !== o(e) && 'function' !== typeof e)) return { default: e }
          var n = u(t)
          if (n && n.has(e)) return n.get(e)
          var r = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var i in e)
            if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var s = a ? Object.getOwnPropertyDescriptor(e, i) : null
              s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i])
            }
          ;(r.default = e), n && n.set(e, r)
          return r
        })(n('q1tI')),
        s = r(n('wgjA')),
        c = r(n('KQxl'))
      function u(e) {
        if ('function' !== typeof WeakMap) return null
        var t = new WeakMap(),
          n = new WeakMap()
        return (u = function (e) {
          return e ? n : t
        })(e)
      }
      var l = function (e, t) {
        return i.createElement(
          c.default,
          (0, a.default)((0, a.default)({}, e), {}, { ref: t, icon: s.default }),
        )
      }
      l.displayName = 'LeftOutlined'
      var f = i.forwardRef(l)
      t.default = f
    },
    HSsa: function (e, t, n) {
      'use strict'
      e.exports = function (e, t) {
        return function () {
          for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]
          return e.apply(t, n)
        }
      }
    },
    JEQr: function (e, t, n) {
      'use strict'
      ;(function (t) {
        var r = n('xTJ+'),
          o = n('yK9s'),
          a = n('OH9c'),
          i = { 'Content-Type': 'application/x-www-form-urlencoded' }
        function s(e, t) {
          !r.isUndefined(e) && r.isUndefined(e['Content-Type']) && (e['Content-Type'] = t)
        }
        var c = {
          transitional: { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
          adapter: (function () {
            var e
            return (
              ('undefined' !== typeof XMLHttpRequest ||
                ('undefined' !== typeof t &&
                  '[object process]' === Object.prototype.toString.call(t))) &&
                (e = n('tQ2B')),
              e
            )
          })(),
          transformRequest: [
            function (e, t) {
              return (
                o(t, 'Accept'),
                o(t, 'Content-Type'),
                r.isFormData(e) ||
                r.isArrayBuffer(e) ||
                r.isBuffer(e) ||
                r.isStream(e) ||
                r.isFile(e) ||
                r.isBlob(e)
                  ? e
                  : r.isArrayBufferView(e)
                  ? e.buffer
                  : r.isURLSearchParams(e)
                  ? (s(t, 'application/x-www-form-urlencoded;charset=utf-8'), e.toString())
                  : r.isObject(e) || (t && 'application/json' === t['Content-Type'])
                  ? (s(t, 'application/json'),
                    (function (e, t, n) {
                      if (r.isString(e))
                        try {
                          return (t || JSON.parse)(e), r.trim(e)
                        } catch (o) {
                          if ('SyntaxError' !== o.name) throw o
                        }
                      return (n || JSON.stringify)(e)
                    })(e))
                  : e
              )
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional,
                n = t && t.silentJSONParsing,
                o = t && t.forcedJSONParsing,
                i = !n && 'json' === this.responseType
              if (i || (o && r.isString(e) && e.length))
                try {
                  return JSON.parse(e)
                } catch (s) {
                  if (i) {
                    if ('SyntaxError' === s.name) throw a(s, this, 'E_JSON_PARSE')
                    throw s
                  }
                }
              return e
            },
          ],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300
          },
          headers: { common: { Accept: 'application/json, text/plain, */*' } },
        }
        r.forEach(['delete', 'get', 'head'], function (e) {
          c.headers[e] = {}
        }),
          r.forEach(['post', 'put', 'patch'], function (e) {
            c.headers[e] = r.merge(i)
          }),
          (e.exports = c)
      }).call(this, n('8oxB'))
    },
    Jv8k: function (e, t, n) {
      'use strict'
      var r = n('284h'),
        o = n('TqRt')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = o(n('pVnL')),
        i = o(n('lSNA')),
        s = o(n('lwsE')),
        c = o(n('W8MJ')),
        u = o(n('7W2i')),
        l = o(n('LQ03')),
        f = r(n('q1tI')),
        d = r(n('1j5w')),
        p = o(n('TSYQ')),
        h = o(n('mXFb')),
        g = o(n('Mp7j')),
        v = n('vgIT'),
        m = o(n('m4nH')),
        y = n('65HD'),
        b = o(n('StrI')),
        x = n('vCXI'),
        O = o(n('bRFr')),
        w = (function (e) {
          ;(0, u.default)(n, e)
          var t = (0, l.default)(n)
          function n(e) {
            var r
            return (
              (0, s.default)(this, n),
              ((r = t.call(this, e)).renderMenu = function (e) {
                var t = e.getPopupContainer,
                  n = e.getPrefixCls,
                  o = e.direction,
                  s = r.props,
                  c = s.prefixCls,
                  u = s.className,
                  l = s.theme,
                  h = s.expandIcon,
                  g = {
                    horizontal: { motionName: 'slide-up' },
                    inline: b.default,
                    other: { motionName: 'zoom-big' },
                  },
                  v = n('menu', c),
                  m = (0, p.default)(
                    ''.concat(v, '-').concat(l),
                    (0, i.default)({}, ''.concat(v, '-inline-collapsed'), r.getInlineCollapsed()),
                    u,
                  )
                return f.createElement(
                  O.default.Provider,
                  {
                    value: {
                      inlineCollapsed: r.getInlineCollapsed() || !1,
                      antdMenuTheme: l,
                      direction: o,
                    },
                  },
                  f.createElement(
                    d.default,
                    (0, a.default)({ getPopupContainer: t }, r.props, {
                      className: m,
                      prefixCls: v,
                      direction: o,
                      defaultMotions: g,
                      expandIcon: (0, x.cloneElement)(h, {
                        className: ''.concat(v, '-submenu-expand-icon'),
                      }),
                    }),
                  ),
                )
              }),
              (0, m.default)(
                !('inlineCollapsed' in e && 'inline' !== e.mode),
                'Menu',
                '`inlineCollapsed` should only be used when `mode` is inline.',
              ),
              (0, m.default)(
                !(void 0 !== e.siderCollapsed && 'inlineCollapsed' in e),
                'Menu',
                '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.',
              ),
              r
            )
          }
          return (
            (0, c.default)(n, [
              {
                key: 'getInlineCollapsed',
                value: function () {
                  var e = this.props,
                    t = e.inlineCollapsed,
                    n = e.siderCollapsed
                  return void 0 !== n ? n : t
                },
              },
              {
                key: 'render',
                value: function () {
                  return f.createElement(v.ConfigConsumer, null, this.renderMenu)
                },
              },
            ]),
            n
          )
        })(f.Component)
      w.defaultProps = { className: '', theme: 'light', focusable: !1 }
      var k = (function (e) {
        ;(0, u.default)(n, e)
        var t = (0, l.default)(n)
        function n() {
          return (0, s.default)(this, n), t.apply(this, arguments)
        }
        return (
          (0, c.default)(n, [
            {
              key: 'render',
              value: function () {
                var e = this
                return f.createElement(y.SiderContext.Consumer, null, function (t) {
                  return f.createElement(w, (0, a.default)({}, e.props, t))
                })
              },
            },
          ]),
          n
        )
      })(f.Component)
      ;(t.default = k),
        (k.Divider = d.Divider),
        (k.Item = g.default),
        (k.SubMenu = h.default),
        (k.ItemGroup = d.ItemGroup)
    },
    LYNF: function (e, t, n) {
      'use strict'
      var r = n('OH9c')
      e.exports = function (e, t, n, o, a) {
        var i = new Error(e)
        return r(i, t, n, o, a)
      }
    },
    Lmem: function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__)
      }
    },
    MLWZ: function (e, t, n) {
      'use strict'
      var r = n('xTJ+')
      function o(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']')
      }
      e.exports = function (e, t, n) {
        if (!t) return e
        var a
        if (n) a = n(t)
        else if (r.isURLSearchParams(t)) a = t.toString()
        else {
          var i = []
          r.forEach(t, function (e, t) {
            null !== e &&
              'undefined' !== typeof e &&
              (r.isArray(e) ? (t += '[]') : (e = [e]),
              r.forEach(e, function (e) {
                r.isDate(e) ? (e = e.toISOString()) : r.isObject(e) && (e = JSON.stringify(e)),
                  i.push(o(t) + '=' + o(e))
              }))
          }),
            (a = i.join('&'))
        }
        if (a) {
          var s = e.indexOf('#')
          ;-1 !== s && (e = e.slice(0, s)), (e += (-1 === e.indexOf('?') ? '?' : '&') + a)
        }
        return e
      }
    },
    Mp7j: function (e, t, n) {
      'use strict'
      var r = n('284h'),
        o = n('TqRt')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = o(n('pVnL')),
        i = o(n('lSNA')),
        s = o(n('lwsE')),
        c = o(n('W8MJ')),
        u = o(n('7W2i')),
        l = o(n('LQ03')),
        f = r(n('q1tI')),
        d = n('1j5w'),
        p = o(n('0r0h')),
        h = o(n('TSYQ')),
        g = o(n('bRFr')),
        v = o(n('d1El')),
        m = n('65HD'),
        y = n('vCXI'),
        b = function (e, t) {
          var n = {}
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]])
          }
          return n
        },
        x = (function (e) {
          ;(0, u.default)(n, e)
          var t = (0, l.default)(n)
          function n() {
            var e
            return (
              (0, s.default)(this, n),
              ((e = t.apply(this, arguments)).renderItem = function (t) {
                var n = t.siderCollapsed,
                  r = e.props,
                  o = r.level,
                  s = r.className,
                  c = r.children,
                  u = r.rootPrefixCls,
                  l = e.props,
                  m = l.title,
                  x = l.icon,
                  O = l.danger,
                  w = b(l, ['title', 'icon', 'danger'])
                return f.createElement(g.default.Consumer, null, function (t) {
                  var r,
                    l,
                    g = t.inlineCollapsed,
                    b = t.direction,
                    k = m
                  'undefined' === typeof m ? (k = 1 === o ? c : '') : !1 === m && (k = '')
                  var j = { title: k }
                  n || g || ((j.title = null), (j.visible = !1))
                  var C = (0, p.default)(c).length
                  return f.createElement(
                    v.default,
                    (0, a.default)({}, j, {
                      placement: 'rtl' === b ? 'left' : 'right',
                      overlayClassName: ''.concat(u, '-inline-collapsed-tooltip'),
                    }),
                    f.createElement(
                      d.Item,
                      (0, a.default)({}, w, {
                        className: (0, h.default)(
                          ((r = {}),
                          (0, i.default)(r, ''.concat(u, '-item-danger'), O),
                          (0, i.default)(
                            r,
                            ''.concat(u, '-item-only-child'),
                            1 === (x ? C + 1 : C),
                          ),
                          r),
                          s,
                        ),
                        title: m,
                      }),
                      (0, y.cloneElement)(x, {
                        className: (0, h.default)(
                          (0, y.isValidElement)(x)
                            ? null === (l = x.props) || void 0 === l
                              ? void 0
                              : l.className
                            : '',
                          ''.concat(u, '-item-icon'),
                        ),
                      }),
                      e.renderItemChildren(g),
                    ),
                  )
                })
              }),
              e
            )
          }
          return (
            (0, c.default)(n, [
              {
                key: 'renderItemChildren',
                value: function (e) {
                  var t = this.props,
                    n = t.icon,
                    r = t.children,
                    o = t.level,
                    a = t.rootPrefixCls
                  return !n || ((0, y.isValidElement)(r) && 'span' === r.type)
                    ? r && e && 1 === o && 'string' === typeof r
                      ? f.createElement(
                          'div',
                          { className: ''.concat(a, '-inline-collapsed-noicon') },
                          r.charAt(0),
                        )
                      : r
                    : f.createElement('span', null, r)
                },
              },
              {
                key: 'render',
                value: function () {
                  return f.createElement(m.SiderContext.Consumer, null, this.renderItem)
                },
              },
            ]),
            n
          )
        })(f.Component)
      ;(t.default = x), (x.isMenuItem = !0)
    },
    N1Uf: function (e) {
      e.exports = JSON.parse(
        '{"home":{"user":"\u8fdb\u5165\u7528\u6237\u9875","articles":"\u8fdb\u884c\u6587\u7ae0\u5217\u8868\u9875","change_lang":"\u5207\u6362\u82f1\u6587"},"user":{"title":"\u7528\u6237\u9875","intro":"\u6848\u4f8b\uff1a\u4ece redux-saga \u4e2d\u8bf7\u6c42\u6570\u636e","info":"\u7528\u6237\u4fe1\u606f","id":"\u7528\u6237ID","username":"\u7528\u6237\u540d","name":"\u59d3\u540d"},"articles":{"title":"\u6587\u7ae0\u5217\u8868\u9875","intro":"\u6848\u4f8b\uff1a\u4ece getStaticProps \u4e2d\u83b7\u53d6\u6570\u636e","article_id":"\u6587\u7ae0ID","article_title":"\u6587\u7ae0\u6807\u9898","article_body":"\u6587\u7ae0\u5185\u5bb9"},"footer":{"copyright":"\u7248\u6743 \xa92023"},"error":{"404":"\u62b1\u6b49\uff0c\u8be5\u9875\u9762\u4e0d\u5b58\u5728"},"back_home":"\u56de\u5230\u4e3b\u9875"}',
      )
    },
    OH9c: function (e, t, n) {
      'use strict'
      e.exports = function (e, t, n, r, o) {
        return (
          (e.config = t),
          n && (e.code = n),
          (e.request = r),
          (e.response = o),
          (e.isAxiosError = !0),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
            }
          }),
          e
        )
      }
    },
    OTTw: function (e, t, n) {
      'use strict'
      var r = n('xTJ+')
      e.exports = r.isStandardBrowserEnv()
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement('a')
            function o(e) {
              var r = e
              return (
                t && (n.setAttribute('href', r), (r = n.href)),
                n.setAttribute('href', r),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, '') : '',
                  hash: n.hash ? n.hash.replace(/^#/, '') : '',
                  hostname: n.hostname,
                  port: n.port,
                  pathname: '/' === n.pathname.charAt(0) ? n.pathname : '/' + n.pathname,
                }
              )
            }
            return (
              (e = o(window.location.href)),
              function (t) {
                var n = r.isString(t) ? o(t) : t
                return n.protocol === e.protocol && n.host === e.host
              }
            )
          })()
        : function () {
            return !0
          }
    },
    PSzr: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      t.default = {
        icon: {
          tag: 'svg',
          attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
          children: [
            {
              tag: 'path',
              attrs: {
                d: 'M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z',
              },
            },
          ],
        },
        name: 'bars',
        theme: 'outlined',
      }
    },
    'Rn+g': function (e, t, n) {
      'use strict'
      var r = n('LYNF')
      e.exports = function (e, t, n) {
        var o = n.config.validateStatus
        n.status && o && !o(n.status)
          ? t(r('Request failed with status code ' + n.status, n.config, null, n.request, n))
          : e(n)
      }
    },
    SgzI: function (e) {
      e.exports = JSON.parse(
        '{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}',
      )
    },
    SntB: function (e, t, n) {
      'use strict'
      var r = n('xTJ+')
      e.exports = function (e, t) {
        t = t || {}
        var n = {},
          o = ['url', 'method', 'data'],
          a = ['headers', 'auth', 'proxy', 'params'],
          i = [
            'baseURL',
            'transformRequest',
            'transformResponse',
            'paramsSerializer',
            'timeout',
            'timeoutMessage',
            'withCredentials',
            'adapter',
            'responseType',
            'xsrfCookieName',
            'xsrfHeaderName',
            'onUploadProgress',
            'onDownloadProgress',
            'decompress',
            'maxContentLength',
            'maxBodyLength',
            'maxRedirects',
            'transport',
            'httpAgent',
            'httpsAgent',
            'cancelToken',
            'socketPath',
            'responseEncoding',
          ],
          s = ['validateStatus']
        function c(e, t) {
          return r.isPlainObject(e) && r.isPlainObject(t)
            ? r.merge(e, t)
            : r.isPlainObject(t)
            ? r.merge({}, t)
            : r.isArray(t)
            ? t.slice()
            : t
        }
        function u(o) {
          r.isUndefined(t[o])
            ? r.isUndefined(e[o]) || (n[o] = c(void 0, e[o]))
            : (n[o] = c(e[o], t[o]))
        }
        r.forEach(o, function (e) {
          r.isUndefined(t[e]) || (n[e] = c(void 0, t[e]))
        }),
          r.forEach(a, u),
          r.forEach(i, function (o) {
            r.isUndefined(t[o])
              ? r.isUndefined(e[o]) || (n[o] = c(void 0, e[o]))
              : (n[o] = c(void 0, t[o]))
          }),
          r.forEach(s, function (r) {
            r in t ? (n[r] = c(e[r], t[r])) : r in e && (n[r] = c(void 0, e[r]))
          })
        var l = o.concat(a).concat(i).concat(s),
          f = Object.keys(e)
            .concat(Object.keys(t))
            .filter(function (e) {
              return -1 === l.indexOf(e)
            })
        return r.forEach(f, u), n
      }
    },
    StrI: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = function () {
          return { height: 0, opacity: 0 }
        },
        o = function (e) {
          return { height: e.scrollHeight, opacity: 1 }
        },
        a = function (e, t) {
          return 'height' === t.propertyName
        },
        i = {
          motionName: 'ant-motion-collapse',
          onAppearStart: r,
          onEnterStart: r,
          onAppearActive: o,
          onEnterActive: o,
          onLeaveStart: function (e) {
            return { height: e.offsetHeight }
          },
          onLeaveActive: r,
          onAppearEnd: a,
          onEnterEnd: a,
          onLeaveEnd: a,
          motionDeadline: 500,
        }
      t.default = i
    },
    T1rO: function (e, t, n) {
      'use strict'
      var r
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var o = (r = n('zdCA')) && r.__esModule ? r : { default: r }
      ;(t.default = o), (e.exports = o)
    },
    TpwP: function (e, t, n) {},
    UnBK: function (e, t, n) {
      'use strict'
      var r = n('xTJ+'),
        o = n('xAGQ'),
        a = n('Lmem'),
        i = n('JEQr')
      function s(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
      }
      e.exports = function (e) {
        return (
          s(e),
          (e.headers = e.headers || {}),
          (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
          (e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers)),
          r.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (t) {
            delete e.headers[t]
          }),
          (e.adapter || i.adapter)(e).then(
            function (t) {
              return s(e), (t.data = o.call(e, t.data, t.headers, e.transformResponse)), t
            },
            function (t) {
              return (
                a(t) ||
                  (s(e),
                  t &&
                    t.response &&
                    (t.response.data = o.call(
                      e,
                      t.response.data,
                      t.response.headers,
                      e.transformResponse,
                    ))),
                Promise.reject(t)
              )
            },
          )
        )
      }
    },
    WRJ3: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.Normalize = t.normalize = void 0)
      var r = n('vOnD'),
        o = (0, r.css)([
          'html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}',
        ])
      t.normalize = o
      var a = (0, r.createGlobalStyle)(o)
      t.Normalize = a
      var i = o
      t.default = i
    },
    XwJu: function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        return 'object' === typeof e && !0 === e.isAxiosError
      }
    },
    YFqc: function (e, t, n) {
      e.exports = n('cTJO')
    },
    bRFr: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var r = (0, n('q1tI').createContext)({ inlineCollapsed: !1 })
      t.default = r
    },
    cTJO: function (e, t, n) {
      'use strict'
      var r = n('zoAU'),
        o = n('7KCV')
      ;(t.__esModule = !0), (t.default = void 0)
      var a = o(n('q1tI')),
        i = n('elyg'),
        s = n('nOHt'),
        c = n('vNVm'),
        u = {}
      function l(e, t, n, r) {
        if ((0, i.isLocalURL)(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0
          })
          var o = r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale
          u[t + '%' + n + (o ? '%' + o : '')] = !0
        }
      }
      var f = function (e) {
        var t = !1 !== e.prefetch,
          n = (0, s.useRouter)(),
          o = (n && n.pathname) || '/',
          f = a.default.useMemo(
            function () {
              var t = (0, i.resolveHref)(o, e.href, !0),
                n = r(t, 2),
                a = n[0],
                s = n[1]
              return { href: a, as: e.as ? (0, i.resolveHref)(o, e.as) : s || a }
            },
            [o, e.href, e.as],
          ),
          d = f.href,
          p = f.as,
          h = e.children,
          g = e.replace,
          v = e.shallow,
          m = e.scroll,
          y = e.locale
        'string' === typeof h && (h = a.default.createElement('a', null, h))
        var b = a.Children.only(h),
          x = b && 'object' === typeof b && b.ref,
          O = (0, c.useIntersection)({ rootMargin: '200px' }),
          w = r(O, 2),
          k = w[0],
          j = w[1],
          C = a.default.useCallback(
            function (e) {
              k(e), x && ('function' === typeof x ? x(e) : 'object' === typeof x && (x.current = e))
            },
            [x, k],
          )
        ;(0, a.useEffect)(
          function () {
            var e = j && t && (0, i.isLocalURL)(d),
              r = 'undefined' !== typeof y ? y : n && n.locale,
              o = u[d + '%' + p + (r ? '%' + r : '')]
            e && !o && l(n, d, p, { locale: r })
          },
          [p, d, j, y, t, n],
        )
        var S = {
          ref: C,
          onClick: function (e) {
            b.props && 'function' === typeof b.props.onClick && b.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, o, a, s, c) {
                  ;('A' !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      )
                    })(e) &&
                      (0, i.isLocalURL)(n))) &&
                    (e.preventDefault(),
                    null == s && (s = r.indexOf('#') < 0),
                    t[o ? 'replace' : 'push'](n, r, { shallow: a, locale: c }).then(function (e) {
                      e && s && (window.scrollTo(0, 0), document.body.focus())
                    }))
                })(e, n, d, p, g, v, m, y)
          },
          onMouseEnter: function (e) {
            ;(0, i.isLocalURL)(d) &&
              (b.props && 'function' === typeof b.props.onMouseEnter && b.props.onMouseEnter(e),
              l(n, d, p, { priority: !0 }))
          },
        }
        return (
          (e.passHref || ('a' === b.type && !('href' in b.props))) &&
            (S.href = (0, i.addBasePath)(
              (0, i.addLocale)(
                p,
                'undefined' !== typeof y ? y : n && n.locale,
                n && n.defaultLocale,
              ),
            )),
          a.default.cloneElement(b, S)
        )
      }
      t.default = f
    },
    cha2: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('cpVT'),
        o = n('nKUr'),
        a = n('q1tI'),
        i = n.n(a),
        s = function (e) {
          return '@@redux-saga/' + e
        },
        c = s('CANCEL_PROMISE'),
        u = s('CHANNEL_END'),
        l = s('IO'),
        f = s('MATCH'),
        d = s('MULTICAST'),
        p = s('SAGA_ACTION'),
        h = s('SELF_CANCELLATION'),
        g = s('TASK'),
        v = s('TASK_CANCEL'),
        m = s('TERMINATE'),
        y = s('LOCATION'),
        b = n('wx14'),
        x = n('zLVn'),
        O = function (e) {
          return null === e || void 0 === e
        },
        w = function (e) {
          return null !== e && void 0 !== e
        },
        k = function (e) {
          return 'function' === typeof e
        },
        j = function (e) {
          return 'string' === typeof e
        },
        C = Array.isArray,
        S = function (e) {
          return e && k(e.then)
        },
        E = function (e) {
          return e && k(e.next) && k(e.throw)
        },
        N = function e(t) {
          return t && (j(t) || T(t) || k(t) || (C(t) && t.every(e)))
        },
        L = function (e) {
          return e && k(e.take) && k(e.close)
        },
        P = function (e) {
          return k(e) && e.hasOwnProperty('toString')
        },
        T = function (e) {
          return (
            Boolean(e) &&
            'function' === typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
          )
        }
      var R = (function (e) {
          return function () {
            return e
          }
        })(!0),
        A = function () {}
      var M = function (e) {
        return e
      }
      'function' === typeof Symbol && Symbol.asyncIterator && Symbol.asyncIterator
      var _ = function (e, t) {
        Object(b.a)(e, t),
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(t).forEach(function (n) {
              e[n] = t[n]
            })
      }
      function I(e, t) {
        var n = e.indexOf(t)
        n >= 0 && e.splice(n, 1)
      }
      function F(e) {
        var t = !1
        return function () {
          t || ((t = !0), e())
        }
      }
      var U = function (e) {
          throw e
        },
        z = function (e) {
          return { value: e, done: !0 }
        }
      function D(e, t, n) {
        void 0 === t && (t = U), void 0 === n && (n = 'iterator')
        var r = { meta: { name: n }, next: e, throw: t, return: z, isSagaIterator: !0 }
        return (
          'undefined' !== typeof Symbol &&
            (r[Symbol.iterator] = function () {
              return r
            }),
          r
        )
      }
      function q(e, t) {
        var n = t.sagaStack
        console.error(e), console.error(n)
      }
      var B = function (e) {
          return Array.apply(null, new Array(e))
        },
        H = function (e) {
          return function (t) {
            return e(Object.defineProperty(t, p, { value: !0 }))
          }
        },
        V = function (e) {
          return e === m
        },
        J = function (e) {
          return e === v
        },
        K = function (e) {
          return V(e) || J(e)
        }
      function W(e, t) {
        var n = Object.keys(e),
          r = n.length
        var o,
          a = 0,
          i = C(e) ? B(r) : {},
          s = {}
        return (
          n.forEach(function (e) {
            var n = function (n, s) {
              o || (s || K(n) ? (t.cancel(), t(n, s)) : ((i[e] = n), ++a === r && ((o = !0), t(i))))
            }
            ;(n.cancel = A), (s[e] = n)
          }),
          (t.cancel = function () {
            o ||
              ((o = !0),
              n.forEach(function (e) {
                return s[e].cancel()
              }))
          }),
          s
        )
      }
      function G(e) {
        return { name: e.name || 'anonymous', location: Q(e) }
      }
      function Q(e) {
        return e[y]
      }
      function X(e, t) {
        void 0 === e && (e = 10)
        var n = new Array(e),
          r = 0,
          o = 0,
          a = 0,
          i = function (t) {
            ;(n[o] = t), (o = (o + 1) % e), r++
          },
          s = function () {
            if (0 != r) {
              var t = n[a]
              return (n[a] = null), r--, (a = (a + 1) % e), t
            }
          },
          c = function () {
            for (var e = []; r; ) e.push(s())
            return e
          }
        return {
          isEmpty: function () {
            return 0 == r
          },
          put: function (s) {
            var u
            if (r < e) i(s)
            else
              switch (t) {
                case 1:
                  throw new Error("Channel's Buffer overflow!")
                case 3:
                  ;(n[o] = s), (a = o = (o + 1) % e)
                  break
                case 4:
                  ;(u = 2 * e),
                    (n = c()),
                    (r = n.length),
                    (o = n.length),
                    (a = 0),
                    (n.length = u),
                    (e = u),
                    i(s)
              }
          },
          take: s,
          flush: c,
        }
      }
      var Y = function (e) {
          return X(e, 4)
        },
        $ = function (e, t) {
          var n
          return ((n = {})[l] = !0), (n.combinator = !1), (n.type = e), (n.payload = t), n
        }
      function Z(e, t) {
        return (
          void 0 === e && (e = '*'),
          N(e)
            ? (w(t) &&
                console.warn(
                  'take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types',
                ),
              $('TAKE', { pattern: e }))
            : L((n = e)) && n[d] && w(t) && N(t)
            ? $('TAKE', { channel: e, pattern: t })
            : L(e)
            ? (w(t) &&
                console.warn(
                  'take(channel) takes one argument but two were provided. Second argument is ignored.',
                ),
              $('TAKE', { channel: e }))
            : void 0
        )
        var n
      }
      function ee(e, t) {
        return O(t) && ((t = e), (e = void 0)), $('PUT', { channel: e, action: t })
      }
      function te(e) {
        var t = $('ALL', e)
        return (t.combinator = !0), t
      }
      function ne(e, t) {
        var n,
          r = null
        return (
          k(e)
            ? (n = e)
            : (C(e) ? ((r = e[0]), (n = e[1])) : ((r = e.context), (n = e.fn)),
              r && j(n) && k(r[n]) && (n = r[n])),
          { context: r, fn: n, args: t }
        )
      }
      function re(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r]
        return $('CALL', ne(e, n))
      }
      function oe(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r]
        return $('FORK', ne(e, n))
      }
      function ae(e) {
        return void 0 === e && (e = h), $('CANCEL', e)
      }
      var ie = n('ANjH')
      function se() {
        var e = {}
        return (
          (e.promise = new Promise(function (t, n) {
            ;(e.resolve = t), (e.reject = n)
          })),
          e
        )
      }
      var ce = se,
        ue = [],
        le = 0
      function fe(e) {
        try {
          he(), e()
        } finally {
          ge()
        }
      }
      function de(e) {
        ue.push(e), le || (he(), ve())
      }
      function pe(e) {
        try {
          return he(), e()
        } finally {
          ve()
        }
      }
      function he() {
        le++
      }
      function ge() {
        le--
      }
      function ve() {
        var e
        for (ge(); !le && void 0 !== (e = ue.shift()); ) fe(e)
      }
      var me = function (e) {
          return function (t) {
            return e.some(function (e) {
              return we(e)(t)
            })
          }
        },
        ye = function (e) {
          return function (t) {
            return e(t)
          }
        },
        be = function (e) {
          return function (t) {
            return t.type === String(e)
          }
        },
        xe = function (e) {
          return function (t) {
            return t.type === e
          }
        },
        Oe = function () {
          return R
        }
      function we(e) {
        var t = '*' === e ? Oe : j(e) ? be : C(e) ? me : P(e) ? be : k(e) ? ye : T(e) ? xe : null
        if (null === t) throw new Error('invalid pattern: ' + e)
        return t(e)
      }
      var ke = { type: u },
        je = function (e) {
          return e && e.type === u
        }
      function Ce(e) {
        void 0 === e && (e = Y())
        var t = !1,
          n = []
        return {
          take: function (r) {
            t && e.isEmpty()
              ? r(ke)
              : e.isEmpty()
              ? (n.push(r),
                (r.cancel = function () {
                  I(n, r)
                }))
              : r(e.take())
          },
          put: function (r) {
            if (!t) {
              if (0 === n.length) return e.put(r)
              n.shift()(r)
            }
          },
          flush: function (n) {
            t && e.isEmpty() ? n(ke) : n(e.flush())
          },
          close: function () {
            if (!t) {
              t = !0
              var e = n
              n = []
              for (var r = 0, o = e.length; r < o; r++) {
                ;(0, e[r])(ke)
              }
            }
          },
        }
      }
      function Se() {
        var e = (function () {
            var e,
              t = !1,
              n = [],
              r = n,
              o = function () {
                r === n && (r = n.slice())
              },
              a = function () {
                t = !0
                var e = (n = r)
                ;(r = []),
                  e.forEach(function (e) {
                    e(ke)
                  })
              }
            return (
              ((e = {})[d] = !0),
              (e.put = function (e) {
                if (!t)
                  if (je(e)) a()
                  else
                    for (var o = (n = r), i = 0, s = o.length; i < s; i++) {
                      var c = o[i]
                      c[f](e) && (c.cancel(), c(e))
                    }
              }),
              (e.take = function (e, n) {
                void 0 === n && (n = Oe),
                  t
                    ? e(ke)
                    : ((e[f] = n),
                      o(),
                      r.push(e),
                      (e.cancel = F(function () {
                        o(), I(r, e)
                      })))
              }),
              (e.close = a),
              e
            )
          })(),
          t = e.put
        return (
          (e.put = function (e) {
            e[p]
              ? t(e)
              : de(function () {
                  t(e)
                })
          }),
          e
        )
      }
      function Ee(e, t) {
        var n = e[c]
        k(n) && (t.cancel = n),
          e.then(t, function (e) {
            t(e, !0)
          })
      }
      var Ne,
        Le = 0,
        Pe = function () {
          return ++Le
        }
      function Te(e) {
        e.isRunning() && e.cancel()
      }
      var Re =
        (((Ne = {}).TAKE = function (e, t, n) {
          var r = t.channel,
            o = void 0 === r ? e.channel : r,
            a = t.pattern,
            i = t.maybe,
            s = function (e) {
              e instanceof Error ? n(e, !0) : !je(e) || i ? n(e) : n(m)
            }
          try {
            o.take(s, w(a) ? we(a) : null)
          } catch (c) {
            return void n(c, !0)
          }
          n.cancel = s.cancel
        }),
        (Ne.PUT = function (e, t, n) {
          var r = t.channel,
            o = t.action,
            a = t.resolve
          de(function () {
            var t
            try {
              t = (r ? r.put : e.dispatch)(o)
            } catch (i) {
              return void n(i, !0)
            }
            a && S(t) ? Ee(t, n) : n(t)
          })
        }),
        (Ne.ALL = function (e, t, n, r) {
          var o = r.digestEffect,
            a = Le,
            i = Object.keys(t)
          if (0 !== i.length) {
            var s = W(t, n)
            i.forEach(function (e) {
              o(t[e], a, s[e], e)
            })
          } else n(C(t) ? [] : {})
        }),
        (Ne.RACE = function (e, t, n, r) {
          var o = r.digestEffect,
            a = Le,
            i = Object.keys(t),
            s = C(t) ? B(i.length) : {},
            c = {},
            u = !1
          i.forEach(function (e) {
            var t = function (t, r) {
              u || (r || K(t) ? (n.cancel(), n(t, r)) : (n.cancel(), (u = !0), (s[e] = t), n(s)))
            }
            ;(t.cancel = A), (c[e] = t)
          }),
            (n.cancel = function () {
              u ||
                ((u = !0),
                i.forEach(function (e) {
                  return c[e].cancel()
                }))
            }),
            i.forEach(function (e) {
              u || o(t[e], a, c[e], e)
            })
        }),
        (Ne.CALL = function (e, t, n, r) {
          var o = t.context,
            a = t.fn,
            i = t.args,
            s = r.task
          try {
            var c = a.apply(o, i)
            if (S(c)) return void Ee(c, n)
            if (E(c)) return void qe(e, c, s.context, Le, G(a), !1, n)
            n(c)
          } catch (u) {
            n(u, !0)
          }
        }),
        (Ne.CPS = function (e, t, n) {
          var r = t.context,
            o = t.fn,
            a = t.args
          try {
            var i = function (e, t) {
              O(e) ? n(t) : n(e, !0)
            }
            o.apply(r, a.concat(i)), i.cancel && (n.cancel = i.cancel)
          } catch (s) {
            n(s, !0)
          }
        }),
        (Ne.FORK = function (e, t, n, r) {
          var o = t.context,
            a = t.fn,
            i = t.args,
            s = t.detached,
            c = r.task,
            u = (function (e) {
              var t = e.context,
                n = e.fn,
                r = e.args
              try {
                var o = n.apply(t, r)
                if (E(o)) return o
                var a = !1
                return D(function (e) {
                  return a ? { value: e, done: !0 } : ((a = !0), { value: o, done: !S(o) })
                })
              } catch (i) {
                return D(function () {
                  throw i
                })
              }
            })({ context: o, fn: a, args: i }),
            l = (function (e, t) {
              return e.isSagaIterator ? { name: e.meta.name } : G(t)
            })(u, a)
          pe(function () {
            var t = qe(e, u, c.context, Le, l, s, void 0)
            s
              ? n(t)
              : t.isRunning()
              ? (c.queue.addTask(t), n(t))
              : t.isAborted()
              ? c.queue.abort(t.error())
              : n(t)
          })
        }),
        (Ne.JOIN = function (e, t, n, r) {
          var o = r.task,
            a = function (e, t) {
              if (e.isRunning()) {
                var n = { task: o, cb: t }
                ;(t.cancel = function () {
                  e.isRunning() && I(e.joiners, n)
                }),
                  e.joiners.push(n)
              } else e.isAborted() ? t(e.error(), !0) : t(e.result())
            }
          if (C(t)) {
            if (0 === t.length) return void n([])
            var i = W(t, n)
            t.forEach(function (e, t) {
              a(e, i[t])
            })
          } else a(t, n)
        }),
        (Ne.CANCEL = function (e, t, n, r) {
          var o = r.task
          t === h ? Te(o) : C(t) ? t.forEach(Te) : Te(t), n()
        }),
        (Ne.SELECT = function (e, t, n) {
          var r = t.selector,
            o = t.args
          try {
            n(r.apply(void 0, [e.getState()].concat(o)))
          } catch (a) {
            n(a, !0)
          }
        }),
        (Ne.ACTION_CHANNEL = function (e, t, n) {
          var r = t.pattern,
            o = Ce(t.buffer),
            a = we(r),
            i = function t(n) {
              je(n) || e.channel.take(t, a), o.put(n)
            },
            s = o.close
          ;(o.close = function () {
            i.cancel(), s()
          }),
            e.channel.take(i, a),
            n(o)
        }),
        (Ne.CANCELLED = function (e, t, n, r) {
          n(r.task.isCancelled())
        }),
        (Ne.FLUSH = function (e, t, n) {
          t.flush(n)
        }),
        (Ne.GET_CONTEXT = function (e, t, n, r) {
          n(r.task.context[t])
        }),
        (Ne.SET_CONTEXT = function (e, t, n, r) {
          var o = r.task
          _(o.context, t), n()
        }),
        Ne)
      function Ae(e, t) {
        return e + '?' + t
      }
      function Me(e) {
        var t = e.name,
          n = e.location
        return n ? t + '  ' + Ae(n.fileName, n.lineNumber) : t
      }
      function _e(e) {
        var t = (function (e, t) {
          var n
          return (n = []).concat.apply(n, t.map(e))
        })(function (e) {
          return e.cancelledTasks
        }, e)
        return t.length ? ['Tasks cancelled due to error:'].concat(t).join('\n') : ''
      }
      var Ie = null,
        Fe = [],
        Ue = function () {
          ;(Ie = null), (Fe.length = 0)
        },
        ze = function () {
          var e = Fe[0],
            t = Fe.slice(1),
            n = e.crashedEffect
              ? (function (e) {
                  var t = Q(e)
                  return t ? t.code + '  ' + Ae(t.fileName, t.lineNumber) : ''
                })(e.crashedEffect)
              : null
          return [
            'The above error occurred in task ' +
              Me(e.meta) +
              (n ? ' \n when executing effect ' + n : ''),
          ]
            .concat(
              t.map(function (e) {
                return '    created by ' + Me(e.meta)
              }),
              [_e(Fe)],
            )
            .join('\n')
        }
      function De(e, t, n, r, o, a, i) {
        var s
        void 0 === i && (i = A)
        var c,
          u,
          l = 0,
          f = null,
          d = [],
          p = Object.create(n),
          h = (function (e, t, n) {
            var r,
              o = [],
              a = !1
            function i(e) {
              t(), c(), n(e, !0)
            }
            function s(t) {
              o.push(t),
                (t.cont = function (s, c) {
                  a ||
                    (I(o, t),
                    (t.cont = A),
                    c ? i(s) : (t === e && (r = s), o.length || ((a = !0), n(r))))
                })
            }
            function c() {
              a ||
                ((a = !0),
                o.forEach(function (e) {
                  ;(e.cont = A), e.cancel()
                }),
                (o = []))
            }
            return (
              s(e),
              {
                addTask: s,
                cancelAll: c,
                abort: i,
                getTasks: function () {
                  return o
                },
              }
            )
          })(
            t,
            function () {
              d.push.apply(
                d,
                h.getTasks().map(function (e) {
                  return e.meta.name
                }),
              )
            },
            m,
          )
        function m(t, n) {
          if (n) {
            if (
              ((l = 2),
              ((a = { meta: o, cancelledTasks: d }).crashedEffect = Ie),
              Fe.push(a),
              y.isRoot)
            ) {
              var r = ze()
              Ue(), e.onError(t, { sagaStack: r })
            }
            ;(u = t), f && f.reject(t)
          } else t === v ? (l = 1) : 1 !== l && (l = 3), (c = t), f && f.resolve(t)
          var a
          y.cont(t, n),
            y.joiners.forEach(function (e) {
              e.cb(t, n)
            }),
            (y.joiners = null)
        }
        var y =
          (((s = {})[g] = !0),
          (s.id = r),
          (s.meta = o),
          (s.isRoot = a),
          (s.context = p),
          (s.joiners = []),
          (s.queue = h),
          (s.cancel = function () {
            0 === l && ((l = 1), h.cancelAll(), m(v, !1))
          }),
          (s.cont = i),
          (s.end = m),
          (s.setContext = function (e) {
            _(p, e)
          }),
          (s.toPromise = function () {
            return f || ((f = ce()), 2 === l ? f.reject(u) : 0 !== l && f.resolve(c)), f.promise
          }),
          (s.isRunning = function () {
            return 0 === l
          }),
          (s.isCancelled = function () {
            return 1 === l || (0 === l && 1 === t.status)
          }),
          (s.isAborted = function () {
            return 2 === l
          }),
          (s.result = function () {
            return c
          }),
          (s.error = function () {
            return u
          }),
          s)
        return y
      }
      function qe(e, t, n, r, o, a, i) {
        var s = e.finalizeRunEffect(function (t, n, r) {
          if (S(t)) Ee(t, r)
          else if (E(t)) qe(e, t, u.context, n, o, !1, r)
          else if (t && t[l]) {
            ;(0, Re[t.type])(e, t.payload, r, f)
          } else r(t)
        })
        d.cancel = A
        var c = {
            meta: o,
            cancel: function () {
              0 === c.status && ((c.status = 1), d(v))
            },
            status: 0,
          },
          u = De(e, c, n, r, o, a, i),
          f = { task: u, digestEffect: p }
        return i && (i.cancel = u.cancel), d(), u
        function d(e, n) {
          try {
            var o
            n
              ? ((o = t.throw(e)), Ue())
              : J(e)
              ? ((c.status = 1),
                d.cancel(),
                (o = k(t.return) ? t.return(v) : { done: !0, value: v }))
              : (o = V(e) ? (k(t.return) ? t.return() : { done: !0 }) : t.next(e)),
              o.done ? (1 !== c.status && (c.status = 3), c.cont(o.value)) : p(o.value, r, d)
          } catch (a) {
            if (1 === c.status) throw a
            ;(c.status = 2), c.cont(a, !0)
          }
        }
        function p(t, n, r, o) {
          void 0 === o && (o = '')
          var a,
            i = Pe()
          function c(n, o) {
            a ||
              ((a = !0),
              (r.cancel = A),
              e.sagaMonitor &&
                (o ? e.sagaMonitor.effectRejected(i, n) : e.sagaMonitor.effectResolved(i, n)),
              o &&
                (function (e) {
                  Ie = e
                })(t),
              r(n, o))
          }
          e.sagaMonitor &&
            e.sagaMonitor.effectTriggered({ effectId: i, parentEffectId: n, label: o, effect: t }),
            (c.cancel = A),
            (r.cancel = function () {
              a ||
                ((a = !0),
                c.cancel(),
                (c.cancel = A),
                e.sagaMonitor && e.sagaMonitor.effectCancelled(i))
            }),
            s(t, i, c)
        }
      }
      function Be(e, t) {
        var n = e.channel,
          r = void 0 === n ? Se() : n,
          o = e.dispatch,
          a = e.getState,
          i = e.context,
          s = void 0 === i ? {} : i,
          c = e.sagaMonitor,
          u = e.effectMiddlewares,
          l = e.onError,
          f = void 0 === l ? q : l
        for (var d = arguments.length, p = new Array(d > 2 ? d - 2 : 0), h = 2; h < d; h++)
          p[h - 2] = arguments[h]
        var g = t.apply(void 0, p)
        var v,
          m = Pe()
        if (
          (c &&
            ((c.rootSagaStarted = c.rootSagaStarted || A),
            (c.effectTriggered = c.effectTriggered || A),
            (c.effectResolved = c.effectResolved || A),
            (c.effectRejected = c.effectRejected || A),
            (c.effectCancelled = c.effectCancelled || A),
            (c.actionDispatched = c.actionDispatched || A),
            c.rootSagaStarted({ effectId: m, saga: t, args: p })),
          u)
        ) {
          var y = ie.c.apply(void 0, u)
          v = function (e) {
            return function (t, n, r) {
              return y(function (t) {
                return e(t, n, r)
              })(t)
            }
          }
        } else v = M
        var b = {
          channel: r,
          dispatch: H(o),
          getState: a,
          sagaMonitor: c,
          onError: f,
          finalizeRunEffect: v,
        }
        return pe(function () {
          var e = qe(b, g, s, m, G(t), !0, void 0)
          return c && c.effectResolved(m, e), e
        })
      }
      var He = function (e) {
          var t,
            n = void 0 === e ? {} : e,
            r = n.context,
            o = void 0 === r ? {} : r,
            a = n.channel,
            i = void 0 === a ? Se() : a,
            s = n.sagaMonitor,
            c = Object(x.a)(n, ['context', 'channel', 'sagaMonitor'])
          function u(e) {
            var n = e.getState,
              r = e.dispatch
            return (
              (t = Be.bind(
                null,
                Object(b.a)({}, c, {
                  context: o,
                  channel: i,
                  dispatch: r,
                  getState: n,
                  sagaMonitor: s,
                }),
              )),
              function (e) {
                return function (t) {
                  s && s.actionDispatched && s.actionDispatched(t)
                  var n = e(t)
                  return i.put(t), n
                }
              }
            )
          }
          return (
            (u.run = function () {
              return t.apply(void 0, arguments)
            }),
            (u.setContext = function (e) {
              _(o, e)
            }),
            u
          )
        },
        Ve = n('Zbaf'),
        Je = Object(ie.b)({ user: Ve.d }),
        Ke = n('vJKn'),
        We = n.n(Ke),
        Ge = function (e) {
          return { done: !0, value: e }
        },
        Qe = {}
      function Xe(e) {
        return L(e) ? 'channel' : P(e) ? String(e) : k(e) ? e.name : String(e)
      }
      function Ye(e, t, n) {
        var r,
          o,
          a,
          i = t
        function s(t, n) {
          if (i === Qe) return Ge(t)
          if (n && !o) throw ((i = Qe), n)
          r && r(t)
          var s = n ? e[o](n) : e[i]()
          return (
            (i = s.nextState),
            (a = s.effect),
            (r = s.stateUpdater),
            (o = s.errorState),
            i === Qe ? Ge(t) : a
          )
        }
        return D(
          s,
          function (e) {
            return s(null, e)
          },
          n,
        )
      }
      function $e(e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
          r[o - 2] = arguments[o]
        var a,
          i,
          s = { done: !1, value: Z(e) },
          c = function (e) {
            return { done: !1, value: oe.apply(void 0, [t].concat(r, [e])) }
          },
          u = function (e) {
            return { done: !1, value: ae(e) }
          },
          l = function (e) {
            return (a = e)
          },
          f = function (e) {
            return (i = e)
          }
        return Ye(
          {
            q1: function () {
              return { nextState: 'q2', effect: s, stateUpdater: f }
            },
            q2: function () {
              return a
                ? { nextState: 'q3', effect: u(a) }
                : { nextState: 'q1', effect: c(i), stateUpdater: l }
            },
            q3: function () {
              return { nextState: 'q1', effect: c(i), stateUpdater: l }
            },
          },
          'q1',
          'takeLatest(' + Xe(e) + ', ' + t.name + ')',
        )
      }
      function Ze(e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
          r[o - 2] = arguments[o]
        return oe.apply(void 0, [$e, e, t].concat(r))
      }
      var et = n('vDqi'),
        tt = n.n(et).a.create({ baseURL: 'https://jsonplaceholder.typicode.com', timeout: 1e4 })
      tt.interceptors.request.use(
        function (e) {
          return e
        },
        function (e) {
          return Promise.reject(e)
        },
      ),
        tt.interceptors.response.use(
          function (e) {
            return e
          },
          function (e) {
            return Promise.reject(e)
          },
        )
      var nt = tt,
        rt = function (e) {
          return nt.get('/users/'.concat(e))
        },
        ot = We.a.mark(it),
        at = We.a.mark(st)
      function it(e) {
        var t
        return We.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (n.prev = 0), (n.next = 3), re(rt, e.payload.id)
                case 3:
                  return (t = n.sent), (n.next = 6), ee(Object(Ve.c)({ profile: t.data }))
                case 6:
                  n.next = 12
                  break
                case 8:
                  return (
                    (n.prev = 8),
                    (n.t0 = n.catch(0)),
                    (n.next = 12),
                    ee(Object(Ve.a)({ errors: n.t0 }))
                  )
                case 12:
                case 'end':
                  return n.stop()
              }
          },
          ot,
          null,
          [[0, 8]],
        )
      }
      function st() {
        return We.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Ze(Ve.b.type, it)
              case 2:
              case 'end':
                return e.stop()
            }
        }, at)
      }
      var ct = We.a.mark(ut)
      function ut() {
        return We.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), te([oe(st)])
              case 2:
              case 'end':
                return e.stop()
            }
        }, ct)
      }
      var lt = ut,
        ft = n('i7Pf'),
        dt = (function () {
          var e = He(),
            t = Object(ft.a)({
              reducer: Je,
              middleware: function (t) {
                return t({ thunk: !1 }).concat(e)
              },
              devTools: !1,
            })
          return e.run(lt), t
        })(),
        pt = n('/MKj'),
        ht = n('vOnD'),
        gt = n('Jv8k'),
        vt = n.n(gt),
        mt = n('nOHt'),
        yt = n('8Rtz'),
        bt = function (e) {
          var t = e.menuItems,
            n = Object(mt.useRouter)()
          return Object(o.jsx)(vt.a, {
            mode: 'horizontal',
            defaultSelectedKeys: ['/'],
            selectedKeys: [n.pathname],
            children:
              null === t || void 0 === t
                ? void 0
                : t.map(function (e) {
                    return Object(o.jsx)(
                      vt.a.Item,
                      { children: Object(o.jsx)(yt.a, { href: e.pathname, children: e.title }) },
                      e.key,
                    )
                  }),
          })
        },
        xt = ht.default.header.withConfig({
          displayName: 'Header__HeaderWrapper',
          componentId: 'sc-1clujvj-0',
        })(['padding:0 15px;']),
        Ot = function (e) {
          var t = e.menuItems
          return Object(o.jsx)(xt, { children: Object(o.jsx)(bt, { menuItems: t }) })
        },
        wt = n('VTBJ'),
        kt = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
                },
              },
            ],
          },
          name: 'github',
          theme: 'outlined',
        },
        jt = n('ODXe'),
        Ct = n('rePB'),
        St = n('Ff2n'),
        Et = n('TSYQ'),
        Nt = n.n(Et),
        Lt = Object(a.createContext)({}),
        Pt = n('U8pU'),
        Tt = n('AJpP'),
        Rt = n('Kwbf'),
        At = n('MNnm'),
        Mt = n('l4aY'),
        _t = new Map()
      function It() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.mark
        return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : 'rc-util-key'
      }
      function Ft(e) {
        return e.attachTo ? e.attachTo : document.querySelector('head') || document.body
      }
      function Ut(e) {
        return 'queue' === e ? 'prependQueue' : e ? 'prepend' : 'append'
      }
      function zt(e) {
        return Array.from((_t.get(e) || e).children).filter(function (e) {
          return 'STYLE' === e.tagName
        })
      }
      function Dt(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        if (!Object(At.a)()) return null
        var n = t.csp,
          r = t.prepend,
          o = document.createElement('style')
        o.setAttribute('data-rc-order', Ut(r)),
          null !== n &&
            void 0 !== n &&
            n.nonce &&
            (o.nonce = null === n || void 0 === n ? void 0 : n.nonce),
          (o.innerHTML = e)
        var a = Ft(t),
          i = a.firstChild
        if (r) {
          if ('queue' === r) {
            var s = zt(a).filter(function (e) {
              return ['prepend', 'prependQueue'].includes(e.getAttribute('data-rc-order'))
            })
            if (s.length) return a.insertBefore(o, s[s.length - 1].nextSibling), o
          }
          a.insertBefore(o, i)
        } else a.appendChild(o)
        return o
      }
      function qt(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = Ft(t)
        return zt(n).find(function (n) {
          return n.getAttribute(It(t)) === e
        })
      }
      function Bt(e, t) {
        var n = _t.get(e)
        if (!n || !Object(Mt.a)(document, n)) {
          var r = Dt('', t),
            o = r.parentNode
          _t.set(e, o), e.removeChild(r)
        }
      }
      function Ht(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = Ft(n)
        Bt(r, n)
        var o = qt(t, n)
        if (o) {
          var a, i, s
          if (
            null !== (a = n.csp) &&
            void 0 !== a &&
            a.nonce &&
            o.nonce !== (null === (i = n.csp) || void 0 === i ? void 0 : i.nonce)
          )
            o.nonce = null === (s = n.csp) || void 0 === s ? void 0 : s.nonce
          return o.innerHTML !== e && (o.innerHTML = e), o
        }
        var c = Dt(e, n)
        return c.setAttribute(It(n), t), c
      }
      function Vt(e) {
        return (
          'object' === Object(Pt.a)(e) &&
          'string' === typeof e.name &&
          'string' === typeof e.theme &&
          ('object' === Object(Pt.a)(e.icon) || 'function' === typeof e.icon)
        )
      }
      function Jt() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object.keys(e).reduce(function (t, n) {
          var r = e[n]
          switch (n) {
            case 'class':
              ;(t.className = r), delete t.class
              break
            default:
              t[n] = r
          }
          return t
        }, {})
      }
      function Kt(e) {
        return Object(Tt.generate)(e)[0]
      }
      function Wt(e) {
        return e ? (Array.isArray(e) ? e : [e]) : []
      }
      var Gt =
          '\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n',
        Qt = ['icon', 'className', 'onClick', 'style', 'primaryColor', 'secondaryColor'],
        Xt = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 }
      var Yt = function (e) {
        var t,
          n,
          r = e.icon,
          o = e.className,
          s = e.onClick,
          c = e.style,
          u = e.primaryColor,
          l = e.secondaryColor,
          f = Object(St.a)(e, Qt),
          d = Xt
        if (
          (u && (d = { primaryColor: u, secondaryColor: l || Kt(u) }),
          (function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gt,
              t = Object(a.useContext)(Lt).csp
            Object(a.useEffect)(function () {
              Ht(e, '@ant-design-icons', { prepend: !0, csp: t })
            }, [])
          })(),
          (t = Vt(r)),
          (n = 'icon should be icon definiton, but got '.concat(r)),
          Object(Rt.a)(t, '[@ant-design/icons] '.concat(n)),
          !Vt(r))
        )
          return null
        var p = r
        return (
          p &&
            'function' === typeof p.icon &&
            (p = Object(wt.a)(
              Object(wt.a)({}, p),
              {},
              { icon: p.icon(d.primaryColor, d.secondaryColor) },
            )),
          (function e(t, n, r) {
            return r
              ? i.a.createElement(
                  t.tag,
                  Object(wt.a)(Object(wt.a)({ key: n }, Jt(t.attrs)), r),
                  (t.children || []).map(function (r, o) {
                    return e(r, ''.concat(n, '-').concat(t.tag, '-').concat(o))
                  }),
                )
              : i.a.createElement(
                  t.tag,
                  Object(wt.a)({ key: n }, Jt(t.attrs)),
                  (t.children || []).map(function (r, o) {
                    return e(r, ''.concat(n, '-').concat(t.tag, '-').concat(o))
                  }),
                )
          })(
            p.icon,
            'svg-'.concat(p.name),
            Object(wt.a)(
              {
                className: o,
                onClick: s,
                style: c,
                'data-icon': p.name,
                width: '1em',
                height: '1em',
                fill: 'currentColor',
                'aria-hidden': 'true',
              },
              f,
            ),
          )
        )
      }
      ;(Yt.displayName = 'IconReact'),
        (Yt.getTwoToneColors = function () {
          return Object(wt.a)({}, Xt)
        }),
        (Yt.setTwoToneColors = function (e) {
          var t = e.primaryColor,
            n = e.secondaryColor
          ;(Xt.primaryColor = t), (Xt.secondaryColor = n || Kt(t)), (Xt.calculated = !!n)
        })
      var $t = Yt
      function Zt(e) {
        var t = Wt(e),
          n = Object(jt.a)(t, 2),
          r = n[0],
          o = n[1]
        return $t.setTwoToneColors({ primaryColor: r, secondaryColor: o })
      }
      var en = ['className', 'icon', 'spin', 'rotate', 'tabIndex', 'onClick', 'twoToneColor']
      Zt('#1890ff')
      var tn = a.forwardRef(function (e, t) {
        var n,
          r = e.className,
          o = e.icon,
          i = e.spin,
          s = e.rotate,
          c = e.tabIndex,
          u = e.onClick,
          l = e.twoToneColor,
          f = Object(St.a)(e, en),
          d = a.useContext(Lt),
          p = d.prefixCls,
          h = void 0 === p ? 'anticon' : p,
          g = d.rootClassName,
          v = Nt()(
            g,
            h,
            ((n = {}),
            Object(Ct.a)(n, ''.concat(h, '-').concat(o.name), !!o.name),
            Object(Ct.a)(n, ''.concat(h, '-spin'), !!i || 'loading' === o.name),
            n),
            r,
          ),
          m = c
        void 0 === m && u && (m = -1)
        var y = s
            ? { msTransform: 'rotate('.concat(s, 'deg)'), transform: 'rotate('.concat(s, 'deg)') }
            : void 0,
          b = Wt(l),
          x = Object(jt.a)(b, 2),
          O = x[0],
          w = x[1]
        return a.createElement(
          'span',
          Object(wt.a)(
            Object(wt.a)({ role: 'img', 'aria-label': o.name }, f),
            {},
            { ref: t, tabIndex: m, onClick: u, className: v },
          ),
          a.createElement($t, { icon: o, primaryColor: O, secondaryColor: w, style: y }),
        )
      })
      ;(tn.displayName = 'AntdIcon'),
        (tn.getTwoToneColor = function () {
          var e = $t.getTwoToneColors()
          return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor
        }),
        (tn.setTwoToneColor = Zt)
      var nn = tn,
        rn = function (e, t) {
          return a.createElement(nn, Object(wt.a)(Object(wt.a)({}, e), {}, { ref: t, icon: kt }))
        }
      rn.displayName = 'GithubOutlined'
      var on = a.forwardRef(rn),
        an = n('9Koi'),
        sn = ht.default.footer.withConfig({
          displayName: 'Footer__FooterWrapper',
          componentId: 'sc-5wwxti-0',
        })([
          'position:absolute;bottom:0;display:flex;justify-content:center;align-items:center;width:100%;height:70px;color:#6c757d;background:#e9ecef;font-size:16px;text-align:center;',
        ]),
        cn = ht.default.span.withConfig({
          displayName: 'Footer__FooterText',
          componentId: 'sc-5wwxti-1',
        })(['']),
        un = Object(ht.default)(yt.a).withConfig({
          displayName: 'Footer__GithubLink',
          componentId: 'sc-5wwxti-2',
        })(['margin-left:6px;color:#000;']),
        ln = function () {
          var e = Object(an.a)().t
          return Object(o.jsx)(sn, {
            children: Object(o.jsxs)(cn, {
              children: [
                e('footer.copyright'),
                Object(o.jsx)(un, {
                  href: 'https://github.com/',
                  target: '_blank',
                  children: Object(o.jsx)(on, {}),
                }),
              ],
            }),
          })
        },
        fn = ht.default.div.withConfig({
          displayName: 'Layout__MainWrapper',
          componentId: 'sc-9dhnnb-0',
        })(['text-align:center;padding-bottom:70px;']),
        dn = [
          {
            key: '/formEditJson',
            title: '\u8868\u5355\u7f16\u8f91(JSON)',
            desc: '\u7f16\u8f91\u8868\u5355',
            pathname: '/formEdit/demo',
          },
          {
            key: '/formEditIndex',
            title: '\u8868\u5355\u7f16\u8f91',
            desc: '\u7f16\u8f91\u8868\u5355',
            pathname: '/formEdit',
          },
        ],
        pn = function (e) {
          var t = e.children
          return Object(o.jsxs)(o.Fragment, {
            children: [
              Object(o.jsx)(Ot, { menuItems: dn }),
              Object(o.jsx)(fn, { children: t }),
              Object(o.jsx)(ln, {}),
            ],
          })
        },
        hn = n('WRJ3'),
        gn = Object(ht.createGlobalStyle)(
          ['', ';body,#__next{position:relative;min-height:100%;margin:0;padding:0;}'],
          hn.normalize,
        )
      function vn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? Object(arguments[t]) : {},
            r = Object.keys(n)
          'function' === typeof Object.getOwnPropertySymbols &&
            r.push.apply(
              r,
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }),
            ),
            r.forEach(function (t) {
              Object(Ct.a)(e, t, n[t])
            })
        }
        return e
      }
      var mn = n('1OyB'),
        yn = n('vuIU'),
        bn = n('md7G'),
        xn = n('foSv'),
        On = n('JX7q'),
        wn = n('Ji7U'),
        kn = {
          type: 'logger',
          log: function (e) {
            this.output('log', e)
          },
          warn: function (e) {
            this.output('warn', e)
          },
          error: function (e) {
            this.output('error', e)
          },
          output: function (e, t) {
            console && console[e] && console[e].apply(console, t)
          },
        },
        jn = new ((function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            Object(mn.a)(this, e), this.init(t, n)
          }
          return (
            Object(yn.a)(e, [
              {
                key: 'init',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  ;(this.prefix = t.prefix || 'i18next:'),
                    (this.logger = e || kn),
                    (this.options = t),
                    (this.debug = t.debug)
                },
              },
              {
                key: 'setDebug',
                value: function (e) {
                  this.debug = e
                },
              },
              {
                key: 'log',
                value: function () {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]
                  return this.forward(t, 'log', '', !0)
                },
              },
              {
                key: 'warn',
                value: function () {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]
                  return this.forward(t, 'warn', '', !0)
                },
              },
              {
                key: 'error',
                value: function () {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]
                  return this.forward(t, 'error', '')
                },
              },
              {
                key: 'deprecate',
                value: function () {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]
                  return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0)
                },
              },
              {
                key: 'forward',
                value: function (e, t, n, r) {
                  return r && !this.debug
                    ? null
                    : ('string' === typeof e[0] &&
                        (e[0] = ''.concat(n).concat(this.prefix, ' ').concat(e[0])),
                      this.logger[t](e))
                },
              },
              {
                key: 'create',
                value: function (t) {
                  return new e(
                    this.logger,
                    vn({}, { prefix: ''.concat(this.prefix, ':').concat(t, ':') }, this.options),
                  )
                },
              },
            ]),
            e
          )
        })())(),
        Cn = (function () {
          function e() {
            Object(mn.a)(this, e), (this.observers = {})
          }
          return (
            Object(yn.a)(e, [
              {
                key: 'on',
                value: function (e, t) {
                  var n = this
                  return (
                    e.split(' ').forEach(function (e) {
                      ;(n.observers[e] = n.observers[e] || []), n.observers[e].push(t)
                    }),
                    this
                  )
                },
              },
              {
                key: 'off',
                value: function (e, t) {
                  this.observers[e] &&
                    (t
                      ? (this.observers[e] = this.observers[e].filter(function (e) {
                          return e !== t
                        }))
                      : delete this.observers[e])
                },
              },
              {
                key: 'emit',
                value: function (e) {
                  for (
                    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r]
                  if (this.observers[e]) {
                    var o = [].concat(this.observers[e])
                    o.forEach(function (e) {
                      e.apply(void 0, n)
                    })
                  }
                  if (this.observers['*']) {
                    var a = [].concat(this.observers['*'])
                    a.forEach(function (t) {
                      t.apply(t, [e].concat(n))
                    })
                  }
                },
              },
            ]),
            e
          )
        })()
      function Sn() {
        var e,
          t,
          n = new Promise(function (n, r) {
            ;(e = n), (t = r)
          })
        return (n.resolve = e), (n.reject = t), n
      }
      function En(e) {
        return null == e ? '' : '' + e
      }
      function Nn(e, t, n) {
        e.forEach(function (e) {
          t[e] && (n[e] = t[e])
        })
      }
      function Ln(e, t, n) {
        function r(e) {
          return e && e.indexOf('###') > -1 ? e.replace(/###/g, '.') : e
        }
        function o() {
          return !e || 'string' === typeof e
        }
        for (var a = 'string' !== typeof t ? [].concat(t) : t.split('.'); a.length > 1; ) {
          if (o()) return {}
          var i = r(a.shift())
          !e[i] && n && (e[i] = new n()),
            (e = Object.prototype.hasOwnProperty.call(e, i) ? e[i] : {})
        }
        return o() ? {} : { obj: e, k: r(a.shift()) }
      }
      function Pn(e, t, n) {
        var r = Ln(e, t, Object)
        r.obj[r.k] = n
      }
      function Tn(e, t) {
        var n = Ln(e, t),
          r = n.obj,
          o = n.k
        if (r) return r[o]
      }
      function Rn(e, t, n) {
        var r = Tn(e, n)
        return void 0 !== r ? r : Tn(t, n)
      }
      function An(e, t, n) {
        for (var r in t)
          '__proto__' !== r &&
            'constructor' !== r &&
            (r in e
              ? 'string' === typeof e[r] ||
                e[r] instanceof String ||
                'string' === typeof t[r] ||
                t[r] instanceof String
                ? n && (e[r] = t[r])
                : An(e[r], t[r], n)
              : (e[r] = t[r]))
        return e
      }
      function Mn(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
      }
      var _n = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
      }
      function In(e) {
        return 'string' === typeof e
          ? e.replace(/[&<>"'\/]/g, function (e) {
              return _n[e]
            })
          : e
      }
      var Fn =
          'undefined' !== typeof window &&
          window.navigator &&
          window.navigator.userAgent &&
          window.navigator.userAgent.indexOf('MSIE') > -1,
        Un = (function (e) {
          function t(e) {
            var n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ['translation'], defaultNS: 'translation' }
            return (
              Object(mn.a)(this, t),
              (n = Object(bn.a)(this, Object(xn.a)(t).call(this))),
              Fn && Cn.call(Object(On.a)(n)),
              (n.data = e || {}),
              (n.options = r),
              void 0 === n.options.keySeparator && (n.options.keySeparator = '.'),
              n
            )
          }
          return (
            Object(wn.a)(t, e),
            Object(yn.a)(t, [
              {
                key: 'addNamespaces',
                value: function (e) {
                  this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                },
              },
              {
                key: 'removeNamespaces',
                value: function (e) {
                  var t = this.options.ns.indexOf(e)
                  t > -1 && this.options.ns.splice(t, 1)
                },
              },
              {
                key: 'getResource',
                value: function (e, t, n) {
                  var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                    a = [e, t]
                  return (
                    n && 'string' !== typeof n && (a = a.concat(n)),
                    n && 'string' === typeof n && (a = a.concat(o ? n.split(o) : n)),
                    e.indexOf('.') > -1 && (a = e.split('.')),
                    Tn(this.data, a)
                  )
                },
              },
              {
                key: 'addResource',
                value: function (e, t, n, r) {
                  var o =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    a = this.options.keySeparator
                  void 0 === a && (a = '.')
                  var i = [e, t]
                  n && (i = i.concat(a ? n.split(a) : n)),
                    e.indexOf('.') > -1 && ((r = t), (t = (i = e.split('.'))[1])),
                    this.addNamespaces(t),
                    Pn(this.data, i, r),
                    o.silent || this.emit('added', e, t, n, r)
                },
              },
              {
                key: 'addResources',
                value: function (e, t, n) {
                  var r =
                    arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { silent: !1 }
                  for (var o in n)
                    ('string' !== typeof n[o] &&
                      '[object Array]' !== Object.prototype.toString.apply(n[o])) ||
                      this.addResource(e, t, o, n[o], { silent: !0 })
                  r.silent || this.emit('added', e, t, n)
                },
              },
              {
                key: 'addResourceBundle',
                value: function (e, t, n, r, o) {
                  var a =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    i = [e, t]
                  e.indexOf('.') > -1 && ((r = n), (n = t), (t = (i = e.split('.'))[1])),
                    this.addNamespaces(t)
                  var s = Tn(this.data, i) || {}
                  r ? An(s, n, o) : (s = vn({}, s, n)),
                    Pn(this.data, i, s),
                    a.silent || this.emit('added', e, t, n)
                },
              },
              {
                key: 'removeResourceBundle',
                value: function (e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit('removed', e, t)
                },
              },
              {
                key: 'hasResourceBundle',
                value: function (e, t) {
                  return void 0 !== this.getResource(e, t)
                },
              },
              {
                key: 'getResourceBundle',
                value: function (e, t) {
                  return (
                    t || (t = this.options.defaultNS),
                    'v1' === this.options.compatibilityAPI
                      ? vn({}, {}, this.getResource(e, t))
                      : this.getResource(e, t)
                  )
                },
              },
              {
                key: 'getDataByLanguage',
                value: function (e) {
                  return this.data[e]
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return this.data
                },
              },
            ]),
            t
          )
        })(Cn),
        zn = {
          processors: {},
          addPostProcessor: function (e) {
            this.processors[e.name] = e
          },
          handle: function (e, t, n, r, o) {
            var a = this
            return (
              e.forEach(function (e) {
                a.processors[e] && (t = a.processors[e].process(t, n, r, o))
              }),
              t
            )
          },
        },
        Dn = {},
        qn = (function (e) {
          function t(e) {
            var n,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            return (
              Object(mn.a)(this, t),
              (n = Object(bn.a)(this, Object(xn.a)(t).call(this))),
              Fn && Cn.call(Object(On.a)(n)),
              Nn(
                [
                  'resourceStore',
                  'languageUtils',
                  'pluralResolver',
                  'interpolator',
                  'backendConnector',
                  'i18nFormat',
                  'utils',
                ],
                e,
                Object(On.a)(n),
              ),
              (n.options = r),
              void 0 === n.options.keySeparator && (n.options.keySeparator = '.'),
              (n.logger = jn.create('translator')),
              n
            )
          }
          return (
            Object(wn.a)(t, e),
            Object(yn.a)(
              t,
              [
                {
                  key: 'changeLanguage',
                  value: function (e) {
                    e && (this.language = e)
                  },
                },
                {
                  key: 'exists',
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : { interpolation: {} },
                      n = this.resolve(e, t)
                    return n && void 0 !== n.res
                  },
                },
                {
                  key: 'extractFromKey',
                  value: function (e, t) {
                    var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator
                    void 0 === n && (n = ':')
                    var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                      o = t.ns || this.options.defaultNS
                    if (n && e.indexOf(n) > -1) {
                      var a = e.match(this.interpolator.nestingRegexp)
                      if (a && a.length > 0) return { key: e, namespaces: o }
                      var i = e.split(n)
                      ;(n !== r || (n === r && this.options.ns.indexOf(i[0]) > -1)) &&
                        (o = i.shift()),
                        (e = i.join(r))
                    }
                    return 'string' === typeof o && (o = [o]), { key: e, namespaces: o }
                  },
                },
                {
                  key: 'translate',
                  value: function (e, n, r) {
                    var o = this
                    if (
                      ('object' !== Object(Pt.a)(n) &&
                        this.options.overloadTranslationOptionHandler &&
                        (n = this.options.overloadTranslationOptionHandler(arguments)),
                      n || (n = {}),
                      void 0 === e || null === e)
                    )
                      return ''
                    Array.isArray(e) || (e = [String(e)])
                    var a = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                      i = this.extractFromKey(e[e.length - 1], n),
                      s = i.key,
                      c = i.namespaces,
                      u = c[c.length - 1],
                      l = n.lng || this.language,
                      f = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode
                    if (l && 'cimode' === l.toLowerCase()) {
                      if (f) {
                        var d = n.nsSeparator || this.options.nsSeparator
                        return u + d + s
                      }
                      return s
                    }
                    var p = this.resolve(e, n),
                      h = p && p.res,
                      g = (p && p.usedKey) || s,
                      v = (p && p.exactUsedKey) || s,
                      m = Object.prototype.toString.apply(h),
                      y = ['[object Number]', '[object Function]', '[object RegExp]'],
                      b = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
                      x = !this.i18nFormat || this.i18nFormat.handleAsObject,
                      O = 'string' !== typeof h && 'boolean' !== typeof h && 'number' !== typeof h
                    if (
                      x &&
                      h &&
                      O &&
                      y.indexOf(m) < 0 &&
                      ('string' !== typeof b || '[object Array]' !== m)
                    ) {
                      if (!n.returnObjects && !this.options.returnObjects)
                        return (
                          this.logger.warn(
                            'accessing an object - but returnObjects options is not enabled!',
                          ),
                          this.options.returnedObjectHandler
                            ? this.options.returnedObjectHandler(g, h, n)
                            : "key '"
                                .concat(s, ' (')
                                .concat(this.language, ")' returned an object instead of string.")
                        )
                      if (a) {
                        var w = '[object Array]' === m,
                          k = w ? [] : {},
                          j = w ? v : g
                        for (var C in h)
                          if (Object.prototype.hasOwnProperty.call(h, C)) {
                            var S = ''.concat(j).concat(a).concat(C)
                            ;(k[C] = this.translate(S, vn({}, n, { joinArrays: !1, ns: c }))),
                              k[C] === S && (k[C] = h[C])
                          }
                        h = k
                      }
                    } else if (x && 'string' === typeof b && '[object Array]' === m)
                      (h = h.join(b)) && (h = this.extendTranslation(h, e, n, r))
                    else {
                      var E = !1,
                        N = !1,
                        L = void 0 !== n.count && 'string' !== typeof n.count,
                        P = t.hasDefaultValue(n),
                        T = L ? this.pluralResolver.getSuffix(l, n.count) : '',
                        R = n['defaultValue'.concat(T)] || n.defaultValue
                      !this.isValidLookup(h) && P && ((E = !0), (h = R)),
                        this.isValidLookup(h) || ((N = !0), (h = s))
                      var A = P && R !== h && this.options.updateMissing
                      if (N || E || A) {
                        if (
                          (this.logger.log(A ? 'updateKey' : 'missingKey', l, u, s, A ? R : h), a)
                        ) {
                          var M = this.resolve(s, vn({}, n, { keySeparator: !1 }))
                          M &&
                            M.res &&
                            this.logger.warn(
                              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
                            )
                        }
                        var _ = [],
                          I = this.languageUtils.getFallbackCodes(
                            this.options.fallbackLng,
                            n.lng || this.language,
                          )
                        if ('fallback' === this.options.saveMissingTo && I && I[0])
                          for (var F = 0; F < I.length; F++) _.push(I[F])
                        else
                          'all' === this.options.saveMissingTo
                            ? (_ = this.languageUtils.toResolveHierarchy(n.lng || this.language))
                            : _.push(n.lng || this.language)
                        var U = function (e, t, r) {
                          o.options.missingKeyHandler
                            ? o.options.missingKeyHandler(e, u, t, A ? r : h, A, n)
                            : o.backendConnector &&
                              o.backendConnector.saveMissing &&
                              o.backendConnector.saveMissing(e, u, t, A ? r : h, A, n),
                            o.emit('missingKey', e, u, t, h)
                        }
                        this.options.saveMissing &&
                          (this.options.saveMissingPlurals && L
                            ? _.forEach(function (e) {
                                o.pluralResolver.getSuffixes(e).forEach(function (t) {
                                  U([e], s + t, n['defaultValue'.concat(t)] || R)
                                })
                              })
                            : U(_, s, R))
                      }
                      ;(h = this.extendTranslation(h, e, n, p, r)),
                        N &&
                          h === s &&
                          this.options.appendNamespaceToMissingKey &&
                          (h = ''.concat(u, ':').concat(s)),
                        N &&
                          this.options.parseMissingKeyHandler &&
                          (h = this.options.parseMissingKeyHandler(h))
                    }
                    return h
                  },
                },
                {
                  key: 'extendTranslation',
                  value: function (e, t, n, r, o) {
                    var a = this
                    if (this.i18nFormat && this.i18nFormat.parse)
                      e = this.i18nFormat.parse(e, n, r.usedLng, r.usedNS, r.usedKey, {
                        resolved: r,
                      })
                    else if (!n.skipInterpolation) {
                      n.interpolation &&
                        this.interpolator.init(
                          vn({}, n, {
                            interpolation: vn({}, this.options.interpolation, n.interpolation),
                          }),
                        )
                      var i,
                        s =
                          (n.interpolation && n.interpolation.skipOnVariables) ||
                          this.options.interpolation.skipOnVariables
                      if (s) {
                        var c = e.match(this.interpolator.nestingRegexp)
                        i = c && c.length
                      }
                      var u = n.replace && 'string' !== typeof n.replace ? n.replace : n
                      if (
                        (this.options.interpolation.defaultVariables &&
                          (u = vn({}, this.options.interpolation.defaultVariables, u)),
                        (e = this.interpolator.interpolate(e, u, n.lng || this.language, n)),
                        s)
                      ) {
                        var l = e.match(this.interpolator.nestingRegexp)
                        i < (l && l.length) && (n.nest = !1)
                      }
                      !1 !== n.nest &&
                        (e = this.interpolator.nest(
                          e,
                          function () {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
                              r[i] = arguments[i]
                            return o && o[0] === r[0] && !n.context
                              ? (a.logger.warn(
                                  'It seems you are nesting recursively key: '
                                    .concat(r[0], ' in key: ')
                                    .concat(t[0]),
                                ),
                                null)
                              : a.translate.apply(a, r.concat([t]))
                          },
                          n,
                        )),
                        n.interpolation && this.interpolator.reset()
                    }
                    var f = n.postProcess || this.options.postProcess,
                      d = 'string' === typeof f ? [f] : f
                    return (
                      void 0 !== e &&
                        null !== e &&
                        d &&
                        d.length &&
                        !1 !== n.applyPostProcessor &&
                        (e = zn.handle(
                          d,
                          e,
                          t,
                          this.options && this.options.postProcessPassResolved
                            ? vn({ i18nResolved: r }, n)
                            : n,
                          this,
                        )),
                      e
                    )
                  },
                },
                {
                  key: 'resolve',
                  value: function (e) {
                    var t,
                      n,
                      r,
                      o,
                      a,
                      i = this,
                      s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    return (
                      'string' === typeof e && (e = [e]),
                      e.forEach(function (e) {
                        if (!i.isValidLookup(t)) {
                          var c = i.extractFromKey(e, s),
                            u = c.key
                          n = u
                          var l = c.namespaces
                          i.options.fallbackNS && (l = l.concat(i.options.fallbackNS))
                          var f = void 0 !== s.count && 'string' !== typeof s.count,
                            d =
                              void 0 !== s.context &&
                              'string' === typeof s.context &&
                              '' !== s.context,
                            p = s.lngs
                              ? s.lngs
                              : i.languageUtils.toResolveHierarchy(
                                  s.lng || i.language,
                                  s.fallbackLng,
                                )
                          l.forEach(function (e) {
                            i.isValidLookup(t) ||
                              ((a = e),
                              !Dn[''.concat(p[0], '-').concat(e)] &&
                                i.utils &&
                                i.utils.hasLoadedNamespace &&
                                !i.utils.hasLoadedNamespace(a) &&
                                ((Dn[''.concat(p[0], '-').concat(e)] = !0),
                                i.logger.warn(
                                  'key "'
                                    .concat(n, '" for languages "')
                                    .concat(p.join(', '), '" won\'t get resolved as namespace "')
                                    .concat(a, '" was not yet loaded'),
                                  'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                                )),
                              p.forEach(function (n) {
                                if (!i.isValidLookup(t)) {
                                  o = n
                                  var a,
                                    c,
                                    l = u,
                                    p = [l]
                                  if (i.i18nFormat && i.i18nFormat.addLookupKeys)
                                    i.i18nFormat.addLookupKeys(p, u, n, e, s)
                                  else
                                    f && (a = i.pluralResolver.getSuffix(n, s.count)),
                                      f && d && p.push(l + a),
                                      d &&
                                        p.push(
                                          (l += ''
                                            .concat(i.options.contextSeparator)
                                            .concat(s.context)),
                                        ),
                                      f && p.push((l += a))
                                  for (; (c = p.pop()); )
                                    i.isValidLookup(t) || ((r = c), (t = i.getResource(n, e, c, s)))
                                }
                              }))
                          })
                        }
                      }),
                      { res: t, usedKey: n, exactUsedKey: r, usedLng: o, usedNS: a }
                    )
                  },
                },
                {
                  key: 'isValidLookup',
                  value: function (e) {
                    return (
                      void 0 !== e &&
                      !(!this.options.returnNull && null === e) &&
                      !(!this.options.returnEmptyString && '' === e)
                    )
                  },
                },
                {
                  key: 'getResource',
                  value: function (e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                    return this.i18nFormat && this.i18nFormat.getResource
                      ? this.i18nFormat.getResource(e, t, n, r)
                      : this.resourceStore.getResource(e, t, n, r)
                  },
                },
              ],
              [
                {
                  key: 'hasDefaultValue',
                  value: function (e) {
                    for (var t in e)
                      if (
                        Object.prototype.hasOwnProperty.call(e, t) &&
                        'defaultValue' === t.substring(0, 'defaultValue'.length) &&
                        void 0 !== e[t]
                      )
                        return !0
                    return !1
                  },
                },
              ],
            ),
            t
          )
        })(Cn)
      function Bn(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
      }
      var Hn = (function () {
          function e(t) {
            Object(mn.a)(this, e),
              (this.options = t),
              (this.whitelist = this.options.supportedLngs || !1),
              (this.supportedLngs = this.options.supportedLngs || !1),
              (this.logger = jn.create('languageUtils'))
          }
          return (
            Object(yn.a)(e, [
              {
                key: 'getScriptPartFromCode',
                value: function (e) {
                  if (!e || e.indexOf('-') < 0) return null
                  var t = e.split('-')
                  return 2 === t.length
                    ? null
                    : (t.pop(),
                      'x' === t[t.length - 1].toLowerCase()
                        ? null
                        : this.formatLanguageCode(t.join('-')))
                },
              },
              {
                key: 'getLanguagePartFromCode',
                value: function (e) {
                  if (!e || e.indexOf('-') < 0) return e
                  var t = e.split('-')
                  return this.formatLanguageCode(t[0])
                },
              },
              {
                key: 'formatLanguageCode',
                value: function (e) {
                  if ('string' === typeof e && e.indexOf('-') > -1) {
                    var t = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'],
                      n = e.split('-')
                    return (
                      this.options.lowerCaseLng
                        ? (n = n.map(function (e) {
                            return e.toLowerCase()
                          }))
                        : 2 === n.length
                        ? ((n[0] = n[0].toLowerCase()),
                          (n[1] = n[1].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Bn(n[1].toLowerCase())))
                        : 3 === n.length &&
                          ((n[0] = n[0].toLowerCase()),
                          2 === n[1].length && (n[1] = n[1].toUpperCase()),
                          'sgn' !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Bn(n[1].toLowerCase())),
                          t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Bn(n[2].toLowerCase()))),
                      n.join('-')
                    )
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                },
              },
              {
                key: 'isWhitelisted',
                value: function (e) {
                  return (
                    this.logger.deprecate(
                      'languageUtils.isWhitelisted',
                      'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.',
                    ),
                    this.isSupportedCode(e)
                  )
                },
              },
              {
                key: 'isSupportedCode',
                value: function (e) {
                  return (
                    ('languageOnly' === this.options.load ||
                      this.options.nonExplicitSupportedLngs) &&
                      (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs ||
                      !this.supportedLngs.length ||
                      this.supportedLngs.indexOf(e) > -1
                  )
                },
              },
              {
                key: 'getBestMatchFromCodes',
                value: function (e) {
                  var t,
                    n = this
                  return e
                    ? (e.forEach(function (e) {
                        if (!t) {
                          var r = n.formatLanguageCode(e)
                          ;(n.options.supportedLngs && !n.isSupportedCode(r)) || (t = r)
                        }
                      }),
                      !t &&
                        this.options.supportedLngs &&
                        e.forEach(function (e) {
                          if (!t) {
                            var r = n.getLanguagePartFromCode(e)
                            if (n.isSupportedCode(r)) return (t = r)
                            t = n.options.supportedLngs.find(function (e) {
                              if (0 === e.indexOf(r)) return e
                            })
                          }
                        }),
                      t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                      t)
                    : null
                },
              },
              {
                key: 'getFallbackCodes',
                value: function (e, t) {
                  if (!e) return []
                  if (
                    ('function' === typeof e && (e = e(t)),
                    'string' === typeof e && (e = [e]),
                    '[object Array]' === Object.prototype.toString.apply(e))
                  )
                    return e
                  if (!t) return e.default || []
                  var n = e[t]
                  return (
                    n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                  )
                },
              },
              {
                key: 'toResolveHierarchy',
                value: function (e, t) {
                  var n = this,
                    r = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                    o = [],
                    a = function (e) {
                      e &&
                        (n.isSupportedCode(e)
                          ? o.push(e)
                          : n.logger.warn(
                              'rejecting language code not found in supportedLngs: '.concat(e),
                            ))
                    }
                  return (
                    'string' === typeof e && e.indexOf('-') > -1
                      ? ('languageOnly' !== this.options.load && a(this.formatLanguageCode(e)),
                        'languageOnly' !== this.options.load &&
                          'currentOnly' !== this.options.load &&
                          a(this.getScriptPartFromCode(e)),
                        'currentOnly' !== this.options.load && a(this.getLanguagePartFromCode(e)))
                      : 'string' === typeof e && a(this.formatLanguageCode(e)),
                    r.forEach(function (e) {
                      o.indexOf(e) < 0 && a(n.formatLanguageCode(e))
                    }),
                    o
                  )
                },
              },
            ]),
            e
          )
        })(),
        Vn = [
          {
            lngs: [
              'ach',
              'ak',
              'am',
              'arn',
              'br',
              'fil',
              'gun',
              'ln',
              'mfe',
              'mg',
              'mi',
              'oc',
              'pt',
              'pt-BR',
              'tg',
              'tl',
              'ti',
              'tr',
              'uz',
              'wa',
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              'af',
              'an',
              'ast',
              'az',
              'bg',
              'bn',
              'ca',
              'da',
              'de',
              'dev',
              'el',
              'en',
              'eo',
              'es',
              'et',
              'eu',
              'fi',
              'fo',
              'fur',
              'fy',
              'gl',
              'gu',
              'ha',
              'hi',
              'hu',
              'hy',
              'ia',
              'it',
              'kn',
              'ku',
              'lb',
              'mai',
              'ml',
              'mn',
              'mr',
              'nah',
              'nap',
              'nb',
              'ne',
              'nl',
              'nn',
              'no',
              'nso',
              'pa',
              'pap',
              'pms',
              'ps',
              'pt-PT',
              'rm',
              'sco',
              'se',
              'si',
              'so',
              'son',
              'sq',
              'sv',
              'sw',
              'ta',
              'te',
              'tk',
              'ur',
              'yo',
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              'ay',
              'bo',
              'cgg',
              'fa',
              'ht',
              'id',
              'ja',
              'jbo',
              'ka',
              'kk',
              'km',
              'ko',
              'ky',
              'lo',
              'ms',
              'sah',
              'su',
              'th',
              'tt',
              'ug',
              'vi',
              'wo',
              'zh',
            ],
            nr: [1],
            fc: 3,
          },
          { lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 },
          { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
          { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
          { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ['fr'], nr: [1, 2], fc: 9 },
          { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ['is'], nr: [1, 2], fc: 12 },
          { lngs: ['jv'], nr: [0, 1], fc: 13 },
          { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
          { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
          { lngs: ['mk'], nr: [1, 2], fc: 17 },
          { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
          { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ['or'], nr: [2, 1], fc: 2 },
          { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
          { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
        ],
        Jn = {
          1: function (e) {
            return Number(e > 1)
          },
          2: function (e) {
            return Number(1 != e)
          },
          3: function (e) {
            return 0
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2,
            )
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5,
            )
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
          },
          7: function (e) {
            return Number(
              1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2,
            )
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
          },
          9: function (e) {
            return Number(e >= 2)
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
          },
          11: function (e) {
            return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11)
          },
          13: function (e) {
            return Number(0 !== e)
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2,
            )
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1)
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2)
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3,
            )
          },
          20: function (e) {
            return Number(1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2)
          },
          21: function (e) {
            return Number(
              e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0,
            )
          },
          22: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
          },
        }
      function Kn() {
        var e = {}
        return (
          Vn.forEach(function (t) {
            t.lngs.forEach(function (n) {
              e[n] = { numbers: t.nr, plurals: Jn[t.fc] }
            })
          }),
          e
        )
      }
      var Wn = (function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            Object(mn.a)(this, e),
              (this.languageUtils = t),
              (this.options = n),
              (this.logger = jn.create('pluralResolver')),
              (this.rules = Kn())
          }
          return (
            Object(yn.a)(e, [
              {
                key: 'addRule',
                value: function (e, t) {
                  this.rules[e] = t
                },
              },
              {
                key: 'getRule',
                value: function (e) {
                  return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                },
              },
              {
                key: 'needsPlural',
                value: function (e) {
                  var t = this.getRule(e)
                  return t && t.numbers.length > 1
                },
              },
              {
                key: 'getPluralFormsOfKey',
                value: function (e, t) {
                  return this.getSuffixes(e).map(function (e) {
                    return t + e
                  })
                },
              },
              {
                key: 'getSuffixes',
                value: function (e) {
                  var t = this,
                    n = this.getRule(e)
                  return n
                    ? n.numbers.map(function (n) {
                        return t.getSuffix(e, n)
                      })
                    : []
                },
              },
              {
                key: 'getSuffix',
                value: function (e, t) {
                  var n = this,
                    r = this.getRule(e)
                  if (r) {
                    var o = r.noAbs ? r.plurals(t) : r.plurals(Math.abs(t)),
                      a = r.numbers[o]
                    this.options.simplifyPluralSuffix &&
                      2 === r.numbers.length &&
                      1 === r.numbers[0] &&
                      (2 === a ? (a = 'plural') : 1 === a && (a = ''))
                    var i = function () {
                      return n.options.prepend && a.toString()
                        ? n.options.prepend + a.toString()
                        : a.toString()
                    }
                    return 'v1' === this.options.compatibilityJSON
                      ? 1 === a
                        ? ''
                        : 'number' === typeof a
                        ? '_plural_'.concat(a.toString())
                        : i()
                      : 'v2' === this.options.compatibilityJSON ||
                        (this.options.simplifyPluralSuffix &&
                          2 === r.numbers.length &&
                          1 === r.numbers[0])
                      ? i()
                      : this.options.prepend && o.toString()
                      ? this.options.prepend + o.toString()
                      : o.toString()
                  }
                  return this.logger.warn('no plural rule found for: '.concat(e)), ''
                },
              },
            ]),
            e
          )
        })(),
        Gn = (function () {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            Object(mn.a)(this, e),
              (this.logger = jn.create('interpolator')),
              (this.options = t),
              (this.format =
                (t.interpolation && t.interpolation.format) ||
                function (e) {
                  return e
                }),
              this.init(t)
          }
          return (
            Object(yn.a)(e, [
              {
                key: 'init',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  e.interpolation || (e.interpolation = { escapeValue: !0 })
                  var t = e.interpolation
                  ;(this.escape = void 0 !== t.escape ? t.escape : In),
                    (this.escapeValue = void 0 === t.escapeValue || t.escapeValue),
                    (this.useRawValueToEscape =
                      void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                    (this.prefix = t.prefix ? Mn(t.prefix) : t.prefixEscaped || '{{'),
                    (this.suffix = t.suffix ? Mn(t.suffix) : t.suffixEscaped || '}}'),
                    (this.formatSeparator = t.formatSeparator
                      ? t.formatSeparator
                      : t.formatSeparator || ','),
                    (this.unescapePrefix = t.unescapeSuffix ? '' : t.unescapePrefix || '-'),
                    (this.unescapeSuffix = this.unescapePrefix ? '' : t.unescapeSuffix || ''),
                    (this.nestingPrefix = t.nestingPrefix
                      ? Mn(t.nestingPrefix)
                      : t.nestingPrefixEscaped || Mn('$t(')),
                    (this.nestingSuffix = t.nestingSuffix
                      ? Mn(t.nestingSuffix)
                      : t.nestingSuffixEscaped || Mn(')')),
                    (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                      ? t.nestingOptionsSeparator
                      : t.nestingOptionsSeparator || ','),
                    (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                    (this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat),
                    this.resetRegExp()
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.options && this.init(this.options)
                },
              },
              {
                key: 'resetRegExp',
                value: function () {
                  var e = ''.concat(this.prefix, '(.+?)').concat(this.suffix)
                  this.regexp = new RegExp(e, 'g')
                  var t = ''
                    .concat(this.prefix)
                    .concat(this.unescapePrefix, '(.+?)')
                    .concat(this.unescapeSuffix)
                    .concat(this.suffix)
                  this.regexpUnescape = new RegExp(t, 'g')
                  var n = ''.concat(this.nestingPrefix, '(.+?)').concat(this.nestingSuffix)
                  this.nestingRegexp = new RegExp(n, 'g')
                },
              },
              {
                key: 'interpolate',
                value: function (e, t, n, r) {
                  var o,
                    a,
                    i,
                    s = this,
                    c =
                      (this.options &&
                        this.options.interpolation &&
                        this.options.interpolation.defaultVariables) ||
                      {}
                  function u(e) {
                    return e.replace(/\$/g, '$$$$')
                  }
                  var l = function (e) {
                    if (e.indexOf(s.formatSeparator) < 0) {
                      var o = Rn(t, c, e)
                      return s.alwaysFormat ? s.format(o, void 0, n) : o
                    }
                    var a = e.split(s.formatSeparator),
                      i = a.shift().trim(),
                      u = a.join(s.formatSeparator).trim()
                    return s.format(Rn(t, c, i), u, n, r)
                  }
                  this.resetRegExp()
                  var f =
                      (r && r.missingInterpolationHandler) ||
                      this.options.missingInterpolationHandler,
                    d =
                      (r && r.interpolation && r.interpolation.skipOnVariables) ||
                      this.options.interpolation.skipOnVariables
                  return (
                    [
                      {
                        regex: this.regexpUnescape,
                        safeValue: function (e) {
                          return u(e)
                        },
                      },
                      {
                        regex: this.regexp,
                        safeValue: function (e) {
                          return s.escapeValue ? u(s.escape(e)) : u(e)
                        },
                      },
                    ].forEach(function (t) {
                      for (i = 0; (o = t.regex.exec(e)); ) {
                        if (void 0 === (a = l(o[1].trim())))
                          if ('function' === typeof f) {
                            var n = f(e, o, r)
                            a = 'string' === typeof n ? n : ''
                          } else {
                            if (d) {
                              a = o[0]
                              continue
                            }
                            s.logger.warn(
                              'missed to pass in variable '
                                .concat(o[1], ' for interpolating ')
                                .concat(e),
                            ),
                              (a = '')
                          }
                        else 'string' === typeof a || s.useRawValueToEscape || (a = En(a))
                        if (
                          ((e = e.replace(o[0], t.safeValue(a))),
                          (t.regex.lastIndex = 0),
                          ++i >= s.maxReplaces)
                        )
                          break
                      }
                    }),
                    e
                  )
                },
              },
              {
                key: 'nest',
                value: function (e, t) {
                  var n,
                    r,
                    o = this,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = vn({}, a)
                  function s(e, t) {
                    var n = this.nestingOptionsSeparator
                    if (e.indexOf(n) < 0) return e
                    var r = e.split(new RegExp(''.concat(n, '[ ]*{'))),
                      o = '{'.concat(r[1])
                    ;(e = r[0]), (o = (o = this.interpolate(o, i)).replace(/'/g, '"'))
                    try {
                      ;(i = JSON.parse(o)), t && (i = vn({}, t, i))
                    } catch (a) {
                      return (
                        this.logger.warn(
                          'failed parsing options string in nesting for key '.concat(e),
                          a,
                        ),
                        ''.concat(e).concat(n).concat(o)
                      )
                    }
                    return delete i.defaultValue, e
                  }
                  for (
                    i.applyPostProcessor = !1, delete i.defaultValue;
                    (n = this.nestingRegexp.exec(e));

                  ) {
                    var c = [],
                      u = !1
                    if (n[0].includes(this.formatSeparator) && !/{.*}/.test(n[1])) {
                      var l = n[1].split(this.formatSeparator).map(function (e) {
                        return e.trim()
                      })
                      ;(n[1] = l.shift()), (c = l), (u = !0)
                    }
                    if (
                      (r = t(s.call(this, n[1].trim(), i), i)) &&
                      n[0] === e &&
                      'string' !== typeof r
                    )
                      return r
                    'string' !== typeof r && (r = En(r)),
                      r ||
                        (this.logger.warn(
                          'missed to resolve '.concat(n[1], ' for nesting ').concat(e),
                        ),
                        (r = '')),
                      u &&
                        (r = c.reduce(function (e, t) {
                          return o.format(e, t, a.lng, a)
                        }, r.trim())),
                      (e = e.replace(n[0], r)),
                      (this.regexp.lastIndex = 0)
                  }
                  return e
                },
              },
            ]),
            e
          )
        })()
      var Qn = (function (e) {
        function t(e, n, r) {
          var o,
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
          return (
            Object(mn.a)(this, t),
            (o = Object(bn.a)(this, Object(xn.a)(t).call(this))),
            Fn && Cn.call(Object(On.a)(o)),
            (o.backend = e),
            (o.store = n),
            (o.services = r),
            (o.languageUtils = r.languageUtils),
            (o.options = a),
            (o.logger = jn.create('backendConnector')),
            (o.state = {}),
            (o.queue = []),
            o.backend && o.backend.init && o.backend.init(r, a.backend, a),
            o
          )
        }
        return (
          Object(wn.a)(t, e),
          Object(yn.a)(t, [
            {
              key: 'queueLoad',
              value: function (e, t, n, r) {
                var o = this,
                  a = [],
                  i = [],
                  s = [],
                  c = []
                return (
                  e.forEach(function (e) {
                    var r = !0
                    t.forEach(function (t) {
                      var s = ''.concat(e, '|').concat(t)
                      !n.reload && o.store.hasResourceBundle(e, t)
                        ? (o.state[s] = 2)
                        : o.state[s] < 0 ||
                          (1 === o.state[s]
                            ? i.indexOf(s) < 0 && i.push(s)
                            : ((o.state[s] = 1),
                              (r = !1),
                              i.indexOf(s) < 0 && i.push(s),
                              a.indexOf(s) < 0 && a.push(s),
                              c.indexOf(t) < 0 && c.push(t)))
                    }),
                      r || s.push(e)
                  }),
                  (a.length || i.length) &&
                    this.queue.push({ pending: i, loaded: {}, errors: [], callback: r }),
                  { toLoad: a, pending: i, toLoadLanguages: s, toLoadNamespaces: c }
                )
              },
            },
            {
              key: 'loaded',
              value: function (e, t, n) {
                var r = e.split('|'),
                  o = r[0],
                  a = r[1]
                t && this.emit('failedLoading', o, a, t),
                  n && this.store.addResourceBundle(o, a, n),
                  (this.state[e] = t ? -1 : 2)
                var i = {}
                this.queue.forEach(function (n) {
                  !(function (e, t, n, r) {
                    var o = Ln(e, t, Object),
                      a = o.obj,
                      i = o.k
                    ;(a[i] = a[i] || []), r && (a[i] = a[i].concat(n)), r || a[i].push(n)
                  })(n.loaded, [o], a),
                    (function (e, t) {
                      for (var n = e.indexOf(t); -1 !== n; ) e.splice(n, 1), (n = e.indexOf(t))
                    })(n.pending, e),
                    t && n.errors.push(t),
                    0 !== n.pending.length ||
                      n.done ||
                      (Object.keys(n.loaded).forEach(function (e) {
                        i[e] || (i[e] = []),
                          n.loaded[e].length &&
                            n.loaded[e].forEach(function (t) {
                              i[e].indexOf(t) < 0 && i[e].push(t)
                            })
                      }),
                      (n.done = !0),
                      n.errors.length ? n.callback(n.errors) : n.callback())
                }),
                  this.emit('loaded', i),
                  (this.queue = this.queue.filter(function (e) {
                    return !e.done
                  }))
              },
            },
            {
              key: 'read',
              value: function (e, t, n) {
                var r = this,
                  o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                  i = arguments.length > 5 ? arguments[5] : void 0
                return e.length
                  ? this.backend[n](e, t, function (s, c) {
                      s && c && o < 5
                        ? setTimeout(function () {
                            r.read.call(r, e, t, n, o + 1, 2 * a, i)
                          }, a)
                        : i(s, c)
                    })
                  : i(null, {})
              },
            },
            {
              key: 'prepareLoading',
              value: function (e, t) {
                var n = this,
                  r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  o = arguments.length > 3 ? arguments[3] : void 0
                if (!this.backend)
                  return (
                    this.logger.warn(
                      'No backend was added via i18next.use. Will not load resources.',
                    ),
                    o && o()
                  )
                'string' === typeof e && (e = this.languageUtils.toResolveHierarchy(e)),
                  'string' === typeof t && (t = [t])
                var a = this.queueLoad(e, t, r, o)
                if (!a.toLoad.length) return a.pending.length || o(), null
                a.toLoad.forEach(function (e) {
                  n.loadOne(e)
                })
              },
            },
            {
              key: 'load',
              value: function (e, t, n) {
                this.prepareLoading(e, t, {}, n)
              },
            },
            {
              key: 'reload',
              value: function (e, t, n) {
                this.prepareLoading(e, t, { reload: !0 }, n)
              },
            },
            {
              key: 'loadOne',
              value: function (e) {
                var t = this,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                  r = e.split('|'),
                  o = r[0],
                  a = r[1]
                this.read(o, a, 'read', void 0, void 0, function (r, i) {
                  r &&
                    t.logger.warn(
                      ''
                        .concat(n, 'loading namespace ')
                        .concat(a, ' for language ')
                        .concat(o, ' failed'),
                      r,
                    ),
                    !r &&
                      i &&
                      t.logger.log(
                        ''.concat(n, 'loaded namespace ').concat(a, ' for language ').concat(o),
                        i,
                      ),
                    t.loaded(e, r, i)
                })
              },
            },
            {
              key: 'saveMissing',
              value: function (e, t, n, r, o) {
                var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
                this.services.utils &&
                this.services.utils.hasLoadedNamespace &&
                !this.services.utils.hasLoadedNamespace(t)
                  ? this.logger.warn(
                      'did not save key "'
                        .concat(n, '" as the namespace "')
                        .concat(t, '" was not yet loaded'),
                      'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                    )
                  : void 0 !== n &&
                    null !== n &&
                    '' !== n &&
                    (this.backend &&
                      this.backend.create &&
                      this.backend.create(e, t, n, r, null, vn({}, a, { isUpdate: o })),
                    e && e[0] && this.store.addResource(e[0], t, n, r))
              },
            },
          ]),
          t
        )
      })(Cn)
      function Xn() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ['translation'],
          defaultNS: ['translation'],
          fallbackLng: ['dev'],
          fallbackNS: !1,
          whitelist: !1,
          nonExplicitWhitelist: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: 'all',
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: '.',
          nsSeparator: ':',
          pluralSeparator: '_',
          contextSeparator: '_',
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: 'fallback',
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !0,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            var t = {}
            if (
              ('object' === Object(Pt.a)(e[1]) && (t = e[1]),
              'string' === typeof e[1] && (t.defaultValue = e[1]),
              'string' === typeof e[2] && (t.tDescription = e[2]),
              'object' === Object(Pt.a)(e[2]) || 'object' === Object(Pt.a)(e[3]))
            ) {
              var n = e[3] || e[2]
              Object.keys(n).forEach(function (e) {
                t[e] = n[e]
              })
            }
            return t
          },
          interpolation: {
            escapeValue: !0,
            format: function (e, t, n, r) {
              return e
            },
            prefix: '{{',
            suffix: '}}',
            formatSeparator: ',',
            unescapePrefix: '-',
            nestingPrefix: '$t(',
            nestingSuffix: ')',
            nestingOptionsSeparator: ',',
            maxReplaces: 1e3,
            skipOnVariables: !1,
          },
        }
      }
      function Yn(e) {
        return (
          'string' === typeof e.ns && (e.ns = [e.ns]),
          'string' === typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          'string' === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.whitelist &&
            (e.whitelist &&
              e.whitelist.indexOf('cimode') < 0 &&
              (e.whitelist = e.whitelist.concat(['cimode'])),
            (e.supportedLngs = e.whitelist)),
          e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist),
          e.supportedLngs &&
            e.supportedLngs.indexOf('cimode') < 0 &&
            (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
          e
        )
      }
      function $n() {}
      var Zn = new ((function (e) {
          function t() {
            var e,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              r = arguments.length > 1 ? arguments[1] : void 0
            if (
              (Object(mn.a)(this, t),
              (e = Object(bn.a)(this, Object(xn.a)(t).call(this))),
              Fn && Cn.call(Object(On.a)(e)),
              (e.options = Yn(n)),
              (e.services = {}),
              (e.logger = jn),
              (e.modules = { external: [] }),
              r && !e.isInitialized && !n.isClone)
            ) {
              if (!e.options.initImmediate) return e.init(n, r), Object(bn.a)(e, Object(On.a)(e))
              setTimeout(function () {
                e.init(n, r)
              }, 0)
            }
            return e
          }
          return (
            Object(wn.a)(t, e),
            Object(yn.a)(t, [
              {
                key: 'init',
                value: function () {
                  var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 ? arguments[1] : void 0
                  function r(e) {
                    return e ? ('function' === typeof e ? new e() : e) : null
                  }
                  if (
                    ('function' === typeof t && ((n = t), (t = {})),
                    t.whitelist &&
                      !t.supportedLngs &&
                      this.logger.deprecate(
                        'whitelist',
                        'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.',
                      ),
                    t.nonExplicitWhitelist &&
                      !t.nonExplicitSupportedLngs &&
                      this.logger.deprecate(
                        'whitelist',
                        'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.',
                      ),
                    (this.options = vn({}, Xn(), this.options, Yn(t))),
                    (this.format = this.options.interpolation.format),
                    n || (n = $n),
                    !this.options.isClone)
                  ) {
                    this.modules.logger
                      ? jn.init(r(this.modules.logger), this.options)
                      : jn.init(null, this.options)
                    var o = new Hn(this.options)
                    this.store = new Un(this.options.resources, this.options)
                    var a = this.services
                    ;(a.logger = jn),
                      (a.resourceStore = this.store),
                      (a.languageUtils = o),
                      (a.pluralResolver = new Wn(o, {
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                      })),
                      (a.interpolator = new Gn(this.options)),
                      (a.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
                      (a.backendConnector = new Qn(
                        r(this.modules.backend),
                        a.resourceStore,
                        a,
                        this.options,
                      )),
                      a.backendConnector.on('*', function (t) {
                        for (
                          var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
                          o < n;
                          o++
                        )
                          r[o - 1] = arguments[o]
                        e.emit.apply(e, [t].concat(r))
                      }),
                      this.modules.languageDetector &&
                        ((a.languageDetector = r(this.modules.languageDetector)),
                        a.languageDetector.init(a, this.options.detection, this.options)),
                      this.modules.i18nFormat &&
                        ((a.i18nFormat = r(this.modules.i18nFormat)),
                        a.i18nFormat.init && a.i18nFormat.init(this)),
                      (this.translator = new qn(this.services, this.options)),
                      this.translator.on('*', function (t) {
                        for (
                          var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
                          o < n;
                          o++
                        )
                          r[o - 1] = arguments[o]
                        e.emit.apply(e, [t].concat(r))
                      }),
                      this.modules.external.forEach(function (t) {
                        t.init && t.init(e)
                      })
                  }
                  if (
                    this.options.fallbackLng &&
                    !this.services.languageDetector &&
                    !this.options.lng
                  ) {
                    var i = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng)
                    i.length > 0 && 'dev' !== i[0] && (this.options.lng = i[0])
                  }
                  this.services.languageDetector ||
                    this.options.lng ||
                    this.logger.warn('init: no languageDetector is used and no lng is defined')
                  var s = [
                    'getResource',
                    'hasResourceBundle',
                    'getResourceBundle',
                    'getDataByLanguage',
                  ]
                  s.forEach(function (t) {
                    e[t] = function () {
                      var n
                      return (n = e.store)[t].apply(n, arguments)
                    }
                  })
                  var c = [
                    'addResource',
                    'addResources',
                    'addResourceBundle',
                    'removeResourceBundle',
                  ]
                  c.forEach(function (t) {
                    e[t] = function () {
                      var n
                      return (n = e.store)[t].apply(n, arguments), e
                    }
                  })
                  var u = Sn(),
                    l = function () {
                      var t = function (t, r) {
                        e.isInitialized &&
                          e.logger.warn(
                            'init: i18next is already initialized. You should call init just once!',
                          ),
                          (e.isInitialized = !0),
                          e.options.isClone || e.logger.log('initialized', e.options),
                          e.emit('initialized', e.options),
                          u.resolve(r),
                          n(t, r)
                      }
                      if (e.languages && 'v1' !== e.options.compatibilityAPI && !e.isInitialized)
                        return t(null, e.t.bind(e))
                      e.changeLanguage(e.options.lng, t)
                    }
                  return (
                    this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0),
                    u
                  )
                },
              },
              {
                key: 'loadResources',
                value: function (e) {
                  var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $n,
                    r = n,
                    o = 'string' === typeof e ? e : this.language
                  if (
                    ('function' === typeof e && (r = e),
                    !this.options.resources || this.options.partialBundledLanguages)
                  ) {
                    if (o && 'cimode' === o.toLowerCase()) return r()
                    var a = [],
                      i = function (e) {
                        e &&
                          t.services.languageUtils.toResolveHierarchy(e).forEach(function (e) {
                            a.indexOf(e) < 0 && a.push(e)
                          })
                      }
                    if (o) i(o)
                    else {
                      var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng)
                      s.forEach(function (e) {
                        return i(e)
                      })
                    }
                    this.options.preload &&
                      this.options.preload.forEach(function (e) {
                        return i(e)
                      }),
                      this.services.backendConnector.load(a, this.options.ns, r)
                  } else r(null)
                },
              },
              {
                key: 'reloadResources',
                value: function (e, t, n) {
                  var r = Sn()
                  return (
                    e || (e = this.languages),
                    t || (t = this.options.ns),
                    n || (n = $n),
                    this.services.backendConnector.reload(e, t, function (e) {
                      r.resolve(), n(e)
                    }),
                    r
                  )
                },
              },
              {
                key: 'use',
                value: function (e) {
                  if (!e)
                    throw new Error(
                      'You are passing an undefined module! Please check the object you are passing to i18next.use()',
                    )
                  if (!e.type)
                    throw new Error(
                      'You are passing a wrong module! Please check the object you are passing to i18next.use()',
                    )
                  return (
                    'backend' === e.type && (this.modules.backend = e),
                    ('logger' === e.type || (e.log && e.warn && e.error)) &&
                      (this.modules.logger = e),
                    'languageDetector' === e.type && (this.modules.languageDetector = e),
                    'i18nFormat' === e.type && (this.modules.i18nFormat = e),
                    'postProcessor' === e.type && zn.addPostProcessor(e),
                    '3rdParty' === e.type && this.modules.external.push(e),
                    this
                  )
                },
              },
              {
                key: 'changeLanguage',
                value: function (e, t) {
                  var n = this
                  this.isLanguageChangingTo = e
                  var r = Sn()
                  this.emit('languageChanging', e)
                  var o = function (e) {
                    var o =
                      'string' === typeof e ? e : n.services.languageUtils.getBestMatchFromCodes(e)
                    o &&
                      (n.language ||
                        ((n.language = o),
                        (n.languages = n.services.languageUtils.toResolveHierarchy(o))),
                      n.translator.language || n.translator.changeLanguage(o),
                      n.services.languageDetector &&
                        n.services.languageDetector.cacheUserLanguage(o)),
                      n.loadResources(o, function (e) {
                        !(function (e, o) {
                          o
                            ? ((n.language = o),
                              (n.languages = n.services.languageUtils.toResolveHierarchy(o)),
                              n.translator.changeLanguage(o),
                              (n.isLanguageChangingTo = void 0),
                              n.emit('languageChanged', o),
                              n.logger.log('languageChanged', o))
                            : (n.isLanguageChangingTo = void 0),
                            r.resolve(function () {
                              return n.t.apply(n, arguments)
                            }),
                            t &&
                              t(e, function () {
                                return n.t.apply(n, arguments)
                              })
                        })(e, o)
                      })
                  }
                  return (
                    e || !this.services.languageDetector || this.services.languageDetector.async
                      ? !e && this.services.languageDetector && this.services.languageDetector.async
                        ? this.services.languageDetector.detect(o)
                        : o(e)
                      : o(this.services.languageDetector.detect()),
                    r
                  )
                },
              },
              {
                key: 'getFixedT',
                value: function (e, t) {
                  var n = this,
                    r = function e(t, r) {
                      var o
                      if ('object' !== Object(Pt.a)(r)) {
                        for (
                          var a = arguments.length, i = new Array(a > 2 ? a - 2 : 0), s = 2;
                          s < a;
                          s++
                        )
                          i[s - 2] = arguments[s]
                        o = n.options.overloadTranslationOptionHandler([t, r].concat(i))
                      } else o = vn({}, r)
                      return (
                        (o.lng = o.lng || e.lng),
                        (o.lngs = o.lngs || e.lngs),
                        (o.ns = o.ns || e.ns),
                        n.t(t, o)
                      )
                    }
                  return 'string' === typeof e ? (r.lng = e) : (r.lngs = e), (r.ns = t), r
                },
              },
              {
                key: 't',
                value: function () {
                  var e
                  return this.translator && (e = this.translator).translate.apply(e, arguments)
                },
              },
              {
                key: 'exists',
                value: function () {
                  var e
                  return this.translator && (e = this.translator).exists.apply(e, arguments)
                },
              },
              {
                key: 'setDefaultNamespace',
                value: function (e) {
                  this.options.defaultNS = e
                },
              },
              {
                key: 'hasLoadedNamespace',
                value: function (e) {
                  var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  if (!this.isInitialized)
                    return (
                      this.logger.warn(
                        'hasLoadedNamespace: i18next was not initialized',
                        this.languages,
                      ),
                      !1
                    )
                  if (!this.languages || !this.languages.length)
                    return (
                      this.logger.warn(
                        'hasLoadedNamespace: i18n.languages were undefined or empty',
                        this.languages,
                      ),
                      !1
                    )
                  var r = this.languages[0],
                    o = !!this.options && this.options.fallbackLng,
                    a = this.languages[this.languages.length - 1]
                  if ('cimode' === r.toLowerCase()) return !0
                  var i = function (e, n) {
                    var r = t.services.backendConnector.state[''.concat(e, '|').concat(n)]
                    return -1 === r || 2 === r
                  }
                  if (n.precheck) {
                    var s = n.precheck(this, i)
                    if (void 0 !== s) return s
                  }
                  return (
                    !!this.hasResourceBundle(r, e) ||
                    !this.services.backendConnector.backend ||
                    !(!i(r, e) || (o && !i(a, e)))
                  )
                },
              },
              {
                key: 'loadNamespaces',
                value: function (e, t) {
                  var n = this,
                    r = Sn()
                  return this.options.ns
                    ? ('string' === typeof e && (e = [e]),
                      e.forEach(function (e) {
                        n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                      }),
                      this.loadResources(function (e) {
                        r.resolve(), t && t(e)
                      }),
                      r)
                    : (t && t(), Promise.resolve())
                },
              },
              {
                key: 'loadLanguages',
                value: function (e, t) {
                  var n = Sn()
                  'string' === typeof e && (e = [e])
                  var r = this.options.preload || [],
                    o = e.filter(function (e) {
                      return r.indexOf(e) < 0
                    })
                  return o.length
                    ? ((this.options.preload = r.concat(o)),
                      this.loadResources(function (e) {
                        n.resolve(), t && t(e)
                      }),
                      n)
                    : (t && t(), Promise.resolve())
                },
              },
              {
                key: 'dir',
                value: function (e) {
                  if (
                    (e ||
                      (e =
                        this.languages && this.languages.length > 0
                          ? this.languages[0]
                          : this.language),
                    !e)
                  )
                    return 'rtl'
                  return [
                    'ar',
                    'shu',
                    'sqr',
                    'ssh',
                    'xaa',
                    'yhd',
                    'yud',
                    'aao',
                    'abh',
                    'abv',
                    'acm',
                    'acq',
                    'acw',
                    'acx',
                    'acy',
                    'adf',
                    'ads',
                    'aeb',
                    'aec',
                    'afb',
                    'ajp',
                    'apc',
                    'apd',
                    'arb',
                    'arq',
                    'ars',
                    'ary',
                    'arz',
                    'auz',
                    'avl',
                    'ayh',
                    'ayl',
                    'ayn',
                    'ayp',
                    'bbz',
                    'pga',
                    'he',
                    'iw',
                    'ps',
                    'pbt',
                    'pbu',
                    'pst',
                    'prp',
                    'prd',
                    'ug',
                    'ur',
                    'ydd',
                    'yds',
                    'yih',
                    'ji',
                    'yi',
                    'hbo',
                    'men',
                    'xmn',
                    'fa',
                    'jpr',
                    'peo',
                    'pes',
                    'prs',
                    'dv',
                    'sam',
                  ].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0
                    ? 'rtl'
                    : 'ltr'
                },
              },
              {
                key: 'createInstance',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 ? arguments[1] : void 0
                  return new t(e, n)
                },
              },
              {
                key: 'cloneInstance',
                value: function () {
                  var e = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $n,
                    o = vn({}, this.options, n, { isClone: !0 }),
                    a = new t(o),
                    i = ['store', 'services', 'language']
                  return (
                    i.forEach(function (t) {
                      a[t] = e[t]
                    }),
                    (a.services = vn({}, this.services)),
                    (a.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }),
                    (a.translator = new qn(a.services, a.options)),
                    a.translator.on('*', function (e) {
                      for (
                        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
                        r < t;
                        r++
                      )
                        n[r - 1] = arguments[r]
                      a.emit.apply(a, [e].concat(n))
                    }),
                    a.init(o, r),
                    (a.translator.options = a.options),
                    (a.translator.backendConnector.services.utils = {
                      hasLoadedNamespace: a.hasLoadedNamespace.bind(a),
                    }),
                    a
                  )
                },
              },
            ]),
            t
          )
        })(Cn))(),
        er = n('QSL9'),
        tr = n('N1Uf'),
        nr = n('liYO')
      Zn.use(er.e).init({
        lng: 'zh_CN',
        fallbackLng: 'zh_CN',
        resources: { zh_CN: { translation: tr }, en_US: { translation: nr } },
        debug: !1,
        interpolation: { escapeValue: !1 },
      })
      n('TpwP')
      function rr(e, t) {
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
      function or(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? rr(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : rr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      t.default = function (e) {
        var t = e.Component,
          n = e.pageProps
        return Object(o.jsx)(pt.a, {
          store: dt,
          children: Object(o.jsxs)(pn, {
            children: [Object(o.jsx)(gn, {}), Object(o.jsx)(t, or({}, n))],
          }),
        })
      }
    },
    cpVT: function (e, t, n) {
      'use strict'
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      n.d(t, 'a', function () {
        return r
      })
    },
    dhJC: function (e, t, n) {
      'use strict'
      function r(e, t) {
        if (null == e) return {}
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              o = {},
              a = Object.keys(e)
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]))
        }
        return o
      }
      n.d(t, 'a', function () {
        return r
      })
    },
    endd: function (e, t, n) {
      'use strict'
      function r(e) {
        this.message = e
      }
      ;(r.prototype.toString = function () {
        return 'Cancel' + (this.message ? ': ' + this.message : '')
      }),
        (r.prototype.__CANCEL__ = !0),
        (e.exports = r)
    },
    eqyj: function (e, t, n) {
      'use strict'
      var r = n('xTJ+')
      e.exports = r.isStandardBrowserEnv()
        ? {
            write: function (e, t, n, o, a, i) {
              var s = []
              s.push(e + '=' + encodeURIComponent(t)),
                r.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
                r.isString(o) && s.push('path=' + o),
                r.isString(a) && s.push('domain=' + a),
                !0 === i && s.push('secure'),
                (document.cookie = s.join('; '))
            },
            read: function (e) {
              var t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'))
              return t ? decodeURIComponent(t[3]) : null
            },
            remove: function (e) {
              this.write(e, '', Date.now() - 864e5)
            },
          }
        : {
            write: function () {},
            read: function () {
              return null
            },
            remove: function () {},
          }
    },
    fEPi: function (e, t, n) {
      'use strict'
      var r
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var o = (r = n('9Odx')) && r.__esModule ? r : { default: r }
      ;(t.default = o), (e.exports = o)
    },
    foUO: function (e, t, n) {
      'use strict'
      var r = n('284h'),
        o = n('TqRt')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = t.Content = t.Footer = t.Header = t.LayoutContext = void 0)
      var a = o(n('RIqP')),
        i = o(n('lSNA')),
        s = o(n('J4zp')),
        c = o(n('pVnL')),
        u = r(n('q1tI')),
        l = o(n('TSYQ')),
        f = n('vgIT'),
        d = function (e, t) {
          var n = {}
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]])
          }
          return n
        },
        p = u.createContext({
          siderHook: {
            addSider: function () {
              return null
            },
            removeSider: function () {
              return null
            },
          },
        })
      function h(e) {
        var t = e.suffixCls,
          n = e.tagName,
          r = e.displayName
        return function (e) {
          var o = function (r) {
            var o = u.useContext(f.ConfigContext).getPrefixCls,
              a = r.prefixCls,
              i = o(t, a)
            return u.createElement(e, (0, c.default)({ prefixCls: i, tagName: n }, r))
          }
          return (o.displayName = r), o
        }
      }
      t.LayoutContext = p
      var g = function (e) {
          var t = e.prefixCls,
            n = e.className,
            r = e.children,
            o = e.tagName,
            a = d(e, ['prefixCls', 'className', 'children', 'tagName']),
            i = (0, l.default)(t, n)
          return u.createElement(o, (0, c.default)({ className: i }, a), r)
        },
        v = h({ suffixCls: 'layout', tagName: 'section', displayName: 'Layout' })(function (e) {
          var t,
            n = u.useContext(f.ConfigContext).direction,
            r = u.useState([]),
            o = (0, s.default)(r, 2),
            h = o[0],
            g = o[1],
            v = e.prefixCls,
            m = e.className,
            y = e.children,
            b = e.hasSider,
            x = e.tagName,
            O = d(e, ['prefixCls', 'className', 'children', 'hasSider', 'tagName']),
            w = (0, l.default)(
              v,
              ((t = {}),
              (0, i.default)(
                t,
                ''.concat(v, '-has-sider'),
                'boolean' === typeof b ? b : h.length > 0,
              ),
              (0, i.default)(t, ''.concat(v, '-rtl'), 'rtl' === n),
              t),
              m,
            )
          return u.createElement(
            p.Provider,
            {
              value: {
                siderHook: {
                  addSider: function (e) {
                    g(function (t) {
                      return [].concat((0, a.default)(t), [e])
                    })
                  },
                  removeSider: function (e) {
                    g(function (t) {
                      return t.filter(function (t) {
                        return t !== e
                      })
                    })
                  },
                },
              },
            },
            u.createElement(x, (0, c.default)({ className: w }, O), y),
          )
        }),
        m = h({ suffixCls: 'layout-header', tagName: 'header', displayName: 'Header' })(g)
      t.Header = m
      var y = h({ suffixCls: 'layout-footer', tagName: 'footer', displayName: 'Footer' })(g)
      t.Footer = y
      var b = h({ suffixCls: 'layout-content', tagName: 'main', displayName: 'Content' })(g)
      t.Content = b
      var x = v
      t.default = x
    },
    g7np: function (e, t, n) {
      'use strict'
      var r = n('2SVd'),
        o = n('5oMp')
      e.exports = function (e, t) {
        return e && !r(t) ? o(e, t) : t
      }
    },
    hIuj: function (e, t, n) {
      'use strict'
      var r = n('SgzI'),
        o = {}
      ;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (e, t) {
        o[e] = function (n) {
          return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e
        }
      })
      var a = {},
        i = r.version.split('.')
      function s(e, t) {
        for (var n = t ? t.split('.') : i, r = e.split('.'), o = 0; o < 3; o++) {
          if (n[o] > r[o]) return !0
          if (n[o] < r[o]) return !1
        }
        return !1
      }
      ;(o.transitional = function (e, t, n) {
        var o = t && s(t)
        function i(e, t) {
          return (
            '[Axios v' + r.version + "] Transitional option '" + e + "'" + t + (n ? '. ' + n : '')
          )
        }
        return function (n, r, s) {
          if (!1 === e) throw new Error(i(r, ' has been removed in ' + t))
          return (
            o &&
              !a[r] &&
              ((a[r] = !0),
              console.warn(
                i(
                  r,
                  ' has been deprecated since v' + t + ' and will be removed in the near future',
                ),
              )),
            !e || e(n, r, s)
          )
        }
      }),
        (e.exports = {
          isOlderVersion: s,
          assertOptions: function (e, t, n) {
            if ('object' !== typeof e) throw new TypeError('options must be an object')
            for (var r = Object.keys(e), o = r.length; o-- > 0; ) {
              var a = r[o],
                i = t[a]
              if (i) {
                var s = e[a],
                  c = void 0 === s || i(s, a, e)
                if (!0 !== c) throw new TypeError('option ' + a + ' must be ' + c)
              } else if (!0 !== n) throw Error('Unknown option ' + a)
            }
          },
          validators: o,
        })
    },
    'jfS+': function (e, t, n) {
      'use strict'
      var r = n('endd')
      function o(e) {
        if ('function' !== typeof e) throw new TypeError('executor must be a function.')
        var t
        this.promise = new Promise(function (e) {
          t = e
        })
        var n = this
        e(function (e) {
          n.reason || ((n.reason = new r(e)), t(n.reason))
        })
      }
      ;(o.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
      }),
        (o.source = function () {
          var e
          return {
            token: new o(function (t) {
              e = t
            }),
            cancel: e,
          }
        }),
        (e.exports = o)
    },
    liYO: function (e) {
      e.exports = JSON.parse(
        '{"home":{"user":"Go to User Page","articles":"Go to Articles Page","change_lang":"Switch to Chinese"},"user":{"title":"User Page","intro":"Example\uff1afetch data from redux-saga","info":"User info","id":"id","username":"username","name":"name"},"articles":{"title":"ArticleList Page","intro":"get data from getStaticProps","article_id":"id","article_title":"title","article_body":"content"},"footer":{"copyright":"Copyright \xa92023"},"error":{"404":"Sorry, the page you visited does not exist."},"back_home":"Back to home page"}',
      )
    },
    mXFb: function (e, t, n) {
      'use strict'
      var r = n('284h'),
        o = n('TqRt')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = o(n('pVnL')),
        i = o(n('lwsE')),
        s = o(n('W8MJ')),
        c = o(n('7W2i')),
        u = o(n('LQ03')),
        l = r(n('q1tI')),
        f = n('1j5w'),
        d = o(n('TSYQ')),
        p = o(n('BGR+')),
        h = o(n('bRFr')),
        g = n('vCXI'),
        v = (function (e) {
          ;(0, c.default)(n, e)
          var t = (0, u.default)(n)
          function n() {
            return (0, i.default)(this, n), t.apply(this, arguments)
          }
          return (
            (0, s.default)(n, [
              {
                key: 'renderTitle',
                value: function (e) {
                  var t = this.props,
                    n = t.icon,
                    r = t.title,
                    o = t.level,
                    a = t.rootPrefixCls
                  if (!n)
                    return e && 1 === o && r && 'string' === typeof r
                      ? l.createElement(
                          'div',
                          { className: ''.concat(a, '-inline-collapsed-noicon') },
                          r.charAt(0),
                        )
                      : r
                  var i = (0, g.isValidElement)(r) && 'span' === r.type
                  return l.createElement(
                    l.Fragment,
                    null,
                    n,
                    i ? r : l.createElement('span', null, r),
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.rootPrefixCls,
                    r = t.popupClassName
                  return l.createElement(h.default.Consumer, null, function (t) {
                    var o = t.inlineCollapsed,
                      i = t.antdMenuTheme
                    return l.createElement(
                      f.SubMenu,
                      (0, a.default)({}, (0, p.default)(e.props, ['icon']), {
                        title: e.renderTitle(o),
                        popupClassName: (0, d.default)(n, ''.concat(n, '-').concat(i), r),
                      }),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(l.Component)
      ;(v.contextType = h.default), (v.isSubMenu = 1)
      var m = v
      t.default = m
    },
    tQ2B: function (e, t, n) {
      'use strict'
      var r = n('xTJ+'),
        o = n('Rn+g'),
        a = n('eqyj'),
        i = n('MLWZ'),
        s = n('g7np'),
        c = n('w0Vi'),
        u = n('OTTw'),
        l = n('LYNF')
      e.exports = function (e) {
        return new Promise(function (t, n) {
          var f = e.data,
            d = e.headers,
            p = e.responseType
          r.isFormData(f) && delete d['Content-Type']
          var h = new XMLHttpRequest()
          if (e.auth) {
            var g = e.auth.username || '',
              v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : ''
            d.Authorization = 'Basic ' + btoa(g + ':' + v)
          }
          var m = s(e.baseURL, e.url)
          function y() {
            if (h) {
              var r = 'getAllResponseHeaders' in h ? c(h.getAllResponseHeaders()) : null,
                a = {
                  data: p && 'text' !== p && 'json' !== p ? h.response : h.responseText,
                  status: h.status,
                  statusText: h.statusText,
                  headers: r,
                  config: e,
                  request: h,
                }
              o(t, n, a), (h = null)
            }
          }
          if (
            (h.open(e.method.toUpperCase(), i(m, e.params, e.paramsSerializer), !0),
            (h.timeout = e.timeout),
            'onloadend' in h
              ? (h.onloadend = y)
              : (h.onreadystatechange = function () {
                  h &&
                    4 === h.readyState &&
                    (0 !== h.status || (h.responseURL && 0 === h.responseURL.indexOf('file:'))) &&
                    setTimeout(y)
                }),
            (h.onabort = function () {
              h && (n(l('Request aborted', e, 'ECONNABORTED', h)), (h = null))
            }),
            (h.onerror = function () {
              n(l('Network Error', e, null, h)), (h = null)
            }),
            (h.ontimeout = function () {
              var t = 'timeout of ' + e.timeout + 'ms exceeded'
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                n(
                  l(
                    t,
                    e,
                    e.transitional && e.transitional.clarifyTimeoutError
                      ? 'ETIMEDOUT'
                      : 'ECONNABORTED',
                    h,
                  ),
                ),
                (h = null)
            }),
            r.isStandardBrowserEnv())
          ) {
            var b =
              (e.withCredentials || u(m)) && e.xsrfCookieName ? a.read(e.xsrfCookieName) : void 0
            b && (d[e.xsrfHeaderName] = b)
          }
          'setRequestHeader' in h &&
            r.forEach(d, function (e, t) {
              'undefined' === typeof f && 'content-type' === t.toLowerCase()
                ? delete d[t]
                : h.setRequestHeader(t, e)
            }),
            r.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials),
            p && 'json' !== p && (h.responseType = e.responseType),
            'function' === typeof e.onDownloadProgress &&
              h.addEventListener('progress', e.onDownloadProgress),
            'function' === typeof e.onUploadProgress &&
              h.upload &&
              h.upload.addEventListener('progress', e.onUploadProgress),
            e.cancelToken &&
              e.cancelToken.promise.then(function (e) {
                h && (h.abort(), n(e), (h = null))
              }),
            f || (f = null),
            h.send(f)
        })
      }
    },
    vCXI: function (e, t, n) {
      'use strict'
      var r = n('284h')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.replaceElement = i),
        (t.cloneElement = function (e, t) {
          return i(e, e, t)
        }),
        (t.isValidElement = void 0)
      var o = r(n('q1tI')),
        a = o.isValidElement
      function i(e, t, n) {
        return a(e) ? o.cloneElement(e, 'function' === typeof n ? n(e.props || {}) : n) : t
      }
      t.isValidElement = a
    },
    vDqi: function (e, t, n) {
      e.exports = n('zuR4')
    },
    vNVm: function (e, t, n) {
      'use strict'
      var r = n('zoAU'),
        o = n('AroE')
      ;(t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !s,
            o = (0, a.useRef)(),
            u = (0, a.useState)(!1),
            l = r(u, 2),
            f = l[0],
            d = l[1],
            p = (0, a.useCallback)(
              function (e) {
                o.current && (o.current(), (o.current = void 0)),
                  n ||
                    f ||
                    (e &&
                      e.tagName &&
                      (o.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t = e.rootMargin || '',
                              n = c.get(t)
                            if (n) return n
                            var r = new Map(),
                              o = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n = e.isIntersecting || e.intersectionRatio > 0
                                  t && n && t(n)
                                })
                              }, e)
                            return c.set(t, (n = { id: t, observer: o, elements: r })), n
                          })(n),
                          o = r.id,
                          a = r.observer,
                          i = r.elements
                        return (
                          i.set(e, t),
                          a.observe(e),
                          function () {
                            a.unobserve(e), 0 === i.size && (a.disconnect(), c.delete(o))
                          }
                        )
                      })(
                        e,
                        function (e) {
                          return e && d(e)
                        },
                        { rootMargin: t },
                      )))
              },
              [n, t, f],
            )
          return (
            (0, a.useEffect)(
              function () {
                s ||
                  f ||
                  (0, i.default)(function () {
                    return d(!0)
                  })
              },
              [f],
            ),
            [p, f]
          )
        })
      var a = n('q1tI'),
        i = o(n('0G5g')),
        s = 'undefined' !== typeof IntersectionObserver
      var c = new Map()
    },
    w0Vi: function (e, t, n) {
      'use strict'
      var r = n('xTJ+'),
        o = [
          'age',
          'authorization',
          'content-length',
          'content-type',
          'etag',
          'expires',
          'from',
          'host',
          'if-modified-since',
          'if-unmodified-since',
          'last-modified',
          'location',
          'max-forwards',
          'proxy-authorization',
          'referer',
          'retry-after',
          'user-agent',
        ]
      e.exports = function (e) {
        var t,
          n,
          a,
          i = {}
        return e
          ? (r.forEach(e.split('\n'), function (e) {
              if (
                ((a = e.indexOf(':')),
                (t = r.trim(e.substr(0, a)).toLowerCase()),
                (n = r.trim(e.substr(a + 1))),
                t)
              ) {
                if (i[t] && o.indexOf(t) >= 0) return
                i[t] =
                  'set-cookie' === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ', ' + n : n
              }
            }),
            i)
          : i
      }
    },
    wgjA: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      t.default = {
        icon: {
          tag: 'svg',
          attrs: { viewBox: '64 64 896 896', focusable: 'false' },
          children: [
            {
              tag: 'path',
              attrs: {
                d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
              },
            },
          ],
        },
        name: 'left',
        theme: 'outlined',
      }
    },
    xAGQ: function (e, t, n) {
      'use strict'
      var r = n('xTJ+'),
        o = n('JEQr')
      e.exports = function (e, t, n) {
        var a = this || o
        return (
          r.forEach(n, function (n) {
            e = n.call(a, e, t)
          }),
          e
        )
      }
    },
    'xTJ+': function (e, t, n) {
      'use strict'
      var r = n('HSsa'),
        o = Object.prototype.toString
      function a(e) {
        return '[object Array]' === o.call(e)
      }
      function i(e) {
        return 'undefined' === typeof e
      }
      function s(e) {
        return null !== e && 'object' === typeof e
      }
      function c(e) {
        if ('[object Object]' !== o.call(e)) return !1
        var t = Object.getPrototypeOf(e)
        return null === t || t === Object.prototype
      }
      function u(e) {
        return '[object Function]' === o.call(e)
      }
      function l(e, t) {
        if (null !== e && 'undefined' !== typeof e)
          if (('object' !== typeof e && (e = [e]), a(e)))
            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e)
          else
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
      }
      e.exports = {
        isArray: a,
        isArrayBuffer: function (e) {
          return '[object ArrayBuffer]' === o.call(e)
        },
        isBuffer: function (e) {
          return (
            null !== e &&
            !i(e) &&
            null !== e.constructor &&
            !i(e.constructor) &&
            'function' === typeof e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          )
        },
        isFormData: function (e) {
          return 'undefined' !== typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function (e) {
          return 'undefined' !== typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function (e) {
          return 'string' === typeof e
        },
        isNumber: function (e) {
          return 'number' === typeof e
        },
        isObject: s,
        isPlainObject: c,
        isUndefined: i,
        isDate: function (e) {
          return '[object Date]' === o.call(e)
        },
        isFile: function (e) {
          return '[object File]' === o.call(e)
        },
        isBlob: function (e) {
          return '[object Blob]' === o.call(e)
        },
        isFunction: u,
        isStream: function (e) {
          return s(e) && u(e.pipe)
        },
        isURLSearchParams: function (e) {
          return 'undefined' !== typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function () {
          return (
            ('undefined' === typeof navigator ||
              ('ReactNative' !== navigator.product &&
                'NativeScript' !== navigator.product &&
                'NS' !== navigator.product)) &&
            'undefined' !== typeof window &&
            'undefined' !== typeof document
          )
        },
        forEach: l,
        merge: function e() {
          var t = {}
          function n(n, r) {
            c(t[r]) && c(n)
              ? (t[r] = e(t[r], n))
              : c(n)
              ? (t[r] = e({}, n))
              : a(n)
              ? (t[r] = n.slice())
              : (t[r] = n)
          }
          for (var r = 0, o = arguments.length; r < o; r++) l(arguments[r], n)
          return t
        },
        extend: function (e, t, n) {
          return (
            l(t, function (t, o) {
              e[o] = n && 'function' === typeof t ? r(t, n) : t
            }),
            e
          )
        },
        trim: function (e) {
          return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '')
        },
        stripBOM: function (e) {
          return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
        },
      }
    },
    yK9s: function (e, t, n) {
      'use strict'
      var r = n('xTJ+')
      e.exports = function (e, t) {
        r.forEach(e, function (n, r) {
          r !== t && r.toUpperCase() === t.toUpperCase() && ((e[t] = n), delete e[r])
        })
      }
    },
    zdCA: function (e, t, n) {
      'use strict'
      var r = n('TqRt'),
        o = n('cDf5')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var a = r(n('3tO9')),
        i = (function (e, t) {
          if (!t && e && e.__esModule) return e
          if (null === e || ('object' !== o(e) && 'function' !== typeof e)) return { default: e }
          var n = u(t)
          if (n && n.has(e)) return n.get(e)
          var r = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var i in e)
            if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var s = a ? Object.getOwnPropertyDescriptor(e, i) : null
              s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i])
            }
          ;(r.default = e), n && n.set(e, r)
          return r
        })(n('q1tI')),
        s = r(n('PSzr')),
        c = r(n('KQxl'))
      function u(e) {
        if ('function' !== typeof WeakMap) return null
        var t = new WeakMap(),
          n = new WeakMap()
        return (u = function (e) {
          return e ? n : t
        })(e)
      }
      var l = function (e, t) {
        return i.createElement(
          c.default,
          (0, a.default)((0, a.default)({}, e), {}, { ref: t, icon: s.default }),
        )
      }
      l.displayName = 'BarsOutlined'
      var f = i.forwardRef(l)
      t.default = f
    },
    zuR4: function (e, t, n) {
      'use strict'
      var r = n('xTJ+'),
        o = n('HSsa'),
        a = n('CgaS'),
        i = n('SntB')
      function s(e) {
        var t = new a(e),
          n = o(a.prototype.request, t)
        return r.extend(n, a.prototype, t), r.extend(n, t), n
      }
      var c = s(n('JEQr'))
      ;(c.Axios = a),
        (c.create = function (e) {
          return s(i(c.defaults, e))
        }),
        (c.Cancel = n('endd')),
        (c.CancelToken = n('jfS+')),
        (c.isCancel = n('Lmem')),
        (c.all = function (e) {
          return Promise.all(e)
        }),
        (c.spread = n('DfZB')),
        (c.isAxiosError = n('XwJu')),
        (e.exports = c),
        (e.exports.default = c)
    },
  },
  [[0, 0, 1, 12, 2, 3, 4, 6, 5, 9, 11]],
])
