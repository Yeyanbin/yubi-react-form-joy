;(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [5],
  {
    '1j5w': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SubMenu', function () {
          return be
        }),
        n.d(t, 'Item', function () {
          return De
        }),
        n.d(t, 'MenuItem', function () {
          return De
        }),
        n.d(t, 'MenuItemGroup', function () {
          return Ne
        }),
        n.d(t, 'ItemGroup', function () {
          return Ne
        }),
        n.d(t, 'Divider', function () {
          return Ae
        })
      var o = n('wx14'),
        i = n('VTBJ'),
        r = n('1OyB'),
        s = n('vuIU'),
        a = n('JX7q'),
        l = n('Ji7U'),
        c = n('LK+K'),
        u = n('q1tI'),
        p = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function o() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype = null === n ? Object.create(n) : ((o.prototype = n.prototype), new o()))
          }
        })(),
        d = u.createContext(null),
        f = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            p(t, e),
            (t.prototype.render = function () {
              return u.createElement(d.Provider, { value: this.props.store }, this.props.children)
            }),
            t
          )
        })(u.Component),
        v = n('Gytx'),
        h = n.n(v),
        m = n('2mql'),
        b = n.n(m),
        y = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function o() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype = null === n ? Object.create(n) : ((o.prototype = n.prototype), new o()))
          }
        })(),
        O = function () {
          return (O =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
              return e
            }).apply(this, arguments)
        }
      var g = function () {
        return {}
      }
      function M(e, t) {
        void 0 === t && (t = {})
        var n = !!e,
          o = e || g
        return function (i) {
          var r = (function (t) {
            function r(e, n) {
              var i = t.call(this, e, n) || this
              return (
                (i.unsubscribe = null),
                (i.handleChange = function () {
                  if (i.unsubscribe) {
                    var e = o(i.store.getState(), i.props)
                    i.setState({ subscribed: e })
                  }
                }),
                (i.store = i.context),
                (i.state = { subscribed: o(i.store.getState(), e), store: i.store, props: e }),
                i
              )
            }
            return (
              y(r, t),
              (r.getDerivedStateFromProps = function (t, n) {
                return e && 2 === e.length && t !== n.props
                  ? { subscribed: o(n.store.getState(), t), props: t }
                  : { props: t }
              }),
              (r.prototype.componentDidMount = function () {
                this.trySubscribe()
              }),
              (r.prototype.componentWillUnmount = function () {
                this.tryUnsubscribe()
              }),
              (r.prototype.shouldComponentUpdate = function (e, t) {
                return !h()(this.props, e) || !h()(this.state.subscribed, t.subscribed)
              }),
              (r.prototype.trySubscribe = function () {
                n &&
                  ((this.unsubscribe = this.store.subscribe(this.handleChange)),
                  this.handleChange())
              }),
              (r.prototype.tryUnsubscribe = function () {
                this.unsubscribe && (this.unsubscribe(), (this.unsubscribe = null))
              }),
              (r.prototype.render = function () {
                var e = O(O(O({}, this.props), this.state.subscribed), { store: this.store })
                return u.createElement(i, O({}, e, { ref: this.props.miniStoreForwardedRef }))
              }),
              (r.displayName =
                'Connect(' +
                (function (e) {
                  return e.displayName || e.name || 'Component'
                })(i) +
                ')'),
              (r.contextType = d),
              r
            )
          })(u.Component)
          if (t.forwardRef) {
            var s = u.forwardRef(function (e, t) {
              return u.createElement(r, O({}, e, { miniStoreForwardedRef: t }))
            })
            return b()(s, i)
          }
          return b()(r, i)
        }
      }
      var C = function () {
        return (C =
          Object.assign ||
          function (e) {
            for (var t, n = 1, o = arguments.length; n < o; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            return e
          }).apply(this, arguments)
      }
      var K = n('bT9E'),
        j = n('rePB'),
        I = n('4IlW')
      function S() {
        var e = [].slice.call(arguments, 0)
        return 1 === e.length
          ? e[0]
          : function () {
              for (var t = 0; t < e.length; t++) e[t] && e[t].apply && e[t].apply(this, arguments)
            }
      }
      var k = n('Zm9Q'),
        w = n('TSYQ'),
        E = n.n(w),
        x = n('U8pU'),
        D = n('ODXe'),
        P = /iPhone/i,
        N = /iPod/i,
        R = /iPad/i,
        A = /\bAndroid(?:.+)Mobile\b/i,
        T = /Android/i,
        F = /\bAndroid(?:.+)SD4930UR\b/i,
        L = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
        W = /Windows Phone/i,
        z = /\bWindows(?:.+)ARM\b/i,
        _ = /BlackBerry/i,
        U = /BB10/i,
        V = /Opera Mini/i,
        B = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        H = /Mobile(?:.+)Firefox\b/i
      function G(e, t) {
        return e.test(t)
      }
      function J(e) {
        var t = e || ('undefined' !== typeof navigator ? navigator.userAgent : ''),
          n = (t || '').split('[FBAN')
        if ('undefined' !== typeof n[1]) {
          var o = n
          t = Object(D.a)(o, 1)[0]
        }
        if ('undefined' !== typeof (n = t.split('Twitter'))[1]) {
          var i = n
          t = Object(D.a)(i, 1)[0]
        }
        var r = {
          apple: {
            phone: G(P, t) && !G(W, t),
            ipod: G(N, t),
            tablet: !G(P, t) && G(R, t) && !G(W, t),
            device: (G(P, t) || G(N, t) || G(R, t)) && !G(W, t),
          },
          amazon: { phone: G(F, t), tablet: !G(F, t) && G(L, t), device: G(F, t) || G(L, t) },
          android: {
            phone: (!G(W, t) && G(F, t)) || (!G(W, t) && G(A, t)),
            tablet: !G(W, t) && !G(F, t) && !G(A, t) && (G(L, t) || G(T, t)),
            device: (!G(W, t) && (G(F, t) || G(L, t) || G(A, t) || G(T, t))) || G(/\bokhttp\b/i, t),
          },
          windows: { phone: G(W, t), tablet: G(z, t), device: G(W, t) || G(z, t) },
          other: {
            blackberry: G(_, t),
            blackberry10: G(U, t),
            opera: G(V, t),
            firefox: G(H, t),
            chrome: G(B, t),
            device: G(_, t) || G(U, t) || G(V, t) || G(H, t) || G(B, t),
          },
          any: null,
          phone: null,
          tablet: null,
        }
        return (
          (r.any = r.apple.device || r.android.device || r.windows.device || r.other.device),
          (r.phone = r.apple.phone || r.android.phone || r.windows.phone),
          (r.tablet = r.apple.tablet || r.android.tablet || r.windows.tablet),
          r
        )
      }
      var X = Object(i.a)(Object(i.a)({}, J()), {}, { isMobile: J })
      function q() {}
      function $(e, t, n) {
        var o = t || ''
        return e.key || ''.concat(o, 'item_').concat(n)
      }
      function Q(e) {
        return ''.concat(e, '-menu-')
      }
      function Y(e, t) {
        var n = -1
        u.Children.forEach(e, function (e) {
          ;(n += 1),
            e && e.type && e.type.isMenuItemGroup
              ? u.Children.forEach(e.props.children, function (e) {
                  t(e, (n += 1))
                })
              : t(e, n)
        })
      }
      var Z = [
          'defaultSelectedKeys',
          'selectedKeys',
          'defaultOpenKeys',
          'openKeys',
          'mode',
          'getPopupContainer',
          'onSelect',
          'onDeselect',
          'onDestroy',
          'openTransitionName',
          'openAnimation',
          'subMenuOpenDelay',
          'subMenuCloseDelay',
          'forceSubMenuRender',
          'triggerSubMenuAction',
          'level',
          'selectable',
          'multiple',
          'onOpenChange',
          'visible',
          'focusable',
          'defaultActiveFirst',
          'prefixCls',
          'inlineIndent',
          'parentMenu',
          'title',
          'rootPrefixCls',
          'eventKey',
          'active',
          'onItemHover',
          'onTitleMouseEnter',
          'onTitleMouseLeave',
          'onTitleClick',
          'popupAlign',
          'popupOffset',
          'isOpen',
          'renderMenuItem',
          'manualRef',
          'subMenuKey',
          'disabled',
          'index',
          'isSelected',
          'store',
          'activeKey',
          'builtinPlacements',
          'overflowedIndicator',
          'motion',
          'attribute',
          'value',
          'popupClassName',
          'inlineCollapsed',
          'menu',
          'theme',
          'itemIcon',
          'expandIcon',
        ],
        ee = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n =
              e && 'function' === typeof e.getBoundingClientRect && e.getBoundingClientRect().width
          if (n) {
            if (t) {
              var o = getComputedStyle(e),
                i = o.marginLeft,
                r = o.marginRight
              n += +i.replace('px', '') + +r.replace('px', '')
            }
            n = +n.toFixed(6)
          }
          return n || 0
        },
        te = function (e, t, n) {
          e && 'object' === Object(x.a)(e.style) && (e.style[t] = n)
        },
        ne = n('KQm4'),
        oe = n('Ff2n'),
        ie = n('bdgK'),
        re = n('i8i4'),
        se = n('uciX'),
        ae = n('wgJM'),
        le = n('8XRh'),
        ce = { adjustX: 1, adjustY: 1 },
        ue = {
          topLeft: { points: ['bl', 'tl'], overflow: ce, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: ce, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: ce, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: ce, offset: [4, 0] },
        },
        pe = {
          topLeft: { points: ['bl', 'tl'], overflow: ce, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: ce, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: ce, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: ce, offset: [4, 0] },
        },
        de = 0,
        fe = {
          horizontal: 'bottomLeft',
          vertical: 'rightTop',
          'vertical-left': 'rightTop',
          'vertical-right': 'leftTop',
        },
        ve = function (e, t, n) {
          var o = Q(t),
            r = e.getState()
          e.setState({
            defaultActiveFirst: Object(i.a)(
              Object(i.a)({}, r.defaultActiveFirst),
              {},
              Object(j.a)({}, o, n),
            ),
          })
        },
        he = (function (e) {
          Object(l.a)(n, e)
          var t = Object(c.a)(n)
          function n(e) {
            var o
            Object(r.a)(this, n),
              ((o = t.call(this, e)).onDestroy = function (e) {
                o.props.onDestroy(e)
              }),
              (o.onKeyDown = function (e) {
                var t = e.keyCode,
                  n = o.menuInstance,
                  i = o.props.store,
                  r = o.getVisible()
                if (t === I.a.ENTER) return o.onTitleClick(e), ve(i, o.props.eventKey, !0), !0
                if (t === I.a.RIGHT)
                  return (
                    r ? n.onKeyDown(e) : (o.triggerOpenChange(!0), ve(i, o.props.eventKey, !0)), !0
                  )
                if (t === I.a.LEFT) {
                  var s
                  if (!r) return
                  return (s = n.onKeyDown(e)) || (o.triggerOpenChange(!1), (s = !0)), s
                }
                return !r || (t !== I.a.UP && t !== I.a.DOWN) ? void 0 : n.onKeyDown(e)
              }),
              (o.onOpenChange = function (e) {
                o.props.onOpenChange(e)
              }),
              (o.onPopupVisibleChange = function (e) {
                o.triggerOpenChange(e, e ? 'mouseenter' : 'mouseleave')
              }),
              (o.onMouseEnter = function (e) {
                var t = o.props,
                  n = t.eventKey,
                  i = t.onMouseEnter,
                  r = t.store
                ve(r, o.props.eventKey, !1), i({ key: n, domEvent: e })
              }),
              (o.onMouseLeave = function (e) {
                var t = o.props,
                  n = t.parentMenu,
                  i = t.eventKey,
                  r = t.onMouseLeave
                ;(n.subMenuInstance = Object(a.a)(o)), r({ key: i, domEvent: e })
              }),
              (o.onTitleMouseEnter = function (e) {
                var t = o.props,
                  n = t.eventKey,
                  i = t.onItemHover,
                  r = t.onTitleMouseEnter
                i({ key: n, hover: !0 }), r({ key: n, domEvent: e })
              }),
              (o.onTitleMouseLeave = function (e) {
                var t = o.props,
                  n = t.parentMenu,
                  i = t.eventKey,
                  r = t.onItemHover,
                  s = t.onTitleMouseLeave
                ;(n.subMenuInstance = Object(a.a)(o)),
                  r({ key: i, hover: !1 }),
                  s({ key: i, domEvent: e })
              }),
              (o.onTitleClick = function (e) {
                var t = Object(a.a)(o).props
                t.onTitleClick({ key: t.eventKey, domEvent: e }),
                  'hover' !== t.triggerSubMenuAction &&
                    (o.triggerOpenChange(!o.getVisible(), 'click'),
                    ve(t.store, o.props.eventKey, !1))
              }),
              (o.onSubMenuClick = function (e) {
                'function' === typeof o.props.onClick && o.props.onClick(o.addKeyPath(e))
              }),
              (o.onSelect = function (e) {
                o.props.onSelect(e)
              }),
              (o.onDeselect = function (e) {
                o.props.onDeselect(e)
              }),
              (o.getPrefixCls = function () {
                return ''.concat(o.props.rootPrefixCls, '-submenu')
              }),
              (o.getActiveClassName = function () {
                return ''.concat(o.getPrefixCls(), '-active')
              }),
              (o.getDisabledClassName = function () {
                return ''.concat(o.getPrefixCls(), '-disabled')
              }),
              (o.getSelectedClassName = function () {
                return ''.concat(o.getPrefixCls(), '-selected')
              }),
              (o.getOpenClassName = function () {
                return ''.concat(o.props.rootPrefixCls, '-submenu-open')
              }),
              (o.getVisible = function () {
                return o.state.isOpen
              }),
              (o.getMode = function () {
                return o.state.mode
              }),
              (o.saveMenuInstance = function (e) {
                o.menuInstance = e
              }),
              (o.addKeyPath = function (e) {
                return Object(i.a)(
                  Object(i.a)({}, e),
                  {},
                  { keyPath: (e.keyPath || []).concat(o.props.eventKey) },
                )
              }),
              (o.triggerOpenChange = function (e, t) {
                var n = o.props.eventKey,
                  i = function () {
                    o.onOpenChange({ key: n, item: Object(a.a)(o), trigger: t, open: e })
                  }
                'mouseenter' === t
                  ? (o.mouseenterTimeout = setTimeout(function () {
                      i()
                    }, 0))
                  : i()
              }),
              (o.isChildrenSelected = function () {
                var e = { find: !1 }
                return (
                  (function e(t, n, o) {
                    t &&
                      !o.find &&
                      u.Children.forEach(t, function (t) {
                        if (t) {
                          var i = t.type
                          if (!i || !(i.isSubMenu || i.isMenuItem || i.isMenuItemGroup)) return
                          ;-1 !== n.indexOf(t.key)
                            ? (o.find = !0)
                            : t.props.children && e(t.props.children, n, o)
                        }
                      })
                  })(o.props.children, o.props.selectedKeys, e),
                  e.find
                )
              }),
              (o.isInlineMode = function () {
                return 'inline' === o.getMode()
              }),
              (o.adjustWidth = function () {
                if (o.subMenuTitle && o.menuInstance) {
                  var e = re.findDOMNode(o.menuInstance)
                  e.offsetWidth >= o.subMenuTitle.offsetWidth ||
                    (e.style.minWidth = ''.concat(o.subMenuTitle.offsetWidth, 'px'))
                }
              }),
              (o.saveSubMenuTitle = function (e) {
                o.subMenuTitle = e
              }),
              (o.getBaseProps = function () {
                var e = Object(a.a)(o).props,
                  t = o.getMode()
                return {
                  mode: 'horizontal' === t ? 'vertical' : t,
                  visible: o.getVisible(),
                  level: e.level + 1,
                  inlineIndent: e.inlineIndent,
                  focusable: !1,
                  onClick: o.onSubMenuClick,
                  onSelect: o.onSelect,
                  onDeselect: o.onDeselect,
                  onDestroy: o.onDestroy,
                  selectedKeys: e.selectedKeys,
                  eventKey: ''.concat(e.eventKey, '-menu-'),
                  openKeys: e.openKeys,
                  motion: e.motion,
                  onOpenChange: o.onOpenChange,
                  subMenuOpenDelay: e.subMenuOpenDelay,
                  parentMenu: Object(a.a)(o),
                  subMenuCloseDelay: e.subMenuCloseDelay,
                  forceSubMenuRender: e.forceSubMenuRender,
                  triggerSubMenuAction: e.triggerSubMenuAction,
                  builtinPlacements: e.builtinPlacements,
                  defaultActiveFirst: e.store.getState().defaultActiveFirst[Q(e.eventKey)],
                  multiple: e.multiple,
                  prefixCls: e.rootPrefixCls,
                  id: o.internalMenuId,
                  manualRef: o.saveMenuInstance,
                  itemIcon: e.itemIcon,
                  expandIcon: e.expandIcon,
                  direction: e.direction,
                }
              }),
              (o.getMotion = function (e, t) {
                var n = Object(a.a)(o).haveRendered,
                  r = o.props,
                  s = r.motion,
                  l = r.rootPrefixCls
                return Object(i.a)(
                  Object(i.a)({}, s),
                  {},
                  {
                    leavedClassName: ''.concat(l, '-hidden'),
                    removeOnLeave: !1,
                    motionAppear: n || !t || 'inline' !== e,
                  },
                )
              })
            var s = e.store,
              l = e.eventKey,
              c = s.getState().defaultActiveFirst
            o.isRootMenu = !1
            var p = !1
            return c && (p = c[l]), ve(s, l, p), (o.state = { mode: e.mode, isOpen: e.isOpen }), o
          }
          return (
            Object(s.a)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.componentDidUpdate()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.mode,
                    o = t.parentMenu,
                    i = t.manualRef,
                    r = t.isOpen,
                    s = function () {
                      e.setState({ mode: n, isOpen: r })
                    },
                    a = r !== this.state.isOpen,
                    l = n !== this.state.mode
                  ;(l || a) &&
                    (ae.a.cancel(this.updateStateRaf),
                    l ? (this.updateStateRaf = Object(ae.a)(s)) : s()),
                    i && i(this),
                    'horizontal' === n &&
                      (null === o || void 0 === o ? void 0 : o.isRootMenu) &&
                      r &&
                      (this.minWidthTimeout = setTimeout(function () {
                        return e.adjustWidth()
                      }, 0))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props,
                    t = e.onDestroy,
                    n = e.eventKey
                  t && t(n),
                    this.minWidthTimeout && clearTimeout(this.minWidthTimeout),
                    this.mouseenterTimeout && clearTimeout(this.mouseenterTimeout),
                    ae.a.cancel(this.updateStateRaf)
                },
              },
              {
                key: 'renderPopupMenu',
                value: function (e, t) {
                  var n = this.getBaseProps()
                  return u.createElement(
                    Ie,
                    Object(o.a)({}, n, { id: this.internalMenuId, className: e, style: t }),
                    this.props.children,
                  )
                },
              },
              {
                key: 'renderChildren',
                value: function () {
                  var e = this,
                    t = this.getBaseProps(),
                    n = t.mode,
                    i = t.visible,
                    r = t.forceSubMenuRender,
                    s = t.direction,
                    a = this.getMotion(n, i)
                  if (
                    ((this.haveRendered = !0),
                    (this.haveOpened = this.haveOpened || i || r),
                    !this.haveOpened)
                  )
                    return u.createElement('div', null)
                  var l = E()(
                    ''.concat(t.prefixCls, '-sub'),
                    Object(j.a)({}, ''.concat(t.prefixCls, '-rtl'), 'rtl' === s),
                  )
                  return this.isInlineMode()
                    ? u.createElement(
                        le.default,
                        Object(o.a)({ visible: t.visible, forceRender: r }, a),
                        function (t) {
                          var n = t.className,
                            o = t.style,
                            i = E()(l, n)
                          return e.renderPopupMenu(i, o)
                        },
                      )
                    : this.renderPopupMenu(l)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    r = Object(i.a)({}, this.props),
                    s = this.getVisible(),
                    a = this.getPrefixCls(),
                    l = this.isInlineMode(),
                    c = this.getMode(),
                    p = E()(
                      a,
                      ''.concat(a, '-').concat(c),
                      ((e = {}),
                      Object(j.a)(e, r.className, !!r.className),
                      Object(j.a)(e, this.getOpenClassName(), s),
                      Object(j.a)(e, this.getActiveClassName(), r.active || (s && !l)),
                      Object(j.a)(e, this.getDisabledClassName(), r.disabled),
                      Object(j.a)(e, this.getSelectedClassName(), this.isChildrenSelected()),
                      e),
                    )
                  this.internalMenuId ||
                    (r.eventKey
                      ? (this.internalMenuId = ''.concat(r.eventKey, '$Menu'))
                      : ((de += 1), (this.internalMenuId = '$__$'.concat(de, '$Menu'))))
                  var d = {},
                    f = {},
                    v = {}
                  r.disabled ||
                    ((d = { onMouseLeave: this.onMouseLeave, onMouseEnter: this.onMouseEnter }),
                    (f = { onClick: this.onTitleClick }),
                    (v = {
                      onMouseEnter: this.onTitleMouseEnter,
                      onMouseLeave: this.onTitleMouseLeave,
                    }))
                  var h = {},
                    m = 'rtl' === r.direction
                  l &&
                    (m
                      ? (h.paddingRight = r.inlineIndent * r.level)
                      : (h.paddingLeft = r.inlineIndent * r.level))
                  var b = {}
                  this.getVisible() && (b = { 'aria-owns': this.internalMenuId })
                  var y = null
                  'horizontal' !== c &&
                    ((y = this.props.expandIcon),
                    'function' === typeof this.props.expandIcon &&
                      (y = u.createElement(this.props.expandIcon, Object(i.a)({}, this.props))))
                  var O = u.createElement(
                      'div',
                      Object(o.a)(
                        {
                          ref: this.saveSubMenuTitle,
                          style: h,
                          className: ''.concat(a, '-title'),
                          role: 'button',
                        },
                        v,
                        f,
                        { 'aria-expanded': s },
                        b,
                        {
                          'aria-haspopup': 'true',
                          title: 'string' === typeof r.title ? r.title : void 0,
                        },
                      ),
                      r.title,
                      y || u.createElement('i', { className: ''.concat(a, '-arrow') }),
                    ),
                    g = this.renderChildren(),
                    M = (null === (t = r.parentMenu) || void 0 === t ? void 0 : t.isRootMenu)
                      ? r.parentMenu.props.getPopupContainer
                      : function (e) {
                          return e.parentNode
                        },
                    C = fe[c],
                    K = r.popupOffset ? { offset: r.popupOffset } : {},
                    I = E()(
                      ((n = {}),
                      Object(j.a)(n, r.popupClassName, r.popupClassName && !l),
                      Object(j.a)(n, ''.concat(a, '-rtl'), m),
                      n),
                    ),
                    S = r.disabled,
                    k = r.triggerSubMenuAction,
                    w = r.subMenuOpenDelay,
                    x = r.forceSubMenuRender,
                    D = r.subMenuCloseDelay,
                    P = r.builtinPlacements
                  Z.forEach(function (e) {
                    return delete r[e]
                  }),
                    delete r.onClick
                  var N = m
                    ? Object(i.a)(Object(i.a)({}, pe), P)
                    : Object(i.a)(Object(i.a)({}, ue), P)
                  delete r.direction
                  var R = this.getBaseProps(),
                    A = l ? null : this.getMotion(R.mode, R.visible)
                  return u.createElement(
                    'li',
                    Object(o.a)({}, r, d, { className: p, role: 'menuitem' }),
                    u.createElement(
                      se.a,
                      {
                        prefixCls: a,
                        popupClassName: E()(''.concat(a, '-popup'), I),
                        getPopupContainer: M,
                        builtinPlacements: N,
                        popupPlacement: C,
                        popupVisible: !l && s,
                        popupAlign: K,
                        popup: l ? null : g,
                        action: S || l ? [] : [k],
                        mouseEnterDelay: w,
                        mouseLeaveDelay: D,
                        onPopupVisibleChange: this.onPopupVisibleChange,
                        forceRender: x,
                        popupMotion: A,
                      },
                      O,
                    ),
                    l ? g : null,
                  )
                },
              },
            ]),
            n
          )
        })(u.Component)
      he.defaultProps = {
        onMouseEnter: q,
        onMouseLeave: q,
        onTitleMouseEnter: q,
        onTitleMouseLeave: q,
        onTitleClick: q,
        manualRef: q,
        mode: 'vertical',
        title: '',
      }
      var me = M(function (e, t) {
        var n = e.openKeys,
          o = e.activeKey,
          i = e.selectedKeys,
          r = t.eventKey,
          s = t.subMenuKey
        return { isOpen: n.indexOf(r) > -1, active: o[s] === r, selectedKeys: i }
      })(he)
      me.isSubMenu = !0
      var be = me,
        ye = (function (e) {
          Object(l.a)(n, e)
          var t = Object(c.a)(n)
          function n() {
            var e
            return (
              Object(r.a)(this, n),
              ((e = t.apply(this, arguments)).resizeObserver = null),
              (e.mutationObserver = null),
              (e.originalTotalWidth = 0),
              (e.overflowedItems = []),
              (e.menuItemSizes = []),
              (e.cancelFrameId = null),
              (e.state = { lastVisibleIndex: void 0 }),
              (e.childRef = u.createRef()),
              (e.getMenuItemNodes = function () {
                var t = e.props.prefixCls,
                  n = e.childRef.current
                return n
                  ? [].slice.call(n.children).filter(function (e) {
                      return e.className.split(' ').indexOf(''.concat(t, '-overflowed-submenu')) < 0
                    })
                  : []
              }),
              (e.getOverflowedSubMenuItem = function (t, n, r) {
                var s = e.props,
                  a = s.overflowedIndicator,
                  l = s.level,
                  c = s.mode,
                  p = s.prefixCls,
                  d = s.theme
                if (1 !== l || 'horizontal' !== c) return null
                var f = e.props.children[0].props,
                  v = (f.children, f.title, f.style),
                  h = Object(oe.a)(f, ['children', 'title', 'style']),
                  m = Object(i.a)({}, v),
                  b = ''.concat(t, '-overflowed-indicator'),
                  y = ''.concat(t, '-overflowed-indicator')
                0 === n.length && !0 !== r
                  ? (m = Object(i.a)(Object(i.a)({}, m), {}, { display: 'none' }))
                  : r &&
                    ((m = Object(i.a)(
                      Object(i.a)({}, m),
                      {},
                      { visibility: 'hidden', position: 'absolute' },
                    )),
                    (b = ''.concat(b, '-placeholder')),
                    (y = ''.concat(y, '-placeholder')))
                var O = d ? ''.concat(p, '-').concat(d) : '',
                  g = {}
                return (
                  Z.forEach(function (e) {
                    void 0 !== h[e] && (g[e] = h[e])
                  }),
                  u.createElement(
                    be,
                    Object(o.a)(
                      {
                        title: a,
                        className: ''.concat(p, '-overflowed-submenu'),
                        popupClassName: O,
                      },
                      g,
                      { key: b, eventKey: y, disabled: !1, style: m },
                    ),
                    n,
                  )
                )
              }),
              (e.setChildrenWidthAndResize = function () {
                if ('horizontal' === e.props.mode) {
                  var t = e.childRef.current
                  if (t) {
                    var n = t.children
                    if (n && 0 !== n.length) {
                      var o = t.children[n.length - 1]
                      te(o, 'display', 'inline-block')
                      var i = e.getMenuItemNodes(),
                        r = i.filter(function (e) {
                          return e.className.split(' ').indexOf('menuitem-overflowed') >= 0
                        })
                      r.forEach(function (e) {
                        te(e, 'display', 'inline-block')
                      }),
                        (e.menuItemSizes = i.map(function (e) {
                          return ee(e, !0)
                        })),
                        r.forEach(function (e) {
                          te(e, 'display', 'none')
                        }),
                        (e.overflowedIndicatorWidth = ee(t.children[t.children.length - 1], !0)),
                        (e.originalTotalWidth = e.menuItemSizes.reduce(function (e, t) {
                          return e + t
                        }, 0)),
                        e.handleResize(),
                        te(o, 'display', 'none')
                    }
                  }
                }
              }),
              (e.handleResize = function () {
                if ('horizontal' === e.props.mode) {
                  var t = e.childRef.current
                  if (t) {
                    var n = ee(t)
                    e.overflowedItems = []
                    var o,
                      i = 0
                    e.originalTotalWidth > n + 0.5 &&
                      ((o = -1),
                      e.menuItemSizes.forEach(function (t) {
                        ;(i += t) + e.overflowedIndicatorWidth <= n && (o += 1)
                      })),
                      e.setState({ lastVisibleIndex: o })
                  }
                }
              }),
              e
            )
          }
          return (
            Object(s.a)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  if (
                    (this.setChildrenWidthAndResize(),
                    1 === this.props.level && 'horizontal' === this.props.mode)
                  ) {
                    var t = this.childRef.current
                    if (!t) return
                    ;(this.resizeObserver = new ie.a(function (t) {
                      t.forEach(function () {
                        var t = e.cancelFrameId
                        cancelAnimationFrame(t),
                          (e.cancelFrameId = requestAnimationFrame(e.setChildrenWidthAndResize))
                      })
                    })),
                      [].slice
                        .call(t.children)
                        .concat(t)
                        .forEach(function (t) {
                          e.resizeObserver.observe(t)
                        }),
                      'undefined' !== typeof MutationObserver &&
                        ((this.mutationObserver = new MutationObserver(function () {
                          e.resizeObserver.disconnect(),
                            [].slice
                              .call(t.children)
                              .concat(t)
                              .forEach(function (t) {
                                e.resizeObserver.observe(t)
                              }),
                            e.setChildrenWidthAndResize()
                        })),
                        this.mutationObserver.observe(t, {
                          attributes: !1,
                          childList: !0,
                          subTree: !1,
                        }))
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.resizeObserver && this.resizeObserver.disconnect(),
                    this.mutationObserver && this.mutationObserver.disconnect(),
                    cancelAnimationFrame(this.cancelFrameId)
                },
              },
              {
                key: 'renderChildren',
                value: function (e) {
                  var t = this,
                    n = this.state.lastVisibleIndex
                  return (e || []).reduce(function (o, i, r) {
                    var s = i
                    if ('horizontal' === t.props.mode) {
                      var a = t.getOverflowedSubMenuItem(i.props.eventKey, [])
                      void 0 !== n &&
                        -1 !== t.props.className.indexOf(''.concat(t.props.prefixCls, '-root')) &&
                        (r > n &&
                          (s = u.cloneElement(i, {
                            style: { display: 'none' },
                            eventKey: ''.concat(i.props.eventKey, '-hidden'),
                            className: ''.concat('menuitem-overflowed'),
                          })),
                        r === n + 1 &&
                          ((t.overflowedItems = e.slice(n + 1).map(function (e) {
                            return u.cloneElement(e, {
                              key: e.props.eventKey,
                              mode: 'vertical-left',
                            })
                          })),
                          (a = t.getOverflowedSubMenuItem(i.props.eventKey, t.overflowedItems))))
                      var l = [].concat(Object(ne.a)(o), [a, s])
                      return (
                        r === e.length - 1 &&
                          l.push(t.getOverflowedSubMenuItem(i.props.eventKey, [], !0)),
                        l
                      )
                    }
                    return [].concat(Object(ne.a)(o), [s])
                  }, [])
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.visible, e.prefixCls, e.overflowedIndicator, e.mode, e.level, e.tag),
                    n = e.children,
                    i =
                      (e.theme,
                      Object(oe.a)(e, [
                        'visible',
                        'prefixCls',
                        'overflowedIndicator',
                        'mode',
                        'level',
                        'tag',
                        'children',
                        'theme',
                      ])),
                    r = t
                  return u.createElement(
                    r,
                    Object(o.a)({ ref: this.childRef }, i),
                    this.renderChildren(n),
                  )
                },
              },
            ]),
            n
          )
        })(u.Component)
      ye.defaultProps = { tag: 'div', className: '' }
      var Oe = ye
      function ge(e, t, n) {
        var o = e.getState()
        e.setState({
          activeKey: Object(i.a)(Object(i.a)({}, o.activeKey), {}, Object(j.a)({}, t, n)),
        })
      }
      function Me(e) {
        return e.eventKey || '0-menu-'
      }
      function Ce(e, t) {
        var n,
          o = t,
          i = e.children,
          r = e.eventKey
        if (
          o &&
          (Y(i, function (e, t) {
            e && e.props && !e.props.disabled && o === $(e, r, t) && (n = !0)
          }),
          n)
        )
          return o
        return (
          (o = null),
          e.defaultActiveFirst
            ? (Y(i, function (e, t) {
                o || !e || e.props.disabled || (o = $(e, r, t))
              }),
              o)
            : o
        )
      }
      function Ke(e) {
        if (e) {
          var t = this.instanceArray.indexOf(e)
          ;-1 !== t ? (this.instanceArray[t] = e) : this.instanceArray.push(e)
        }
      }
      var je = (function (e) {
        Object(l.a)(n, e)
        var t = Object(c.a)(n)
        function n(e) {
          var o
          return (
            Object(r.a)(this, n),
            ((o = t.call(this, e)).onKeyDown = function (e, t) {
              var n,
                i = e.keyCode
              if (
                (o.getFlatInstanceArray().forEach(function (t) {
                  t && t.props.active && t.onKeyDown && (n = t.onKeyDown(e))
                }),
                n)
              )
                return 1
              var r = null
              return (
                (i !== I.a.UP && i !== I.a.DOWN) || (r = o.step(i === I.a.UP ? -1 : 1)),
                r
                  ? (e.preventDefault(),
                    ge(o.props.store, Me(o.props), r.props.eventKey),
                    'function' === typeof t && t(r),
                    1)
                  : void 0
              )
            }),
            (o.onItemHover = function (e) {
              var t = e.key,
                n = e.hover
              ge(o.props.store, Me(o.props), n ? t : null)
            }),
            (o.onDeselect = function (e) {
              o.props.onDeselect(e)
            }),
            (o.onSelect = function (e) {
              o.props.onSelect(e)
            }),
            (o.onClick = function (e) {
              o.props.onClick(e)
            }),
            (o.onOpenChange = function (e) {
              o.props.onOpenChange(e)
            }),
            (o.onDestroy = function (e) {
              o.props.onDestroy(e)
            }),
            (o.getFlatInstanceArray = function () {
              return o.instanceArray
            }),
            (o.step = function (e) {
              var t = o.getFlatInstanceArray(),
                n = o.props.store.getState().activeKey[Me(o.props)],
                i = t.length
              if (!i) return null
              e < 0 && (t = t.concat().reverse())
              var r = -1
              if (
                (t.every(function (e, t) {
                  return !e || e.props.eventKey !== n || ((r = t), !1)
                }),
                o.props.defaultActiveFirst ||
                  -1 === r ||
                  ((s = t.slice(r, i - 1)).length &&
                    !s.every(function (e) {
                      return !!e.props.disabled
                    })))
              ) {
                var s,
                  a = (r + 1) % i,
                  l = a
                do {
                  var c = t[l]
                  if (c && !c.props.disabled) return c
                  l = (l + 1) % i
                } while (l !== a)
                return null
              }
            }),
            (o.renderCommonMenuItem = function (e, t, n) {
              var r = o.props.store.getState(),
                s = Object(a.a)(o).props,
                l = $(e, s.eventKey, t),
                c = e.props
              if (!c || 'string' === typeof e.type) return e
              var p = l === r.activeKey,
                d = Object(i.a)(
                  Object(i.a)(
                    {
                      mode: c.mode || s.mode,
                      level: s.level,
                      inlineIndent: s.inlineIndent,
                      renderMenuItem: o.renderMenuItem,
                      rootPrefixCls: s.prefixCls,
                      index: t,
                      parentMenu: s.parentMenu,
                      manualRef: c.disabled ? void 0 : S(e.ref, Ke.bind(Object(a.a)(o))),
                      eventKey: l,
                      active: !c.disabled && p,
                      multiple: s.multiple,
                      onClick: function (e) {
                        ;(c.onClick || q)(e), o.onClick(e)
                      },
                      onItemHover: o.onItemHover,
                      motion: s.motion,
                      subMenuOpenDelay: s.subMenuOpenDelay,
                      subMenuCloseDelay: s.subMenuCloseDelay,
                      forceSubMenuRender: s.forceSubMenuRender,
                      onOpenChange: o.onOpenChange,
                      onDeselect: o.onDeselect,
                      onSelect: o.onSelect,
                      builtinPlacements: s.builtinPlacements,
                      itemIcon: c.itemIcon || o.props.itemIcon,
                      expandIcon: c.expandIcon || o.props.expandIcon,
                    },
                    n,
                  ),
                  {},
                  { direction: s.direction },
                )
              return (
                ('inline' === s.mode || X.any) && (d.triggerSubMenuAction = 'click'),
                u.cloneElement(e, Object(i.a)(Object(i.a)({}, d), {}, { key: l || t }))
              )
            }),
            (o.renderMenuItem = function (e, t, n) {
              if (!e) return null
              var i = o.props.store.getState(),
                r = {
                  openKeys: i.openKeys,
                  selectedKeys: i.selectedKeys,
                  triggerSubMenuAction: o.props.triggerSubMenuAction,
                  subMenuKey: n,
                }
              return o.renderCommonMenuItem(e, t, r)
            }),
            e.store.setState({
              activeKey: Object(i.a)(
                Object(i.a)({}, e.store.getState().activeKey),
                {},
                Object(j.a)({}, e.eventKey, Ce(e, e.activeKey)),
              ),
            }),
            (o.instanceArray = []),
            o
          )
        }
        return (
          Object(s.a)(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this.props.manualRef && this.props.manualRef(this)
              },
            },
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return (
                  this.props.visible ||
                  e.visible ||
                  this.props.className !== e.className ||
                  !h()(this.props.style, e.style)
                )
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                var t = this.props,
                  n = 'activeKey' in t ? t.activeKey : t.store.getState().activeKey[Me(t)],
                  o = Ce(t, n)
                if (o !== n) ge(t.store, Me(t), o)
                else if ('activeKey' in e) {
                  o !== Ce(e, e.activeKey) && ge(t.store, Me(t), o)
                }
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = Object(o.a)({}, this.props)
                this.instanceArray = []
                var n = {
                  className: E()(
                    t.prefixCls,
                    t.className,
                    ''.concat(t.prefixCls, '-').concat(t.mode),
                  ),
                  role: t.role || 'menu',
                }
                t.id && (n.id = t.id),
                  t.focusable && ((n.tabIndex = 0), (n.onKeyDown = this.onKeyDown))
                var i = t.prefixCls,
                  r = t.eventKey,
                  s = t.visible,
                  a = t.level,
                  l = t.mode,
                  c = t.overflowedIndicator,
                  p = t.theme
                return (
                  Z.forEach(function (e) {
                    return delete t[e]
                  }),
                  delete t.onClick,
                  u.createElement(
                    Oe,
                    Object(o.a)(
                      {},
                      t,
                      {
                        prefixCls: i,
                        mode: l,
                        tag: 'ul',
                        level: a,
                        theme: p,
                        visible: s,
                        overflowedIndicator: c,
                      },
                      n,
                    ),
                    Object(k.a)(t.children).map(function (t, n) {
                      return e.renderMenuItem(t, n, r || '0-menu-')
                    }),
                  )
                )
              },
            },
          ]),
          n
        )
      })(u.Component)
      je.defaultProps = {
        prefixCls: 'rc-menu',
        className: '',
        mode: 'vertical',
        level: 1,
        inlineIndent: 24,
        visible: !0,
        focusable: !0,
        style: {},
        manualRef: q,
      }
      var Ie = M()(je),
        Se = n('Kwbf')
      function ke(e, t, n) {
        var o = e.prefixCls,
          i = e.motion,
          r = e.defaultMotions,
          s = void 0 === r ? {} : r,
          a = e.openAnimation,
          l = e.openTransitionName,
          c = t.switchingModeFromInline
        if (i) return i
        if ('object' === Object(x.a)(a) && a)
          Object(Se.a)(
            !1,
            'Object type of `openAnimation` is removed. Please use `motion` instead.',
          )
        else if ('string' === typeof a) return { motionName: ''.concat(o, '-open-').concat(a) }
        if (l) return { motionName: l }
        var u = s[n]
        return u || (c ? null : s.other)
      }
      var we = (function (e) {
        Object(l.a)(n, e)
        var t = Object(c.a)(n)
        function n(e) {
          var o
          Object(r.a)(this, n),
            ((o = t.call(this, e)).onSelect = function (e) {
              var t = Object(a.a)(o).props
              if (t.selectable) {
                var n = o.store.getState().selectedKeys,
                  r = e.key
                ;(n = t.multiple ? n.concat([r]) : [r]),
                  'selectedKeys' in t || o.store.setState({ selectedKeys: n }),
                  t.onSelect(Object(i.a)(Object(i.a)({}, e), {}, { selectedKeys: n }))
              }
            }),
            (o.onClick = function (e) {
              var t = o.getRealMenuMode(),
                n = Object(a.a)(o),
                i = n.store,
                r = n.props.onOpenChange
              'inline' === t || 'openKeys' in o.props || (i.setState({ openKeys: [] }), r([])),
                o.props.onClick(e)
            }),
            (o.onKeyDown = function (e, t) {
              o.innerMenu.getWrappedInstance().onKeyDown(e, t)
            }),
            (o.onOpenChange = function (e) {
              var t = Object(a.a)(o).props,
                n = o.store.getState().openKeys.concat(),
                i = !1,
                r = function (e) {
                  var t = !1
                  if (e.open) (t = -1 === n.indexOf(e.key)) && n.push(e.key)
                  else {
                    var o = n.indexOf(e.key)
                    ;(t = -1 !== o) && n.splice(o, 1)
                  }
                  i = i || t
                }
              Array.isArray(e) ? e.forEach(r) : r(e),
                i && ('openKeys' in o.props || o.store.setState({ openKeys: n }), t.onOpenChange(n))
            }),
            (o.onDeselect = function (e) {
              var t = Object(a.a)(o).props
              if (t.selectable) {
                var n = o.store.getState().selectedKeys.concat(),
                  r = e.key,
                  s = n.indexOf(r)
                ;-1 !== s && n.splice(s, 1),
                  'selectedKeys' in t || o.store.setState({ selectedKeys: n }),
                  t.onDeselect(Object(i.a)(Object(i.a)({}, e), {}, { selectedKeys: n }))
              }
            }),
            (o.onMouseEnter = function (e) {
              o.restoreModeVerticalFromInline()
              var t = o.props.onMouseEnter
              t && t(e)
            }),
            (o.onTransitionEnd = function (e) {
              var t = 'width' === e.propertyName && e.target === e.currentTarget,
                n = e.target.className,
                i =
                  '[object SVGAnimatedString]' === Object.prototype.toString.call(n)
                    ? n.animVal
                    : n,
                r = 'font-size' === e.propertyName && i.indexOf('anticon') >= 0
              ;(t || r) && o.restoreModeVerticalFromInline()
            }),
            (o.setInnerMenu = function (e) {
              o.innerMenu = e
            }),
            (o.isRootMenu = !0)
          var s = e.defaultSelectedKeys,
            l = e.defaultOpenKeys
          return (
            'selectedKeys' in e && (s = e.selectedKeys || []),
            'openKeys' in e && (l = e.openKeys || []),
            (o.store = (function (e) {
              var t = e,
                n = []
              return {
                setState: function (e) {
                  t = C(C({}, t), e)
                  for (var o = 0; o < n.length; o++) n[o]()
                },
                getState: function () {
                  return t
                },
                subscribe: function (e) {
                  return (
                    n.push(e),
                    function () {
                      var t = n.indexOf(e)
                      n.splice(t, 1)
                    }
                  )
                },
              }
            })({ selectedKeys: s, openKeys: l, activeKey: { '0-menu-': Ce(e, e.activeKey) } })),
            (o.state = {
              switchingModeFromInline: !1,
              prevProps: e,
              inlineOpenKeys: [],
              store: o.store,
            }),
            o
          )
        }
        return (
          Object(s.a)(
            n,
            [
              {
                key: 'componentDidMount',
                value: function () {
                  this.updateMiniStore(), this.updateMenuDisplay()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.siderCollapsed,
                    o = t.inlineCollapsed,
                    i = t.onOpenChange
                  ;((!e.inlineCollapsed && o) || (!e.siderCollapsed && n)) && i([]),
                    this.updateMiniStore(),
                    this.updateMenuDisplay()
                },
              },
              {
                key: 'updateMenuDisplay',
                value: function () {
                  var e = this.props.collapsedWidth,
                    t = this.store,
                    n = this.prevOpenKeys
                  this.getInlineCollapsed() && (0 === e || '0' === e || '0px' === e)
                    ? ((this.prevOpenKeys = t.getState().openKeys.concat()),
                      this.store.setState({ openKeys: [] }))
                    : n && (this.store.setState({ openKeys: n }), (this.prevOpenKeys = null))
                },
              },
              {
                key: 'getRealMenuMode',
                value: function () {
                  var e = this.props.mode,
                    t = this.state.switchingModeFromInline,
                    n = this.getInlineCollapsed()
                  return t && n ? 'inline' : n ? 'vertical' : e
                },
              },
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
                key: 'restoreModeVerticalFromInline',
                value: function () {
                  this.state.switchingModeFromInline &&
                    this.setState({ switchingModeFromInline: !1 })
                },
              },
              {
                key: 'updateMiniStore',
                value: function () {
                  'selectedKeys' in this.props &&
                    this.store.setState({ selectedKeys: this.props.selectedKeys || [] }),
                    'openKeys' in this.props &&
                      this.store.setState({ openKeys: this.props.openKeys || [] })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = Object(i.a)(
                      {},
                      Object(K.a)(this.props, [
                        'collapsedWidth',
                        'siderCollapsed',
                        'defaultMotions',
                      ]),
                    ),
                    t = this.getRealMenuMode()
                  return (
                    (e.className += ' '.concat(e.prefixCls, '-root')),
                    'rtl' === e.direction && (e.className += ' '.concat(e.prefixCls, '-rtl')),
                    delete (e = Object(i.a)(
                      Object(i.a)({}, e),
                      {},
                      {
                        mode: t,
                        onClick: this.onClick,
                        onOpenChange: this.onOpenChange,
                        onDeselect: this.onDeselect,
                        onSelect: this.onSelect,
                        onMouseEnter: this.onMouseEnter,
                        onTransitionEnd: this.onTransitionEnd,
                        parentMenu: this,
                        motion: ke(this.props, this.state, t),
                      },
                    )).openAnimation,
                    delete e.openTransitionName,
                    u.createElement(
                      f,
                      { store: this.store },
                      u.createElement(
                        Ie,
                        Object(o.a)({}, e, { ref: this.setInnerMenu }),
                        this.props.children,
                      ),
                    )
                  )
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function (e, t) {
                  var n = t.prevProps,
                    o = t.store,
                    i = o.getState(),
                    r = {},
                    s = { prevProps: e }
                  return (
                    'inline' === n.mode && 'inline' !== e.mode && (s.switchingModeFromInline = !0),
                    'openKeys' in e
                      ? (r.openKeys = e.openKeys || [])
                      : (((e.inlineCollapsed && !n.inlineCollapsed) ||
                          (e.siderCollapsed && !n.siderCollapsed)) &&
                          ((s.switchingModeFromInline = !0),
                          (s.inlineOpenKeys = i.openKeys),
                          (r.openKeys = [])),
                        ((!e.inlineCollapsed && n.inlineCollapsed) ||
                          (!e.siderCollapsed && n.siderCollapsed)) &&
                          ((r.openKeys = t.inlineOpenKeys), (s.inlineOpenKeys = []))),
                    Object.keys(r).length && o.setState(r),
                    s
                  )
                },
              },
            ],
          ),
          n
        )
      })(u.Component)
      we.defaultProps = {
        selectable: !0,
        onClick: q,
        onSelect: q,
        onOpenChange: q,
        onDeselect: q,
        defaultSelectedKeys: [],
        defaultOpenKeys: [],
        subMenuOpenDelay: 0.1,
        subMenuCloseDelay: 0.1,
        triggerSubMenuAction: 'hover',
        prefixCls: 'rc-menu',
        className: '',
        mode: 'vertical',
        style: {},
        builtinPlacements: {},
        overflowedIndicator: u.createElement('span', null, '\xb7\xb7\xb7'),
      }
      var Ee = we,
        xe = (function (e) {
          Object(l.a)(n, e)
          var t = Object(c.a)(n)
          function n() {
            var e
            return (
              Object(r.a)(this, n),
              ((e = t.apply(this, arguments)).onKeyDown = function (t) {
                if (t.keyCode === I.a.ENTER) return e.onClick(t), !0
              }),
              (e.onMouseLeave = function (t) {
                var n = e.props,
                  o = n.eventKey,
                  i = n.onItemHover,
                  r = n.onMouseLeave
                i({ key: o, hover: !1 }), r({ key: o, domEvent: t })
              }),
              (e.onMouseEnter = function (t) {
                var n = e.props,
                  o = n.eventKey,
                  i = n.onItemHover,
                  r = n.onMouseEnter
                i({ key: o, hover: !0 }), r({ key: o, domEvent: t })
              }),
              (e.onClick = function (t) {
                var n = e.props,
                  o = n.eventKey,
                  i = n.multiple,
                  r = n.onClick,
                  s = n.onSelect,
                  l = n.onDeselect,
                  c = n.isSelected,
                  u = { key: o, keyPath: [o], item: Object(a.a)(e), domEvent: t }
                r(u), i ? (c ? l(u) : s(u)) : c || s(u)
              }),
              (e.saveNode = function (t) {
                e.node = t
              }),
              e
            )
          }
          return (
            Object(s.a)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.callRef()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.callRef()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props
                  e.onDestroy && e.onDestroy(e.eventKey)
                },
              },
              {
                key: 'getPrefixCls',
                value: function () {
                  return ''.concat(this.props.rootPrefixCls, '-item')
                },
              },
              {
                key: 'getActiveClassName',
                value: function () {
                  return ''.concat(this.getPrefixCls(), '-active')
                },
              },
              {
                key: 'getSelectedClassName',
                value: function () {
                  return ''.concat(this.getPrefixCls(), '-selected')
                },
              },
              {
                key: 'getDisabledClassName',
                value: function () {
                  return ''.concat(this.getPrefixCls(), '-disabled')
                },
              },
              {
                key: 'callRef',
                value: function () {
                  this.props.manualRef && this.props.manualRef(this)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = Object(i.a)({}, this.props),
                    n = E()(
                      this.getPrefixCls(),
                      t.className,
                      ((e = {}),
                      Object(j.a)(e, this.getActiveClassName(), !t.disabled && t.active),
                      Object(j.a)(e, this.getSelectedClassName(), t.isSelected),
                      Object(j.a)(e, this.getDisabledClassName(), t.disabled),
                      e),
                    ),
                    r = Object(i.a)(
                      Object(i.a)({}, t.attribute),
                      {},
                      {
                        title: 'string' === typeof t.title ? t.title : void 0,
                        className: n,
                        role: t.role || 'menuitem',
                        'aria-disabled': t.disabled,
                      },
                    )
                  'option' === t.role
                    ? (r = Object(i.a)(
                        Object(i.a)({}, r),
                        {},
                        { role: 'option', 'aria-selected': t.isSelected },
                      ))
                    : (null !== t.role && 'none' !== t.role) || (r.role = 'none')
                  var s = {
                      onClick: t.disabled ? null : this.onClick,
                      onMouseLeave: t.disabled ? null : this.onMouseLeave,
                      onMouseEnter: t.disabled ? null : this.onMouseEnter,
                    },
                    a = Object(i.a)({}, t.style)
                  'inline' === t.mode &&
                    ('rtl' === t.direction
                      ? (a.paddingRight = t.inlineIndent * t.level)
                      : (a.paddingLeft = t.inlineIndent * t.level)),
                    Z.forEach(function (e) {
                      return delete t[e]
                    }),
                    delete t.direction
                  var l = this.props.itemIcon
                  return (
                    'function' === typeof this.props.itemIcon &&
                      (l = u.createElement(this.props.itemIcon, this.props)),
                    u.createElement(
                      'li',
                      Object(o.a)(
                        {},
                        Object(K.a)(t, ['onClick', 'onMouseEnter', 'onMouseLeave', 'onSelect']),
                        r,
                        s,
                        { style: a, ref: this.saveNode },
                      ),
                      t.children,
                      l,
                    )
                  )
                },
              },
            ]),
            n
          )
        })(u.Component)
      ;(xe.isMenuItem = !0),
        (xe.defaultProps = { onSelect: q, onMouseEnter: q, onMouseLeave: q, manualRef: q })
      var De = M(function (e, t) {
          var n = e.activeKey,
            o = e.selectedKeys,
            i = t.eventKey
          return {
            active: n[t.subMenuKey] === i,
            isSelected: Array.isArray(o) ? -1 !== o.indexOf(i) : o === i,
          }
        })(xe),
        Pe = (function (e) {
          Object(l.a)(n, e)
          var t = Object(c.a)(n)
          function n() {
            var e
            return (
              Object(r.a)(this, n),
              ((e = t.apply(this, arguments)).renderInnerMenuItem = function (t) {
                var n = e.props
                return (0, n.renderMenuItem)(t, n.index, e.props.subMenuKey)
              }),
              e
            )
          }
          return (
            Object(s.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e = Object(o.a)({}, this.props),
                    t = e.className,
                    n = void 0 === t ? '' : t,
                    i = e.rootPrefixCls,
                    r = ''.concat(i, '-item-group-title'),
                    s = ''.concat(i, '-item-group-list'),
                    a = e.title,
                    l = e.children
                  return (
                    Z.forEach(function (t) {
                      return delete e[t]
                    }),
                    delete e.direction,
                    u.createElement(
                      'li',
                      Object(o.a)({}, e, {
                        onClick: function (e) {
                          return e.stopPropagation()
                        },
                        className: ''.concat(n, ' ').concat(i, '-item-group'),
                      }),
                      u.createElement(
                        'div',
                        { className: r, title: 'string' === typeof a ? a : void 0 },
                        a,
                      ),
                      u.createElement(
                        'ul',
                        { className: s },
                        u.Children.map(l, this.renderInnerMenuItem),
                      ),
                    )
                  )
                },
              },
            ]),
            n
          )
        })(u.Component)
      ;(Pe.isMenuItemGroup = !0), (Pe.defaultProps = { disabled: !0 })
      var Ne = Pe,
        Re = function (e) {
          var t = e.className,
            n = e.rootPrefixCls,
            o = e.style
          return u.createElement('li', {
            className: ''.concat(t, ' ').concat(n, '-item-divider'),
            style: o,
          })
        }
      Re.defaultProps = { disabled: !0, className: '', style: {} }
      var Ae = Re
      t.default = Ee
    },
  },
])
