_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [19],
  {
    '2mql': function (e, t, n) {
      'use strict'
      var o = n('r36Y'),
        r = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        c = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        i = {}
      function l(e) {
        return o.isMemo(e) ? a : i[e.$$typeof] || r
      }
      ;(i[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (i[o.Memo] = a)
      var s = Object.defineProperty,
        p = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        u = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        b = Object.prototype
      e.exports = function e(t, n, o) {
        if ('string' !== typeof n) {
          if (b) {
            var r = d(n)
            r && r !== b && e(t, r, o)
          }
          var a = p(n)
          f && (a = a.concat(f(n)))
          for (var i = l(t), m = l(n), y = 0; y < a.length; ++y) {
            var j = a[y]
            if (!c[j] && (!o || !o[j]) && (!m || !m[j]) && (!i || !i[j])) {
              var O = u(n, j)
              try {
                s(t, j, O)
              } catch (_) {}
            }
          }
        }
        return t
      }
    },
    Copi: function (e, t, n) {
      'use strict'
      var o = 'function' === typeof Symbol && Symbol.for,
        r = o ? Symbol.for('react.element') : 60103,
        c = o ? Symbol.for('react.portal') : 60106,
        a = o ? Symbol.for('react.fragment') : 60107,
        i = o ? Symbol.for('react.strict_mode') : 60108,
        l = o ? Symbol.for('react.profiler') : 60114,
        s = o ? Symbol.for('react.provider') : 60109,
        p = o ? Symbol.for('react.context') : 60110,
        f = o ? Symbol.for('react.async_mode') : 60111,
        u = o ? Symbol.for('react.concurrent_mode') : 60111,
        d = o ? Symbol.for('react.forward_ref') : 60112,
        b = o ? Symbol.for('react.suspense') : 60113,
        m = o ? Symbol.for('react.suspense_list') : 60120,
        y = o ? Symbol.for('react.memo') : 60115,
        j = o ? Symbol.for('react.lazy') : 60116,
        O = o ? Symbol.for('react.block') : 60121,
        _ = o ? Symbol.for('react.fundamental') : 60117,
        v = o ? Symbol.for('react.responder') : 60118,
        g = o ? Symbol.for('react.scope') : 60119
      function h(e) {
        if ('object' === typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case f:
                case u:
                case a:
                case l:
                case i:
                case b:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case p:
                    case d:
                    case j:
                    case y:
                    case s:
                      return e
                    default:
                      return t
                  }
              }
            case c:
              return t
          }
        }
      }
      function S(e) {
        return h(e) === u
      }
      ;(t.AsyncMode = f),
        (t.ConcurrentMode = u),
        (t.ContextConsumer = p),
        (t.ContextProvider = s),
        (t.Element = r),
        (t.ForwardRef = d),
        (t.Fragment = a),
        (t.Lazy = j),
        (t.Memo = y),
        (t.Portal = c),
        (t.Profiler = l),
        (t.StrictMode = i),
        (t.Suspense = b),
        (t.isAsyncMode = function (e) {
          return S(e) || h(e) === f
        }),
        (t.isConcurrentMode = S),
        (t.isContextConsumer = function (e) {
          return h(e) === p
        }),
        (t.isContextProvider = function (e) {
          return h(e) === s
        }),
        (t.isElement = function (e) {
          return 'object' === typeof e && null !== e && e.$$typeof === r
        }),
        (t.isForwardRef = function (e) {
          return h(e) === d
        }),
        (t.isFragment = function (e) {
          return h(e) === a
        }),
        (t.isLazy = function (e) {
          return h(e) === j
        }),
        (t.isMemo = function (e) {
          return h(e) === y
        }),
        (t.isPortal = function (e) {
          return h(e) === c
        }),
        (t.isProfiler = function (e) {
          return h(e) === l
        }),
        (t.isStrictMode = function (e) {
          return h(e) === i
        }),
        (t.isSuspense = function (e) {
          return h(e) === b
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' === typeof e ||
            'function' === typeof e ||
            e === a ||
            e === u ||
            e === l ||
            e === i ||
            e === b ||
            e === m ||
            ('object' === typeof e &&
              null !== e &&
              (e.$$typeof === j ||
                e.$$typeof === y ||
                e.$$typeof === s ||
                e.$$typeof === p ||
                e.$$typeof === d ||
                e.$$typeof === _ ||
                e.$$typeof === v ||
                e.$$typeof === g ||
                e.$$typeof === O))
          )
        }),
        (t.typeOf = h)
    },
    XK8L: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '__N_SSG', function () {
          return w
        })
      var o = n('N9UN'),
        r = n.n(o),
        c = n('4IMT'),
        a = n.n(c),
        i = n('nKUr'),
        l = n('cpVT'),
        s = n('dhJC'),
        p = n('q1tI'),
        f = n('ejeD'),
        u = n.n(f),
        d = n('JFdn')
      function b(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                Object(l.a)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var y = function (e) {
        var t = e.contentItem,
          n = e.contentItemIndex,
          o = e.toModifyCb,
          r = Object(s.a)(e, ['contentItem', 'contentItemIndex', 'toModifyCb'])
        return Object(i.jsxs)(
          'div',
          m(
            m({}, r),
            {},
            {
              className: u.a.container_editBoard_item,
              onClickCapture: function (e) {
                console.log('click', e, t)
              },
              children: [
                Object(i.jsx)('div', {
                  className: u.a.container_editBoard_item__content,
                  children: Object(i.jsx)(d.a, { change: function () {}, content: [t] }),
                }),
                Object(i.jsxs)('div', {
                  className: u.a.container_editBoard_item__btn,
                  children: [
                    Object(i.jsx)(a.a, {
                      danger: !0,
                      size: 'small',
                      value: 'large',
                      children: '\u5220\u9664',
                    }),
                    Object(i.jsx)(a.a, {
                      type: 'primary',
                      size: 'small',
                      value: 'default',
                      onClick: function (e) {
                        console.log('click', e), o(t, n)
                      },
                      children: '\u4fee\u6539',
                    }),
                  ],
                }),
              ],
            },
          ),
        )
      }
      function j(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                Object(l.a)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var _ = function (e) {
          var t = e.content,
            n = e.toModifyCb,
            o = Object(s.a)(e, ['content', 'toModifyCb']),
            r = Object(p.useState)(t),
            c = r[0],
            a = r[1]
          return (
            Object(p.useEffect)(
              function () {
                a(t)
              },
              [t],
            ),
            Object(i.jsx)(
              'div',
              O(
                O({}, o),
                {},
                {
                  className: u.a.container_editBoard,
                  children: c.map(function (e, t) {
                    return Object(i.jsx)(
                      y,
                      { toModifyCb: n, contentItem: e, contentItemIndex: t },
                      ''.concat(e.prop, '-').concat(t),
                    )
                  }),
                },
              ),
            )
          )
        },
        v = n('lIGE'),
        g = {
          config: { name: '\u8868\u5355\u5c5e\u6027' },
          content: [
            {
              component: 'Input',
              prop: 'name',
              label: '\u540d\u79f0',
              attr: { placeholder: '\u8bf7\u8f93\u5165\u8be5\u8868\u5355\u7684\u540d\u79f0' },
            },
          ],
        },
        h = {
          config: { name: '\u8868\u5355\u9879\u7684\u57fa\u7840\u5c5e\u6027\u8868\u5355' },
          content: [
            {
              prop: 'component',
              component: 'Select',
              label: '\u9009\u62e9\u8868\u5355\u7ec4\u4ef6',
              options: [
                { value: 'Input', label: '\u8f93\u5165\u6846' },
                { value: 'Select', label: '\u9009\u62e9\u6846' },
                { value: 'Radio', label: '\u5355\u9009' },
              ],
              rules: [{ required: !0 }],
            },
            {
              prop: 'prop',
              component: 'Input',
              label: '\u5b57\u6bb5',
              attr: { placeholder: '\u8bf7\u8f93\u5165\u8be5\u8868\u5355\u9879\u7684\u5b57\u6bb5' },
              rules: [{ required: !0 }],
            },
            {
              prop: 'label',
              component: 'Input',
              label: '\u6807\u7b7e',
              attr: {
                placeholder:
                  '\u8bf7\u8f93\u5165\u8be5\u8868\u5355\u9879\u7684\u6807\u7b7e\u6587\u672c',
              },
              rules: [{ required: !0 }],
            },
          ],
        },
        S = {
          Input: {
            config: { name: '\u8f93\u5165\u6846\u7684\u8868\u5355' },
            content: [
              {
                prop: 'deriveComponent',
                component: 'Select',
                label: '\u9009\u62e9\u6d3e\u751f\u7ec4\u4ef6',
                options: [
                  { value: 'Input', label: '\u8f93\u5165\u6846' },
                  { value: 'Input.Password', label: '\u5bc6\u7801\u8f93\u5165\u6846' },
                  { value: 'Input.TextArea', label: '\u6587\u672c\u8f93\u5165\u6846' },
                ],
              },
              {
                prop: 'attr.placeholder',
                component: 'Input',
                label: 'placeholder',
                attr: {
                  placeholder:
                    '\u8bf7\u8f93\u5165\u8be5\u8f93\u5165\u6846\u7684\u4ecb\u7ecd\u6587\u672c',
                },
              },
            ],
          },
        },
        x = function (e) {
          var t
          return e ? Object(v.b)(null !== (t = S[e]) && void 0 !== t ? t : {}) : void 0
        },
        w = !0
      t.default = function (e) {
        var t,
          n = e.formConfig,
          o = e.formContent,
          c = Object(p.useState)(Object(v.a)(o)),
          l = c[0],
          s = (c[1], Object(p.useState)()),
          f = s[0],
          b = s[1],
          m = Object(p.useState)(null === f || void 0 === f ? void 0 : f.contentItem.component),
          y = m[0],
          j = m[1],
          O = Object(p.useState)(x(y)),
          S = O[0],
          w = O[1],
          P = Object(p.useState)(Object(v.a)(g.content)),
          $ = P[0],
          I = (P[1], Object(p.useState)(Object(v.a)(h.content))[0])
        return (
          Object(p.useEffect)(
            function () {
              j(null === f || void 0 === f ? void 0 : f.contentItem.component)
            },
            [f],
          ),
          Object(p.useEffect)(
            function () {
              w(x(y))
            },
            [y],
          ),
          Object(i.jsxs)('div', {
            className: u.a.container,
            children: [
              Object(i.jsx)(_, {
                toModifyCb: function (e, t) {
                  b({ contentItem: e, index: t }), console.log('\u9009\u62e9\u4e86', e, t)
                },
                content: l,
              }),
              Object(i.jsxs)('div', {
                children: [
                  Object(i.jsx)(r.a, {
                    title: '\u8868\u5355\u5c5e\u6027',
                    extra: Object(i.jsx)(a.a, {
                      type: 'primary',
                      size: 'small',
                      children: '\u4fdd\u5b58\u8868\u5355',
                    }),
                    style: { width: 300 },
                    children: Object(i.jsx)(d.a, { config: g.config, state: n, content: $ }),
                  }),
                  Object(i.jsx)(r.a, {
                    title: '\u8868\u5355\u9884\u89c8',
                    extra: Object(i.jsx)(a.a, {
                      type: 'primary',
                      size: 'small',
                      children: '\u5237\u65b0\u8868\u5355',
                    }),
                    style: { width: 300 },
                    children: Object(i.jsx)(d.a, { config: n, content: l }),
                  }),
                ],
              }),
              Object(i.jsxs)('div', {
                children: [
                  f &&
                    Object(i.jsx)(r.a, {
                      title: '\u8868\u5355\u9879 \u2014\u2014 '.concat(
                        null === f || void 0 === f ? void 0 : f.contentItem.label,
                      ),
                      extra: Object(i.jsx)(a.a, {
                        type: 'primary',
                        size: 'small',
                        children: '\u4fdd\u5b58\u8868\u5355\u9879',
                      }),
                      style: { width: 400 },
                      children: Object(i.jsx)(d.a, {
                        config: h.config,
                        state: f.contentItem,
                        content: I,
                        change: function (e) {
                          console.log('changeSchemaItemBase', e),
                            e.component !== y && (j(e.component), w(x(y)))
                        },
                      }),
                    }),
                  S &&
                    Object(i.jsx)(r.a, {
                      title: null === (t = S.config) || void 0 === t ? void 0 : t.name,
                      style: { width: 400 },
                      children: Object(i.jsx)(d.a, {
                        config: S.config,
                        state: null === f || void 0 === f ? void 0 : f.contentItem,
                        content: S.content,
                        change: function (e) {
                          console.log('changeSchemaItemComponentSelf', e)
                        },
                      }),
                    }),
                ],
              }),
            ],
          })
        )
      }
    },
    ejeD: function (e, t, n) {
      e.exports = {
        container: 'editForm_container__QwmUw',
        container_editBoard: 'editForm_container_editBoard__OveV6',
        container_editBoard_item: 'editForm_container_editBoard_item__1WDtV',
        container_editBoard_item__content: 'editForm_container_editBoard_item__content__12tam',
        container_editBoard_item__btn: 'editForm_container_editBoard_item__btn__3kPXy',
      }
    },
    f6Qb: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/formEdit',
        function () {
          return n('XK8L')
        },
      ])
    },
    r36Y: function (e, t, n) {
      'use strict'
      e.exports = n('Copi')
    },
  },
  [['f6Qb', 0, 1, 2, 3, 5, 7, 8, 9, 10]],
])
