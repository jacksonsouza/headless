(function() {
    var a = this,
        b = a._,
        c = {}, d = Array.prototype,
        e = Object.prototype,
        f = Function.prototype,
        g = d.push,
        h = d.slice,
        i = d.unshift,
        j = e.toString,
        k = e.hasOwnProperty,
        l = d.forEach,
        m = d.map,
        n = d.reduce,
        o = d.reduceRight,
        p = d.filter,
        q = d.every,
        r = d.some,
        s = d.indexOf,
        t = d.lastIndexOf,
        u = Array.isArray,
        v = Object.keys,
        w = f.bind,
        x = function(a) {
            return new O(a)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : a._ = x, x.VERSION = "1.3.3";
    var y = x.each = x.forEach = function(a, b, d) {
        if (null != a)
            if (l && a.forEach === l) a.forEach(b, d);
            else if (a.length === +a.length) {
            for (var e = 0, f = a.length; f > e; e++)
                if (b.call(d, a[e], e, a) === c) return
        } else
            for (var g in a)
                if (x.has(a, g) && b.call(d, a[g], g, a) === c) return
    };
    x.map = x.collect = function(a, b, c) {
        var d = [];
        return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function(a, e, f) {
            d[d.length] = b.call(c, a, e, f)
        }), d)
    }, x.reduce = x.foldl = x.inject = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), n && a.reduce === n) return d && (b = x.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
        if (y(a, function(a, f, g) {
            e ? c = b.call(d, c, a, f, g) : (c = a, e = !0)
        }), !e) throw new TypeError("Reduce of empty array with no initial value");
        return c
    }, x.reduceRight = x.foldr = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), o && a.reduceRight === o) return d && (b = x.bind(b, d)), e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = x.toArray(a).reverse();
        return d && !e && (b = x.bind(b, d)), e ? x.reduce(f, b, c, d) : x.reduce(f, b)
    }, x.find = x.detect = function(a, b, c) {
        var d;
        return z(a, function(a, e, f) {
            return b.call(c, a, e, f) ? (d = a, !0) : void 0
        }), d
    }, x.filter = x.select = function(a, b, c) {
        var d = [];
        return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function(a, e, f) {
            b.call(c, a, e, f) && (d[d.length] = a)
        }), d)
    }, x.reject = function(a, b, c) {
        var d = [];
        return null == a ? d : (y(a, function(a, e, f) {
            b.call(c, a, e, f) || (d[d.length] = a)
        }), d)
    }, x.every = x.all = function(a, b, d) {
        var e = !0;
        return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function(a, f, g) {
            return (e = e && b.call(d, a, f, g)) ? void 0 : c
        }), !! e)
    };
    var z = x.some = x.any = function(a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function(a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c : void 0
        }), !! e)
    };
    x.include = x.contains = function(a, b) {
        var c = !1;
        return null == a ? c : s && a.indexOf === s ? -1 != a.indexOf(b) : c = z(a, function(a) {
            return a === b
        })
    }, x.invoke = function(a, b) {
        var c = h.call(arguments, 2);
        return x.map(a, function(a) {
            return (x.isFunction(b) ? b : a[b]).apply(a, c)
        })
    }, x.pluck = function(a, b) {
        return x.map(a, function(a) {
            return a[b]
        })
    }, x.max = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.max.apply(Math, a);
        if (!b && x.isEmpty(a)) return -1 / 0;
        var d = {
            computed: -1 / 0
        };
        return y(a, function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g >= d.computed && (d = {
                value: a,
                computed: g
            })
        }), d.value
    }, x.min = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.min.apply(Math, a);
        if (!b && x.isEmpty(a)) return 1 / 0;
        var d = {
            computed: 1 / 0
        };
        return y(a, function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g < d.computed && (d = {
                value: a,
                computed: g
            })
        }), d.value
    }, x.shuffle = function(a) {
        var b, c = 0,
            d = [];
        return y(a, function(a) {
            b = Math.floor(Math.random() * ++c), d[c - 1] = d[b], d[b] = a
        }), d
    }, x.sortBy = function(a, b, c) {
        var d = A(a, b);
        return x.pluck(x.map(a, function(a, b, e) {
            return {
                value: a,
                criteria: d.call(c, a, b, e)
            }
        }).sort(function(a, b) {
            var c = a.criteria,
                d = b.criteria;
            return void 0 === c ? 1 : void 0 === d ? -1 : d > c ? -1 : c > d ? 1 : 0
        }), "value")
    };
    var A = function(a, b) {
        return x.isFunction(b) ? b : function(a) {
            return a[b]
        }
    }, B = function(a, b, c) {
            var d = {}, e = A(a, b);
            return y(a, function(a, b) {
                var f = e(a, b);
                c(d, f, a)
            }), d
        };
    x.groupBy = function(a, b) {
        return B(a, b, function(a, b, c) {
            (a[b] || (a[b] = [])).push(c)
        })
    }, x.countBy = function(a, b) {
        return B(a, b, function(a, b) {
            a[b] || (a[b] = 0), a[b]++
        })
    }, x.sortedIndex = function(a, b, c) {
        c || (c = x.identity);
        for (var d = c(b), e = 0, f = a.length; f > e;) {
            var g = e + f >> 1;
            c(a[g]) < d ? e = g + 1 : f = g
        }
        return e
    }, x.toArray = function(a) {
        return a ? x.isArray(a) ? h.call(a) : x.isArguments(a) ? h.call(a) : a.toArray && x.isFunction(a.toArray) ? a.toArray() : x.values(a) : []
    }, x.size = function(a) {
        return x.isArray(a) ? a.length : x.keys(a).length
    }, x.first = x.head = x.take = function(a, b, c) {
        return null == b || c ? a[0] : h.call(a, 0, b)
    }, x.initial = function(a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b))
    }, x.last = function(a, b, c) {
        return null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0))
    }, x.rest = x.tail = function(a, b, c) {
        return h.call(a, null == b || c ? 1 : b)
    }, x.compact = function(a) {
        return x.filter(a, function(a) {
            return !!a
        })
    };
    var C = function(a, b, c) {
        return y(a, function(a) {
            x.isArray(a) ? b ? g.apply(c, a) : C(a, b, c) : c.push(a)
        }), c
    };
    x.flatten = function(a, b) {
        return C(a, b, [])
    }, x.without = function(a) {
        return x.difference(a, h.call(arguments, 1))
    }, x.uniq = x.unique = function(a, b, c) {
        var d = c ? x.map(a, c) : a,
            e = [];
        return x.reduce(d, function(c, d, f) {
            return (b ? x.last(c) === d && c.length : x.include(c, d)) || (c.push(d), e.push(a[f])), c
        }, []), e
    }, x.union = function() {
        return x.uniq(C(arguments, !0, []))
    }, x.intersection = function(a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a), function(a) {
            return x.every(b, function(b) {
                return x.indexOf(b, a) >= 0
            })
        })
    }, x.difference = function(a) {
        var b = C(h.call(arguments, 1), !0, []);
        return x.filter(a, function(a) {
            return !x.include(b, a)
        })
    }, x.zip = function() {
        for (var a = h.call(arguments), b = x.max(x.pluck(a, "length")), c = new Array(b), d = 0; b > d; d++) c[d] = x.pluck(a, "" + d);
        return c
    }, x.zipObject = function(a, b) {
        for (var c = {}, d = 0, e = a.length; e > d; d++) c[a[d]] = b[d];
        return c
    }, x.indexOf = function(a, b, c) {
        if (null == a) return -1;
        var d, e;
        if (c) return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
        if (s && a.indexOf === s) return a.indexOf(b);
        for (d = 0, e = a.length; e > d; d++)
            if (a[d] === b) return d;
        return -1
    }, x.lastIndexOf = function(a, b) {
        if (null == a) return -1;
        if (t && a.lastIndexOf === t) return a.lastIndexOf(b);
        for (var c = a.length; c--;)
            if (a[c] === b) return c;
        return -1
    }, x.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e;) f[e++] = a, a += c;
        return f
    };
    var D = function() {};
    x.bind = function(a, b) {
        var c, d;
        if (a.bind === w && w) return w.apply(a, h.call(arguments, 1));
        if (!x.isFunction(a)) throw new TypeError;
        return d = h.call(arguments, 2), c = function() {
            if (!(this instanceof c)) return a.apply(b, d.concat(h.call(arguments)));
            D.prototype = a.prototype;
            var e = new D,
                f = a.apply(e, d.concat(h.call(arguments)));
            return Object(f) === f ? f : e
        }
    }, x.bindAll = function(a) {
        var b = h.call(arguments, 1);
        return 0 == b.length && (b = x.functions(a)), y(b, function(b) {
            a[b] = x.bind(a[b], a)
        }), a
    }, x.memoize = function(a, b) {
        var c = {};
        return b || (b = x.identity),
        function() {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    }, x.delay = function(a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        }, b)
    }, x.defer = function(a) {
        return x.delay.apply(x, [a, 1].concat(h.call(arguments, 1)))
    }, x.throttle = function(a, b) {
        var c, d, e, f, g, h, i = x.debounce(function() {
                g = f = !1
            }, b);
        return function() {
            c = this, d = arguments;
            var j = function() {
                e = null, g && a.apply(c, d), i()
            };
            return e || (e = setTimeout(j, b)), f ? g = !0 : (f = !0, h = a.apply(c, d)), i(), h
        }
    }, x.debounce = function(a, b, c) {
        var d;
        return function() {
            var e = this,
                f = arguments,
                g = function() {
                    d = null, c || a.apply(e, f)
                }, h = c && !d;
            clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f)
        }
    }, x.once = function(a) {
        var b, c = !1;
        return function() {
            return c ? b : (c = !0, b = a.apply(this, arguments))
        }
    }, x.wrap = function(a, b) {
        return function() {
            var c = [a].concat(h.call(arguments, 0));
            return b.apply(this, c)
        }
    }, x.compose = function() {
        var a = arguments;
        return function() {
            for (var b = arguments, c = a.length - 1; c >= 0; c--) b = [a[c].apply(this, b)];
            return b[0]
        }
    }, x.after = function(a, b) {
        return 0 >= a ? b() : function() {
            return --a < 1 ? b.apply(this, arguments) : void 0
        }
    }, x.keys = v || function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [];
        for (var c in a) x.has(a, c) && (b[b.length] = c);
        return b
    }, x.values = function(a) {
        return x.map(a, x.identity)
    }, x.functions = x.methods = function(a) {
        var b = [];
        for (var c in a) x.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, x.extend = function(a) {
        return y(h.call(arguments, 1), function(b) {
            for (var c in b) a[c] = b[c]
        }), a
    }, x.pick = function(a) {
        var b = {};
        return y(C(h.call(arguments, 1), !0, []), function(c) {
            c in a && (b[c] = a[c])
        }), b
    }, x.defaults = function(a) {
        return y(h.call(arguments, 1), function(b) {
            for (var c in b) null == a[c] && (a[c] = b[c])
        }), a
    }, x.clone = function(a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a
    }, x.tap = function(a, b) {
        return b(a), a
    };
    var E = function(a, b, c) {
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b) return a === b;
        if (a._chain && (a = a._wrapped), b._chain && (b = b._wrapped), a.isEqual && x.isFunction(a.isEqual)) return a.isEqual(b);
        if (b.isEqual && x.isFunction(b.isEqual)) return b.isEqual(a);
        var d = j.call(a);
        if (d != j.call(b)) return !1;
        switch (d) {
            case "[object String]":
                return a == String(b);
            case "[object Number]":
                return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a == +b;
            case "[object RegExp]":
                return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if ("object" != typeof a || "object" != typeof b) return !1;
        for (var e = c.length; e--;)
            if (c[e] == a) return !0;
        c.push(a);
        var f = 0,
            g = !0;
        if ("[object Array]" == d) {
            if (f = a.length, g = f == b.length)
                for (; f-- && (g = f in a == f in b && E(a[f], b[f], c)););
        } else {
            if ("constructor" in a != "constructor" in b || a.constructor != b.constructor) return !1;
            for (var h in a)
                if (x.has(a, h) && (f++, !(g = x.has(b, h) && E(a[h], b[h], c)))) break;
            if (g) {
                for (h in b)
                    if (x.has(b, h) && !f--) break;
                g = !f
            }
        }
        return c.pop(), g
    };
    x.isEqual = function(a, b) {
        return E(a, b, [])
    }, x.isEmpty = function(a) {
        if (null == a) return !0;
        if (x.isArray(a) || x.isString(a)) return 0 === a.length;
        for (var b in a)
            if (x.has(a, b)) return !1;
        return !0
    }, x.isElement = function(a) {
        return !(!a || 1 != a.nodeType)
    }, x.isArray = u || function(a) {
        return "[object Array]" == j.call(a)
    }, x.isObject = function(a) {
        return a === Object(a)
    }, y(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(a) {
        x["is" + a] = function(b) {
            return j.call(b) == "[object " + a + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function(a) {
        return !(!a || !x.has(a, "callee"))
    }), x.isFinite = function(a) {
        return x.isNumber(a) && isFinite(a)
    }, x.isNaN = function(a) {
        return a !== a
    }, x.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a)
    }, x.isNull = function(a) {
        return null === a
    }, x.isUndefined = function(a) {
        return void 0 === a
    }, x.has = function(a, b) {
        return k.call(a, b)
    }, x.noConflict = function() {
        return a._ = b, this
    }, x.identity = function(a) {
        return a
    }, x.times = function(a, b, c) {
        for (var d = 0; a > d; d++) b.call(c, d)
    };
    var F = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "/": "&#x2F;"
    }, G = /[&<>"'\/]/g;
    x.escape = function(a) {
        return ("" + a).replace(G, function(a) {
            return F[a]
        })
    }, x.result = function(a, b) {
        if (null == a) return null;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c
    }, x.mixin = function(a) {
        y(x.functions(a), function(b) {
            Q(b, x[b] = a[b])
        })
    };
    var H = 0;
    x.uniqueId = function(a) {
        var b = H++;
        return a ? a + b : b
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var I = /.^/,
        J = {
            "\\": "\\",
            "'": "'",
            r: "\r",
            n: "\n",
            t: "	",
            u2028: "\u2028",
            u2029: "\u2029"
        };
    for (var K in J) J[J[K]] = K;
    var L = /\\|'|\r|\n|\t|\u2028|\u2029/g,
        M = /\\(\\|'|r|n|t|u2028|u2029)/g,
        N = function(a) {
            return a.replace(M, function(a, b) {
                return J[b]
            })
        };
    x.template = function(a, b, c) {
        c = x.defaults(c || {}, x.templateSettings);
        var d = "__p+='" + a.replace(L, function(a) {
            return "\\" + J[a]
        }).replace(c.escape || I, function(a, b) {
            return "'+\n((__t=(" + N(b) + "))==null?'':_.escape(__t))+\n'"
        }).replace(c.interpolate || I, function(a, b) {
            return "'+\n((__t=(" + N(b) + "))==null?'':__t)+\n'"
        }).replace(c.evaluate || I, function(a, b) {
            return "';\n" + N(b) + "\n__p+='"
        }) + "';\n";
        c.variable || (d = "with(obj||{}){\n" + d + "}\n"), d = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'')};\n" + d + "return __p;\n";
        var e = new Function(c.variable || "obj", "_", d);
        if (b) return e(b, x);
        var f = function(a) {
            return e.call(this, a, x)
        };
        return f.source = "function(" + (c.variable || "obj") + "){\n" + d + "}", f
    }, x.chain = function(a) {
        return x(a).chain()
    };
    var O = function(a) {
        this._wrapped = a
    };
    x.prototype = O.prototype;
    var P = function(a, b) {
        return b ? x(a).chain() : a
    }, Q = function(a, b) {
            O.prototype[a] = function() {
                var a = h.call(arguments);
                return i.call(a, this._wrapped), P(b.apply(x, a), this._chain)
            }
        };
    x.mixin(x), y(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
        var b = d[a];
        O.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], P(c, this._chain)
        }
    }), y(["concat", "join", "slice"], function(a) {
        var b = d[a];
        O.prototype[a] = function() {
            return P(b.apply(this._wrapped, arguments), this._chain)
        }
    }), O.prototype.chain = function() {
        return this._chain = !0, this
    }, O.prototype.value = function() {
        return this._wrapped
    }
}).call(this),
function() {
    var a, b = this,
        c = b.Backbone,
        d = Array.prototype.splice;
    a = "undefined" != typeof exports ? exports : b.Backbone = {}, a.VERSION = "0.9.2";
    var e = b._;
    e || "undefined" == typeof require || (e = require("underscore")), a.$ = b.jQuery || b.Zepto || b.ender, a.noConflict = function() {
        return b.Backbone = c, this
    }, a.emulateHTTP = !1, a.emulateJSON = !1;
    var f = /\s+/,
        g = a.Events = {
            on: function(a, b, c) {
                var d, e, g;
                if (!b) return this;
                for (a = a.split(f), d = this._callbacks || (this._callbacks = {}); e = a.shift();) g = d[e] || (d[e] = []), g.push(b, c);
                return this
            },
            off: function(a, b, c) {
                var d, g, h, i;
                if (!(g = this._callbacks)) return this;
                if (!(a || b || c)) return delete this._callbacks, this;
                for (a = a ? a.split(f) : e.keys(g); d = a.shift();)
                    if ((h = g[d]) && (b || c))
                        for (i = h.length - 2; i >= 0; i -= 2) b && h[i] !== b || c && h[i + 1] !== c || h.splice(i, 2);
                    else delete g[d];
                return this
            },
            trigger: function(a) {
                var b, c, d, e, g, h, i, j;
                if (!(c = this._callbacks)) return this;
                for (j = [], a = a.split(f), e = 1, g = arguments.length; g > e; e++) j[e - 1] = arguments[e];
                for (; b = a.shift();) {
                    if ((i = c.all) && (i = i.slice()), (d = c[b]) && (d = d.slice()), d)
                        for (e = 0, g = d.length; g > e; e += 2) d[e].apply(d[e + 1] || this, j);
                    if (i)
                        for (h = [b].concat(j), e = 0, g = i.length; g > e; e += 2) i[e].apply(i[e + 1] || this, h)
                }
                return this
            }
        };
    g.bind = g.on, g.unbind = g.off;
    var h = a.Model = function(a, b) {
        var c;
        a || (a = {}), b && b.collection && (this.collection = b.collection), b && b.parse && (a = this.parse(a)), (c = z(this, "defaults")) && (a = e.extend({}, c, a)), this.attributes = {}, this._escapedAttributes = {}, this.cid = e.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(a, {
            silent: !0
        }), this.changed = {}, this._silent = {}, this._pending = {}, this._previousAttributes = e.clone(this.attributes), this.initialize.apply(this, arguments)
    };
    e.extend(h.prototype, g, {
        changed: null,
        _silent: null,
        _pending: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return e.clone(this.attributes)
        },
        sync: function() {
            return a.sync.apply(this, arguments)
        },
        get: function(a) {
            return this.attributes[a]
        },
        escape: function(a) {
            var b;
            if (b = this._escapedAttributes[a]) return b;
            var c = this.get(a);
            return this._escapedAttributes[a] = e.escape(null == c ? "" : "" + c)
        },
        has: function(a) {
            return null != this.get(a)
        },
        set: function(a, b, c) {
            var d, f, g;
            if (e.isObject(a) || null == a ? (d = a, c = b) : (d = {}, d[a] = b), c || (c = {}), !d) return this;
            if (d instanceof h && (d = d.attributes), c.unset)
                for (f in d) d[f] = void 0;
            if (!this._validate(d, c)) return !1;
            this.idAttribute in d && (this.id = d[this.idAttribute]);
            var i = c.changes = {}, j = this.attributes,
                k = this._escapedAttributes,
                l = this._previousAttributes || {};
            for (f in d) g = d[f], (!e.isEqual(j[f], g) || c.unset && e.has(j, f)) && (delete k[f], (c.silent ? this._silent : i)[f] = !0), c.unset ? delete j[f] : j[f] = g, e.isEqual(l[f], g) && e.has(j, f) === e.has(l, f) ? (delete this.changed[f], delete this._pending[f]) : (this.changed[f] = g, c.silent || (this._pending[f] = !0));
            return c.silent || this.change(c), this
        },
        unset: function(a, b) {
            return b = e.extend({}, b, {
                unset: !0
            }), this.set(a, null, b)
        },
        clear: function(a) {
            return a = e.extend({}, a, {
                unset: !0
            }), this.set(e.clone(this.attributes), a)
        },
        fetch: function(b) {
            b = b ? e.clone(b) : {};
            var c = this,
                d = b.success;
            return b.success = function(a, e, f) {
                return c.set(c.parse(a, f), b) ? (d && d(c, a, b), void c.trigger("sync", c, a, b)) : !1
            }, b.error = a.wrapError(b.error, c, b), this.sync("read", this, b)
        },
        save: function(b, c, d) {
            var f, g, h;
            if (e.isObject(b) || null == b ? (f = b, d = c) : (f = {}, f[b] = c), d = d ? e.clone(d) : {}, d.wait) {
                if (!this._validate(f, d)) return !1;
                g = e.clone(this.attributes)
            }
            var i = e.extend({}, d, {
                silent: !0
            });
            if (f && !this.set(f, d.wait ? i : d)) return !1;
            if (!f && !this.isValid()) return !1;
            var j = this,
                k = d.success;
            d.success = function(a, b, c) {
                h = !0;
                var g = j.parse(a, c);
                return d.wait && (g = e.extend(f || {}, g)), j.set(g, d) ? (k && k(j, a, d), void j.trigger("sync", j, a, d)) : !1
            }, d.error = a.wrapError(d.error, j, d);
            var l = this.sync(this.isNew() ? "create" : "update", this, d);
            return !h && d.wait && (this.clear(i), this.set(g, i)), l
        },
        destroy: function(b) {
            b = b ? e.clone(b) : {};
            var c = this,
                d = b.success,
                f = function() {
                    c.trigger("destroy", c, c.collection, b)
                };
            if (b.success = function(a) {
                (b.wait || c.isNew()) && f(), d && d(c, a, b), c.isNew() || c.trigger("sync", c, a, b)
            }, this.isNew()) return b.success(), !1;
            b.error = a.wrapError(b.error, c, b);
            var g = this.sync("delete", this, b);
            return b.wait || f(), g
        },
        url: function() {
            var a = z(this, "urlRoot") || z(this.collection, "url") || A();
            return this.isNew() ? a : a + ("/" === a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function(a) {
            return a
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return null == this.id
        },
        change: function(a) {
            a || (a = {});
            var b = this._changing;
            this._changing = !0;
            for (var c in this._silent) this._pending[c] = !0;
            var d = e.extend({}, a.changes, this._silent);
            this._silent = {};
            for (var c in d) this.trigger("change:" + c, this, this.get(c), a);
            if (b) return this;
            for (; !e.isEmpty(this._pending);) {
                this._pending = {}, this.trigger("change", this, a);
                for (var c in this.changed) this._pending[c] || this._silent[c] || delete this.changed[c];
                this._previousAttributes = e.clone(this.attributes)
            }
            return this._changing = !1, this
        },
        hasChanged: function(a) {
            return null == a ? !e.isEmpty(this.changed) : e.has(this.changed, a)
        },
        changedAttributes: function(a) {
            if (!a) return this.hasChanged() ? e.clone(this.changed) : !1;
            var b, c = !1,
                d = this._previousAttributes;
            for (var f in a) e.isEqual(d[f], b = a[f]) || ((c || (c = {}))[f] = b);
            return c
        },
        previous: function(a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null
        },
        previousAttributes: function() {
            return e.clone(this._previousAttributes)
        },
        isValid: function() {
            return !this.validate || !this.validate(this.attributes)
        },
        _validate: function(a, b) {
            if (b.silent || !this.validate) return !0;
            a = e.extend({}, this.attributes, a);
            var c = this.validate(a, b);
            return c ? (b && b.error ? b.error(this, c, b) : this.trigger("error", this, c, b), !1) : !0
        }
    });
    var i = a.Collection = function(a, b) {
        b || (b = {}), b.model && (this.model = b.model), void 0 !== b.comparator && (this.comparator = b.comparator), this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, {
            silent: !0,
            parse: b.parse
        })
    };
    e.extend(i.prototype, g, {
        model: h,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a)
            })
        },
        sync: function() {
            return a.sync.apply(this, arguments)
        },
        add: function(a, b) {
            var c, f, g, h, i, j, k = {}, l = {}, m = [];
            for (b || (b = {}), a = e.isArray(a) ? a.slice() : [a], c = 0, g = a.length; g > c; c++) {
                if (!(h = a[c] = this._prepareModel(a[c], b))) throw new Error("Can't add an invalid model to a collection");
                i = h.cid, j = h.id, k[i] || this._byCid[i] || null != j && (l[j] || this._byId[j]) ? m.push(c) : k[i] = l[j] = h
            }
            for (c = m.length; c--;) m[c] = a.splice(m[c], 1)[0];
            for (c = 0, g = a.length; g > c; c++)(h = a[c]).on("all", this._onModelEvent, this), this._byCid[h.cid] = h, null != h.id && (this._byId[h.id] = h);
            if (this.length += g, f = null != b.at ? b.at : this.models.length, d.apply(this.models, [f, 0].concat(a)), b.merge)
                for (c = 0, g = m.length; g > c; c++)(h = this._byId[m[c].id]) && h.set(m[c], b);
            if (this.comparator && null == b.at && this.sort({
                silent: !0
            }), b.silent) return this;
            for (c = 0, g = this.models.length; g > c; c++) k[(h = this.models[c]).cid] && (b.index = c, h.trigger("add", h, this, b));
            return this
        },
        remove: function(a, b) {
            var c, d, f, g;
            for (b || (b = {}), a = e.isArray(a) ? a.slice() : [a], c = 0, d = a.length; d > c; c++) g = this.getByCid(a[c]) || this.get(a[c]), g && (delete this._byId[g.id], delete this._byCid[g.cid], f = this.indexOf(g), this.models.splice(f, 1), this.length--, b.silent || (b.index = f, g.trigger("remove", g, this, b)), this._removeReference(g));
            return this
        },
        push: function(a, b) {
            return a = this._prepareModel(a, b), this.add(a, b), a
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            return this.remove(b, a), b
        },
        unshift: function(a, b) {
            return a = this._prepareModel(a, b), this.add(a, e.extend({
                at: 0
            }, b)), a
        },
        shift: function(a) {
            var b = this.at(0);
            return this.remove(b, a), b
        },
        slice: function(a, b) {
            return this.models.slice(a, b)
        },
        get: function(a) {
            return null == a ? void 0 : this._byId[null != a.id ? a.id : a]
        },
        getByCid: function(a) {
            return a && this._byCid[a.cid || a]
        },
        at: function(a) {
            return this.models[a]
        },
        where: function(a) {
            return e.isEmpty(a) ? [] : this.filter(function(b) {
                for (var c in a)
                    if (a[c] !== b.get(c)) return !1;
                return !0
            })
        },
        sort: function(a) {
            if (a || (a = {}), !this.comparator) throw new Error("Cannot sort a set without a comparator");
            var b = e.bind(this.comparator, this);
            return 1 === this.comparator.length ? this.models = this.sortBy(b) : this.models.sort(b), a.silent || this.trigger("reset", this, a), this
        },
        pluck: function(a) {
            return e.map(this.models, function(b) {
                return b.get(a)
            })
        },
        reset: function(a, b) {
            a || (a = []), b || (b = {});
            for (var c = 0, d = this.models.length; d > c; c++) this._removeReference(this.models[c]);
            return this._reset(), this.add(a, e.extend({
                silent: !0
            }, b)), b.silent || this.trigger("reset", this, b), this
        },
        fetch: function(b) {
            b = b ? e.clone(b) : {}, void 0 === b.parse && (b.parse = !0);
            var c = this,
                d = b.success;
            return b.success = function(a, e, f) {
                c[b.add ? "add" : "reset"](c.parse(a, f), b), d && d(c, a, b), c.trigger("sync", c, a, b)
            }, b.error = a.wrapError(b.error, c, b), this.sync("read", this, b)
        },
        create: function(a, b) {
            var c = this;
            if (b = b ? e.clone(b) : {}, a = this._prepareModel(a, b), !a) return !1;
            b.wait || c.add(a, b);
            var d = b.success;
            return b.success = function(a, b, e) {
                e.wait && c.add(a, e), d && d(a, b, e)
            }, a.save(null, b), a
        },
        parse: function(a) {
            return a
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        chain: function() {
            return e(this.models).chain()
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {}, this._byCid = {}
        },
        _prepareModel: function(a, b) {
            if (a instanceof h) return a.collection || (a.collection = this), a;
            b || (b = {}), b.collection = this;
            var c = new this.model(a, b);
            return c._validate(c.attributes, b) ? c : !1
        },
        _removeReference: function(a) {
            this === a.collection && delete a.collection, a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(a, b, c, d) {
            ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments))
        }
    });
    var j = ["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "initial", "rest", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "groupBy"];
    e.each(j, function(a) {
        i.prototype[a] = function() {
            return e[a].apply(e, [this.models].concat(e.toArray(arguments)))
        }
    });
    var k = a.Router = function(a) {
        a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, l = /:\w+/g,
        m = /\*\w+/g,
        n = /[-[\]{}()+?.,\\^$|#\s]/g;
    e.extend(k.prototype, g, {
        initialize: function() {},
        route: function(b, c, d) {
            return a.history || (a.history = new o), e.isRegExp(b) || (b = this._routeToRegExp(b)), d || (d = this[c]), a.history.route(b, e.bind(function(e) {
                var f = this._extractParameters(b, e);
                d && d.apply(this, f), this.trigger.apply(this, ["route:" + c].concat(f)), a.history.trigger("route", this, c, f)
            }, this)), this
        },
        navigate: function(b, c) {
            a.history.navigate(b, c)
        },
        _bindRoutes: function() {
            if (this.routes) {
                var a = [];
                for (var b in this.routes) a.unshift([b, this.routes[b]]);
                for (var c = 0, d = a.length; d > c; c++) this.route(a[c][0], a[c][1], this[a[c][1]])
            }
        },
        _routeToRegExp: function(a) {
            return a = a.replace(n, "\\$&").replace(l, "([^/]+)").replace(m, "(.*?)"), new RegExp("^" + a + "$")
        },
        _extractParameters: function(a, b) {
            return a.exec(b).slice(1)
        }
    });
    var o = a.History = function(a) {
        this.handlers = [], e.bindAll(this, "checkUrl"), this.location = a && a.location || b.location, this.history = a && a.history || b.history
    }, p = /^[#\/]/,
        q = /msie [\w.]+/,
        r = /\/$/;
    o.started = !1, e.extend(o.prototype, g, {
        interval: 50,
        getHash: function(a) {
            var b = (a || this).location.href.match(/#(.*)$/);
            return b ? b[1] : ""
        },
        getFragment: function(a, b) {
            if (null == a)
                if (this._hasPushState || !this._wantsHashChange || b) {
                    a = this.location.pathname;
                    var c = this.options.root.replace(r, "");
                    a.indexOf(c) || (a = a.substr(c.length))
                } else a = this.getHash();
            return decodeURIComponent(a.replace(p, ""))
        },
        start: function(b) {
            if (o.started) throw new Error("Backbone.history has already been started");
            o.started = !0, this.options = e.extend({}, {
                root: "/"
            }, this.options, b), this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !! this.options.pushState, this._hasPushState = !! (this.options.pushState && this.history && this.history.pushState);
            var c = this.getFragment(),
                d = document.documentMode,
                f = q.exec(navigator.userAgent.toLowerCase()) && (!d || 7 >= d);
            r.test(this.options.root) || (this.options.root += "/"), f && this._wantsHashChange && (this.iframe = a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(c)), this._hasPushState ? a.$(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !f ? a.$(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = c;
            var g = this.location,
                h = g.pathname.replace(/[^/]$/, "$&/") === this.options.root && !g.search;
            return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !h ? (this.fragment = this.getFragment(null, !0), this.location.replace(this.options.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && h && g.hash && (this.fragment = this.getHash().replace(p, ""), this.history.replaceState({}, document.title, g.protocol + "//" + g.host + this.options.root + this.fragment)), this.options.silent ? void 0 : this.loadUrl())
        },
        stop: function() {
            a.$(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), o.started = !1
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            })
        },
        checkUrl: function() {
            var a = this.getFragment();
            return a === this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe))), a === this.fragment ? !1 : (this.iframe && this.navigate(a), void(this.loadUrl() || this.loadUrl(this.getHash())))
        },
        loadUrl: function(a) {
            var b = this.fragment = this.getFragment(a),
                c = e.any(this.handlers, function(a) {
                    return a.route.test(b) ? (a.callback(b), !0) : void 0
                });
            return c
        },
        navigate: function(a, b) {
            if (!o.started) return !1;
            b && b !== !0 || (b = {
                trigger: b
            });
            var c = (a || "").replace(p, "");
            if (this.fragment !== c) {
                this.fragment = c;
                var d = (0 !== c.indexOf(this.options.root) ? this.options.root : "") + c;
                if (this._hasPushState) this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, d);
                else {
                    if (!this._wantsHashChange) return this.location.assign(d);
                    this._updateHash(this.location, c, b.replace), this.iframe && c !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, c, b.replace))
                }
                b.trigger && this.loadUrl(a)
            }
        },
        _updateHash: function(a, b, c) {
            c ? a.replace(a.href.replace(/(javascript:|#).*$/, "") + "#" + b) : a.hash = b
        }
    });
    var s = a.View = function(a) {
        this.cid = e.uniqueId("view"), this._configure(a || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, t = /^(\S+)\s*(.*)$/,
        u = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
    e.extend(s.prototype, g, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(), this
        },
        make: function(b, c, d) {
            var e = document.createElement(b);
            return c && a.$(e).attr(c), null != d && a.$(e).html(d), e
        },
        setElement: function(b, c) {
            return this.$el && this.undelegateEvents(), this.$el = b instanceof a.$ ? b : a.$(b), this.el = this.$el[0], c !== !1 && this.delegateEvents(), this
        },
        delegateEvents: function(a) {
            if (a || (a = z(this, "events"))) {
                this.undelegateEvents();
                for (var b in a) {
                    var c = a[b];
                    if (e.isFunction(c) || (c = this[a[b]]), !c) throw new Error('Method "' + a[b] + '" does not exist');
                    var d = b.match(t),
                        f = d[1],
                        g = d[2];
                    c = e.bind(c, this), f += ".delegateEvents" + this.cid, "" === g ? this.$el.bind(f, c) : this.$el.delegate(g, f, c)
                }
            }
        },
        undelegateEvents: function() {
            this.$el.unbind(".delegateEvents" + this.cid)
        },
        _configure: function(a) {
            this.options && (a = e.extend({}, this.options, a));
            for (var b = 0, c = u.length; c > b; b++) {
                var d = u[b];
                a[d] && (this[d] = a[d])
            }
            this.options = a
        },
        _ensureElement: function() {
            if (this.el) this.setElement(this.el, !1);
            else {
                var a = e.extend({}, z(this, "attributes"));
                this.id && (a.id = z(this, "id")), this.className && (a["class"] = z(this, "className")), this.setElement(this.make(z(this, "tagName"), a), !1)
            }
        }
    });
    var v = function(a, b) {
        return y(this, a, b)
    };
    h.extend = i.extend = k.extend = s.extend = v;
    var w = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    a.sync = function(b, c, d) {
        var f = w[b];
        d || (d = {});
        var g = {
            type: f,
            dataType: "json"
        };
        return d.url || (g.url = z(c, "url") || A()), d.data || !c || "create" !== b && "update" !== b || (g.contentType = "application/json", g.data = JSON.stringify(c)), a.emulateJSON && (g.contentType = "application/x-www-form-urlencoded", g.data = g.data ? {
            model: g.data
        } : {}), a.emulateHTTP && ("PUT" === f || "DELETE" === f) && (a.emulateJSON && (g.data._method = f), g.type = "POST", g.beforeSend = function(a) {
            a.setRequestHeader("X-HTTP-Method-Override", f)
        }), "GET" === g.type || a.emulateJSON || (g.processData = !1), a.ajax(e.extend(g, d))
    }, a.ajax = function() {
        return a.$.ajax.apply(a.$, arguments)
    }, a.wrapError = function(a, b, c) {
        return function(d, e) {
            e = d === b ? e : d, a ? a(b, e, c) : b.trigger("error", b, e, c)
        }
    };
    var x = function() {}, y = function(a, b, c) {
            var d;
            return d = b && b.hasOwnProperty("constructor") ? b.constructor : function() {
                a.apply(this, arguments)
            }, e.extend(d, a), x.prototype = a.prototype, d.prototype = new x, b && e.extend(d.prototype, b), c && e.extend(d, c), d.prototype.constructor = d, d.__super__ = a.prototype, d
        }, z = function(a, b) {
            return a && a[b] ? e.isFunction(a[b]) ? a[b]() : a[b] : null
        }, A = function() {
            throw new Error('A "url" property or function must be specified')
        }
}.call(this),
function(a) {
    "use strict";
    a.fn.fitVids = function(b) {
        var c = {
            customSelector: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var d = document.head || document.getElementsByTagName("head")[0],
                e = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                f = document.createElement("div");
            f.innerHTML = '<p>x</p><style id="fit-vids-style">' + e + "</style>", d.appendChild(f.childNodes[1])
        }
        return b && a.extend(c, b), this.each(function() {
            var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            c.customSelector && b.push(c.customSelector);
            var d = a("html").hasClass("lt-ie10"),
                e = a(this).find(b.join(","));
            e = e.not("object object"), e.each(function() {
                var b = a(this),
                    c = b.attr("src");
                if (d && c.indexOf("youtube") > -1 && b.attr("src", c + "?wmode=transparent"), !("embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                    var e = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height(),
                        f = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10),
                        g = e / f;
                    if (!b.attr("id")) {
                        var h = "fitvid" + Math.floor(999999 * Math.random());
                        b.attr("id", h)
                    }
                    b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * g + "%"), b.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto),
function(a, b) {
    "use strict";
    var c = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    a.fn.imagesLoaded = function(d) {
        function e() {
            var b = a(l),
                c = a(m);
            h && (m.length ? h.reject(j, b, c) : h.resolve(j)), a.isFunction(d) && d.call(g, j, b, c)
        }

        function f(b, d) {
            b.src !== c && -1 === a.inArray(b, k) && (k.push(b), d ? m.push(b) : l.push(b), a.data(b, "imagesLoaded", {
                isBroken: d,
                src: b.src
            }), i && h.notifyWith(a(b), [d, j, a(l), a(m)]), j.length === k.length && (setTimeout(e), j.unbind(".imagesLoaded")))
        }
        var g = this,
            h = a.isFunction(a.Deferred) ? a.Deferred() : 0,
            i = a.isFunction(h.notify),
            j = g.find("img").add(g.filter("img")),
            k = [],
            l = [],
            m = [];
        return j.length ? j.bind("load.imagesLoaded error.imagesLoaded", function(a) {
            f(a.target, "error" === a.type)
        }).each(function(d, e) {
            var g = e.src,
                h = a.data(e, "imagesLoaded");
            return h && h.src === g ? void f(e, h.isBroken) : e.complete && e.naturalWidth !== b ? void f(e, 0 === e.naturalWidth || 0 === e.naturalHeight) : void((e.readyState || e.complete) && (e.src = c, e.src = g))
        }) : e(), h ? h.promise(g) : g
    }
}(jQuery),
function(a) {
    var b = function(b) {
        var c = a.extend({}, {
            offset: 0,
            postCount: 10,
            tag: null,
            search: null,
            id: null,
            callback: function() {}
        }, b),
            d = "/api/read/json";
        d = c.id ? d + "?id=" + c.id : c.tag ? d + "?tagged=" + c.tag + "&num=" + c.postCount + "&start=" + c.offset : c.search ? d + "?tagged=" + c.search + "&num=" + c.postCount : d + "?num=" + c.postCount + "&start=" + c.offset, a.ajax({
            url: d,
            dataType: "jsonp",
            timeout: 1e4,
            success: function(a) {
                c.callback(a.posts)
            }
        })
    }, c = function(b, c) {
            a.ajax("index" == b ? {
                url: "/api/read/json",
                dataType: "jsonp",
                timeout: 1e4,
                success: function(a) {
                    c(a["posts-total"])
                }
            } : {
                url: "/api/read/json?tagged=" + b,
                dataType: "jsonp",
                timeout: 1e4,
                success: function(a) {
                    c(a["posts-total"])
                }
            })
        }, d = 0,
        e = 0;
    a.fn.extend({
        patiochair: function(f) {
            var g = a(this),
                h = a.extend({}, {
                    postSelector: ".post",
                    olderSelector: ".pagination #prev",
                    eachPost: function() {},
                    eachAnswerPost: function() {},
                    eachAudioPost: function() {},
                    eachChatPost: function() {},
                    eachLinkPost: function() {},
                    eachPhotoPost: function() {},
                    eachPhotosetPost: function() {},
                    eachQuotePost: function() {},
                    eachTextPost: function() {},
                    eachVideoPost: function() {}
                }, f),
                i = {
                    isLastPage: !(d || a(h.olderSelector).length),
                    pageOffset: (/\/page\/(\d*)/.exec(window.location.pathname) ? parseInt(/\/page\/(\d*)/.exec(window.location.pathname)[1], 10) : 1) + d,
                    isSearchPage: /\/search\//.test(window.location.pathname),
                    search: /\/search\/([\+_\-\w]*)/.exec(window.location.pathname) ? /\/search\/([\+_\-\w]*)/.exec(window.location.pathname)[1] : null,
                    isTagPage: /\/tagged\//.test(window.location.pathname),
                    tagged: /\/tagged\/([\+_\-\w]*)/.exec(window.location.pathname) ? /\/tagged\/([\+_\-\w]*)/.exec(window.location.pathname)[1] : null,
                    isPermalinkPostPage: /\/post\//.test(window.location.pathname),
                    postID: /\/post\/(\d*)/.exec(window.location.pathname) ? /\/post\/(\d*)/.exec(window.location.pathname)[1] : null,
                    postCount: e || (e = g.find(h.postSelector).length),
                    posts: d ? g.filter(h.postSelector) : g.find(h.postSelector)
                }, j = i.isLastPage && !i.isSearchPage && !i.isPermalinkPostPage,
                k = function(b) {
                    a.each(b, function(a, b) {
                        var c = i.posts.filter("#" + b.id);
                        if (h.eachPost.apply(c, [b, c]), "photo" == b.type) {
                            var d = b.photos.length ? h.eachPhotosetPost : h.eachPhotoPost;
                            d.apply(c, [b, c])
                        } else "regular" == b.type ? h.eachTextPost.apply(c, [b, c]) : "conversation" == b.type ? h.eachChatPost.apply(c, [b, c]) : h["each" + b.type.charAt(0).toUpperCase() + b.type.slice(1) + "Post"].apply(c, [b, c])
                    })
                };
            return j ? i.isTagPage ? c(i.tagged, function(a) {
                b({
                    offset: a - i.postCount,
                    postCount: i.postCount,
                    tag: i.tagged.replace(/(\-|\+|_)/g, "%20"),
                    callback: k
                })
            }) : c("index", function(a) {
                b({
                    offset: a - i.postCount,
                    postCount: i.postCount,
                    callback: k
                })
            }) : b(i.isPermalinkPostPage ? {
                id: i.postID,
                callback: k
            } : i.isTagPage ? {
                offset: (i.pageOffset - 1) * i.postCount,
                postCount: i.postCount,
                tag: i.tagged.replace(/(\-|\+|_)/g, "%20"),
                callback: k
            } : i.isSearchPage ? {
                offset: 0,
                postCount: i.postCount,
                search: i.search.replace(/(\-|\+|_)/g, "%20"),
                callback: k
            } : {
                offset: (i.pageOffset - 1) * i.postCount,
                postCount: i.postCount,
                callback: k
            }), d += 1, this
        }
    })
}(jQuery),
function(a) {
    function b(a) {
        if (a in l.style) return a;
        var b = ["Moz", "Webkit", "O", "ms"],
            c = a.charAt(0).toUpperCase() + a.substr(1);
        if (a in l.style) return a;
        for (var d = 0; d < b.length; ++d) {
            var e = b[d] + c;
            if (e in l.style) return e
        }
    }

    function c() {
        return l.style[m.transform] = "", l.style[m.transform] = "rotateY(90deg)", "" !== l.style[m.transform]
    }

    function d(a) {
        return "string" == typeof a && this.parse(a), this
    }

    function e(a, b, c) {
        b === !0 ? a.queue(c) : b ? a.queue(b, c) : c()
    }

    function f(b) {
        var c = [];
        return a.each(b, function(b) {
            b = a.camelCase(b), b = a.transit.propertyMap[b] || a.cssProps[b] || b, b = i(b), -1 === a.inArray(b, c) && c.push(b)
        }), c
    }

    function g(b, c, d, e) {
        var g = f(b);
        a.cssEase[d] && (d = a.cssEase[d]);
        var h = "" + k(c) + " " + d;
        parseInt(e, 10) > 0 && (h += " " + k(e));
        var i = [];
        return a.each(g, function(a, b) {
            i.push(b + " " + h)
        }), i.join(", ")
    }

    function h(b, c) {
        c || (a.cssNumber[b] = !0), a.transit.propertyMap[b] = m.transform, a.cssHooks[b] = {
            get: function(c) {
                var d = a(c).css("transit:transform");
                return d.get(b)
            },
            set: function(c, d) {
                var e = a(c).css("transit:transform");
                e.setFromString(b, d), a(c).css({
                    "transit:transform": e
                })
            }
        }
    }

    function i(a) {
        return a.replace(/([A-Z])/g, function(a) {
            return "-" + a.toLowerCase()
        })
    }

    function j(a, b) {
        return "string" != typeof a || a.match(/^[\-0-9\.]+$/) ? "" + a + b : a
    }

    function k(b) {
        var c = b;
        return a.fx.speeds[c] && (c = a.fx.speeds[c]), j(c, "ms")
    }
    a.transit = {
        version: "0.9.9",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: !0,
        useTransitionEnd: !1
    };
    var l = document.createElement("div"),
        m = {}, n = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    m.transition = b("transition"), m.transitionDelay = b("transitionDelay"), m.transform = b("transform"), m.transformOrigin = b("transformOrigin"), m.transform3d = c();
    var o = {
        transition: "transitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd"
    }, p = m.transitionEnd = o[m.transition] || null;
    for (var q in m) m.hasOwnProperty(q) && "undefined" == typeof a.support[q] && (a.support[q] = m[q]);
    l = null, a.cssEase = {
        _default: "ease",
        "in": "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    }, a.cssHooks["transit:transform"] = {
        get: function(b) {
            return a(b).data("transform") || new d
        },
        set: function(b, c) {
            var e = c;
            e instanceof d || (e = new d(e)), b.style[m.transform] = "WebkitTransform" !== m.transform || n ? e.toString() : e.toString(!0), a(b).data("transform", e)
        }
    }, a.cssHooks.transform = {
        set: a.cssHooks["transit:transform"].set
    }, a.fn.jquery < "1.8" && (a.cssHooks.transformOrigin = {
        get: function(a) {
            return a.style[m.transformOrigin]
        },
        set: function(a, b) {
            a.style[m.transformOrigin] = b
        }
    }, a.cssHooks.transition = {
        get: function(a) {
            return a.style[m.transition]
        },
        set: function(a, b) {
            a.style[m.transition] = b
        }
    }), h("scale"), h("translate"), h("rotate"), h("rotateX"), h("rotateY"), h("rotate3d"), h("perspective"), h("skewX"), h("skewY"), h("x", !0), h("y", !0), d.prototype = {
        setFromString: function(a, b) {
            var c = "string" == typeof b ? b.split(",") : b.constructor === Array ? b : [b];
            c.unshift(a), d.prototype.set.apply(this, c)
        },
        set: function(a) {
            var b = Array.prototype.slice.apply(arguments, [1]);
            this.setter[a] ? this.setter[a].apply(this, b) : this[a] = b.join(",")
        },
        get: function(a) {
            return this.getter[a] ? this.getter[a].apply(this) : this[a] || 0
        },
        setter: {
            rotate: function(a) {
                this.rotate = j(a, "deg")
            },
            rotateX: function(a) {
                this.rotateX = j(a, "deg")
            },
            rotateY: function(a) {
                this.rotateY = j(a, "deg")
            },
            scale: function(a, b) {
                void 0 === b && (b = a), this.scale = a + "," + b
            },
            skewX: function(a) {
                this.skewX = j(a, "deg")
            },
            skewY: function(a) {
                this.skewY = j(a, "deg")
            },
            perspective: function(a) {
                this.perspective = j(a, "px")
            },
            x: function(a) {
                this.set("translate", a, null)
            },
            y: function(a) {
                this.set("translate", null, a)
            },
            translate: function(a, b) {
                void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== a && void 0 !== a && (this._translateX = j(a, "px")), null !== b && void 0 !== b && (this._translateY = j(b, "px")), this.translate = this._translateX + "," + this._translateY
            }
        },
        getter: {
            x: function() {
                return this._translateX || 0
            },
            y: function() {
                return this._translateY || 0
            },
            scale: function() {
                var a = (this.scale || "1,1").split(",");
                return a[0] && (a[0] = parseFloat(a[0])), a[1] && (a[1] = parseFloat(a[1])), a[0] === a[1] ? a[0] : a
            },
            rotate3d: function() {
                for (var a = (this.rotate3d || "0,0,0,0deg").split(","), b = 0; 3 >= b; ++b) a[b] && (a[b] = parseFloat(a[b]));
                return a[3] && (a[3] = j(a[3], "deg")), a
            }
        },
        parse: function(a) {
            var b = this;
            a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(a, c, d) {
                b.setFromString(c, d)
            })
        },
        toString: function(a) {
            var b = [];
            for (var c in this)
                if (this.hasOwnProperty(c)) {
                    if (!m.transform3d && ("rotateX" === c || "rotateY" === c || "perspective" === c || "transformOrigin" === c)) continue;
                    "_" !== c[0] && b.push(a && "scale" === c ? c + "3d(" + this[c] + ",1)" : a && "translate" === c ? c + "3d(" + this[c] + ",0)" : c + "(" + this[c] + ")")
                }
            return b.join(" ")
        }
    }, a.fn.transition = a.fn.transit = function(b, c, d, f) {
        var h = this,
            i = 0,
            j = !0;
        "function" == typeof c && (f = c, c = void 0), "function" == typeof d && (f = d, d = void 0), "undefined" != typeof b.easing && (d = b.easing, delete b.easing), "undefined" != typeof b.duration && (c = b.duration, delete b.duration), "undefined" != typeof b.complete && (f = b.complete, delete b.complete), "undefined" != typeof b.queue && (j = b.queue, delete b.queue), "undefined" != typeof b.delay && (i = b.delay, delete b.delay), "undefined" == typeof c && (c = a.fx.speeds._default), "undefined" == typeof d && (d = a.cssEase._default), c = k(c);
        var l = g(b, c, d, i),
            n = a.transit.enabled && m.transition,
            o = n ? parseInt(c, 10) + parseInt(i, 10) : 0;
        if (0 === o) {
            var q = function(a) {
                h.css(b), f && f.apply(h), a && a()
            };
            return e(h, j, q), h
        }
        var r = {}, s = function(c) {
                var d = !1,
                    e = function() {
                        d && h.unbind(p, e), o > 0 && h.each(function() {
                            this.style[m.transition] = r[this] || null
                        }), "function" == typeof f && f.apply(h), "function" == typeof c && c()
                    };
                o > 0 && p && a.transit.useTransitionEnd ? (d = !0, h.bind(p, e)) : window.setTimeout(e, o), h.each(function() {
                    o > 0 && (this.style[m.transition] = l), a(this).css(b)
                })
            }, t = function(a) {
                this.offsetWidth, s(a)
            };
        return e(h, j, t), this
    }, a.transit.getTransitionValue = g
}(jQuery),
function() {
    _.mixin({
        capitalize: function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        },
        pluralize: function(a, b) {
            return 1 === b ? a : a + "s"
        },
        touchify: function(a, b) {
            var c, d, e, f, g;
            if ($("html").hasClass("touch")) {
                e = {}, c = /^click/, g = /^mouse(enter|leave|over)/;
                for (d in a)
                    if (f = a[d], c.test(d)) e[d.replace(c, "touchend")] = f;
                    else {
                        if (g.test(d)) continue;
                        e[d] = f
                    }
                return _.extend(e, b)
            }
            return a
        }
    })
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.HeaderView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = {
            "click .header-toggle": "expandHeader",
            "click .slide-nav .prev": "prevSlide",
            "click .slide-nav .next": "nextSlide",
            "mouseenter .slider": "toggleLogo",
            "mouseleave .slider": "toggleLogo"
        }, c.prototype.initialize = function() {
            return this.sidebarNavigation = $(".navigation").hasClass("sidebar"), this.horizontalLogo = this.$el.hasClass("center-horizontally"), this.verticalLogo = this.$el.hasClass("center-vertically"), this.centerBothLogo = this.$el.hasClass("center-both")
        }, c.prototype.expandHeader = function(a) {
            return this.sidebarNavigation && $(".navigation").css({
                opacity: 0
            }), this.$el.addClass("expanded"), theme.isLessThanIE10 || theme.isLessThanIE9 ? $(a.currentTarget).hide() : $(a.currentTarget).fadeOut(), options.show_slideshow && this.$(".slide").length && (this.$(".copy").hide(), this.$el.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(a) {
                return function(b) {
                    return $(b.target).hasClass("expanded") ? (a.$(".copy").show(), a.$(".logo").addClass("hide"), a.$("h1").addClass("hide")) : void 0
                }
            }(this)), (theme.isLessThanIE9 || theme.isLessThanIE10) && (this.$(".copy").show(), this.$(".logo").addClass("hide"), this.$("h1").addClass("hide"))), this.sidebarNavigation && (this.$el.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                return function(a) {
                    return $(a.target).hasClass("expanded") ? $(".navigation").trigger("header-expanded") : void 0
                }
            }(this)), theme.isLessThanIE9 || theme.isLessThanIE10) ? $(".navigation").trigger("header-expanded") : void 0
        }, c.prototype.toggleLogo = function(a) {
            return !options.show_slideshow || theme.isPermalinkPage && !this.$el.hasClass("expanded") ? void 0 : $(a.toElement).hasClass("header-toggle") ? void 0 : "mouseenter" === a.type ? (this.$(".logo").addClass("hide"), this.$("h1").addClass("hide")) : (this.$(".logo").removeClass("hide"), this.$("h1").removeClass("hide"))
        }, c.prototype.horizontallyCenterLogo = function() {
            var a;
            return theme.isPhone || (a = this.$("h1, .logo").width(), this.$("h1, .logo").css({
                marginLeft: -(a / 2)
            }), this.verticalLogo && !this.centerBothLogo || (this.$("h1, .logo").css({
                opacity: 1
            }), !theme.isLessThanIE9)) ? void 0 : this.$("h1, .logo").css({
                visibility: "visible"
            })
        }, c.prototype.verticallyCenterLogo = function() {
            var a;
            return !theme.isPhone && (a = this.$("h1, .logo").outerHeight(), this.$("h1, .logo").css({
                marginTop: -(a / 2),
                opacity: 1
            }), theme.isLessThanIE9) ? this.$("h1, .logo").css({
                visibility: "visible"
            }) : void 0
        }, c.prototype.createHelper = function() {
            var a;
            return a = '<div class="slide active"><a class="clearfix" href="#"><span class="copy" style="padding-top: 135px;"><h3>Set Up Your Slides</h3><p>Use the options in your customization sidebar to set up your home page slider. An <strong>image</strong> is required and a <strong>title</strong>, <strong>link</strong> or <strong>description</strong> (like this paragraph) are optional.', this.$(".slides").append(a)
        }, c.prototype.mobileSlideBackground = function() {
            var a;
            return Modernizr.mq("(max-width: 450px)") ? (a = this.$(".slide:first").css("background-image"), this.$el.css({
                "background-image": a
            })) : this.$el.css("background-image", "")
        }, c.prototype.setUpSlides = function() {
            var a;
            return a = this.$(".slide").length, a ? (this.verticallyCenterSlideText(), this.$(".slide:first").addClass("active"), this.mobileSlideBackground(), $(window).resize(function(a) {
                return function() {
                    return a.verticallyCenterSlideText(), a.mobileSlideBackground()
                }
            }(this))) : this.createHelper(), 1 === a ? this.$(".slide-nav").remove() : void 0
        }, c.prototype.prevSlide = function() {
            var a, b;
            return a = this.$(".slide.active"), b = this.$(".slide.active").prev(), b.length || (b = this.$(".slide:last")), a.removeClass("active"), b.addClass("active")
        }, c.prototype.nextSlide = function() {
            var a, b;
            return a = this.$(".slide.active"), b = this.$(".slide.active").next(), b.length || (b = this.$(".slide:first")), a.removeClass("active"), b.addClass("active")
        }, c.prototype.verticallyCenterSlideText = function() {
            var a, b, c, d, e, f, g;
            if (!theme.isTablet) {
                for (a = this.$(".slide .copy span"), g = [], e = 0, f = a.length; f > e; e++) c = a[e], d = $(c).height(), b = 400, g.push($(c).css({
                    marginTop: (b - d) / 2
                }));
                return g
            }
        }, c.prototype.autoSlide = function() {
            var a;
            return a = setInterval(function(a) {
                return function() {
                    return a.nextSlide()
                }
            }(this), 5e3), $(".slider").mouseenter(function() {
                return clearInterval(a)
            }).mouseleave(function(b) {
                return function() {
                    return a = setInterval(function() {
                        return b.nextSlide()
                    }, 5e3)
                }
            }(this))
        }, c.prototype.render = function() {
            return options.show_slideshow && (this.setUpSlides(), (theme.isTablet || options.autoplay_slideshow) && this.autoSlide()), this.horizontalLogo && !options.show_slideshow && this.horizontallyCenterLogo(), this.verticalLogo && options.header_image && !options.show_slideshow && this.verticallyCenterLogo(), this.centerBothLogo && !options.show_slideshow && (this.horizontallyCenterLogo(), options.header_image) ? this.verticallyCenterLogo() : void 0
        }, c
    }(Backbone.View)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.NavigationView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = {
            "click li.search": "openSearch",
            "focusout .search-field": "closeSearch",
            "click li.profile-trigger": "triggerProfile",
            "header-expanded": "stickySidebar"
        }, c.prototype.initialize = function() {}, c.prototype.openSearch = function() {
            return theme.isTablet ? void 0 : (this.$("li.search span").hide(), this.$(".search-form").css("display", "inline"), this.$(".search-field").focus())
        }, c.prototype.closeSearch = function() {
            return theme.isTablet ? void 0 : (this.$("li.search span").show(), this.$(".search-form").hide())
        }, c.prototype.triggerProfile = function() {
            return $(".profile-overlay").trigger("show")
        }, c.prototype.setupTagMenu = function(a) {
            var b, c, d, e, f;
            for (c = this.$(".categories ul"), f = [], d = 0, e = a.length; e > d; d++) b = a[d], f.push(c.append('<li><a href="/tagged/' + encodeURIComponent(b) + '">' + b + "</a></li>"));
            return f
        }, c.prototype.manuallyResponsive = function() {
            var a, b, c;
            return c = $(".posts"), b = $(".posts").offset(), a = $(document.body).width(), c.css(a >= 1440 ? {
                marginLeft: "auto"
            } : b.left <= 270 ? {
                marginLeft: 235
            } : {
                marginLeft: "auto"
            })
        }, c.prototype.setMinHeight = function() {
            var a, b, c, d;
            return c = this.$el.outerHeight() + 80, d = $(window).height(), b = $("footer").outerHeight(), a = d - b, c > a ? void this.$el.addClass("shorty") : $(".posts, .featured-grid").css({
                minHeight: c + 80
            })
        }, c.prototype.stickySidebar = function() {
            var a, b;
            return theme.isTablet || (b = $("body").scrollTop() ? $("body").scrollTop() : $("html").scrollTop(), a = $("header").outerHeight(), this.$el.css(b > a ? {
                top: 80
            } : 0 > b ? {
                top: a + 80
            } : {
                top: a - b + 80
            })), this.$el.css({
                opacity: 1
            })
        }, c.prototype.render = function() {
            return theme.categories.length && options.categories_dropdown && this.setupTagMenu(theme.categories), this.$el.hasClass("sidebar") && !theme.isTablet ? (this.manuallyResponsive(), $(window).resize(function(a) {
                return function() {
                    return a.manuallyResponsive()
                }
            }(this)), theme.isTablet || this.setMinHeight(), this.stickySidebar(), $(window).scroll(function(a) {
                return function() {
                    return a.$el.hasClass("shorty") ? void 0 : a.stickySidebar()
                }
            }(this)), $(window).resize(function(a) {
                return function() {
                    return a.$el.hasClass("shorty") ? void 0 : a.stickySidebar()
                }
            }(this))) : void 0
        }, c
    }(Backbone.View)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.PostView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = {
            "json-data": "jsonData",
            "click .share .toggle": "toggleShare"
        }, c.prototype.initialize = function() {
            return window.tumblrNotesInserted = function(a) {
                return function() {
                    return a.checkLastNote()
                }
            }(this)
        }, c.prototype.checkLastNote = function() {
            var a;
            return a = this.$(".tumblr-notes li:last"), /posted/.test(a.find(".action").text()) ? a.addClass("posted-by") : void 0
        }, c.prototype.addTooltips = function() {
            var a, b;
            return a = this.$el.find(".like_button"), b = this.$el.find(".reblog_button"), a.prepend('<span class="tooltip"><span>Like This</span></span>'), b.prepend('<span class="tooltip"><span>Reblog This</span></span>')
        }, c.prototype.removeFeaturedTag = function() {
            var a, b, c, d, e, f, g;
            if (this.$el.find(".tags").length) {
                for (d = this.$(".tags a"), c = d.length, g = [], a = e = 0, f = d.length; f > e; a = ++e) b = d[a], "featured" === $(b).text() ? ($(b).remove(), g.push(1 === c ? this.$(".tags").remove() : void 0)) : g.push(void 0);
                return g
            }
        }, c.prototype.checkPinterest = function() {
            var a, b, c;
            return b = this.$(".pinterest"), c = b.data("url"), a = this.$("img:not(.avatar)").first().attr("src"), a ? (-1 === a.indexOf("http") && (a = "" + options.blogUrl + a), b.attr("href", "http://pinterest.com/pin/create/button/?url=" + c + "&media=" + a)) : (b.addClass("disabled"), b.attr("title", "Sorry, we can't pin this post! It needs an image."))
        }, c.prototype.toggleShare = function(a) {
            var b, c;
            return c = $(a.target).parents(".share"), b = "cubic-bezier(0.165, 0.840, 0.440, 1.000)", c.hasClass("open") ? c.find(".pxu-share").stop().transition({
                opacity: 0
            }, 250, b, function() {
                return $(this).css("display", "none"), c.removeClass("open")
            }) : ($(".share").removeClass("open"), $(".pxu-share").removeClass("active"), c.addClass("open"), c.find(".pxu-share").css("display", "block").stop().transition({
                opacity: 1
            }, 250, b))
        }, c.prototype.render = function() {
            return this.$el.fitVids(), this.addTooltips(), this.removeFeaturedTag(), this.checkPinterest(), theme.isPermalinkPage ? this.checkLastNote() : void 0
        }, c.prototype.jsonData = function() {}, c
    }(Backbone.View)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.PhotoPostView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = _.extend({}, PostView.prototype.events, {}), c.prototype.initialize = function() {
            return c.__super__.initialize.call(this)
        }, c.prototype.render = function() {
            return c.__super__.render.call(this)
        }, c
    }(PostView)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.PhotosetPostView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = _.extend({}, PostView.prototype.events, {}), c.prototype.initialize = function() {
            return c.__super__.initialize.call(this), this.$(".photo-slideshow").pxuPhotoset({
                rounded: !1,
                gutter: 15
            }, function(a) {
                return function() {
                    return a.$(".photo-slideshow").animate({
                        opacity: 1
                    })
                }
            }(this))
        }, c.prototype.render = function() {
            return c.__super__.render.call(this)
        }, c
    }(PostView)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.TextPostView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = _.extend({}, PostView.prototype.events, {}), c.prototype.initialize = function() {
            return c.__super__.initialize.call(this)
        }, c.prototype.render = function() {
            return c.__super__.render.call(this)
        }, c
    }(PostView)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.AudioPostView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = _.extend({}, PostView.prototype.events, {}), c.prototype.initialize = function() {
            return c.__super__.initialize.call(this)
        }, c.prototype.resizeSpotify = function() {
            var a, b, c, d;
            return b = this.$(".audio-player-wrap"), c = this.$el.width(), a = b.find(".spotify_audio_player"), d = a.attr("width") / a.attr("height"), a.css({
                width: Math.round(c),
                height: Math.round(c / d)
            }).appendTo(b)
        }, c.prototype.render = function() {
            return c.__super__.render.call(this), this.resizeSpotify(), $(window).resize(function(a) {
                return function() {
                    return a.resizeSpotify()
                }
            }(this))
        }, c.prototype.jsonData = function(a, b) {
            var c;
            return c = this.$(".audio_player"), c.length ? c.html(b["audio-player"]) : void 0
        }, c
    }(PostView)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.VideoPostView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = _.extend({}, PostView.prototype.events, {}), c.prototype.initialize = function() {
            return c.__super__.initialize.call(this)
        }, c.prototype.resizeVideo = function() {
            var a, b, c, d;
            return d = this.$(".video-player-wrap"), a = this.$el.width(), c = d.find("iframe, embed"), b = c.width() / c.height(), c.css({
                width: Math.floor(a),
                height: Math.floor(a / b)
            }), c.parent().css({
                width: Math.floor(a),
                height: Math.floor(a / b)
            })
        }, c.prototype.render = function() {
            return c.__super__.render.call(this), this.resizeVideo(), $(window).resize(function(a) {
                return function() {
                    return a.resizeVideo()
                }
            }(this))
        }, c.prototype.jsonData = function(a, b) {
            var c;
            return c = this.$(".tumblr_video_container"), c.length ? (c.html(b["video-player"]), this.resizeVideo()) : void 0
        }, c
    }(PostView)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.AnswerPostView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = _.extend({}, PostView.prototype.events, {}), c.prototype.initialize = function() {
            return c.__super__.initialize.call(this)
        }, c.prototype.render = function() {
            return c.__super__.render.call(this)
        }, c
    }(PostView)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.ChatPostView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = _.extend({}, PostView.prototype.events, {}), c.prototype.initialize = function() {
            return c.__super__.initialize.call(this)
        }, c.prototype.render = function() {
            return c.__super__.render.call(this)
        }, c
    }(PostView)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.LinkPostView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = _.extend({}, PostView.prototype.events, {}), c.prototype.initialize = function() {
            return c.__super__.initialize.call(this)
        }, c.prototype.render = function() {
            return c.__super__.render.call(this)
        }, c
    }(PostView)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.QuotePostView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = _.extend({}, PostView.prototype.events, {}), c.prototype.initialize = function() {
            return c.__super__.initialize.call(this)
        }, c.prototype.render = function() {
            return c.__super__.render.call(this)
        }, c
    }(PostView)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.PostsView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = {
            "click .load-more": "fetchPosts",
            "infinite-scroll:end-of-posts": "endOfPosts",
            "infinite-scroll:start-loading": "startedLoadingPosts",
            "infinite-scroll:done-loading": "doneLoadingPosts"
        }, c.prototype.initialize = function() {
            return this.loadMoreButton = this.$(".load-more"), this.postViews = []
        }, c.prototype.render = function() {
            return this.morePostsURL = -1, theme.infiniteScrollEnabled && this.setupInfiniteScroll(), this.setupPosts(this.$(".post")), this.$el.css({
                opacity: 1
            })
        }, c.prototype.setupPosts = function(a) {
            var b, c, d, e;
            for (e = [], c = 0, d = a.length; d > c; c++) b = a[c], e.push(this.addPost(b));
            return e
        }, c.prototype.addPost = function(a) {
            var b, c, d;
            return b = $(a).attr("class"), c = /type-(photo|photoset|text|audio|video|answer|chat|text|link|quote)\b/.exec(b)[1], d = new(window[_.capitalize(c) + "PostView"])({
                el: a
            }), d.render(), this.postViews.push(d)
        }, c.prototype.setupInfiniteScroll = function() {
            var a;
            return a = $(".pagination .next"), a.length ? this.morePostsURL = a.attr("href") : (this.morePostsURL = -1, this.$el.trigger("infinite-scroll:end-of-posts"))
        }, c.prototype.fetchPosts = function() {
            var a;
            return -1 !== this.morePostsURL ? (this.$el.trigger("infinite-scroll:start-loading"), a = $("<div/>"), a.load("" + this.morePostsURL + " .posts .post, .pagination", void 0, function(b) {
                return function() {
                    var c, d, e, f, g, h, i;
                    return 0 !== a.children().length ? (e = a.children(".post"), b.$el.append(e), b.setupPosts(e), e.patiochair({
                        olderSelector: ".pagination .next",
                        eachPost: function(a, b) {
                            return b.trigger("json-data", a)
                        }
                    }), options.facebook_comments && FB.XFBML.parse(), options.disqus_comments && (i = "http://" + options.disqus_shortname + ".disqus.com/count.js", $.getScript(i)), b.$el.trigger("infinite-scroll:done-loading"), f = a.find(".pagination .next"), f.length ? b.morePostsURL = f.attr("href") : b.$el.trigger("infinite-scroll:end-of-posts"), -1 === b.morePostsURL.indexOf("tagged") && -1 === b.morePostsURL.indexOf("search") ? (g = /page\/(\d+)/.exec(b.morePostsURL), g && (g = parseInt(g[1], 10)), c = b.previousPage === g - 1 ? g : g - 1, Tumblr.LikeButton.get_status_by_page(c), b.previousPage = c) : (d = function() {
                        var a, b, c;
                        for (c = [], a = 0, b = e.length; b > a; a++) h = e[a], c.push($(h).attr("id"));
                        return c
                    }(), Tumblr.LikeButton.get_status_by_post_ids(d))) : void 0
                }
            }(this))) : void 0
        }, c.prototype.endOfPosts = function() {
            return this.loadMoreButton.remove()
        }, c.prototype.startedLoadingPosts = function() {
            return this.loadMoreButton.addClass("loading")
        }, c.prototype.doneLoadingPosts = function() {
            return this.loadMoreButton.insertAfter(".post:last").removeClass("loading")
        }, c
    }(Backbone.View)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.Twitter = {}, Twitter.Tweet = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.linkifiedText = function() {
            return this.get("text").replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&?!\-\/]))?)/gi, '<a href="$1">$1</a>').replace(/(^|\s)#(\w+)/g, '$1<a href="http://search.twitter.com/search?q=$2">#$2</a>').replace(/(^|\s)@(\w+)/g, '$1<a href="http://twitter.com/$2">@$2</a>')
        }, c.prototype.timeAgo = function() {
            var a, b, c, d;
            return a = this.get("created_at"), c = new Date(a.replace(/^\w+ (\w+) (\d+) ([\d:]+) \+0000 (\d+)$/, "$1 $2 $4 $3 UTC")), d = new Date, b = parseInt((d - c) / 1e3, 10), 60 > b ? "less than a minute ago" : 120 > b ? "about a minute ago" : 2700 > b ? parseInt(b / 60, 10).toString() + " minutes ago" : 5400 > b ? "about an hour ago" : 86400 > b ? "about " + parseInt(b / 3600, 10).toString() + " hours ago" : 172800 > b ? "1 day ago" : parseInt(b / 86400).toString() + " days ago"
        }, c.prototype.permalink = function() {
            return "http://twitter.com/" + this.username() + "/status/" + this.tweetID()
        }, c.prototype.retweetURL = function() {
            return "https://twitter.com/intent/retweet?tweet_id=" + this.tweetID()
        }, c.prototype.replyURL = function() {
            return "https://twitter.com/intent/tweet?in_reply_to=" + this.tweetID()
        }, c.prototype.favoriteURL = function() {
            return "https://twitter.com/intent/favorite?tweet_id=" + this.tweetID()
        }, c.prototype.tweetID = function() {
            return this.get("id_str")
        }, c.prototype.username = function() {
            return this.get("user").screen_name
        }, c
    }(Backbone.Model), Twitter.Tweets = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.model = Twitter.Tweet, c.prototype.initialize = function(a, b) {
            return this.twitterName = b.twitterName, this.tweetCount = b.tweetCount || 2
        }, c.prototype.comparator = function(a, b) {
            return new Date(a.toJSON().created_at) < new Date(b.toJSON().created_at) ? 1 : -1
        }, c
    }(Backbone.Collection), Twitter.TweetView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.tagName = "div", c.prototype.className = "tweet", c.prototype.template = _.template('<p><%= text %></p>\n<div class="meta">\n    <a href="<%= permalink   %>" class="permalink"><%= date %></a>\n</div>'), c.prototype.initialize = function() {
            return this.model.bind("change", this.render, this), this.model.bind("destroy", this.remove, this)
        }, c.prototype.render = function() {
            return this.$el.html(this.template({
                text: this.model.linkifiedText(),
                date: this.model.timeAgo(),
                permalink: this.model.permalink(),
                favoriteURL: this.model.favoriteURL(),
                replyURL: this.model.replyURL(),
                retweetURL: this.model.retweetURL()
            })), this.el
        }, c
    }(Backbone.View), Twitter.Feed = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.initialize = function() {
            return this.twitterName = this.options.twitterName, this.twitterName ? (this.tweetCount = this.options.tweetCount || 2, this.tweets = new Twitter.Tweets(window.tweet_data.slice(0, this.tweetCount), {
                twitterName: this.twitterName,
                tweetCount: this.tweetCount
            }), this.render()) : (this.disabled = !0, void this.$el.hide())
        }, c.prototype.render = function() {
            return this.disabled ? void 0 : (this.$el.css({
                display: "block"
            }), this.$el.children(".tweet").remove(), this.tweets.forEach(function(a) {
                return function(b) {
                    var c;
                    return c = new Twitter.TweetView({
                        model: b
                    }), a.$el.append(c.render())
                }
            }(this)), this.$(".twitter-follow-button").length ? void 0 : this.$el.parent().append('<a href="https://twitter.com/' + this.twitterName + '" class="twitter-follow-button" data-show-screen-name="false" data-show-count="false">Follow @' + this.twitterName + '</a>\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>'))
        }, c
    }(Backbone.View)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.Instagram = {}, Instagram.Photo = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.likeCount = function() {
            return this.get("likes").count
        }, c.prototype.permalink = function() {
            return this.get("link")
        }, c.prototype.imageURL = function(a) {
            return null == a && (a = "thumbnail"), "thumbnail" !== a && (a += "_resolution"), this.get("images")[a].url
        }, c
    }(Backbone.Model), Instagram.Photos = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.model = Instagram.Photo, c.prototype.url = function() {
            return "https://api.instagram.com/v1/users/self/media/recent?access_token=" + this.accessToken
        }, c.prototype.initialize = function(a, b) {
            return this.accessToken = b.accessToken
        }, c.prototype.parse = function(a) {
            return this.profileURL = "http://instagram.com/" + a.data[0].user.username, a.data
        }, c.prototype.fetch = function() {
            return c.__super__.fetch.call(this, {
                type: "GET",
                dataType: "jsonp"
            })
        }, c
    }(Backbone.Collection), Instagram.PhotoView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.tagName = "div", c.prototype.className = "instagram-photo", c.prototype.template = _.template('<a href="<%= permalink %>">\n    <img src="<%= imageURL %>">\n\n    <span class="likes">\n        <%= like_text %>\n    </span>\n</a>'), c.prototype.initialize = function() {
            return this.model.bind("change", this.render, this), this.model.bind("destroy", this.remove, this)
        }, c.prototype.render = function() {
            return this.$el.html(this.template({
                like_text: function(a) {
                    return function() {
                        var b;
                        return b = a.model.likeCount(), "" + b
                    }
                }(this)(),
                permalink: this.model.permalink(),
                imageURL: this.model.imageURL()
            })), this.el
        }, c
    }(Backbone.View), Instagram.Photostream = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.initialize = function() {
            var a;
            return (a = this.options.accessToken) ? (this.photoCount = this.options.photoCount || 3, this.photos = new Instagram.Photos([], {
                accessToken: a
            }), this.photos.bind("all", this.render, this), this.photos.fetch()) : (this.disabled = !0, void this.$el.hide())
        }, c.prototype.render = function() {
            return this.disabled ? void 0 : (this.$(".instagram-photo").remove(), this.photos.forEach(function(a) {
                return function(b, c) {
                    var d;
                    if (!(c >= a.photoCount)) return d = new Instagram.PhotoView({
                        model: b
                    }), a.$el.append(d.render())
                }
            }(this)), this.$el.parent().append('<a href="' + this.photos.profileURL + '" class="more">More</a>'))
        }, c
    }(Backbone.View)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.ProfileView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = {
            show: "openOverlay",
            "click .close": "closeOverlay"
        }, c.prototype.openOverlay = function() {
            return this.$el.addClass("active"), $(document.body).addClass("profile-open")
        }, c.prototype.closeOverlay = function() {
            return this.$el.removeClass("active"), $(document.body).removeClass("profile-open")
        }, c.prototype.initialize = function() {
            return new Twitter.Feed({
                el: this.$(".profile div.twitter .tweets"),
                twitterName: options.twitterName,
                tweetCount: 2
            }), new Instagram.Photostream({
                el: this.$(".profile div.instagram .photos"),
                accessToken: options.instagram_access_token,
                photoCount: 5
            })
        }, c.prototype.socialCheck = function() {
            return this.$(".social-icons a").length ? void 0 : this.$(".social.panel").remove()
        }, c.prototype.render = function() {
            return this.socialCheck()
        }, c
    }(Backbone.View)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.FooterView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = _.touchify({
            "click .top": "backToTop",
            "ready-for-footer": "showFooter"
        }), c.prototype.initialize = function() {}, c.prototype.backToTop = function() {
            return $("html, body").animate({
                scrollTop: 0
            }, 500)
        }, c.prototype.showFooter = function() {
            return this.$el.show()
        }, c.prototype.render = function() {}, c
    }(Backbone.View)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.FeaturedView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = {
            "ready-to-align": "verticallyAlignTitles"
        }, c.prototype.initialize = function() {}, c.prototype.createFeaturedPosts = function() {
            var a;
            return a = [], $.ajax("http://api.tumblr.com/v2/blog/" + options.blogName + ".tumblr.com/posts/photo?api_key=WjqiOouxwwvSfFJ9PC0NPKTXrZojWcc7KtKkWXsAfbQrBXrPQI&tag=featured&jsonp=?", {
                type: "GET",
                dataType: "json",
                success: function(b) {
                    return function(c) {
                        var d, e, f, g, h, i, j, k, l, m;
                        if (d = c.response.posts, !d.length) return void b.$el.append("<h2>No Posts Found</h2><p>No posts have been featured yet.</p>").show();
                        for (m = [], e = k = 0, l = d.length; l > k; e = ++k) i = d[e], h = i.post_url, g = i.photos[0].alt_sizes, f = _.filter(g, function(a) {
                            return 500 === a.width
                        }), j = f[0] ? f[0].url : g[0].url, c = {
                            image_url: j,
                            permalink: h
                        }, a[e] = c, m.push(e === d.length - 1 ? b.renderFeaturedPosts(a) : void 0);
                        return m
                    }
                }(this)
            })
        }, c.prototype.renderFeaturedPosts = function(a) {
            var b, c, d, e, f, g;
            for (b = 0, g = [], e = 0, f = a.length; f > e; e++) d = a[e], b++, c = "<article><a style='background-image: url(" + d.image_url + ");' href='" + d.permalink + "'><span>View Post</span></a></article>", this.$el.append(c), g.push(b === a.length ? this.$el.imagesLoaded(function(a) {
                return function() {
                    return $(".content").removeClass("loading"), theme.isLessThanIE9 ? a.$el.css("display", "block") : a.$el.fadeIn(), $("footer").trigger("ready-for-footer"), a.$el.trigger("ready-to-align")
                }
            }(this)) : void 0);
            return g
        }, c.prototype.verticallyAlignTitles = function() {
            var a;
            return theme.isTablet ? void 0 : (a = this.$("article").outerHeight(), console.log(a), this.$("span").css({
                lineHeight: a + "px"
            }))
        }, c.prototype.render = function() {
            return $(document.body).addClass("featured"), this.createFeaturedPosts(), $(window).resize(function(a) {
                return function() {
                    return a.verticallyAlignTitles()
                }
            }(this))
        }, c
    }(Backbone.View)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.TabletView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.events = {
            "touchend .navigation-toggle": "toggleNavigation",
            "touchend .close-menu": "toggleNavigation"
        }, c.prototype.initialize = function() {}, c.prototype.toggleNavigation = function(a) {
            return console.log(a), this.$el.toggleClass("nav-open"), a.preventDefault()
        }, c.prototype.disableOrientationZoom = function() {
            var a;
            return a = document.querySelector('meta[name="viewport"]'), a ? (a.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0", document.body.addEventListener("gesturestart", function() {
                return a.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6"
            }, !1)) : void 0
        }, c.prototype.render = function() {
            var a;
            return a = this.$(".navigation"), a.addClass("tablet").removeClass("sidebar"), a.prepend("<h3>Menu</h3>").prepend('<span class="close-menu">Close</span>'), this.disableOrientationZoom()
        }, c
    }(Backbone.View)
}.call(this),
function() {
    var a = {}.hasOwnProperty,
        b = function(b, c) {
            function d() {
                this.constructor = b
            }
            for (var e in c) a.call(c, e) && (b[e] = c[e]);
            return d.prototype = c.prototype, b.prototype = new d, b.__super__ = c.prototype, b
        };
    window.ThemeView = function(a) {
        function c() {
            return c.__super__.constructor.apply(this, arguments)
        }
        return b(c, a), c.prototype.el = document.body, c.prototype.initialize = function() {
            var a, b, c, d;
            return b = $("html"), a = $(document.body), this.hasTouch = b.hasClass("touch"), this.isLessThanIE9 = b.hasClass("lt-ie9"), this.isLessThanIE10 = b.hasClass("lt-ie10"), this.isIndex = a.hasClass("home-template"), this.isPermalinkPage = a.hasClass("post-template"), this.isTagPage = a.hasClass("tag-template"), this.isSearchPage = a.hasClass("search-page"), this.infiniteScrollEnabled = a.hasClass("infinite-scroll") && this.isIndex && !this.hasTouch, c = /\/page\/[0-9]+/, this.isTablet = Modernizr.mq("(max-device-width: 800px)"), this.isPhone = Modernizr.mq("(max-device-width: 450px)"), this.isFeaturedPage = -1 !== window.location.href.indexOf("/?featured"), this.isFeaturedPage && a.addClass("featured"), this.page = c.test(location.pathname) ? c.exec(location.pathname)[1] - 1 : 0, this.categories = options.categories_dropdown && options.categories ? function() {
                var a, b, c, e;
                for (c = options.categories.split(","), e = [], a = 0, b = c.length; b > a; a++) d = c[a], e.push(d.replace(/^\s+|\s+$/g, ""));
                return e
            }() : []
        }, c.prototype.render = function() {
            return this.headerView = new HeaderView({
                el: this.$("header")
            }), this.navigationView = new NavigationView({
                el: this.$(".navigation")
            }), this.footerView = new FooterView({
                el: this.$("footer")
            }), this.headerView.render(), this.navigationView.render(), this.footerView.render(), this.profileView = new ProfileView({
                el: this.$(".profile-overlay")
            }), this.profileView.render(), this.isFeaturedPage ? (this.featuredView = new FeaturedView({
                el: this.$(".featured-grid")
            }), this.featuredView.render()) : (this.postsView = new PostsView({
                el: this.$(".posts")
            }), this.postsView.render()), theme.isTablet ? (this.tabletView = new TabletView({
                el: document.body
            }), this.tabletView.render()) : void 0
        }, c
    }(Backbone.View)
}.call(this),
function() {
    $(function() {
        return window.theme = new ThemeView, theme.render()
    })
}.call(this);
