_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [22],
  {
    '2yP/': function (n, e, i) {
      'use strict'
      i.d(e, 'a', function () {
        return t
      })
      var t = i('vOnD').default.h2.withConfig({ displayName: 'Title', componentId: 'sc-uv7y46-0' })(
        ['margin-top:25px;margin-bottom:15px;font-size:30px;'],
      )
    },
    WUaM: function (n, e, i) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/user',
        function () {
          return i('zPpQ')
        },
      ])
    },
    zPpQ: function (n, e, i) {
      'use strict'
      i.r(e)
      var t = i('nKUr'),
        r = i('q1tI'),
        o = i('9Koi'),
        c = i('/MKj'),
        a = i('Zbaf'),
        s = i('N9UN'),
        d = i.n(s),
        u = i('vOnD'),
        l = u.default.div.withConfig({ displayName: 'Profile__Intro', componentId: 'sc-zaunjn-0' })(
          ['font-size:16px;'],
        ),
        f = Object(u.default)(d.a).withConfig({
          displayName: 'Profile__CardContainer',
          componentId: 'sc-zaunjn-1',
        })(['width:400px;margin:20px auto;text-align:left;']),
        j = u.default.div.withConfig({ displayName: 'Profile__Item', componentId: 'sc-zaunjn-2' })([
          'margin:10px 0;',
        ]),
        p = function (n) {
          var e = n.profile,
            i = n.isLoading,
            r = Object(o.a)().t
          return Object(t.jsxs)(t.Fragment, {
            children: [
              Object(t.jsx)(l, { children: r('user.intro') }),
              Object(t.jsxs)(f, {
                title: r('user.info'),
                loading: i,
                children: [
                  Object(t.jsxs)(j, {
                    children: [r('user.id'), '\uff1a', null === e || void 0 === e ? void 0 : e.id],
                  }),
                  Object(t.jsxs)(j, {
                    children: [
                      r('user.username'),
                      '\uff1a',
                      null === e || void 0 === e ? void 0 : e.username,
                    ],
                  }),
                  Object(t.jsxs)(j, {
                    children: [
                      r('user.name'),
                      '\uff1a',
                      null === e || void 0 === e ? void 0 : e.name,
                    ],
                  }),
                ],
              }),
            ],
          })
        },
        b = function () {
          var n = Object(c.c)(function (n) {
              return n.user
            }),
            e = Object(c.b)()
          return (
            Object(r.useEffect)(function () {
              n.profile || e(Object(a.b)({ id: 1 }))
            }, []),
            Object(t.jsx)(t.Fragment, {
              children: Object(t.jsx)(p, { profile: n.profile, isLoading: n.isLoading }),
            })
          )
        },
        m = i('2yP/')
      e.default = function () {
        var n = Object(o.a)().t
        return Object(t.jsxs)('div', {
          children: [Object(t.jsx)(m.a, { children: n('user.title') }), Object(t.jsx)(b, {})],
        })
      }
    },
  },
  [['WUaM', 0, 1, 2, 3, 4, 5, 8, 11]],
])
