_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [17],
  {
    '2yP/': function (t, e, i) {
      'use strict'
      i.d(e, 'a', function () {
        return n
      })
      var n = i('vOnD').default.h2.withConfig({ displayName: 'Title', componentId: 'sc-uv7y46-0' })(
        ['margin-top:25px;margin-bottom:15px;font-size:30px;'],
      )
    },
    '7yNw': function (t, e, i) {
      'use strict'
      i.r(e),
        i.d(e, '__N_SSG', function () {
          return b
        })
      var n = i('nKUr'),
        r = (i('q1tI'), i('9Koi')),
        c = i('vOnD'),
        a = i('N9UN'),
        s = i.n(a),
        d = c.default.div.withConfig({
          displayName: 'ArticleCard__Text',
          componentId: 'sc-1rg2uf7-0',
        })(['font-size:16px;margin:5px 0;']),
        o = Object(c.default)(s.a).withConfig({
          displayName: 'ArticleCard__CardContainer',
          componentId: 'sc-1rg2uf7-1',
        })(['width:600px;text-align:left;margin:40px auto;']),
        l = function (t) {
          var e = t.id,
            i = t.title,
            c = t.body,
            a = Object(r.a)().t
          return Object(n.jsx)(n.Fragment, {
            children: Object(n.jsxs)(o, {
              title: i,
              children: [
                Object(n.jsxs)(d, { children: [a('articles.article_id'), '\uff1a ', e] }),
                Object(n.jsxs)(d, { children: [a('articles.article_body'), '\uff1a', c] }),
              ],
            }),
          })
        },
        u = c.default.div.withConfig({
          displayName: 'Article__Intro',
          componentId: 'sc-1w3plah-0',
        })(['font-size:16px;']),
        j = function (t) {
          var e = t.articles,
            i = Object(r.a)().t
          return Object(n.jsxs)(n.Fragment, {
            children: [
              Object(n.jsx)(u, { children: i('articles.intro') }),
              e.map(function (t) {
                return Object(n.jsx)(l, { id: t.id, title: t.title, body: t.body }, t.id)
              }),
            ],
          })
        },
        f = function (t) {
          var e = t.articles
          return Object(n.jsx)(n.Fragment, { children: Object(n.jsx)(j, { articles: e }) })
        },
        p = i('2yP/'),
        b = !0
      e.default = function (t) {
        var e = t.articles,
          i = Object(r.a)().t
        return Object(n.jsxs)('div', {
          children: [
            Object(n.jsx)(p.a, { children: i('articles.title') }),
            Object(n.jsx)(f, { articles: e }),
          ],
        })
      }
    },
    eaLi: function (t, e, i) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles',
        function () {
          return i('7yNw')
        },
      ])
    },
  },
  [['eaLi', 0, 1, 2, 3, 4, 5, 8]],
])
