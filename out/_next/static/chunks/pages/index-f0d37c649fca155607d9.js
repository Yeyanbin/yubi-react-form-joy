_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [21],
  {
    '/EDR': function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n('23aj')
        },
      ])
    },
    '23aj': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('4IMT'),
        o = n.n(r),
        c = n('nKUr'),
        a = (n('q1tI'), n('9Koi')),
        i = n('vOnD'),
        s = n('8Rtz'),
        u = n('2yP/'),
        l = Object(i.default)(u.a).withConfig({
          displayName: 'pages__CoreTitle',
          componentId: 'sc-1jmem4v-0',
        })(['margin:40px 0;font-weight:700;']),
        f = Object(i.default)(o.a).withConfig({
          displayName: 'pages__LinkButton',
          componentId: 'sc-1jmem4v-1',
        })(['margin-right:20px;'])
      t.default = function () {
        var e = Object(a.a)(),
          t = e.t,
          n = e.i18n
        return Object(c.jsxs)('div', {
          children: [
            Object(c.jsx)(l, { children: 'Nextjs-TS-Antd-Redux-Storybook-Jest-Starter' }),
            Object(c.jsx)(f, {
              children: Object(c.jsx)(s.a, { href: '/user', children: t('home.user') }),
            }),
            Object(c.jsx)(f, {
              children: Object(c.jsx)(s.a, { href: '/articles', children: t('home.articles') }),
            }),
            Object(c.jsx)(o.a, {
              onClick: function () {
                n.changeLanguage('zh_CN' === n.language ? 'en_US' : 'zh_CN')
              },
              children: t('home.change_lang'),
            }),
          ],
        })
      }
    },
    '2yP/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var r = n('vOnD').default.h2.withConfig({ displayName: 'Title', componentId: 'sc-uv7y46-0' })(
        ['margin-top:25px;margin-bottom:15px;font-size:30px;'],
      )
    },
    '8Rtz': function (e, t, n) {
      'use strict'
      var r = n('cpVT'),
        o = n('dhJC'),
        c = n('nKUr'),
        a = (n('q1tI'), n('YFqc')),
        i = n.n(a)
      function s(e, t) {
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
            ? s(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      t.a = function (e) {
        var t = e.href,
          n = e.title,
          r = e.target,
          a = e.onClick,
          s = e.className,
          l = e.children,
          f = Object(o.a)(e, ['href', 'title', 'target', 'onClick', 'className', 'children']),
          p = '_blank' === r,
          d = p ? 'noreferrer noopener' : void 0,
          h = function (e) {
            null === a || void 0 === a || a(e)
          }
        return (function (e) {
          return !e || ('string' === typeof e && /^(https?:)?\/\//.test(e))
        })(t) || p
          ? Object(c.jsx)('a', {
              className: s,
              href: t,
              title: n,
              target: r,
              rel: d,
              onClick: h,
              children: l,
            })
          : Object(c.jsx)(
              i.a,
              u(
                u({ href: t }, f),
                {},
                { children: Object(c.jsx)('a', { onClick: h, children: l }) },
              ),
            )
      }
    },
    YFqc: function (e, t, n) {
      e.exports = n('cTJO')
    },
    cTJO: function (e, t, n) {
      'use strict'
      var r = n('zoAU'),
        o = n('7KCV')
      ;(t.__esModule = !0), (t.default = void 0)
      var c = o(n('q1tI')),
        a = n('elyg'),
        i = n('nOHt'),
        s = n('vNVm'),
        u = {}
      function l(e, t, n, r) {
        if ((0, a.isLocalURL)(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0
          })
          var o = r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale
          u[t + '%' + n + (o ? '%' + o : '')] = !0
        }
      }
      var f = function (e) {
        var t = !1 !== e.prefetch,
          n = (0, i.useRouter)(),
          o = (n && n.pathname) || '/',
          f = c.default.useMemo(
            function () {
              var t = (0, a.resolveHref)(o, e.href, !0),
                n = r(t, 2),
                c = n[0],
                i = n[1]
              return { href: c, as: e.as ? (0, a.resolveHref)(o, e.as) : i || c }
            },
            [o, e.href, e.as],
          ),
          p = f.href,
          d = f.as,
          h = e.children,
          v = e.replace,
          b = e.shallow,
          g = e.scroll,
          j = e.locale
        'string' === typeof h && (h = c.default.createElement('a', null, h))
        var O = c.Children.only(h),
          y = O && 'object' === typeof O && O.ref,
          m = (0, s.useIntersection)({ rootMargin: '200px' }),
          w = r(m, 2),
          _ = w[0],
          x = w[1],
          E = c.default.useCallback(
            function (e) {
              _(e), y && ('function' === typeof y ? y(e) : 'object' === typeof y && (y.current = e))
            },
            [y, _],
          )
        ;(0, c.useEffect)(
          function () {
            var e = x && t && (0, a.isLocalURL)(p),
              r = 'undefined' !== typeof j ? j : n && n.locale,
              o = u[p + '%' + d + (r ? '%' + r : '')]
            e && !o && l(n, p, d, { locale: r })
          },
          [d, p, x, j, t, n],
        )
        var C = {
          ref: E,
          onClick: function (e) {
            O.props && 'function' === typeof O.props.onClick && O.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, o, c, i, s) {
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
                      (0, a.isLocalURL)(n))) &&
                    (e.preventDefault(),
                    null == i && (i = r.indexOf('#') < 0),
                    t[o ? 'replace' : 'push'](n, r, { shallow: c, locale: s }).then(function (e) {
                      e && i && (window.scrollTo(0, 0), document.body.focus())
                    }))
                })(e, n, p, d, v, b, g, j)
          },
          onMouseEnter: function (e) {
            ;(0, a.isLocalURL)(p) &&
              (O.props && 'function' === typeof O.props.onMouseEnter && O.props.onMouseEnter(e),
              l(n, p, d, { priority: !0 }))
          },
        }
        return (
          (e.passHref || ('a' === O.type && !('href' in O.props))) &&
            (C.href = (0, a.addBasePath)(
              (0, a.addLocale)(
                d,
                'undefined' !== typeof j ? j : n && n.locale,
                n && n.defaultLocale,
              ),
            )),
          c.default.cloneElement(O, C)
        )
      }
      t.default = f
    },
    vNVm: function (e, t, n) {
      'use strict'
      var r = n('zoAU'),
        o = n('AroE')
      ;(t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !i,
            o = (0, c.useRef)(),
            u = (0, c.useState)(!1),
            l = r(u, 2),
            f = l[0],
            p = l[1],
            d = (0, c.useCallback)(
              function (e) {
                o.current && (o.current(), (o.current = void 0)),
                  n ||
                    f ||
                    (e &&
                      e.tagName &&
                      (o.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t = e.rootMargin || '',
                              n = s.get(t)
                            if (n) return n
                            var r = new Map(),
                              o = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n = e.isIntersecting || e.intersectionRatio > 0
                                  t && n && t(n)
                                })
                              }, e)
                            return s.set(t, (n = { id: t, observer: o, elements: r })), n
                          })(n),
                          o = r.id,
                          c = r.observer,
                          a = r.elements
                        return (
                          a.set(e, t),
                          c.observe(e),
                          function () {
                            c.unobserve(e), 0 === a.size && (c.disconnect(), s.delete(o))
                          }
                        )
                      })(
                        e,
                        function (e) {
                          return e && p(e)
                        },
                        { rootMargin: t },
                      )))
              },
              [n, t, f],
            )
          return (
            (0, c.useEffect)(
              function () {
                i ||
                  f ||
                  (0, a.default)(function () {
                    return p(!0)
                  })
              },
              [f],
            ),
            [d, f]
          )
        })
      var c = n('q1tI'),
        a = o(n('0G5g')),
        i = 'undefined' !== typeof IntersectionObserver
      var s = new Map()
    },
  },
  [['/EDR', 0, 1, 2, 4, 6, 7]],
])