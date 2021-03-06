var app = function () {
    "use strict";
    function t() {}
    function e(t) {
        return t()
    }
    function n() {
        return Object.create(null)
    }
    function l(t) {
        t.forEach(e)
    }
    function c(t) {
        return "function" == typeof t
    }
    function o(t, e) {
        return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
    }
    function a(t, e) {
        t.appendChild(e)
    }
    function r(t, e, n) {
        t.insertBefore(e, n || null)
    }
    function s(t) {
        t.parentNode.removeChild(t)
    }
    function i(t, e) {
        for (let n = 0; n < t.length; n += 1) 
            t[n] && t[n].d(e)
        
    }
    function u(t) {
        return document.createElement(t)
    }
    function d(t) {
        return document.createTextNode(t)
    }
    function f() {
        return d(" ")
    }
    function g(t, e, n, l) {
        return t.addEventListener(e, n, l),
        () => t.removeEventListener(e, n, l)
    }
    function m(t, e, n) {
        null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
    }
    function h(t, e) {
        e = "" + e,
        t.wholeText !== e && (t.data = e)
    }
    function v(t, e) {
        t.value = null == e ? "" : e
    }
    function p(t, e, n) {
        t.classList[n ? "add" : "remove"](e)
    }
    let y;
    function $(t) {
        y = t
    }
    const b = [],
        k = [],
        x = [],
        D = [],
        w = Promise.resolve();
    let q = !1;
    function S(t) {
        x.push(t)
    }
    function _(t) {
        D.push(t)
    }
    let C = !1;
    const N = new Set;
    function A() {
        if (! C) {
            C = !0;
            do {
                for (let t = 0; t < b.length; t += 1) {
                    const e = b[t];
                    $(e),
                    M(e.$$)
                }
                for ($(null), b.length = 0; k.length;) 
                    k.pop()();
                
                for (let t = 0; t < x.length; t += 1) {
                    const e = x[t];
                    N.has(e) || (N.add(e), e())
                }
                x.length = 0
            } while (b.length);
            for (; D.length;) 
                D.pop()();
            
            q = !1,
            C = !1,
            N.clear()
        }
    }
    function M(t) {
        if (null !== t.fragment) {
            t.update(),
            l(t.before_update);
            const e = t.dirty;
            t.dirty = [-1],
            t.fragment && t.fragment.p(t.ctx, e),
            t.after_update.forEach(S)
        }
    }
    const O = new Set;
    function T(t, e) {
        t && t.i && (O.delete(t), t.i(e))
    }
    function F(t, e, n) {
        const l = t.$$.props[e];
        void 0 !== l && (t.$$.bound[l] = n, n(t.$$.ctx[l]))
    }
    function L(t, n, o, a) {
        const {fragment: r, on_mount: s, on_destroy: i, after_update: u} = t.$$;
        r && r.m(n, o),
        a || S((() => {
            const n = s.map(e).filter(c);
            i ? i.push(... n) : l(n),
            t.$$.on_mount = []
        })),
        u.forEach(S)
    }
    function E(t, e) {
        const n = t.$$;
        null !== n.fragment && (l(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx =[])
    }
    function J(t, e) {
        -1 === t.$$.dirty[0] && (b.push(t), q || (q =! 0, w.then(A)), t.$$.dirty.fill(0)),
        t.$$.dirty[e / 31 | 0] |= 1 << e % 31
    }
    function j(e, c, o, a, r, i, u, d =[-1]) {
        const f = y;
        $(e);
        const g = e.$$ = {
            fragment: null,
            ctx: null,
            props: i,
            update: t,
            not_equal: r,
            bound: n(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(c.context || (f ? f.$$.context : [])),
            callbacks: n(),
            dirty: d,
            skip_bound: !1,
            root: c.target || f.$$.root
        };
        u && u(g.root);
        let m = !1;
        if (g.ctx = o ? o(e, c.props || {}, ((t, n, ... l) => {
            const c = l.length ? l[0] : n;
            return g.ctx && r(g.ctx[t], g.ctx[t] = c) && (! g.skip_bound && g.bound[t] && g.bound[t](c), m && J(e, t)),
            n
        })) : [], g.update(), m =! 0, l(g.before_update), g.fragment =!! a && a(g.ctx), c.target) {
            if (c.hydrate) {
                const t = function (t) {
                    return Array.from(t.childNodes)
                }(c.target);
                g.fragment && g.fragment.l(t),
                t.forEach(s)
            } else 
                g.fragment && g.fragment.c();
             c.intro && T(e.$$.fragment),
            L(e, c.target, c.anchor, c.customElement),
            A()
        }
        $(f)
    }
    class Y {
        $destroy() {
            E(this, 1),
            this.$destroy = t
        }
        $on(t, e) {
            const n = this.$$.callbacks[t] || (this.$$.callbacks[t] =[]);
            return n.push(e),
            () => {
                const t = n.indexOf(e);
                -1 !== t && n.splice(t, 1)
            }
        }
        $set(t) {
            var e;
            this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound =! 0, this.$$set(t), this.$$.skip_bound =! 1)
        }
    }
    function I(t, e, n) {
        const l = t.slice();
        return l[19] = e[n],
        l
    }
    function R(t, e, n) {
        const l = t.slice();
        return l[22] = e[n],
        l
    }
    function U(t, e, n) {
        const l = t.slice();
        return l[25] = e[n],
        l
    }
    function B(e) {
        let n,
            l,
            c = e[25][0] + "";
        return {
            c() {
                n = u("div"),
                l = d(c),
                m(n, "class", "calendar-weekday svelte-1bi3cq6")
            },
            m(t, e) {
                r(t, n, e),
                a(n, l)
            },
            p: t,
            d(t) {
                t && s(n)
            }
        }
    }
    function H(t) {
        let e;
        return {
            c() {
                e = u("div"),
                m(e, "class", "calendar-day svelte-1bi3cq6")
            },
            m(t, n) {
                r(t, e, n)
            },
            d(t) {
                t && s(e)
            }
        }
    }
    function P(t) {
        let e,
            n,
            l,
            c,
            o = t[19] + 1 + "";
        function i() {
            return t[14](t[19])
        }
        return {
            c() {
                e = u("div"),
                n = d(o),
                m(e, "class", "calendar-day svelte-1bi3cq6"),
                p(e, "active", t[19] + 1 == t[0].getDate())
            },
            m(t, o) {
                r(t, e, o),
                a(e, n),
                l || (c = g(e, "click", i), l =! 0)
            },
            p(l, c) {
                t = l,
                16 & c && o !== (o = t[19] + 1 + "") && h(n, o),
                17 & c && p(e, "active", t[19] + 1 == t[0].getDate())
            },
            d(t) {
                t && s(e),
                l = !1,
                c()
            }
        }
    }
    function W(t) {
        let e,
            n,
            l,
            c,
            o = 1 != t[3] && z();
        return {
            c() {
                e = d("("),
                n = d(t[3]),
                l = d(" day"),
                o && o.c(),
                c = d(" ago)")
            },
            m(t, a) {
                r(t, e, a),
                r(t, n, a),
                r(t, l, a),
                o && o.m(t, a),
                r(t, c, a)
            },
            p(t, e) {
                8 & e && h(n, t[3]),
                1 != t[3] ? o || (o = z(), o.c(), o.m(c.parentNode, c)) : o && (o.d(1), o = null)
            },
            d(t) {
                t && s(e),
                t && s(n),
                t && s(l),
                o && o.d(t),
                t && s(c)
            }
        }
    }
    function z(t) {
        let e;
        return {
            c() {
                e = d("s")
            },
            m(t, n) {
                r(t, e, n)
            },
            d(t) {
                t && s(e)
            }
        }
    }
    function G(e) {
        let n,
            c,
            o,
            v,
            y,
            $,
            b,
            k,
            x,
            D,
            w,
            q,
            S,
            _,
            C,
            N,
            A,
            M,
            O,
            T,
            F,
            L,
            E,
            J,
            j,
            Y,
            z,
            G,
            K,
            Q,
            V,
            X,
            Z,
            tt,
            et,
            nt,
            lt,
            ct,
            ot,
            at,
            rt = e[8][e[0].getMonth()] + "",
            st = e[0].getFullYear() + "",
            it = e[7][e[0].getDay()] + "",
            ut = e[0].toLocaleDateString(void 0, {
                year: "numeric",
                month: "long",
                day: "numeric"
            }) + "",
            dt = e[7],
            ft = [];
        for (let t = 0; t < dt.length; t += 1) 
            ft[t] = B(U(e, dt, t));
        
        let gt = e[5],
            mt = [];
        for (let t = 0; t < gt.length; t += 1) 
            mt[t] = H(R(e, gt, t));
        
        let ht = e[4],
            vt = [];
        for (let t = 0; t < ht.length; t += 1) 
            vt[t] = P(I(e, ht, t));
        
        let pt = e[3] > 0 && W(e);
        return {
            c() {
                n = u("main"),
                c = u("div"),
                o = u("button"),
                o.textContent = "???",
                v = f(),
                y = u("button"),
                $ = d(e[1]),
                b = f(),
                k = u("button"),
                k.textContent = "???",
                x = f(),
                D = u("div"),
                w = u("div"),
                q = u("button"),
                q.textContent = "???",
                S = f(),
                _ = d(rt),
                C = f(),
                N = d(st),
                A = f(),
                M = u("button"),
                M.textContent = "???",
                O = f(),
                T = u("div");
                for (let t = 0; t < ft.length; t += 1) 
                    ft[t].c();
                
                F = f(),
                L = u("div");
                for (let t = 0; t < mt.length; t += 1) 
                    mt[t].c();
                
                E = f();
                for (let t = 0; t < vt.length; t += 1) 
                    vt[t].c();
                
                J = f(),
                j = u("div"),
                Y = u("button"),
                Y.textContent = "Today",
                z = f(),
                G = u("button"),
                G.textContent = "Close",
                K = f(),
                Q = u("div"),
                V = f(),
                X = u("div"),
                Z = u("h1"),
                tt = d(it),
                et = f(),
                nt = u("h2"),
                lt = d(ut),
                ct = f(),
                pt && pt.c(),
                m(o, "class", "month-btn svelte-1bi3cq6"),
                m(y, "class", "calendar-btn svelte-1bi3cq6"),
                m(k, "class", "month-btn svelte-1bi3cq6"),
                m(q, "class", "svelte-1bi3cq6"),
                m(M, "class", "svelte-1bi3cq6"),
                m(w, "class", "calendar-month svelte-1bi3cq6"),
                m(T, "class", "calendar-weekdays svelte-1bi3cq6"),
                m(L, "class", "calendar-days svelte-1bi3cq6"),
                m(Y, "class", "reset svelte-1bi3cq6"),
                m(G, "class", "close svelte-1bi3cq6"),
                m(j, "class", "calendar-util svelte-1bi3cq6"),
                m(D, "class", "calendar svelte-1bi3cq6"),
                p(D, "active", e[2]),
                m(Q, "class", "overlay svelte-1bi3cq6"),
                p(Q, "active", e[2]),
                m(c, "class", "selector svelte-1bi3cq6"),
                m(Z, "class", "svelte-1bi3cq6"),
                m(nt, "class", "svelte-1bi3cq6"),
                m(X, "class", "display"),
                m(n, "class", "svelte-1bi3cq6")
            },
            m(t, l) {
                r(t, n, l),
                a(n, c),
                a(c, o),
                a(c, v),
                a(c, y),
                a(y, $),
                a(c, b),
                a(c, k),
                a(c, x),
                a(c, D),
                a(D, w),
                a(w, q),
                a(w, S),
                a(w, _),
                a(w, C),
                a(w, N),
                a(w, A),
                a(w, M),
                a(D, O),
                a(D, T);
                for (let t = 0; t < ft.length; t += 1) 
                    ft[t].m(T, null);
                
                a(D, F),
                a(D, L);
                for (let t = 0; t < mt.length; t += 1) 
                    mt[t].m(L, null);
                
                a(L, E);
                for (let t = 0; t < vt.length; t += 1) 
                    vt[t].m(L, null);
                
                a(D, J),
                a(D, j),
                a(j, Y),
                a(j, z),
                a(j, G),
                a(c, K),
                a(c, Q),
                a(n, V),
                a(n, X),
                a(X, Z),
                a(Z, tt),
                a(X, et),
                a(X, nt),
                a(nt, lt),
                a(nt, ct),
                pt && pt.m(nt, null),
                ot || (at =[
                    g(o, "click", e[11]),
                    g(y, "click", e[12]),
                    g(k, "click", e[13]),
                    g(q, "click", e[10]),
                    g(M, "click", e[9]),
                    g(Y, "click", e[15]),
                    g(G, "click", e[16]),
                    g(Q, "click", e[17])
                ], ot =! 0)
            },
            p(t, [e]) {
                if (2 & e && h($, t[1]), 1 & e && rt !== (rt = t[8][t[0].getMonth()] + "") && h(_, rt), 1 & e && st !== (st = t[0].getFullYear() + "") && h(N, st), 128 & e) {
                    let n;
                    for (dt = t[7], n = 0; n < dt.length; n += 1) {
                        const l = U(t, dt, n);
                        ft[n] ? ft[n].p(l, e) : (ft[n] = B(l), ft[n].c(), ft[n].m(T, null))
                    }
                    for (; n < ft.length; n += 1) 
                        ft[n].d(1);
                    
                    ft.length = dt.length
                }
                if (32 & e) {
                    const e = gt.length;
                    let n;
                    for (gt = t[5], n = e; n < gt.length; n += 1) 
                        R(t, gt, n),
                        mt[n] || (mt[n] = H(), mt[n].c(), mt[n].m(L, E));
                    
                    for (n = gt.length; n < e; n += 1) 
                        mt[n].d(1);
                    
                    mt.length = gt.length
                }
                if (17 & e) {
                    let n;
                    for (ht = t[4], n = 0; n < ht.length; n += 1) {
                        const l = I(t, ht, n);
                        vt[n] ? vt[n].p(l, e) : (vt[n] = P(l), vt[n].c(), vt[n].m(L, null))
                    }
                    for (; n < vt.length; n += 1) 
                        vt[n].d(1);
                    
                    vt.length = ht.length
                }
                4 & e && p(D, "active", t[2]),
                4 & e && p(Q, "active", t[2]),
                1 & e && it !== (it = t[7][t[0].getDay()] + "") && h(tt, it),
                1 & e && ut !== (ut = t[0].toLocaleDateString(void 0, {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }) + "") && h(lt, ut),
                t[3] > 0 ? pt ? pt.p(t, e) : (pt = W(t), pt.c(), pt.m(nt, null)) : pt && (pt.d(1), pt = null)
            },
            i: t,
            o: t,
            d(t) {
                t && s(n),
                i(ft, t),
                i(mt, t),
                i(vt, t),
                pt && pt.d(),
                ot = !1,
                l(at)
            }
        }
    }
    const K = 864e5;
    function Q(t, e, n) {
        let l,
            c,
            o;
        const a = new Date((new Date).toLocaleDateString());
        let {
                selected: r = new Date(a)
            } = e, {value: s} = e,
            i = !1;
        function u(t) {
            return new Date(r.getFullYear(), r.getMonth() + t, 0).getDate()
        }
        return t.$$set = t => {
            "selected" in t && n(0, r = t.selected),
            "value" in t && n(1, s = t.value)
        },
        t.$$.update = () => {
            1 & t.$$.dirty && n(5, l = [...Array(new Date(r.getFullYear(), r.getMonth(), 1).getDay()).keys()]),
            1 & t.$$.dirty && n(4, c = [...Array(new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate()).keys()]),
            1 & t.$$.dirty && n(3, o = (a - r) / K),
            1 & t.$$.dirty && n(1, s = r.toLocaleDateString())
        },
        [
            r,
            s,
            i,
            o,
            c,
            l,
            a,
            [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            function () {
                n(0, r = new Date(r.getTime() + u(1) * K))
            },
            function () {
                n(0, r = new Date(r.getTime() - u(0) * K))
            },
            () => n(0, r = new Date(r.getTime() - K)),
            () => n(2, i = !0),
            () => n(0, r = new Date(r.getTime() + K)),
            t => n(0, r = new Date(r.setDate(t + 1))),
            () => n(0, r = new Date(a)),
            () => n(2, i = !1),
            () => n(2, i = !1)
        ]
    }
    class V extends Y {
        constructor(t) {
            super(),
            j(this, t, Q, G, o, {
                selected: 0,
                value: 1
            })
        }
    }
    function X(t, e, n) {
        const l = t.slice();
        return l[12] = e[n][0],
        l[13] = e[n][1],
        l
    }
    function Z(t, e, n) {
        const l = t.slice();
        return l[16] = e[n],
        l[17] = e,
        l[18] = n,
        l
    }
    function tt(t) {
        let e,
            n,
            l;
        function c() {
            t[9].call(e, t[17], t[18])
        }
        return {
            c() {
                e = u("input"),
                m(e, "class", "note-item svelte-2a4gkl"),
                m(e, "type", "text"),
                m(e, "placeholder", "New note")
            },
            m(o, a) {
                r(o, e, a),
                v(e, t[16].name),
                n || (l = g(e, "input", c), n =! 0)
            },
            p(n, l) {
                t = n,
                2 & l && e.value !== t[16].name && v(e, t[16].name)
            },
            d(t) {
                t && s(e),
                n = !1,
                l()
            }
        }
    }
    function et(t) {
        let e,
            n,
            l,
            c,
            o,
            i,
            f = t[16].name + "";
        return {
            c() {
                e = u("div"),
                n = d("File??"),
                l = u("a"),
                c = d(f),
                m(l, "download", o = t[16].name),
                m(l, "href", i = t[16].value),
                m(e, "class", "note-item svelte-2a4gkl")
            },
            m(t, o) {
                r(t, e, o),
                a(e, n),
                a(e, l),
                a(l, c)
            },
            p(t, e) {
                2 & e && f !== (f = t[16].name + "") && h(c, f),
                2 & e && o !== (o = t[16].name) && m(l, "download", o),
                2 & e && i !== (i = t[16].value) && m(l, "href", i)
            },
            d(t) {
                t && s(e)
            }
        }
    }
    function nt(t) {
        let e,
            n,
            l,
            c,
            o,
            i,
            d,
            h = "text" == t[16].type && tt(t),
            v = "file" == t[16].type && et(t);
        function p() {
            return t[10](t[18])
        }
        return {
            c() {
                e = u("div"),
                h && h.c(),
                n = f(),
                v && v.c(),
                l = f(),
                c = u("button"),
                c.textContent = "??",
                o = f(),
                m(c, "class", "svelte-2a4gkl"),
                m(e, "class", "item svelte-2a4gkl")
            },
            m(t, s) {
                r(t, e, s),
                h && h.m(e, null),
                a(e, n),
                v && v.m(e, null),
                a(e, l),
                a(e, c),
                a(e, o),
                i || (d = g(c, "click", p), i =! 0)
            },
            p(c, o) {
                "text" == (t = c)[16].type ? h ? h.p(t, o) : (h = tt(t), h.c(), h.m(e, n)) : h && (h.d(1), h = null),
                "file" == t[16].type ? v ? v.p(t, o) : (v = et(t), v.c(), v.m(e, l)) : v && (v.d(1), v = null)
            },
            d(t) {
                t && s(e),
                h && h.d(),
                v && v.d(),
                i = !1,
                d()
            }
        }
    }
    function lt(t) {
        let e,
            n,
            l,
            c,
            o,
            i,
            v,
            p,
            y,
            $,
            b = t[12] + "",
            k = JSON.parse(t[13]).length + "";
        function x() {
            return t[11](t[12])
        }
        return {
            c() {
                e = u("div"),
                n = u("div"),
                l = d(b),
                c = f(),
                o = u("div"),
                i = d(k),
                v = d(" Items"),
                p = f(),
                m(n, "class", "summary-date svelte-2a4gkl"),
                m(o, "class", "summary-length"),
                m(e, "class", "summary-card svelte-2a4gkl")
            },
            m(t, s) {
                r(t, e, s),
                a(e, n),
                a(n, l),
                a(e, c),
                a(e, o),
                a(o, i),
                a(o, v),
                a(e, p),
                y || ($ = g(e, "click", x), y =! 0)
            },
            p(e, n) {
                t = e,
                8 & n && b !== (b = t[12] + "") && h(l, b),
                8 & n && k !== (k = JSON.parse(t[13]).length + "") && h(i, k)
            },
            d(t) {
                t && s(e),
                y = !1,
                $()
            }
        }
    }
    function ct(t) {
        let e,
            n,
            c,
            o,
            d,
            h,
            v,
            p,
            y,
            $,
            b,
            x,
            D,
            w,
            q,
            S,
            C,
            N,
            A,
            M,
            J,
            j,
            Y,
            I,
            R;
        function U(e) {
            t[5](e)
        }
        function B(e) {
            t[6](e)
        }
        let H = {};
        void 0 !== t[0] && (H.value = t[0]),
        void 0 !== t[2] && (H.selected = t[2]),
        c = new V({props: H}),
        k.push((() => F(c, "value", U))),
        k.push((() => F(c, "selected", B)));
        let P = t[1],
            W = [];
        for (let e = 0; e < P.length; e += 1) 
            W[e] = nt(Z(t, P, e));
        
        let z = t[3],
            G = [];
        for (let e = 0; e < z.length; e += 1) 
            G[e] = lt(X(t, z, e));
        
        return {
            c() {
                var t;
                e = u("main"),
                n = u("div"),
                (t = c.$$.fragment) && t.c(),
                h = f(),
                v = u("div"),
                p = u("div"),
                y = u("h3"),
                y.textContent = "Notes and files",
                $ = f(),
                b = u("button"),
                b.textContent = "Add Note",
                x = f(),
                D = u("input"),
                w = f(),
                q = u("button"),
                q.innerHTML = '<label for="upload" class="svelte-2a4gkl">Upload file</label>',
                S = f(),
                C = u("button"),
                C.textContent = "Clear all",
                N = f();
                for (let t = 0; t < W.length; t += 1) 
                    W[t].c();
                
                A = f(),
                M = u("div"),
                J = u("h3"),
                J.textContent = "Summary",
                j = f();
                for (let t = 0; t < G.length; t += 1) 
                    G[t].c();
                
                m(y, "class", "svelte-2a4gkl"),
                m(b, "class", "svelte-2a4gkl"),
                m(D, "type", "file"),
                m(D, "id", "upload"),
                D.hidden = !0,
                m(q, "class", "svelte-2a4gkl"),
                m(C, "class", "svelte-2a4gkl"),
                m(p, "class", "list-controls svelte-2a4gkl"),
                m(v, "class", "note-list svelte-2a4gkl"),
                m(n, "class", "list-container svelte-2a4gkl"),
                m(J, "class", "summary-title svelte-2a4gkl"),
                m(M, "class", "summary svelte-2a4gkl"),
                m(e, "class", "svelte-2a4gkl")
            },
            m(l, o) {
                r(l, e, o),
                a(e, n),
                L(c, n, null),
                a(n, h),
                a(n, v),
                a(v, p),
                a(p, y),
                a(p, $),
                a(p, b),
                a(p, x),
                a(p, D),
                a(p, w),
                a(p, q),
                a(p, S),
                a(p, C),
                a(v, N);
                for (let t = 0; t < W.length; t += 1) 
                    W[t].m(v, null);
                
                a(e, A),
                a(e, M),
                a(M, J),
                a(M, j);
                for (let t = 0; t < G.length; t += 1) 
                    G[t].m(M, null);
                
                Y = !0,
                I || (R =[
                    g(b, "click", t[7]),
                    g(D, "change", t[4]),
                    g(C, "click", t[8])
                ], I =! 0)
            },
            p(t, [e]) {
                const n = {};
                if (! o && 1 & e && (o =! 0, n.value = t[0], _((() => o =! 1))), ! d && 4 & e && (d =! 0, n.selected = t[2], _((() => d =! 1))), c.$set(n), 2 & e) {
                    let n;
                    for (P = t[1], n = 0; n < P.length; n += 1) {
                        const l = Z(t, P, n);
                        W[n] ? W[n].p(l, e) : (W[n] = nt(l), W[n].c(), W[n].m(v, null))
                    }
                    for (; n < W.length; n += 1) 
                        W[n].d(1);
                    
                    W.length = P.length
                }
                if (12 & e) {
                    let n;
                    for (z = t[3], n = 0; n < z.length; n += 1) {
                        const l = X(t, z, n);
                        G[n] ? G[n].p(l, e) : (G[n] = lt(l), G[n].c(), G[n].m(M, null))
                    }
                    for (; n < G.length; n += 1) 
                        G[n].d(1);
                    
                    G.length = z.length
                }
            },
            i(t) {
                Y || (T(c.$$.fragment, t), Y =! 0)
            },
            o(t) {
                !function (t, e, n, l) {
                    if (t && t.o) {
                        if (O.has(t)) 
                            return;
                        
                        O.add(t),
                        (void 0).c.push((() => {
                            O.delete(t),
                            l && (n && t.d(1), l())
                        })),
                        t.o(e)
                    }
                }(c.$$.fragment, t),
                Y = !1
            },
            d(t) {
                t && s(e),
                E(c),
                i(W, t),
                i(G, t),
                I = !1,
                l(R)
            }
        }
    }
    function ot(t, e, n) {
        let l,
            c,
            o,
            a = [];
        return t.$$.update = () => {
            1 & t.$$.dirty && n(1, l = JSON.parse(localStorage.getItem(c) || "[]")),
            3 & t.$$.dirty && (l && l.length ? (localStorage.setItem(c, JSON.stringify(l)), n(3, a = Object.entries(localStorage))) : (localStorage.removeItem(c), n(3, a = Object.entries(localStorage))))
        },
        [
            c,
            l,
            o,
            a,
            function (t) {
                const e = t.target.files[0],
                    c = new FileReader;
                c.readAsDataURL(e),
                c.onload = () => n(1, l = l.concat({type: "file", name: e.name, value: c.result})),
                c.onerror = t => console.error(t)
            },
            function (t) {
                c = t,
                n(0, c)
            },
            function (t) {
                o = t,
                n(2, o)
            },
            () => n(1, l = l.concat({type: "text", name: ""})),
            () => n(1, l = []),
            function (t, e) {
                t[e].name = this.value,
                n(1, l),
                n(0, c)
            },
            t => {
                l.splice(t, 1),
                n(1, l),
                n(0, c)
            },
            t => n(2, o = new Date(t))
        ]
    }
    return new class extends Y {
        constructor(t) {
            super(),
            j(this, t, ot, ct, o, {})
        }
    }({target: document.body})
}();
// sourceMappingURL=bundle.js.map
