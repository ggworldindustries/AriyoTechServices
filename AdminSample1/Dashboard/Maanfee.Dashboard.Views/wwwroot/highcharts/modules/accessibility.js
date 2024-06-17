﻿/*
 Highcharts JS v10.1.0 (2022-04-29)

 Accessibility module

 (c) 2010-2021 Highsoft AS
 Author: Oystein Moseng

 License: www.highcharts.com/license
*/
(function (a) { "object" === typeof module && module.exports ? (a["default"] = a, module.exports = a) : "function" === typeof define && define.amd ? define("highcharts/modules/accessibility", ["highcharts"], function (x) { a(x); a.Highcharts = x; return a }) : a("undefined" !== typeof Highcharts ? Highcharts : void 0) })(function (a) {
    function x(a, h, w, t) { a.hasOwnProperty(h) || (a[h] = t.apply(null, w), "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: h, module: a[h] } }))) } a = a ? a._modules : {};
    x(a, "Accessibility/A11yI18n.js", [a["Core/FormatUtilities.js"], a["Core/Utilities.js"]], function (a, h) {
        var u = a.format, t = h.getNestedProperty, n = h.pick, k; (function (a) {
            function y(d, e) {
                var c = d.indexOf("#each("), b = d.indexOf("#plural("), f = d.indexOf("["), q = d.indexOf("]"); if (-1 < c) {
                    q = d.slice(c).indexOf(")") + c; b = d.substring(0, c); f = d.substring(q + 1); q = d.substring(c + 6, q).split(","); c = Number(q[1]); d = ""; if (e = t(q[0], e)) for (c = isNaN(c) ? e.length : c, c = 0 > c ? e.length + c : Math.min(c, e.length), q = 0; q < c; ++q)d += b + e[q] + f; return d.length ?
                        d : ""
                } if (-1 < b) { f = d.slice(b).indexOf(")") + b; b = d.substring(b + 8, f).split(","); switch (Number(t(b[0], e))) { case 0: d = n(b[4], b[1]); break; case 1: d = n(b[2], b[1]); break; case 2: d = n(b[3], b[1]); break; default: d = b[1] }d ? (e = d, e = e.trim && e.trim() || e.replace(/^\s+|\s+$/g, "")) : e = ""; return e } return -1 < f ? (b = d.substring(0, f), f = Number(d.substring(f + 1, q)), d = void 0, e = t(b, e), !isNaN(f) && e && (0 > f ? (d = e[e.length + f], "undefined" === typeof d && (d = e[0])) : (d = e[f], "undefined" === typeof d && (d = e[e.length - 1]))), "undefined" !== typeof d ? d : "") : "{" +
                    d + "}"
            } function g(d, e, c) { var b = function (b, c) { b = b.slice(c || 0); var f = b.indexOf("{"), d = b.indexOf("}"); if (-1 < f && d > f) return { statement: b.substring(f + 1, d), begin: c + f + 1, end: c + d } }, f = [], q = 0; do { var z = b(d, q); var a = d.substring(q, z && z.begin - 1); a.length && f.push({ value: a, type: "constant" }); z && f.push({ value: z.statement, type: "statement" }); q = z ? z.end + 1 : q + 1 } while (z); f.forEach(function (b) { "statement" === b.type && (b.value = y(b.value, e)) }); return u(f.reduce(function (b, c) { return b + c.value }, ""), e, c) } function r(d, e) {
                d = d.split(".");
                for (var c = this.options.lang, b = 0; b < d.length; ++b)c = c && c[d[b]]; return "string" === typeof c ? g(c, e, this) : ""
            } var m = []; a.compose = function (d) { -1 === m.indexOf(d) && (m.push(d), d.prototype.langFormat = r); return d }; a.i18nFormat = g
        })(k || (k = {})); return k
    }); x(a, "Accessibility/Utils/HTMLUtilities.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function (a, h) {
        function u(a) {
            if ("function" === typeof k.MouseEvent) return new k.MouseEvent(a.type, a); if (n.createEvent) {
                var g = n.createEvent("MouseEvent"); if (g.initMouseEvent) return g.initMouseEvent(a.type,
                    a.bubbles, a.cancelable, a.view || k, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, a.button, a.relatedTarget), g
            } return t(a.type)
        } function t(a, g) {
            g = g || { x: 0, y: 0 }; if ("function" === typeof k.MouseEvent) return new k.MouseEvent(a, { bubbles: !0, cancelable: !0, composed: !0, view: k, detail: "click" === a ? 1 : 0, screenX: g.x, screenY: g.y, clientX: g.x, clientY: g.y }); if (n.createEvent) {
                var y = n.createEvent("MouseEvent"); if (y.initMouseEvent) return y.initMouseEvent(a, !0, !0, k, "click" === a ? 1 : 0, g.x,
                    g.y, g.x, g.y, !1, !1, !1, !1, 0, null), y
            } return { type: a }
        } var n = a.doc, k = a.win, E = h.css; return {
            addClass: function (a, g) { a.classList ? a.classList.add(g) : 0 > a.className.indexOf(g) && (a.className += " " + g) }, cloneMouseEvent: u, cloneTouchEvent: function (a) {
                var g = function (a) { for (var g = [], d = 0; d < a.length; ++d) { var e = a.item(d); e && g.push(e) } return g }; if ("function" === typeof k.TouchEvent) return g = new k.TouchEvent(a.type, {
                    touches: g(a.touches), targetTouches: g(a.targetTouches), changedTouches: g(a.changedTouches), ctrlKey: a.ctrlKey, shiftKey: a.shiftKey,
                    altKey: a.altKey, metaKey: a.metaKey, bubbles: a.bubbles, cancelable: a.cancelable, composed: a.composed, detail: a.detail, view: a.view
                }), a.defaultPrevented && g.preventDefault(), g; g = u(a); g.touches = a.touches; g.changedTouches = a.changedTouches; g.targetTouches = a.targetTouches; return g
            }, escapeStringForHTML: function (a) { return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;") }, getElement: function (a) { return n.getElementById(a) }, getFakeMouseEvent: t,
            getHeadingTagNameForElement: function (a) { var g = function (a) { a = parseInt(a.slice(1), 10); return "h" + Math.min(6, a + 1) }, y = function (a) { var d; a: { for (d = a; d = d.previousSibling;) { var e = d.tagName || ""; if (/H[1-6]/.test(e)) { d = e; break a } } d = "" } if (d) return g(d); a = a.parentElement; if (!a) return "p"; d = a.tagName; return /H[1-6]/.test(d) ? g(d) : y(a) }; return y(a) }, removeChildNodes: function (a) { for (; a.lastChild;)a.removeChild(a.lastChild) }, removeClass: function (a, g) {
                a.classList ? a.classList.remove(g) : a.className = a.className.replace(new RegExp(g,
                    "g"), "")
            }, removeElement: function (a) { a && a.parentNode && a.parentNode.removeChild(a) }, reverseChildNodes: function (a) { for (var g = a.childNodes.length; g--;)a.appendChild(a.childNodes[g]) }, stripHTMLTagsFromString: function (a) { return "string" === typeof a ? a.replace(/<\/?[^>]+(>|$)/g, "") : a }, visuallyHideElement: function (a) {
                E(a, {
                    position: "absolute", width: "1px", height: "1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(1px, 1px, 1px, 1px)", marginTop: "-3px", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)",
                    filter: "alpha(opacity=1)", opacity: .01
                })
            }
        }
    }); x(a, "Accessibility/Utils/ChartUtilities.js", [a["Core/Globals.js"], a["Accessibility/Utils/HTMLUtilities.js"], a["Core/Utilities.js"]], function (a, h, w) {
        function u(b, f) { var d = f.type, e = b.hcEvents; r.createEvent && (b.dispatchEvent || b.fireEvent) ? b.dispatchEvent ? b.dispatchEvent(f) : b.fireEvent(d, f) : e && e[d] ? c(b, d, f) : b.element && u(b.element, f) } function n(b) {
            var c = b.chart, d = {}, e = "Seconds"; d.Seconds = ((b.dataMax || b.max || 0) - (b.dataMin || b.min || 0)) / 1E3; d.Minutes = d.Seconds / 60;
            d.Hours = d.Minutes / 60; d.Days = d.Hours / 24;["Minutes", "Hours", "Days"].forEach(function (b) { 2 < d[b] && (e = b) }); var a = d[e].toFixed("Seconds" !== e && "Minutes" !== e ? 1 : 0); return c.langFormat("accessibility.axis.timeRange" + e, { chart: c, axis: b, range: a.replace(".0", "") })
        } function k(b) {
            var c = b.chart, d = c.options, e = d && d.accessibility && d.accessibility.screenReaderSection.axisRangeDateFormat || "", a = { min: b.dataMin || b.min || 0, max: b.dataMax || b.max || 0 }; d = function (d) { return b.dateTime ? c.time.dateFormat(e, a[d]) : a[d].toString() }; return c.langFormat("accessibility.axis.rangeFromTo",
                { chart: c, axis: b, rangeFrom: d("min"), rangeTo: d("max") })
        } function E(b) { if (b.points && b.points.length) return (b = e(b.points, function (b) { return !!b.graphic })) && b.graphic && b.graphic.element } function y(b) { var c = E(b); return c && c.parentNode || b.graph && b.graph.element || b.group && b.group.element } function g(b, c) {
            c.setAttribute("aria-hidden", !1); c !== b.renderTo && c.parentNode && c.parentNode !== r.body && (Array.prototype.forEach.call(c.parentNode.childNodes, function (b) {
                b.hasAttribute("aria-hidden") || b.setAttribute("aria-hidden",
                    !0)
            }), g(b, c.parentNode))
        } var r = a.doc, m = h.stripHTMLTagsFromString, d = w.defined, e = w.find, c = w.fireEvent; return {
            fireEventOnWrappedOrUnwrappedElement: u, getChartTitle: function (b) { return m(b.options.title.text || b.langFormat("accessibility.defaultChartTitle", { chart: b })) }, getAxisDescription: function (b) { return b && (b.userOptions && b.userOptions.accessibility && b.userOptions.accessibility.description || b.axisTitle && b.axisTitle.textStr || b.options.id || b.categories && "categories" || b.dateTime && "Time" || "values") }, getAxisRangeDescription: function (b) {
                var c =
                    b.options || {}; return c.accessibility && "undefined" !== typeof c.accessibility.rangeDescription ? c.accessibility.rangeDescription : b.categories ? (c = b.chart, b = b.dataMax && b.dataMin ? c.langFormat("accessibility.axis.rangeCategories", { chart: c, axis: b, numCategories: b.dataMax - b.dataMin + 1 }) : "", b) : !b.dateTime || 0 !== b.min && 0 !== b.dataMin ? k(b) : n(b)
            }, getPointFromXY: function (b, c, d) { for (var f = b.length, a; f--;)if (a = e(b[f].points || [], function (b) { return b.x === c && b.y === d })) return a }, getSeriesFirstPointElement: E, getSeriesFromName: function (b,
                c) { return c ? (b.series || []).filter(function (b) { return b.name === c }) : b.series }, getSeriesA11yElement: y, unhideChartElementFromAT: g, hideSeriesFromAT: function (b) { (b = y(b)) && b.setAttribute("aria-hidden", !0) }, scrollToPoint: function (b) {
                    var f = b.series.xAxis, e = b.series.yAxis, a = f && f.scrollbar ? f : e; if ((f = a && a.scrollbar) && d(f.to) && d(f.from)) {
                        e = f.to - f.from; if (d(a.dataMin) && d(a.dataMax)) { var g = a.toPixels(a.dataMin), m = a.toPixels(a.dataMax); b = (a.toPixels(b["xAxis" === a.coll ? "x" : "y"] || 0) - g) / (m - g) } else b = 0; f.updatePosition(b -
                            e / 2, b + e / 2); c(f, "changed", { from: f.from, to: f.to, trigger: "scrollbar", DOMEvent: null })
                    }
                }
        }
    }); x(a, "Accessibility/Utils/DOMElementProvider.js", [a["Core/Globals.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h) {
        var u = a.doc, t = h.removeElement; return function () {
            function a() { this.elements = [] } a.prototype.createElement = function () { var a = u.createElement.apply(u, arguments); this.elements.push(a); return a }; a.prototype.destroyCreatedElements = function () {
                this.elements.forEach(function (a) { t(a) }); this.elements =
                    []
            }; return a
        }()
    }); x(a, "Accessibility/Utils/EventProvider.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function (a, h) { var u = h.addEvent; return function () { function h() { this.eventRemovers = [] } h.prototype.addEvent = function () { var h = u.apply(a, arguments); this.eventRemovers.push(h); return h }; h.prototype.removeAddedEvents = function () { this.eventRemovers.forEach(function (a) { return a() }); this.eventRemovers = [] }; return h }() }); x(a, "Accessibility/AccessibilityComponent.js", [a["Accessibility/Utils/ChartUtilities.js"],
    a["Accessibility/Utils/DOMElementProvider.js"], a["Accessibility/Utils/EventProvider.js"], a["Accessibility/Utils/HTMLUtilities.js"], a["Core/Utilities.js"]], function (a, h, w, t, n) {
        var k = a.fireEventOnWrappedOrUnwrappedElement, u = t.getFakeMouseEvent; a = n.extend; t = function () {
            function a() { this.proxyProvider = this.keyCodes = this.eventProvider = this.domElementProvider = this.chart = void 0 } a.prototype.initBase = function (a, r) {
                this.chart = a; this.eventProvider = new w; this.domElementProvider = new h; this.proxyProvider = r; this.keyCodes =
                    { left: 37, right: 39, up: 38, down: 40, enter: 13, space: 32, esc: 27, tab: 9, pageUp: 33, pageDown: 34, end: 35, home: 36 }
            }; a.prototype.addEvent = function (a, r, m, d) { return this.eventProvider.addEvent(a, r, m, d) }; a.prototype.createElement = function (a, r) { return this.domElementProvider.createElement(a, r) }; a.prototype.fakeClickEvent = function (a) { var g = u("click"); k(a, g) }; a.prototype.destroyBase = function () { this.domElementProvider.destroyCreatedElements(); this.eventProvider.removeAddedEvents() }; return a
        }(); a(t.prototype, {
            init: function () { },
            getKeyboardNavigation: function () { }, onChartUpdate: function () { }, onChartRender: function () { }, destroy: function () { }
        }); return t
    }); x(a, "Accessibility/KeyboardNavigationHandler.js", [a["Core/Utilities.js"]], function (a) {
        var h = a.find; a = function () {
            function a(a, h) { this.chart = a; this.keyCodeMap = h.keyCodeMap || []; this.validate = h.validate; this.init = h.init; this.terminate = h.terminate; this.response = { success: 1, prev: 2, next: 3, noHandler: 4, fail: 5 } } a.prototype.run = function (a) {
                var u = a.which || a.keyCode, k = this.response.noHandler,
                w = h(this.keyCodeMap, function (a) { return -1 < a[0].indexOf(u) }); w ? k = w[1].call(this, u, a) : 9 === u && (k = this.response[a.shiftKey ? "prev" : "next"]); return k
            }; return a
        }(); ""; return a
    }); x(a, "Accessibility/Components/ContainerComponent.js", [a["Accessibility/AccessibilityComponent.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Core/Globals.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, w, t, n) {
        var k = this && this.__extends || function () {
            var a = function (d, e) {
                a =
                Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, b) { c.__proto__ = b } || function (c, b) { for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]) }; return a(d, e)
            }; return function (d, e) { function c() { this.constructor = d } a(d, e); d.prototype = null === e ? Object.create(e) : (c.prototype = e.prototype, new c) }
        }(), u = w.unhideChartElementFromAT, y = w.getChartTitle, g = t.doc, r = n.stripHTMLTagsFromString; return function (a) {
            function d() { return null !== a && a.apply(this, arguments) || this } k(d, a); d.prototype.onChartUpdate = function () {
                this.handleSVGTitleElement();
                this.setSVGContainerLabel(); this.setGraphicContainerAttrs(); this.setRenderToAttrs(); this.makeCreditsAccessible()
            }; d.prototype.handleSVGTitleElement = function () { var d = this.chart, c = "highcharts-title-" + d.index, b = r(d.langFormat("accessibility.svgContainerTitle", { chartTitle: y(d) })); if (b.length) { var a = this.svgTitleElement = this.svgTitleElement || g.createElementNS("http://www.w3.org/2000/svg", "title"); a.textContent = b; a.id = c; d.renderTo.insertBefore(a, d.renderTo.firstChild) } }; d.prototype.setSVGContainerLabel =
                function () { var d = this.chart, c = d.langFormat("accessibility.svgContainerLabel", { chartTitle: y(d) }); d.renderer.box && c.length && d.renderer.box.setAttribute("aria-label", c) }; d.prototype.setGraphicContainerAttrs = function () { var d = this.chart, c = d.langFormat("accessibility.graphicContainerLabel", { chartTitle: y(d) }); c.length && d.container.setAttribute("aria-label", c) }; d.prototype.setRenderToAttrs = function () {
                    var d = this.chart, c = "disabled" !== d.options.accessibility.landmarkVerbosity, b = d.langFormat("accessibility.chartContainerLabel",
                        { title: y(d), chart: d }); b && (d.renderTo.setAttribute("role", c ? "region" : "group"), d.renderTo.setAttribute("aria-label", b))
                }; d.prototype.makeCreditsAccessible = function () { var d = this.chart, c = d.credits; c && (c.textStr && c.element.setAttribute("aria-label", d.langFormat("accessibility.credits", { creditsStr: r(c.textStr) })), u(d, c.element)) }; d.prototype.getKeyboardNavigation = function () { var d = this.chart; return new h(d, { keyCodeMap: [], validate: function () { return !0 }, init: function () { var c = d.accessibility; c && c.keyboardNavigation.tabindexContainer.focus() } }) };
            d.prototype.destroy = function () { this.chart.renderTo.setAttribute("aria-hidden", !0) }; return d
        }(a)
    }); x(a, "Accessibility/FocusBorder.js", [a["Core/Renderer/SVG/SVGLabel.js"], a["Core/Utilities.js"]], function (a, h) {
        var u = h.addEvent, t = h.pick, n; (function (h) {
            function k() { var b = this.focusElement, c = this.options.accessibility.keyboardNavigation.focusBorder; b && (b.removeFocusBorder(), c.enabled && b.addFocusBorder(c.margin, { stroke: c.style.color, strokeWidth: c.style.lineWidth, r: c.style.borderRadius })) } function y(b, c) {
                var d =
                    this.options.accessibility.keyboardNavigation.focusBorder; (c = c || b.element) && c.focus && (c.hcEvents && c.hcEvents.focusin || u(c, "focusin", function () { }), c.focus(), d.hideBrowserFocusOutline && (c.style.outline = "none")); this.focusElement && this.focusElement.removeFocusBorder(); this.focusElement = b; this.renderFocusBorder()
            } function g(b) {
                if (!b.focusBorderDestroyHook) {
                    var c = b.destroy; b.destroy = function () { b.focusBorder && b.focusBorder.destroy && b.focusBorder.destroy(); return c.apply(b, arguments) }; b.focusBorderDestroyHook =
                        c
                }
            } function r(b, c) {
                this.focusBorder && this.removeFocusBorder(); var d = this.getBBox(), f = t(b, 3), e = this.parentGroup, q = this.scaleX || e && e.scaleX, h = this.scaleY || e && e.scaleY; q = (q ? !h : h) ? Math.abs(q || h || 1) : (Math.abs(q || 1) + Math.abs(h || 1)) / 2; d.x += this.translateX ? this.translateX : 0; d.y += this.translateY ? this.translateY : 0; h = d.x - f; var r = d.y - f, B = d.width + 2 * f, C = d.height + 2 * f, D = this instanceof a; if ("text" === this.element.nodeName || D) {
                    var I = !!this.rotation; if (D) var p = { x: I ? 1 : 0, y: 0 }; else {
                        var l = p = 0; "middle" === this.attr("text-anchor") ?
                            p = l = .5 : this.rotation ? p = .25 : l = .75; p = { x: p, y: l }
                    } l = +this.attr("x"); var v = +this.attr("y"); isNaN(l) || (h = l - d.width * p.x - f); isNaN(v) || (r = v - d.height * p.y - f); D && I && (D = B, B = C, C = D, isNaN(l) || (h = l - d.height * p.x - f), isNaN(v) || (r = v - d.width * p.y - f))
                } this.focusBorder = this.renderer.rect(h, r, B, C, parseInt((c && c.r || 0).toString(), 10) / q).addClass("highcharts-focus-border").attr({ zIndex: 99 }).add(e); this.renderer.styledMode || this.focusBorder.attr({ stroke: c && c.stroke, "stroke-width": (c && c.strokeWidth || 0) / q }); m(this, b, c); g(this)
            } function m(c) {
                for (var d =
                    [], a = 1; a < arguments.length; a++)d[a - 1] = arguments[a]; c.focusBorderUpdateHooks || (c.focusBorderUpdateHooks = {}, b.forEach(function (b) { b += "Setter"; var a = c[b] || c._defaultSetter; c.focusBorderUpdateHooks[b] = a; c[b] = function () { var b = a.apply(c, arguments); c.addFocusBorder.apply(c, d); return b } }))
            } function d() { e(this); this.focusBorderDestroyHook && (this.destroy = this.focusBorderDestroyHook, delete this.focusBorderDestroyHook); this.focusBorder && (this.focusBorder.destroy(), delete this.focusBorder) } function e(b) {
                b.focusBorderUpdateHooks &&
                (Object.keys(b.focusBorderUpdateHooks).forEach(function (c) { var d = b.focusBorderUpdateHooks[c]; d === b._defaultSetter ? delete b[c] : b[c] = d }), delete b.focusBorderUpdateHooks)
            } var c = [], b = "x y transform width height r d stroke-width".split(" "); h.compose = function (b, a) { -1 === c.indexOf(b) && (c.push(b), b = b.prototype, b.renderFocusBorder = k, b.setFocusToElement = y); -1 === c.indexOf(a) && (c.push(a), a = a.prototype, a.addFocusBorder = r, a.removeFocusBorder = d) }
        })(n || (n = {})); return n
    }); x(a, "Accessibility/Utils/Announcer.js", [a["Core/Renderer/HTML/AST.js"],
    a["Accessibility/Utils/DOMElementProvider.js"], a["Core/Globals.js"], a["Accessibility/Utils/HTMLUtilities.js"], a["Core/Utilities.js"]], function (a, h, w, t, n) {
        var k = w.doc, u = t.addClass, y = t.visuallyHideElement, g = n.attr; return function () {
            function r(a, d) { this.chart = a; this.domElementProvider = new h; this.announceRegion = this.addAnnounceRegion(d) } r.prototype.destroy = function () { this.domElementProvider.destroyCreatedElements() }; r.prototype.announce = function (g) {
                var d = this; a.setElementHTML(this.announceRegion, g); this.clearAnnouncementRegionTimer &&
                    clearTimeout(this.clearAnnouncementRegionTimer); this.clearAnnouncementRegionTimer = setTimeout(function () { d.announceRegion.innerHTML = a.emptyHTML; delete d.clearAnnouncementRegionTimer }, 1E3)
            }; r.prototype.addAnnounceRegion = function (a) { var d = this.chart.announcerContainer || this.createAnnouncerContainer(), e = this.domElementProvider.createElement("div"); g(e, { "aria-hidden": !1, "aria-live": a }); this.chart.styledMode ? u(e, "highcharts-visually-hidden") : y(e); d.appendChild(e); return e }; r.prototype.createAnnouncerContainer =
                function () { var a = this.chart, d = k.createElement("div"); g(d, { "aria-hidden": !1, "class": "highcharts-announcer-container" }); d.style.position = "relative"; a.renderTo.insertBefore(d, a.renderTo.firstChild); return a.announcerContainer = d }; return r
        }()
    }); x(a, "Accessibility/Components/AnnotationsA11y.js", [a["Accessibility/Utils/HTMLUtilities.js"]], function (a) {
        function h(a) { return (a.annotations || []).reduce(function (a, h) { h.options && !1 !== h.options.visible && (a = a.concat(h.labels)); return a }, []) } function u(a) {
            return a.options &&
                a.options.accessibility && a.options.accessibility.description || a.graphic && a.graphic.text && a.graphic.text.textStr || ""
        } function t(a) {
            var g = a.options && a.options.accessibility && a.options.accessibility.description; if (g) return g; g = a.chart; var h = u(a), m = a.points.filter(function (c) { return !!c.graphic }).map(function (c) {
                var b = c.accessibility && c.accessibility.valueDescription || c.graphic && c.graphic.element && c.graphic.element.getAttribute("aria-label") || ""; c = c && c.series.name || ""; return (c ? c + ", " : "") + "data point " +
                    b
            }).filter(function (c) { return !!c }), d = m.length, e = "accessibility.screenReaderSection.annotations.description" + (1 < d ? "MultiplePoints" : d ? "SinglePoint" : "NoPoints"); a = { annotationText: h, annotation: a, numPoints: d, annotationPoint: m[0], additionalAnnotationPoints: m.slice(1) }; return g.langFormat(e, a)
        } function n(a) { return h(a).map(function (a) { return (a = k(E(t(a)))) ? "<li>" + a + "</li>" : "" }) } var k = a.escapeStringForHTML, E = a.stripHTMLTagsFromString; return {
            getAnnotationsInfoHTML: function (a) {
                var g = a.annotations; return g &&
                    g.length ? '<ul style="list-style-type: none">' + n(a).join(" ") + "</ul>" : ""
            }, getAnnotationLabelDescription: t, getAnnotationListItems: n, getPointAnnotationTexts: function (a) { var g = h(a.series.chart).filter(function (g) { return -1 < g.points.indexOf(a) }); return g.length ? g.map(function (a) { return "" + u(a) }) : [] }
        }
    }); x(a, "Accessibility/Components/InfoRegionsComponent.js", [a["Accessibility/A11yI18n.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/Utils/Announcer.js"], a["Accessibility/Components/AnnotationsA11y.js"],
    a["Core/Renderer/HTML/AST.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Core/FormatUtilities.js"], a["Core/Globals.js"], a["Accessibility/Utils/HTMLUtilities.js"], a["Core/Utilities.js"]], function (a, h, w, t, n, k, E, y, g, r) {
        function m(b, c) {
            var a = c[0], d = b.series && b.series[0] || {}; d = { numSeries: b.series.length, numPoints: d.points && d.points.length, chart: b, mapTitle: b.mapView && b.mapView.geoMap && b.mapView.geoMap.title }; if (!a) return b.langFormat("accessibility.chartTypes.emptyChart", d); if ("map" === a) return d.mapTitle ?
                b.langFormat("accessibility.chartTypes.mapTypeDescription", d) : b.langFormat("accessibility.chartTypes.unknownMap", d); if (1 < b.types.length) return b.langFormat("accessibility.chartTypes.combinationChart", d); c = c[0]; a = b.langFormat("accessibility.seriesTypeDescriptions." + c, d); var e = b.series && 2 > b.series.length ? "Single" : "Multiple"; return (b.langFormat("accessibility.chartTypes." + c + e, d) || b.langFormat("accessibility.chartTypes.default" + e, d)) + (a ? " " + a : "")
        } var d = this && this.__extends || function () {
            var b = function (c,
                a) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, c) { b.__proto__ = c } || function (b, c) { for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]) }; return b(c, a) }; return function (c, a) { function d() { this.constructor = c } b(c, a); c.prototype = null === a ? Object.create(a) : (d.prototype = a.prototype, new d) }
        }(), e = t.getAnnotationsInfoHTML, c = k.getAxisDescription, b = k.getAxisRangeDescription, f = k.getChartTitle, q = k.unhideChartElementFromAT, z = E.format, u = y.doc, G = g.addClass, x = g.getElement, A = g.getHeadingTagNameForElement,
            F = g.stripHTMLTagsFromString, B = g.visuallyHideElement, C = r.attr, D = r.pick; return function (g) {
                function p() { var b = null !== g && g.apply(this, arguments) || this; b.announcer = void 0; b.screenReaderSections = {}; return b } d(p, g); p.prototype.init = function () { var b = this.chart, c = this; this.initRegionsDefinitions(); this.addEvent(b, "aftergetTableAST", function (b) { c.onDataTableCreated(b) }); this.addEvent(b, "afterViewData", function (b) { c.dataTableDiv = b; setTimeout(function () { c.focusDataTable() }, 300) }); this.announcer = new w(b, "assertive") };
                p.prototype.initRegionsDefinitions = function () {
                    var b = this; this.screenReaderSections = {
                        before: { element: null, buildContent: function (c) { var a = c.options.accessibility.screenReaderSection.beforeChartFormatter; return a ? a(c) : b.defaultBeforeChartFormatter(c) }, insertIntoDOM: function (b, c) { c.renderTo.insertBefore(b, c.renderTo.firstChild) }, afterInserted: function () { "undefined" !== typeof b.sonifyButtonId && b.initSonifyButton(b.sonifyButtonId); "undefined" !== typeof b.dataTableButtonId && b.initDataTableButton(b.dataTableButtonId) } },
                        after: { element: null, buildContent: function (c) { var a = c.options.accessibility.screenReaderSection.afterChartFormatter; return a ? a(c) : b.defaultAfterChartFormatter() }, insertIntoDOM: function (b, c) { c.renderTo.insertBefore(b, c.container.nextSibling) }, afterInserted: function () { b.chart.accessibility && b.chart.accessibility.keyboardNavigation.updateExitAnchor() } }
                    }
                }; p.prototype.onChartRender = function () { var b = this; this.linkedDescriptionElement = this.getLinkedDescriptionElement(); this.setLinkedDescriptionAttrs(); Object.keys(this.screenReaderSections).forEach(function (c) { b.updateScreenReaderSection(c) }) };
                p.prototype.getLinkedDescriptionElement = function () { var b = this.chart.options.accessibility.linkedDescription; if (b) { if ("string" !== typeof b) return b; b = z(b, this.chart); b = u.querySelectorAll(b); if (1 === b.length) return b[0] } }; p.prototype.setLinkedDescriptionAttrs = function () { var b = this.linkedDescriptionElement; b && (b.setAttribute("aria-hidden", "true"), G(b, "highcharts-linked-description")) }; p.prototype.updateScreenReaderSection = function (b) {
                    var c = this.chart, a = this.screenReaderSections[b], d = a.buildContent(c),
                    l = a.element = a.element || this.createElement("div"), e = l.firstChild || this.createElement("div"); d ? (this.setScreenReaderSectionAttribs(l, b), n.setElementHTML(e, d), l.appendChild(e), a.insertIntoDOM(l, c), c.styledMode ? G(e, "highcharts-visually-hidden") : B(e), q(c, e), a.afterInserted && a.afterInserted()) : (l.parentNode && l.parentNode.removeChild(l), delete a.element)
                }; p.prototype.setScreenReaderSectionAttribs = function (b, c) {
                    var a = this.chart, d = a.langFormat("accessibility.screenReaderSection." + c + "RegionLabel", {
                        chart: a,
                        chartTitle: f(a)
                    }); C(b, { id: "highcharts-screen-reader-region-" + c + "-" + a.index, "aria-label": d || void 0 }); b.style.position = "relative"; d && b.setAttribute("role", "all" === a.options.accessibility.landmarkVerbosity ? "region" : "group")
                }; p.prototype.defaultBeforeChartFormatter = function () {
                    var b = this.chart, c = b.options.accessibility.screenReaderSection.beforeChartFormat; if (!c) return ""; var d = this.getAxesDescription(), L = b.sonify && b.options.sonification && b.options.sonification.enabled, J = "highcharts-a11y-sonify-data-btn-" +
                        b.index, q = "hc-linkto-highcharts-data-table-" + b.index, p = e(b), C = b.langFormat("accessibility.screenReaderSection.annotations.heading", { chart: b }); d = { headingTagName: A(b.renderTo), chartTitle: f(b), typeDescription: this.getTypeDescriptionText(), chartSubtitle: this.getSubtitleText(), chartLongdesc: this.getLongdescText(), xAxisDescription: d.xAxis, yAxisDescription: d.yAxis, playAsSoundButton: L ? this.getSonifyButtonText(J) : "", viewTableButton: b.getCSV ? this.getDataTableButtonText(q) : "", annotationsTitle: p ? C : "", annotationsList: p };
                    b = a.i18nFormat(c, d, b); this.dataTableButtonId = q; this.sonifyButtonId = J; return b.replace(/<(\w+)[^>]*?>\s*<\/\1>/g, "")
                }; p.prototype.defaultAfterChartFormatter = function () { var b = this.chart, c = b.options.accessibility.screenReaderSection.afterChartFormat; if (!c) return ""; var d = { endOfChartMarker: this.getEndOfChartMarkerText() }; return a.i18nFormat(c, d, b).replace(/<(\w+)[^>]*?>\s*<\/\1>/g, "") }; p.prototype.getLinkedDescription = function () { var b = this.linkedDescriptionElement; return F(b && b.innerHTML || "") }; p.prototype.getLongdescText =
                    function () { var b = this.chart.options, c = b.caption; c = c && c.text; var a = this.getLinkedDescription(); return b.accessibility.description || a || c || "" }; p.prototype.getTypeDescriptionText = function () { var b = this.chart; return b.types ? b.options.accessibility.typeDescription || m(b, b.types) : "" }; p.prototype.getDataTableButtonText = function (b) { var c = this.chart; c = c.langFormat("accessibility.table.viewAsDataTableButtonText", { chart: c, chartTitle: f(c) }); return '<button id="' + b + '">' + c + "</button>" }; p.prototype.getSonifyButtonText =
                        function (b) { var c = this.chart; if (c.options.sonification && !1 === c.options.sonification.enabled) return ""; c = c.langFormat("accessibility.sonification.playAsSoundButtonText", { chart: c, chartTitle: f(c) }); return '<button id="' + b + '">' + c + "</button>" }; p.prototype.getSubtitleText = function () { var b = this.chart.options.subtitle; return F(b && b.text || "") }; p.prototype.getEndOfChartMarkerText = function () {
                            var b = this.chart, c = b.langFormat("accessibility.screenReaderSection.endOfChartMarker", { chart: b }); return '<div id="highcharts-end-of-chart-marker-' +
                                b.index + '">' + c + "</div>"
                        }; p.prototype.onDataTableCreated = function (b) { var c = this.chart; if (c.options.accessibility.enabled) { this.viewDataTableButton && this.viewDataTableButton.setAttribute("aria-expanded", "true"); var a = b.tree.attributes || {}; a.tabindex = -1; a.summary = c.langFormat("accessibility.table.tableSummary", { chart: c }); b.tree.attributes = a } }; p.prototype.focusDataTable = function () { var b = this.dataTableDiv; (b = b && b.getElementsByTagName("table")[0]) && b.focus && b.focus() }; p.prototype.initSonifyButton = function (b) {
                            var c =
                                this, a = this.sonifyButton = x(b), d = this.chart, e = function (b) { a && (a.setAttribute("aria-hidden", "true"), a.setAttribute("aria-label", "")); b.preventDefault(); b.stopPropagation(); b = d.langFormat("accessibility.sonification.playAsSoundClickAnnouncement", { chart: d }); c.announcer.announce(b); setTimeout(function () { a && (a.removeAttribute("aria-hidden"), a.removeAttribute("aria-label")); d.sonify && d.sonify() }, 1E3) }; a && d && (a.setAttribute("tabindex", -1), a.onclick = function (b) {
                                    (d.options.accessibility && d.options.accessibility.screenReaderSection.onPlayAsSoundClick ||
                                        e).call(this, b, d)
                                })
                        }; p.prototype.initDataTableButton = function (b) { var c = this.viewDataTableButton = x(b), a = this.chart; b = b.replace("hc-linkto-", ""); c && (C(c, { tabindex: -1, "aria-expanded": !!x(b) }), c.onclick = a.options.accessibility.screenReaderSection.onViewDataTableClick || function () { a.viewData() }) }; p.prototype.getAxesDescription = function () {
                            var b = this.chart, c = function (c, a) { c = b[c]; return 1 < c.length || c[0] && D(c[0].options.accessibility && c[0].options.accessibility.enabled, a) }, a = !!b.types && 0 > b.types.indexOf("map") &&
                                0 > b.types.indexOf("treemap") && 0 > b.types.indexOf("tilemap"), d = !!b.hasCartesianSeries, e = c("xAxis", !b.angular && d && a); c = c("yAxis", d && a); a = {}; e && (a.xAxis = this.getAxisDescriptionText("xAxis")); c && (a.yAxis = this.getAxisDescriptionText("yAxis")); return a
                        }; p.prototype.getAxisDescriptionText = function (a) { var d = this.chart, e = d[a]; return d.langFormat("accessibility.axis." + a + "Description" + (1 < e.length ? "Plural" : "Singular"), { chart: d, names: e.map(function (b) { return c(b) }), ranges: e.map(function (c) { return b(c) }), numAxes: e.length }) };
                p.prototype.destroy = function () { this.announcer && this.announcer.destroy() }; return p
            }(h)
    }); x(a, "Accessibility/Components/MenuComponent.js", [a["Core/Chart/Chart.js"], a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, w, t, n, k) {
        var u = this && this.__extends || function () {
            var a = function (d, c) {
                a = Object.setPrototypeOf || { __proto__: [] } instanceof Array &&
                function (b, c) { b.__proto__ = c } || function (b, c) { for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]) }; return a(d, c)
            }; return function (d, c) { function b() { this.constructor = d } a(d, c); d.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b) }
        }(), y = h.attr, g = n.getChartTitle, r = n.unhideChartElementFromAT, m = k.getFakeMouseEvent; h = function (a) {
            function d() { return null !== a && a.apply(this, arguments) || this } u(d, a); d.prototype.init = function () {
                var c = this.chart, b = this; this.addEvent(c, "exportMenuShown", function () { b.onMenuShown() });
                this.addEvent(c, "exportMenuHidden", function () { b.onMenuHidden() }); this.createProxyGroup()
            }; d.prototype.onMenuHidden = function () { var c = this.chart.exportContextMenu; c && c.setAttribute("aria-hidden", "true"); this.setExportButtonExpandedState("false") }; d.prototype.onMenuShown = function () { var c = this.chart, b = c.exportContextMenu; b && (this.addAccessibleContextMenuAttribs(), r(c, b)); this.setExportButtonExpandedState("true") }; d.prototype.setExportButtonExpandedState = function (c) {
                this.exportButtonProxy && this.exportButtonProxy.buttonElement.setAttribute("aria-expanded",
                    c)
            }; d.prototype.onChartRender = function () { var c = this.chart, b = c.focusElement, a = c.accessibility; this.proxyProvider.clearGroup("chartMenu"); this.proxyMenuButton(); this.exportButtonProxy && b && b === c.exportingGroup && (b.focusBorder ? c.setFocusToElement(b, this.exportButtonProxy.buttonElement) : a && a.keyboardNavigation.tabindexContainer.focus()) }; d.prototype.proxyMenuButton = function () {
                var c = this.chart, b = this.proxyProvider, a = c.exportSVGElements && c.exportSVGElements[0], d = c.options.exporting, e = c.exportSVGElements &&
                    c.exportSVGElements[0]; d && !1 !== d.enabled && d.accessibility && d.accessibility.enabled && e && e.element && a && (this.exportButtonProxy = b.addProxyElement("chartMenu", { click: a }, { "aria-label": c.langFormat("accessibility.exporting.menuButtonLabel", { chart: c, chartTitle: g(c) }), "aria-expanded": !1, title: c.options.lang.contextButtonTitle || null }))
            }; d.prototype.createProxyGroup = function () { this.chart && this.proxyProvider && this.proxyProvider.addGroup("chartMenu", "div") }; d.prototype.addAccessibleContextMenuAttribs = function () {
                var c =
                    this.chart, b = c.exportDivElements; b && b.length && (b.forEach(function (b) { b && ("LI" !== b.tagName || b.children && b.children.length ? b.setAttribute("aria-hidden", "true") : b.setAttribute("tabindex", -1)) }), (b = b[0] && b[0].parentNode) && y(b, { "aria-hidden": void 0, "aria-label": c.langFormat("accessibility.exporting.chartMenuLabel", { chart: c }), role: "list" }))
            }; d.prototype.getKeyboardNavigation = function () {
                var c = this.keyCodes, b = this.chart, a = this; return new t(b, {
                    keyCodeMap: [[[c.left, c.up], function () { return a.onKbdPrevious(this) }],
                    [[c.right, c.down], function () { return a.onKbdNext(this) }], [[c.enter, c.space], function () { return a.onKbdClick(this) }]], validate: function () { return !!b.exporting && !1 !== b.options.exporting.enabled && !1 !== b.options.exporting.accessibility.enabled }, init: function () { var c = a.exportButtonProxy, d = a.chart.exportingGroup; c && d && b.setFocusToElement(d, c.buttonElement) }, terminate: function () { b.hideExportMenu() }
                })
            }; d.prototype.onKbdPrevious = function (c) {
                var b = this.chart, a = b.options.accessibility; c = c.response; for (var d = b.highlightedExportItemIx ||
                    0; d--;)if (b.highlightExportItem(d)) return c.success; return a.keyboardNavigation.wrapAround ? (b.highlightLastExportItem(), c.success) : c.prev
            }; d.prototype.onKbdNext = function (c) { var b = this.chart, a = b.options.accessibility; c = c.response; for (var d = (b.highlightedExportItemIx || 0) + 1; d < b.exportDivElements.length; ++d)if (b.highlightExportItem(d)) return c.success; return a.keyboardNavigation.wrapAround ? (b.highlightExportItem(0), c.success) : c.next }; d.prototype.onKbdClick = function (c) {
                var b = this.chart, a = b.exportDivElements[b.highlightedExportItemIx],
                d = (b.exportSVGElements && b.exportSVGElements[0]).element; b.openMenu ? this.fakeClickEvent(a) : (this.fakeClickEvent(d), b.highlightExportItem(0)); return c.response.success
            }; return d
        }(w); (function (d) {
            function e() { var b = this.exportSVGElements && this.exportSVGElements[0]; if (b && (b = b.element, b.onclick)) b.onclick(m("click")) } function c() {
                var b = this.exportDivElements; b && this.exportContextMenu && this.openMenu && (b.forEach(function (b) { if (b && "highcharts-menu-item" === b.className && b.onmouseout) b.onmouseout(m("mouseout")) }),
                    this.highlightedExportItemIx = 0, this.exportContextMenu.hideMenu(), this.container.focus())
            } function b(b) {
                var c = this.exportDivElements && this.exportDivElements[b], a = this.exportDivElements && this.exportDivElements[this.highlightedExportItemIx]; if (c && "LI" === c.tagName && (!c.children || !c.children.length)) {
                    var d = !!(this.renderTo.getElementsByTagName("g")[0] || {}).focus; c.focus && d && c.focus(); if (a && a.onmouseout) a.onmouseout(m("mouseout")); if (c.onmouseover) c.onmouseover(m("mouseover")); this.highlightedExportItemIx =
                        b; return !0
                } return !1
            } function f() { if (this.exportDivElements) for (var b = this.exportDivElements.length; b--;)if (this.highlightExportItem(b)) return !0; return !1 } var q = []; d.compose = function (d) { -1 === q.indexOf(d) && (q.push(d), d = a.prototype, d.hideExportMenu = c, d.highlightExportItem = b, d.highlightLastExportItem = f, d.showExportMenu = e) }
        })(h || (h = {})); return h
    }); x(a, "Accessibility/KeyboardNavigation.js", [a["Core/Globals.js"], a["Accessibility/Components/MenuComponent.js"], a["Core/Utilities.js"], a["Accessibility/Utils/EventProvider.js"],
    a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, w, t, n) {
        var k = a.doc, u = a.win, y = w.addEvent, g = w.fireEvent, r = n.getElement; w = function () {
            function a(a, e) { this.components = this.chart = void 0; this.currentModuleIx = NaN; this.exitAnchor = this.eventProvider = void 0; this.modules = []; this.tabindexContainer = void 0; this.init(a, e) } a.prototype.init = function (a, e) {
                var c = this, b = this.eventProvider = new t; this.chart = a; this.components = e; this.modules = []; this.currentModuleIx = 0; this.update(); b.addEvent(this.tabindexContainer,
                    "keydown", function (b) { return c.onKeydown(b) }); b.addEvent(this.tabindexContainer, "focus", function (b) { return c.onFocus(b) });["mouseup", "touchend"].forEach(function (a) { return b.addEvent(k, a, function () { return c.onMouseUp() }) });["mousedown", "touchstart"].forEach(function (d) { return b.addEvent(a.renderTo, d, function () { c.isClickingChart = !0 }) }); b.addEvent(a.renderTo, "mouseover", function () { c.pointerIsOverChart = !0 }); b.addEvent(a.renderTo, "mouseout", function () { c.pointerIsOverChart = !1 })
            }; a.prototype.update = function (a) {
                var d =
                    this.chart.options.accessibility; d = d && d.keyboardNavigation; var c = this.components; this.updateContainerTabindex(); d && d.enabled && a && a.length ? (this.modules = a.reduce(function (b, a) { a = c[a].getKeyboardNavigation(); return b.concat(a) }, []), this.updateExitAnchor()) : (this.modules = [], this.currentModuleIx = 0, this.removeExitAnchor())
            }; a.prototype.updateExitAnchor = function () { var a = r("highcharts-end-of-chart-marker-" + this.chart.index); this.removeExitAnchor(); a ? (this.makeElementAnExitAnchor(a), this.exitAnchor = a) : this.createExitAnchor() };
            a.prototype.move = function (a) { var d = this.modules && this.modules[this.currentModuleIx]; d && d.terminate && d.terminate(a); this.chart.focusElement && this.chart.focusElement.removeFocusBorder(); this.currentModuleIx += a; if (d = this.modules && this.modules[this.currentModuleIx]) { if (d.validate && !d.validate()) return this.move(a); if (d.init) return d.init(a), !0 } this.currentModuleIx = 0; this.exiting = !0; 0 < a ? this.exitAnchor.focus() : this.tabindexContainer.focus(); return !1 }; a.prototype.onFocus = function (a) {
                var d = this.chart; a =
                    a.relatedTarget && d.container.contains(a.relatedTarget); this.exiting || this.tabbingInBackwards || this.isClickingChart || a || (a = this.getFirstValidModuleIx(), null !== a && (this.currentModuleIx = a, this.modules[a].init(1))); this.exiting = !1
            }; a.prototype.onMouseUp = function () {
                delete this.isClickingChart; if (!this.keyboardReset) {
                    var a = this.chart; if (!this.pointerIsOverChart) { var e = this.modules && this.modules[this.currentModuleIx || 0]; e && e.terminate && e.terminate(); this.currentModuleIx = 0 } a.focusElement && (a.focusElement.removeFocusBorder(),
                        delete a.focusElement); this.keyboardReset = !0
                }
            }; a.prototype.onKeydown = function (a) { a = a || u.event; var d = this.modules && this.modules.length && this.modules[this.currentModuleIx], c; this.exiting = this.keyboardReset = !1; if (d) { var b = d.run(a); b === d.response.success ? c = !0 : b === d.response.prev ? c = this.move(-1) : b === d.response.next && (c = this.move(1)); c && (a.preventDefault(), a.stopPropagation()) } }; a.prototype.updateContainerTabindex = function () {
                var a = this.chart.options.accessibility; a = a && a.keyboardNavigation; a = !(a && !1 === a.enabled);
                var e = this.chart, c = e.container; e.renderTo.hasAttribute("tabindex") && (c.removeAttribute("tabindex"), c = e.renderTo); this.tabindexContainer = c; var b = c.getAttribute("tabindex"); a && !b ? c.setAttribute("tabindex", "0") : a || e.container.removeAttribute("tabindex")
            }; a.prototype.createExitAnchor = function () { var a = this.chart, e = this.exitAnchor = k.createElement("div"); a.renderTo.appendChild(e); this.makeElementAnExitAnchor(e) }; a.prototype.makeElementAnExitAnchor = function (a) {
                var d = this.tabindexContainer.getAttribute("tabindex") ||
                    0; a.setAttribute("class", "highcharts-exit-anchor"); a.setAttribute("tabindex", d); a.setAttribute("aria-hidden", !1); this.addExitAnchorEventsToEl(a)
            }; a.prototype.removeExitAnchor = function () { this.exitAnchor && this.exitAnchor.parentNode && (this.exitAnchor.parentNode.removeChild(this.exitAnchor), delete this.exitAnchor) }; a.prototype.addExitAnchorEventsToEl = function (a) {
                var d = this.chart, c = this; this.eventProvider.addEvent(a, "focus", function (b) {
                    b = b || u.event; var a = !(b.relatedTarget && d.container.contains(b.relatedTarget) ||
                        c.exiting); d.focusElement && delete d.focusElement; a ? (c.tabbingInBackwards = !0, c.tabindexContainer.focus(), delete c.tabbingInBackwards, b.preventDefault(), c.modules && c.modules.length && (c.currentModuleIx = c.modules.length - 1, (b = c.modules[c.currentModuleIx]) && b.validate && !b.validate() ? c.move(-1) : b && b.init(-1))) : c.exiting = !1
                })
            }; a.prototype.getFirstValidModuleIx = function () { for (var a = this.modules.length, e = 0; e < a; ++e) { var c = this.modules[e]; if (!c.validate || c.validate()) return e } return null }; a.prototype.destroy =
                function () { this.removeExitAnchor(); this.eventProvider.removeAddedEvents(); this.chart.container.removeAttribute("tabindex") }; return a
        }(); (function (r) {
            function d() { var b = this; g(this, "dismissPopupContent", {}, function () { b.tooltip && b.tooltip.hide(0); b.hideExportMenu() }) } function e(b) { 27 === (b.which || b.keyCode) && a.charts && a.charts.forEach(function (b) { b && b.dismissPopupContent && b.dismissPopupContent() }) } var c = []; r.compose = function (b) {
                h.compose(b); -1 === c.indexOf(b) && (c.push(b), b.prototype.dismissPopupContent =
                    d); -1 === c.indexOf(k) && (c.push(k), y(k, "keydown", e)); return b
            }
        })(w || (w = {})); return w
    }); x(a, "Accessibility/Components/LegendComponent.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/Globals.js"], a["Core/Legend/Legend.js"], a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, w, t, n, k, E, y) {
        function g(b) {
            var a = b.legend && b.legend.allItems,
            c = b.options.legend.accessibility || {}; return !(!a || !a.length || b.colorAxis && b.colorAxis.length || !1 === c.enabled)
        } function r(a, c) { c.setState(a ? "hover" : "", !0);["legendGroup", "legendItem", "legendSymbol"].forEach(function (d) { (d = (d = c[d]) && d.element || d) && b(d, a ? "mouseover" : "mouseout") }) } var m = this && this.__extends || function () {
            var b = function (a, c) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, a) { b.__proto__ = a } || function (b, a) { for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]) }; return b(a, c) };
            return function (a, c) { function d() { this.constructor = a } b(a, c); a.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d) }
        }(), d = a.animObject, e = h.doc, c = t.addEvent, b = t.fireEvent, f = t.isNumber, q = t.pick, z = t.syncTimeout, u = E.getChartTitle, x = y.stripHTMLTagsFromString, H = y.addClass, A = y.removeClass; a = function (b) {
            function a() { var a = null !== b && b.apply(this, arguments) || this; a.highlightedLegendItemIx = NaN; a.proxyGroup = null; return a } m(a, b); a.prototype.init = function () {
                var b = this; this.recreateProxies(); this.addEvent(w,
                    "afterScroll", function () { this.chart === b.chart && (b.proxyProvider.updateGroupProxyElementPositions("legend"), b.updateLegendItemProxyVisibility(), -1 < b.highlightedLegendItemIx && this.chart.highlightLegendItem(b.highlightedLegendItemIx)) }); this.addEvent(w, "afterPositionItem", function (a) { this.chart === b.chart && this.chart.renderer && b.updateProxyPositionForItem(a.item) }); this.addEvent(w, "afterRender", function () {
                        this.chart === b.chart && this.chart.renderer && b.recreateProxies() && z(function () { return b.proxyProvider.updateGroupProxyElementPositions("legend") },
                            d(q(this.chart.renderer.globalAnimation, !0)).duration)
                    })
            }; a.prototype.updateLegendItemProxyVisibility = function () {
                var b = this.chart, a = b.legend, c = a.currentPage || 1, d = a.clipHeight || 0; (a.allItems || []).forEach(function (e) {
                    if (e.a11yProxyElement) {
                        var v = e.a11yProxyElement.element, f = !1; if (a.pages && a.pages.length) { f = e.pageIx || 0; var l = e._legendItemPos ? e._legendItemPos[1] : 0; e = e.legendItem ? Math.round(e.legendItem.getBBox().height) : 0; f = l + e - a.pages[f] > d || f !== c - 1 } f ? b.styledMode ? H(v, "highcharts-a11y-invisible") : v.style.visibility =
                            "hidden" : (A(v, "highcharts-a11y-invisible"), v.style.visibility = "")
                    }
                })
            }; a.prototype.onChartRender = function () { g(this.chart) || this.removeProxies() }; a.prototype.highlightAdjacentLegendPage = function (b) { var a = this.chart, c = a.legend; b = (c.currentPage || 1) + b; var d = c.pages || []; if (0 < b && b <= d.length) { d = c.allItems.length; for (var e = 0; e < d; ++e)if (c.allItems[e].pageIx + 1 === b) { a.highlightLegendItem(e) && (this.highlightedLegendItemIx = e); break } } }; a.prototype.updateProxyPositionForItem = function (b) { b.a11yProxyElement && b.a11yProxyElement.refreshPosition() };
            a.prototype.recreateProxies = function () { var b = e.activeElement, a = this.proxyGroup; b = b && a && a.contains(b); this.removeProxies(); return g(this.chart) ? (this.addLegendProxyGroup(), this.proxyLegendItems(), this.updateLegendItemProxyVisibility(), this.updateLegendTitle(), b && this.chart.highlightLegendItem(this.highlightedLegendItemIx), !0) : !1 }; a.prototype.removeProxies = function () { this.proxyProvider.removeGroup("legend") }; a.prototype.updateLegendTitle = function () {
                var b = this.chart, a = x((b.legend && b.legend.options.title &&
                    b.legend.options.title.text || "").replace(/<br ?\/?>/g, " ")); b = b.langFormat("accessibility.legend.legendLabel" + (a ? "" : "NoTitle"), { chart: b, legendTitle: a, chartTitle: u(b) }); this.proxyProvider.updateGroupAttrs("legend", { "aria-label": b })
            }; a.prototype.addLegendProxyGroup = function () { this.proxyGroup = this.proxyProvider.addGroup("legend", "ul", { "aria-label": "_placeholder_", role: "all" === this.chart.options.accessibility.landmarkVerbosity ? "region" : null }) }; a.prototype.proxyLegendItems = function () {
                var b = this; (this.chart.legend &&
                    this.chart.legend.allItems || []).forEach(function (a) { a.legendItem && a.legendItem.element && b.proxyLegendItem(a) })
            }; a.prototype.proxyLegendItem = function (b) { if (b.legendItem && b.legendGroup) { var a = this.chart.langFormat("accessibility.legend.legendItem", { chart: this.chart, itemName: x(b.name), item: b }); b.a11yProxyElement = this.proxyProvider.addProxyElement("legend", { click: b.legendItem, visual: (b.legendGroup.div ? b.legendItem : b.legendGroup).element }, { tabindex: -1, "aria-pressed": b.visible, "aria-label": a }) } }; a.prototype.getKeyboardNavigation =
                function () {
                    var b = this.keyCodes, a = this, c = this.chart; return new k(c, {
                        keyCodeMap: [[[b.left, b.right, b.up, b.down], function (b) { return a.onKbdArrowKey(this, b) }], [[b.enter, b.space], function (c) { return h.isFirefox && c === b.space ? this.response.success : a.onKbdClick(this) }], [[b.pageDown, b.pageUp], function (c) { a.highlightAdjacentLegendPage(c === b.pageDown ? 1 : -1); return this.response.success }]], validate: function () { return a.shouldHaveLegendNavigation() }, init: function () {
                            c.highlightLegendItem(0); a.highlightedLegendItemIx =
                                0
                        }, terminate: function () { a.highlightedLegendItemIx = -1; c.legend.allItems.forEach(function (b) { return r(!1, b) }) }
                    })
                }; a.prototype.onKbdArrowKey = function (b, a) { var c = this.keyCodes, d = b.response, e = this.chart, v = e.options.accessibility, f = e.legend.allItems.length; a = a === c.left || a === c.up ? -1 : 1; if (e.highlightLegendItem(this.highlightedLegendItemIx + a)) return this.highlightedLegendItemIx += a, d.success; 1 < f && v.keyboardNavigation.wrapAround && b.init(a); return d.success }; a.prototype.onKbdClick = function (b) {
                    var a = this.chart.legend.allItems[this.highlightedLegendItemIx];
                    a && a.a11yProxyElement && a.a11yProxyElement.click(); return b.response.success
                }; a.prototype.shouldHaveLegendNavigation = function () { var b = this.chart, a = b.colorAxis && b.colorAxis.length, c = (b.options.legend || {}).accessibility || {}; return !!(b.legend && b.legend.allItems && b.legend.display && !a && c.enabled && c.keyboardNavigation && c.keyboardNavigation.enabled) }; return a
        }(n); (function (b) {
            function a(b) {
                var a = this.legend.allItems, c = this.accessibility && this.accessibility.components.legend.highlightedLegendItemIx, d = a[b];
                return d ? (f(c) && a[c] && r(!1, a[c]), a = this.legend, b = a.allItems[b].pageIx, c = a.currentPage, "undefined" !== typeof b && b + 1 !== c && a.scroll(1 + b - c), b = d.legendItem, a = d.a11yProxyElement && d.a11yProxyElement.buttonElement, b && b.element && a && this.setFocusToElement(b, a), r(!0, d), !0) : !1
            } function d(b) { var a = b.item; this.chart.options.accessibility.enabled && a && a.a11yProxyElement && a.a11yProxyElement.buttonElement.setAttribute("aria-pressed", b.visible ? "true" : "false") } var e = []; b.compose = function (b, f) {
                -1 === e.indexOf(b) && (e.push(b),
                    b.prototype.highlightLegendItem = a); -1 === e.indexOf(f) && (e.push(f), c(f, "afterColorizeItem", d))
            }
        })(a || (a = {})); return a
    }); x(a, "Accessibility/Components/SeriesComponent/SeriesDescriber.js", [a["Accessibility/Components/AnnotationsA11y.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Core/FormatUtilities.js"], a["Accessibility/Utils/HTMLUtilities.js"], a["Core/Utilities.js"]], function (a, h, w, t, n) {
        function k(b) {
            var a = b.index; return b.series && b.series.data && l(a) ? D(b.series.data, function (b) {
                return !!(b && "undefined" !==
                    typeof b.index && b.index > a && b.graphic && b.graphic.element)
            }) || null : null
        } function u(b) { var a = b.chart.options.accessibility.series.pointDescriptionEnabledThreshold; return !!(!1 !== a && b.points && b.points.length >= a) } function y(b) { var a = b.options.accessibility || {}; return !u(b) && !a.exposeAsGroupOnly } function g(b) { var a = b.chart.options.accessibility.keyboardNavigation.seriesNavigation; return !(!b.points || !(b.points.length < a.pointNavigationEnabledThreshold || !1 === a.pointNavigationEnabledThreshold)) } function r(b,
            a) { var c = b.series, d = c.chart; b = d.options.accessibility.point || {}; var e = c.options.accessibility && c.options.accessibility.point || {}; c = c.tooltipOptions || {}; d = d.options.lang; return I(a) ? F(a, e.valueDecimals || b.valueDecimals || c.valueDecimals || -1, d.decimalPoint, d.accessibility.thousandsSep || d.thousandsSep) : a } function m(b) { var a = (b.options.accessibility || {}).description; return a && b.chart.langFormat("accessibility.series.description", { description: a, series: b }) || "" } function d(b, a) {
                return b.chart.langFormat("accessibility.series." +
                    a + "Description", { name: z(b[a]), series: b })
            } function e(b, a, c) { var d = a || "", e = c || ""; return b.series.pointArrayMap.reduce(function (a, c) { a += a.length ? ", " : ""; var f = r(b, p(b[c], b.options[c])); return a + (c + ": " + d + f + e) }, "") } function c(b) {
                var a = b.series, c = 1 < a.chart.series.length || a.options.name, d = b.series; var f = d.chart; var v = d.options.accessibility; v = v && v.point && v.point.valueDescriptionFormat || f.options.accessibility.point.valueDescriptionFormat; d = p(d.xAxis && d.xAxis.options.accessibility && d.xAxis.options.accessibility.enabled,
                    !f.angular); if (d) {
                        var g = b.series; var h = g.chart; var z = g.options.accessibility && g.options.accessibility.point || {}, m = h.options.accessibility.point || {}; (g = g.xAxis && g.xAxis.dateTime) ? (g = g.getXDateFormat(b.x || 0, h.options.tooltip.dateTimeLabelFormats), z = z.dateFormatter && z.dateFormatter(b) || m.dateFormatter && m.dateFormatter(b) || z.dateFormat || m.dateFormat || g, h = h.time.dateFormat(z, b.x || 0, void 0)) : h = void 0; z = (b.series.xAxis || {}).categories && l(b.category) && ("" + b.category).replace("<br/>", " "); m = b.id && 0 > b.id.indexOf("highcharts-");
                        g = "x, " + b.x; h = b.name || h || z || (m ? b.id : g)
                    } else h = ""; z = l(b.index) ? b.index + 1 : ""; m = b.series; var k = m.chart.options.accessibility.point || {}, u = m.chart.options.accessibility && m.chart.options.accessibility.point || {}, B = m.tooltipOptions || {}; g = u.valuePrefix || k.valuePrefix || B.valuePrefix || ""; k = u.valueSuffix || k.valueSuffix || B.valueSuffix || ""; u = r(b, b["undefined" !== typeof b.value ? "value" : "y"]); m = b.isNull ? m.chart.langFormat("accessibility.series.nullPointValue", { point: b }) : m.pointArrayMap ? e(b, g, k) : g + u + k; f = A(v, {
                        point: b,
                        index: z, xDescription: h, value: m, separator: d ? ", " : ""
                    }, f); v = (v = b.options && b.options.accessibility && b.options.accessibility.description) ? " " + v : ""; a = c ? " " + a.name + "." : ""; c = b.series.chart; d = q(b); h = { point: b, annotations: d }; c = d.length ? c.langFormat("accessibility.series.pointAnnotationsDescription", h) : ""; b.accessibility = b.accessibility || {}; b.accessibility.valueDescription = f; return f + v + a + (c ? " " + c : "")
            } function b(b) {
                var a = y(b), d = g(b), e = b.chart.options.accessibility.point.describeNull; (a || d) && b.points.forEach(function (d) {
                    var f;
                    if (!(f = d.graphic && d.graphic.element)) {
                        var l = d.series; f = l && l.chart; l = l && l.is("sunburst"); f = f && f.options.accessibility.point.describeNull; if (f = d.isNull && !l && f) {
                            l = d.series; var v = k(d); l = (f = v && v.graphic) ? f.parentGroup : l.graph || l.group; v = v ? { x: p(d.plotX, v.plotX, 0), y: p(d.plotY, v.plotY, 0) } : { x: p(d.plotX, 0), y: p(d.plotY, 0) }; v = d.series.chart.renderer.rect(v.x, v.y, 1, 1); v.attr({ "class": "highcharts-a11y-dummy-point", fill: "none", opacity: 0, "fill-opacity": 0, "stroke-opacity": 0 }); l && l.element ? (d.graphic = v, d.hasDummyGraphic =
                                !0, v.add(l), l.element.insertBefore(v.element, f ? f.element : null), f = v.element) : f = void 0
                        }
                    } l = d.options && d.options.accessibility && !1 === d.options.accessibility.enabled; f && (d.isNull && !e ? f.setAttribute("aria-hidden", !0) : (f.setAttribute("tabindex", "-1"), b.chart.styledMode || (f.style.outline = "none"), a && !l ? (v = d.series, l = v.chart.options.accessibility.point || {}, v = v.options.accessibility && v.options.accessibility.point || {}, d = C(v.descriptionFormatter && v.descriptionFormatter(d) || l.descriptionFormatter && l.descriptionFormatter(d) ||
                        c(d)), f.setAttribute("role", "img"), f.setAttribute("aria-label", d)) : f.setAttribute("aria-hidden", !0)))
                })
            } function f(b) {
                var a = b.chart, c = a.types || [], e = m(b), f = function (c) { return a[c] && 1 < a[c].length && b[c] }, l = b.index + 1, v = d(b, "xAxis"), q = d(b, "yAxis"), g = { seriesNumber: l, series: b, chart: a }; c = 1 < c.length ? "Combination" : ""; g = a.langFormat("accessibility.series.summary." + b.type + c, g) || a.langFormat("accessibility.series.summary.default" + c, g); f = (f("yAxis") ? " " + q + "." : "") + (f("xAxis") ? " " + v + "." : ""); return A(a.options.accessibility.series.descriptionFormat ||
                    "", { seriesDescription: g, authorDescription: e ? " " + e : "", axisDescription: f, series: b, chart: a, seriesNumber: l }, void 0)
            } var q = a.getPointAnnotationTexts, z = h.getAxisDescription, M = h.getSeriesFirstPointElement, x = h.getSeriesA11yElement, H = h.unhideChartElementFromAT, A = w.format, F = w.numberFormat, B = t.reverseChildNodes, C = t.stripHTMLTagsFromString, D = n.find, I = n.isNumber, p = n.pick, l = n.defined; return {
                defaultPointDescriptionFormatter: c, defaultSeriesDescriptionFormatter: f, describeSeries: function (a) {
                    var c = a.chart, d = M(a), e =
                        x(a), l = c.is3d && c.is3d(); if (e) {
                            e.lastChild !== d || l || B(e); b(a); H(c, e); l = a.chart; c = l.options.chart; d = 1 < l.series.length; l = l.options.accessibility.series.describeSingleSeries; var v = (a.options.accessibility || {}).exposeAsGroupOnly; c.options3d && c.options3d.enabled && d || !(d || l || v || u(a)) ? e.removeAttribute("aria-label") : (c = a.chart.options.accessibility, d = c.landmarkVerbosity, (a.options.accessibility || {}).exposeAsGroupOnly ? e.setAttribute("role", "img") : "all" === d ? e.setAttribute("role", "region") : e.setAttribute("role",
                                "group"), e.setAttribute("tabindex", "-1"), a.chart.styledMode || (e.style.outline = "none"), e.setAttribute("aria-label", C(c.series.descriptionFormatter && c.series.descriptionFormatter(a) || f(a))))
                        }
                }
            }
    }); x(a, "Accessibility/Components/SeriesComponent/NewDataAnnouncer.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/Utils/Announcer.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/EventProvider.js"], a["Accessibility/Components/SeriesComponent/SeriesDescriber.js"]], function (a,
        h, w, t, n, k) {
            function u(a) { var b = a.series.data.filter(function (b) { return a.x === b.x && a.y === b.y }); return 1 === b.length ? b[0] : a } function y(a, b) { var c = (a || []).concat(b || []).reduce(function (b, a) { b[a.name + a.index] = a; return b }, {}); return Object.keys(c).map(function (b) { return c[b] }) } var g = h.addEvent, r = h.defined, m = t.getChartTitle, d = k.defaultPointDescriptionFormatter, e = k.defaultSeriesDescriptionFormatter; h = function () {
                function c(b) {
                    this.announcer = void 0; this.dirty = { allSeries: {} }; this.eventProvider = void 0; this.lastAnnouncementTime =
                        0; this.chart = b
                } c.prototype.init = function () { var b = this.chart, a = b.options.accessibility.announceNewData.interruptUser ? "assertive" : "polite"; this.lastAnnouncementTime = 0; this.dirty = { allSeries: {} }; this.eventProvider = new n; this.announcer = new w(b, a); this.addEventListeners() }; c.prototype.destroy = function () { this.eventProvider.removeAddedEvents(); this.announcer.destroy() }; c.prototype.addEventListeners = function () {
                    var b = this, a = this.chart, c = this.eventProvider; c.addEvent(a, "afterApplyDrilldown", function () {
                        b.lastAnnouncementTime =
                        0
                    }); c.addEvent(a, "afterAddSeries", function (a) { b.onSeriesAdded(a.series) }); c.addEvent(a, "redraw", function () { b.announceDirtyData() })
                }; c.prototype.onSeriesAdded = function (b) { this.chart.options.accessibility.announceNewData.enabled && (this.dirty.hasDirty = !0, this.dirty.allSeries[b.name + b.index] = b, this.dirty.newSeries = r(this.dirty.newSeries) ? void 0 : b) }; c.prototype.announceDirtyData = function () {
                    var b = this; if (this.chart.options.accessibility.announceNewData && this.dirty.hasDirty) {
                        var a = this.dirty.newPoint; a &&
                            (a = u(a)); this.queueAnnouncement(Object.keys(this.dirty.allSeries).map(function (a) { return b.dirty.allSeries[a] }), this.dirty.newSeries, a); this.dirty = { allSeries: {} }
                    }
                }; c.prototype.queueAnnouncement = function (b, a, c) {
                    var d = this, e = this.chart.options.accessibility.announceNewData; if (e.enabled) {
                        var f = +new Date; e = Math.max(0, e.minAnnounceInterval - (f - this.lastAnnouncementTime)); b = y(this.queuedAnnouncement && this.queuedAnnouncement.series, b); if (a = this.buildAnnouncementMessage(b, a, c)) this.queuedAnnouncement && clearTimeout(this.queuedAnnouncementTimer),
                            this.queuedAnnouncement = { time: f, message: a, series: b }, this.queuedAnnouncementTimer = setTimeout(function () { d && d.announcer && (d.lastAnnouncementTime = +new Date, d.announcer.announce(d.queuedAnnouncement.message), delete d.queuedAnnouncement, delete d.queuedAnnouncementTimer) }, e)
                    }
                }; c.prototype.buildAnnouncementMessage = function (b, c, g) {
                    var f = this.chart, q = f.options.accessibility.announceNewData; if (q.announcementFormatter && (b = q.announcementFormatter(b, c, g), !1 !== b)) return b.length ? b : null; b = a.charts && 1 < a.charts.length ?
                        "Multiple" : "Single"; b = c ? "newSeriesAnnounce" + b : g ? "newPointAnnounce" + b : "newDataAnnounce"; q = m(f); return f.langFormat("accessibility.announceNewData." + b, { chartTitle: q, seriesDesc: c ? e(c) : null, pointDesc: g ? d(g) : null, point: g, series: c })
                }; return c
            }(); (function (a) {
                function b(b) { var a = this.chart, c = this.newDataAnnouncer; c && c.chart === a && a.options.accessibility.announceNewData.enabled && (c.dirty.newPoint = r(c.dirty.newPoint) ? void 0 : b.point) } function c() {
                    var b = this.chart, a = this.newDataAnnouncer; a && a.chart === b && b.options.accessibility.announceNewData.enabled &&
                        (a.dirty.hasDirty = !0, a.dirty.allSeries[this.name + this.index] = this)
                } a.composedClasses = []; a.compose = function (d) { -1 === a.composedClasses.indexOf(d) && (a.composedClasses.push(d), g(d, "addPoint", b), g(d, "updatedData", c)) }
            })(h || (h = {})); return h
    }); x(a, "Accessibility/ProxyElement.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/Utils/EventProvider.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, w, t, n) {
        var k = a.doc, u = h.attr, y = h.css, g = h.merge,
        r = t.fireEventOnWrappedOrUnwrappedElement, m = n.cloneMouseEvent, d = n.cloneTouchEvent, e = n.getFakeMouseEvent, c = n.removeElement; return function () {
            function b(b, a, c, d) { this.chart = b; this.target = a; this.groupType = c; c = "ul" === c; this.eventProvider = new w; var e = c ? k.createElement("li") : null, f = this.buttonElement = k.createElement("button"); b.styledMode || this.hideButtonVisually(f); e ? (c && !b.styledMode && (e.style.listStyle = "none"), e.appendChild(f), this.element = e) : this.element = f; this.updateTarget(a, d) } b.prototype.click = function () {
                var b =
                    this.getTargetPosition(); b.x += b.width / 2; b.y += b.height / 2; b = e("click", b); r(this.target.click, b)
            }; b.prototype.updateTarget = function (b, a) { this.target = b; this.updateCSSClassName(); var c = a || {}; Object.keys(c).forEach(function (b) { null === c[b] && delete c[b] }); u(this.buttonElement, g({ "aria-label": this.getTargetAttr(b.click, "aria-label") }, c)); this.eventProvider.removeAddedEvents(); this.addProxyEventsToButton(this.buttonElement, b.click); this.refreshPosition() }; b.prototype.refreshPosition = function () {
                var b = this.getTargetPosition();
                y(this.buttonElement, { width: (b.width || 1) + "px", height: (b.height || 1) + "px", left: (Math.round(b.x) || 0) + "px", top: (Math.round(b.y) || 0) + "px" })
            }; b.prototype.remove = function () { this.eventProvider.removeAddedEvents(); c(this.element) }; b.prototype.updateCSSClassName = function () {
                var b = this.chart.legend; b = b.group && b.group.div; b = -1 < (b && b.className || "").indexOf("highcharts-no-tooltip"); var a = -1 < (this.getTargetAttr(this.target.click, "class") || "").indexOf("highcharts-no-tooltip"); this.buttonElement.className = b || a ? "highcharts-a11y-proxy-button highcharts-no-tooltip" :
                    "highcharts-a11y-proxy-button"
            }; b.prototype.addProxyEventsToButton = function (b, a) { var c = this; "click touchstart touchend touchcancel touchmove mouseover mouseenter mouseleave mouseout".split(" ").forEach(function (e) { var f = 0 === e.indexOf("touch"); c.eventProvider.addEvent(b, e, function (b) { var c = f ? d(b) : m(b); a && r(a, c); b.stopPropagation(); f || b.preventDefault() }, { passive: !1 }) }) }; b.prototype.hideButtonVisually = function (b) {
                y(b, {
                    borderWidth: 0, backgroundColor: "transparent", cursor: "pointer", outline: "none", opacity: .001,
                    filter: "alpha(opacity=1)", zIndex: 999, overflow: "hidden", padding: 0, margin: 0, display: "block", position: "absolute", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)"
                })
            }; b.prototype.getTargetPosition = function () {
                var b = this.target.click; b = b.element ? b.element : b; b = this.target.visual || b; if (this.chart.renderTo && b && b.getBoundingClientRect) {
                    b = b.getBoundingClientRect(); var a = this.chart.pointer.getChartPosition(); return {
                        x: (b.left - a.left) / a.scaleX, y: (b.top - a.top) / a.scaleY, width: b.right / a.scaleX - b.left /
                            a.scaleX, height: b.bottom / a.scaleY - b.top / a.scaleY
                    }
                } return { x: 0, y: 0, width: 1, height: 1 }
            }; b.prototype.getTargetAttr = function (b, a) { return b.element ? b.element.getAttribute(a) : b.getAttribute(a) }; return b
        }()
    }); x(a, "Accessibility/ProxyProvider.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/DOMElementProvider.js"], a["Accessibility/Utils/HTMLUtilities.js"], a["Accessibility/ProxyElement.js"]], function (a, h, w, t, n, k) {
        var u = a.doc, y = h.attr, g = h.css,
        r = w.unhideChartElementFromAT, m = n.removeElement, d = n.removeChildNodes; return function () {
            function a(a) { this.chart = a; this.domElementProvider = new t; this.groups = {}; this.groupOrder = []; this.beforeChartProxyPosContainer = this.createProxyPosContainer("before"); this.afterChartProxyPosContainer = this.createProxyPosContainer("after"); this.update() } a.prototype.addProxyElement = function (a, b, d) {
                var c = this.groups[a]; if (!c) throw Error("ProxyProvider.addProxyElement: Invalid group key " + a); a = new k(this.chart, b, c.type,
                    d); c.proxyContainerElement.appendChild(a.element); c.proxyElements.push(a); return a
            }; a.prototype.addGroup = function (a, b, d) {
                var c = this.groups[a]; if (c) return c.groupElement; c = this.domElementProvider.createElement(b); if (d && d.role && "div" !== b) { var e = this.domElementProvider.createElement("div"); e.appendChild(c) } else e = c; e.className = "highcharts-a11y-proxy-group highcharts-a11y-proxy-group-" + a.replace(/\W/g, "-"); this.groups[a] = { proxyContainerElement: c, groupElement: e, type: b, proxyElements: [] }; y(e, d || {}); "ul" ===
                    b && c.setAttribute("role", "list"); this.afterChartProxyPosContainer.appendChild(e); this.updateGroupOrder(this.groupOrder); return e
            }; a.prototype.updateGroupAttrs = function (a, b) { var c = this.groups[a]; if (!c) throw Error("ProxyProvider.updateGroupAttrs: Invalid group key " + a); y(c.groupElement, b) }; a.prototype.updateGroupOrder = function (a) {
                var b = this; this.groupOrder = a.slice(); if (!this.isDOMOrderGroupOrder()) {
                    var c = a.indexOf("series"), e = -1 < c ? a.slice(0, c) : a, g = -1 < c ? a.slice(c + 1) : []; a = u.activeElement;["before", "after"].forEach(function (a) {
                        var c =
                            b["before" === a ? "beforeChartProxyPosContainer" : "afterChartProxyPosContainer"]; a = "before" === a ? e : g; d(c); a.forEach(function (a) { (a = b.groups[a]) && c.appendChild(a.groupElement) })
                    }); (this.beforeChartProxyPosContainer.contains(a) || this.afterChartProxyPosContainer.contains(a)) && a && a.focus && a.focus()
                }
            }; a.prototype.clearGroup = function (a) { var b = this.groups[a]; if (!b) throw Error("ProxyProvider.clearGroup: Invalid group key " + a); d(b.proxyContainerElement) }; a.prototype.removeGroup = function (a) {
                var b = this.groups[a];
                b && (m(b.groupElement), delete this.groups[a])
            }; a.prototype.update = function () { this.updatePosContainerPositions(); this.updateGroupOrder(this.groupOrder); this.updateProxyElementPositions() }; a.prototype.updateProxyElementPositions = function () { Object.keys(this.groups).forEach(this.updateGroupProxyElementPositions.bind(this)) }; a.prototype.updateGroupProxyElementPositions = function (a) { (a = this.groups[a]) && a.proxyElements.forEach(function (b) { return b.refreshPosition() }) }; a.prototype.destroy = function () { this.domElementProvider.destroyCreatedElements() };
            a.prototype.createProxyPosContainer = function (a) { var b = this.domElementProvider.createElement("div"); b.setAttribute("aria-hidden", "false"); b.className = "highcharts-a11y-proxy-container" + (a ? "-" + a : ""); g(b, { top: "0", left: "0" }); this.chart.styledMode || (b.style.whiteSpace = "nowrap", b.style.position = "absolute"); return b }; a.prototype.getCurrentGroupOrderInDOM = function () {
                var a = this, b = function (b) {
                    var c = []; b = b.children; for (var d = 0; d < b.length; ++d) {
                        a: {
                            var e = b[d]; for (var f = Object.keys(a.groups), g = f.length; g--;) {
                                var h =
                                    f[g], q = a.groups[h]; if (q && e === q.groupElement) { e = h; break a }
                            } e = void 0
                        } e && c.push(e)
                    } return c
                }, d = b(this.beforeChartProxyPosContainer); b = b(this.afterChartProxyPosContainer); d.push("series"); return d.concat(b)
            }; a.prototype.isDOMOrderGroupOrder = function () { var a = this, b = this.getCurrentGroupOrderInDOM(), d = this.groupOrder.filter(function (b) { return "series" === b || !!a.groups[b] }), e = b.length; if (e !== d.length) return !1; for (; e--;)if (b[e] !== d[e]) return !1; return !0 }; a.prototype.updatePosContainerPositions = function () {
                var a =
                    this.chart; if (!a.renderer.forExport) { var b = a.renderer.box; a.container.insertBefore(this.afterChartProxyPosContainer, b.nextSibling); a.container.insertBefore(this.beforeChartProxyPosContainer, b); r(this.chart, this.afterChartProxyPosContainer); r(this.chart, this.beforeChartProxyPosContainer) }
            }; return a
        }()
    }); x(a, "Extensions/RangeSelector.js", [a["Core/Axis/Axis.js"], a["Core/Chart/Chart.js"], a["Core/Globals.js"], a["Core/DefaultOptions.js"], a["Core/Renderer/SVG/SVGElement.js"], a["Core/Utilities.js"]], function (a,
        h, w, t, n, k) {
            function u(b) { if (-1 !== b.indexOf("%L")) return "text"; var a = "aAdewbBmoyY".split("").some(function (a) { return -1 !== b.indexOf("%" + a) }), c = "HkIlMS".split("").some(function (a) { return -1 !== b.indexOf("%" + a) }); return a && c ? "datetime-local" : a ? "date" : c ? "time" : "text" } var y = t.defaultOptions, g = k.addEvent, r = k.createElement, m = k.css, d = k.defined, e = k.destroyObjectProperties, c = k.discardElement, b = k.extend, f = k.find, q = k.fireEvent, z = k.isNumber, x = k.merge, G = k.objectEach, H = k.pad, A = k.pick, F = k.pInt, B = k.splat; b(y, {
                rangeSelector: {
                    allButtonsEnabled: !1,
                    buttons: void 0, buttonSpacing: 5, dropdown: "responsive", enabled: void 0, verticalAlign: "top", buttonTheme: { width: 28, height: 18, padding: 2, zIndex: 7 }, floating: !1, x: 0, y: 0, height: void 0, inputBoxBorderColor: "none", inputBoxHeight: 17, inputBoxWidth: void 0, inputDateFormat: "%b %e, %Y", inputDateParser: void 0, inputEditDateFormat: "%Y-%m-%d", inputEnabled: !0, inputPosition: { align: "right", x: 0, y: 0 }, inputSpacing: 5, selected: void 0, buttonPosition: { align: "left", x: 0, y: 0 }, inputStyle: { color: "#335cad", cursor: "pointer" }, labelStyle: { color: "#666666" }
                }
            });
        b(y.lang, { rangeSelectorZoom: "Zoom", rangeSelectorFrom: "", rangeSelectorTo: "\u2192" }); var C = function () {
            function f(b) { this.buttons = void 0; this.buttonOptions = f.prototype.defaultButtons; this.initialButtonGroupWidth = 0; this.options = void 0; this.chart = b; this.init(b) } f.prototype.clickButton = function (b, c) {
                var e = this.chart, l = this.buttonOptions[b], f = e.xAxis[0], v = e.scroller && e.scroller.getUnionExtremes() || f || {}, h = v.dataMin, p = v.dataMax, m = f && Math.round(Math.min(f.max, A(p, f.max))), r = l.type; v = l._range; var k, u = l.dataGrouping;
                if (null !== h && null !== p) {
                    e.fixedRange = v; this.setSelected(b); u && (this.forcedDataGrouping = !0, a.prototype.setDataGrouping.call(f || { chart: this.chart }, u, !1), this.frozenStates = l.preserveDataGrouping); if ("month" === r || "year" === r) if (f) { r = { range: l, max: m, chart: e, dataMin: h, dataMax: p }; var n = f.minFromRange.call(r); z(r.newMax) && (m = r.newMax) } else v = l; else if (v) n = Math.max(m - v, h), m = Math.min(n + v, p); else if ("ytd" === r) if (f) "undefined" === typeof p && (h = Number.MAX_VALUE, p = Number.MIN_VALUE, e.series.forEach(function (b) {
                        b = b.xData;
                        h = Math.min(b[0], h); p = Math.max(b[b.length - 1], p)
                    }), c = !1), m = this.getYTDExtremes(p, h, e.time.useUTC), n = k = m.min, m = m.max; else { this.deferredYTDClick = b; return } else "all" === r && f && (e.navigator && e.navigator.baseSeries[0] && (e.navigator.baseSeries[0].xAxis.options.range = void 0), n = h, m = p); d(n) && (n += l._offsetMin); d(m) && (m += l._offsetMax); this.dropdown && (this.dropdown.selectedIndex = b + 1); if (f) f.setExtremes(n, m, A(c, !0), void 0, { trigger: "rangeSelectorButton", rangeSelectorButton: l }); else {
                        var t = B(e.options.xAxis)[0]; var w =
                            t.range; t.range = v; var F = t.min; t.min = k; g(e, "load", function () { t.range = w; t.min = F })
                    } q(this, "afterBtnClick")
                }
            }; f.prototype.setSelected = function (b) { this.selected = this.options.selected = b }; f.prototype.init = function (b) {
                var a = this, c = b.options.rangeSelector, d = c.buttons || a.defaultButtons.slice(), e = c.selected, f = function () { var b = a.minInput, c = a.maxInput; b && b.blur && q(b, "blur"); c && c.blur && q(c, "blur") }; a.chart = b; a.options = c; a.buttons = []; a.buttonOptions = d; this.eventsToUnbind = []; this.eventsToUnbind.push(g(b.container,
                    "mousedown", f)); this.eventsToUnbind.push(g(b, "resize", f)); d.forEach(a.computeButtonRange); "undefined" !== typeof e && d[e] && this.clickButton(e, !1); this.eventsToUnbind.push(g(b, "load", function () { b.xAxis && b.xAxis[0] && g(b.xAxis[0], "setExtremes", function (c) { this.max - this.min !== b.fixedRange && "rangeSelectorButton" !== c.trigger && "updatedData" !== c.trigger && a.forcedDataGrouping && !a.frozenStates && this.setDataGrouping(!1, !1) }) }))
            }; f.prototype.updateButtonStates = function () {
                var b = this, a = this.chart, c = this.dropdown,
                d = a.xAxis[0], e = Math.round(d.max - d.min), f = !d.hasVisibleSeries, g = a.scroller && a.scroller.getUnionExtremes() || d, h = g.dataMin, p = g.dataMax; a = b.getYTDExtremes(p, h, a.time.useUTC); var m = a.min, q = a.max, r = b.selected, k = z(r), u = b.options.allButtonsEnabled, n = b.buttons; b.buttonOptions.forEach(function (a, l) {
                    var v = a._range, g = a.type, J = a.count || 1, L = n[l], K = 0, N = a._offsetMax - a._offsetMin; a = l === r; var B = v > p - h, t = v < d.minRange, z = !1, A = !1; v = v === e; ("month" === g || "year" === g) && e + 36E5 >= 864E5 * { month: 28, year: 365 }[g] * J - N && e - 36E5 <= 864E5 *
                        { month: 31, year: 366 }[g] * J + N ? v = !0 : "ytd" === g ? (v = q - m + N === e, z = !a) : "all" === g && (v = d.max - d.min >= p - h, A = !a && k && v); g = !u && (B || t || A || f); J = a && v || v && !k && !z || a && b.frozenStates; g ? K = 3 : J && (k = !0, K = 2); L.state !== K && (L.setState(K), c && (c.options[l + 1].disabled = g, 2 === K && (c.selectedIndex = l + 1)), 0 === K && r === l && b.setSelected())
                })
            }; f.prototype.computeButtonRange = function (b) {
                var a = b.type, c = b.count || 1, d = { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5 }; if (d[a]) b._range = d[a] * c; else if ("month" === a || "year" === a) b._range =
                    864E5 * { month: 30, year: 365 }[a] * c; b._offsetMin = A(b.offsetMin, 0); b._offsetMax = A(b.offsetMax, 0); b._range += b._offsetMax - b._offsetMin
            }; f.prototype.getInputValue = function (b) { b = "min" === b ? this.minInput : this.maxInput; var a = this.chart.options.rangeSelector, c = this.chart.time; return b ? ("text" === b.type && a.inputDateParser || this.defaultInputDateParser)(b.value, c.useUTC, c) : 0 }; f.prototype.setInputValue = function (b, a) {
                var c = this.options, e = this.chart.time, f = "min" === b ? this.minInput : this.maxInput; b = "min" === b ? this.minDateBox :
                    this.maxDateBox; if (f) { var l = f.getAttribute("data-hc-time"); l = d(l) ? Number(l) : void 0; d(a) && (d(l) && f.setAttribute("data-hc-time-previous", l), f.setAttribute("data-hc-time", a), l = a); f.value = e.dateFormat(this.inputTypeFormats[f.type] || c.inputEditDateFormat, l); b && b.attr({ text: e.dateFormat(c.inputDateFormat, l) }) }
            }; f.prototype.setInputExtremes = function (b, a, c) {
                if (b = "min" === b ? this.minInput : this.maxInput) {
                    var d = this.inputTypeFormats[b.type], e = this.chart.time; d && (a = e.dateFormat(d, a), b.min !== a && (b.min = a), c = e.dateFormat(d,
                        c), b.max !== c && (b.max = c))
                }
            }; f.prototype.showInput = function (b) {
                var a = "min" === b ? this.minDateBox : this.maxDateBox; if ((b = "min" === b ? this.minInput : this.maxInput) && a && this.inputGroup) {
                    var c = "text" === b.type, d = this.inputGroup, e = d.translateX; d = d.translateY; var f = this.options.inputBoxWidth; m(b, { width: c ? a.width + (f ? -2 : 20) + "px" : "auto", height: c ? a.height - 2 + "px" : "auto", border: "2px solid silver" }); c && f ? m(b, { left: e + a.x + "px", top: d + "px" }) : m(b, {
                        left: Math.min(Math.round(a.x + e - (b.offsetWidth - a.width) / 2), this.chart.chartWidth -
                            b.offsetWidth) + "px", top: d - (b.offsetHeight - a.height) / 2 + "px"
                    })
                }
            }; f.prototype.hideInput = function (b) { (b = "min" === b ? this.minInput : this.maxInput) && m(b, { top: "-9999em", border: 0, width: "1px", height: "1px" }) }; f.prototype.defaultInputDateParser = function (b, a, c) {
                var d = b.split("/").join("-").split(" ").join("T"); -1 === d.indexOf("T") && (d += "T00:00"); if (a) d += "Z"; else {
                    var e; if (e = w.isSafari) e = d, e = !(6 < e.length && (e.lastIndexOf("-") === e.length - 6 || e.lastIndexOf("+") === e.length - 6)); e && (e = (new Date(d)).getTimezoneOffset() / 60,
                        d += 0 >= e ? "+" + H(-e) + ":00" : "-" + H(e) + ":00")
                } d = Date.parse(d); z(d) || (b = b.split("-"), d = Date.UTC(F(b[0]), F(b[1]) - 1, F(b[2]))); c && a && z(d) && (d += c.getTimezoneOffset(d)); return d
            }; f.prototype.drawInput = function (a) {
                function c() {
                    var b = g.getInputValue(a), c = d.xAxis[0], e = d.scroller && d.scroller.xAxis ? d.scroller.xAxis : c, f = e.dataMin; e = e.dataMax; var l = g.maxInput, v = g.minInput; b !== Number(n.getAttribute("data-hc-time-previous")) && z(b) && (n.setAttribute("data-hc-time-previous", b), q && l && z(f) ? b > Number(l.getAttribute("data-hc-time")) ?
                        b = void 0 : b < f && (b = f) : v && z(e) && (b < Number(v.getAttribute("data-hc-time")) ? b = void 0 : b > e && (b = e)), "undefined" !== typeof b && c.setExtremes(q ? b : c.min, q ? c.max : b, void 0, void 0, { trigger: "rangeSelectorInput" }))
                } var d = this.chart, e = this.div, f = this.inputGroup, g = this, l = d.renderer.style || {}, h = d.renderer, p = d.options.rangeSelector, q = "min" === a, k = y.lang[q ? "rangeSelectorFrom" : "rangeSelectorTo"] || ""; k = h.label(k, 0).addClass("highcharts-range-label").attr({ padding: k ? 2 : 0, height: k ? p.inputBoxHeight : 0 }).add(f); h = h.label("", 0).addClass("highcharts-range-input").attr({
                    padding: 2,
                    width: p.inputBoxWidth, height: p.inputBoxHeight, "text-align": "center"
                }).on("click", function () { g.showInput(a); g[a + "Input"].focus() }); d.styledMode || h.attr({ stroke: p.inputBoxBorderColor, "stroke-width": 1 }); h.add(f); var n = r("input", { name: a, className: "highcharts-range-selector" }, void 0, e); n.setAttribute("type", u(p.inputDateFormat || "%b %e, %Y")); d.styledMode || (k.css(x(l, p.labelStyle)), h.css(x({ color: "#333333" }, l, p.inputStyle)), m(n, b({
                    position: "absolute", border: 0, boxShadow: "0 0 15px rgba(0,0,0,0.3)", width: "1px",
                    height: "1px", padding: 0, textAlign: "center", fontSize: l.fontSize, fontFamily: l.fontFamily, top: "-9999em"
                }, p.inputStyle))); n.onfocus = function () { g.showInput(a) }; n.onblur = function () { n === w.doc.activeElement && c(); g.hideInput(a); g.setInputValue(a); n.blur() }; var B = !1; n.onchange = function () { B || (c(), g.hideInput(a), n.blur()) }; n.onkeypress = function (b) { 13 === b.keyCode && c() }; n.onkeydown = function (b) { B = !0; 38 !== b.keyCode && 40 !== b.keyCode || c() }; n.onkeyup = function () { B = !1 }; return { dateBox: h, input: n, label: k }
            }; f.prototype.getPosition =
                function () { var b = this.chart, a = b.options.rangeSelector; b = "top" === a.verticalAlign ? b.plotTop - b.axisOffset[0] : 0; return { buttonTop: b + a.buttonPosition.y, inputTop: b + a.inputPosition.y - 10 } }; f.prototype.getYTDExtremes = function (b, a, c) { var d = this.chart.time, e = new d.Date(b), f = d.get("FullYear", e); c = c ? d.Date.UTC(f, 0, 1) : +new d.Date(f, 0, 1); a = Math.max(a, c); e = e.getTime(); return { max: Math.min(b || e, e), min: a } }; f.prototype.render = function (b, a) {
                    var c = this.chart, e = c.renderer, f = c.container, g = c.options, v = g.rangeSelector, l = A(g.chart.style &&
                        g.chart.style.zIndex, 0) + 1; g = v.inputEnabled; if (!1 !== v.enabled) {
                            this.rendered || (this.group = e.g("range-selector-group").attr({ zIndex: 7 }).add(), this.div = r("div", void 0, { position: "relative", height: 0, zIndex: l }), this.buttonOptions.length && this.renderButtons(), f.parentNode && f.parentNode.insertBefore(this.div, f), g && (this.inputGroup = e.g("input-group").add(this.group), e = this.drawInput("min"), this.minDateBox = e.dateBox, this.minLabel = e.label, this.minInput = e.input, e = this.drawInput("max"), this.maxDateBox = e.dateBox,
                                this.maxLabel = e.label, this.maxInput = e.input)); if (g && (this.setInputValue("min", b), this.setInputValue("max", a), b = c.scroller && c.scroller.getUnionExtremes() || c.xAxis[0] || {}, d(b.dataMin) && d(b.dataMax) && (c = c.xAxis[0].minRange || 0, this.setInputExtremes("min", b.dataMin, Math.min(b.dataMax, this.getInputValue("max")) - c), this.setInputExtremes("max", Math.max(b.dataMin, this.getInputValue("min")) + c, b.dataMax)), this.inputGroup)) {
                                    var h = 0;[this.minLabel, this.minDateBox, this.maxLabel, this.maxDateBox].forEach(function (b) {
                                        if (b) {
                                            var a =
                                                b.getBBox().width; a && (b.attr({ x: h }), h += a + v.inputSpacing)
                                        }
                                    })
                                } this.alignElements(); this.rendered = !0
                        }
                }; f.prototype.renderButtons = function () {
                    var b = this, a = this.buttons, c = this.options, d = y.lang, e = this.chart.renderer, f = x(c.buttonTheme), h = f && f.states, p = f.width || 28; delete f.width; delete f.states; this.buttonGroup = e.g("range-selector-buttons").add(this.group); var m = this.dropdown = r("select", void 0, { position: "absolute", width: "1px", height: "1px", padding: 0, border: 0, top: "-9999em", cursor: "pointer", opacity: .0001 }, this.div);
                    g(m, "touchstart", function () { m.style.fontSize = "16px" });[[w.isMS ? "mouseover" : "mouseenter"], [w.isMS ? "mouseout" : "mouseleave"], ["change", "click"]].forEach(function (c) { var d = c[0], e = c[1]; g(m, d, function () { var c = a[b.currentButtonIndex()]; c && q(c.element, e || d) }) }); this.zoomText = e.label(d && d.rangeSelectorZoom || "", 0).attr({ padding: c.buttonTheme.padding, height: c.buttonTheme.height, paddingLeft: 0, paddingRight: 0 }).add(this.buttonGroup); this.chart.styledMode || (this.zoomText.css(c.labelStyle), f["stroke-width"] = A(f["stroke-width"],
                        0)); r("option", { textContent: this.zoomText.textStr, disabled: !0 }, void 0, m); this.buttonOptions.forEach(function (c, d) { r("option", { textContent: c.title || c.text }, void 0, m); a[d] = e.button(c.text, 0, 0, function (a) { var e = c.events && c.events.click, f; e && (f = e.call(c, a)); !1 !== f && b.clickButton(d); b.isActive = !0 }, f, h && h.hover, h && h.select, h && h.disabled).attr({ "text-align": "center", width: p }).add(b.buttonGroup); c.title && a[d].attr("title", c.title) })
                }; f.prototype.alignElements = function () {
                    var b = this, a = this.buttonGroup, c = this.buttons,
                    d = this.chart, e = this.group, f = this.inputGroup, g = this.options, h = this.zoomText, p = d.options, m = p.exporting && !1 !== p.exporting.enabled && p.navigation && p.navigation.buttonOptions; p = g.buttonPosition; var q = g.inputPosition, r = g.verticalAlign, k = function (a, c) { return m && b.titleCollision(d) && "top" === r && "right" === c.align && c.y - a.getBBox().height - 12 < (m.y || 0) + (m.height || 0) + d.spacing[0] ? -40 : 0 }, n = d.plotLeft; if (e && p && q) {
                        var u = p.x - d.spacing[3]; if (a) {
                            this.positionButtons(); if (!this.initialButtonGroupWidth) {
                                var B = 0; h && (B += h.getBBox().width +
                                    5); c.forEach(function (b, a) { B += b.width; a !== c.length - 1 && (B += g.buttonSpacing) }); this.initialButtonGroupWidth = B
                            } n -= d.spacing[3]; this.updateButtonStates(); h = k(a, p); this.alignButtonGroup(h); e.placed = a.placed = d.hasLoaded
                        } a = 0; f && (a = k(f, q), "left" === q.align ? u = n : "right" === q.align && (u = -Math.max(d.axisOffset[1], -a)), f.align({ y: q.y, width: f.getBBox().width, align: q.align, x: q.x + u - 2 }, !0, d.spacingBox), f.placed = d.hasLoaded); this.handleCollision(a); e.align({ verticalAlign: r }, !0, d.spacingBox); f = e.alignAttr.translateY; a =
                            e.getBBox().height + 20; k = 0; "bottom" === r && (k = (k = d.legend && d.legend.options) && "bottom" === k.verticalAlign && k.enabled && !k.floating ? d.legend.legendHeight + A(k.margin, 10) : 0, a = a + k - 20, k = f - a - (g.floating ? 0 : g.y) - (d.titleOffset ? d.titleOffset[2] : 0) - 10); if ("top" === r) g.floating && (k = 0), d.titleOffset && d.titleOffset[0] && (k = d.titleOffset[0]), k += d.margin[0] - d.spacing[0] || 0; else if ("middle" === r) if (q.y === p.y) k = f; else if (q.y || p.y) k = 0 > q.y || 0 > p.y ? k - Math.min(q.y, p.y) : f - a; e.translate(g.x, g.y + Math.floor(k)); p = this.minInput; q =
                                this.maxInput; f = this.dropdown; g.inputEnabled && p && q && (p.style.marginTop = e.translateY + "px", q.style.marginTop = e.translateY + "px"); f && (f.style.marginTop = e.translateY + "px")
                    }
                }; f.prototype.alignButtonGroup = function (b, a) { var c = this.chart, d = this.buttonGroup, e = this.options.buttonPosition, f = c.plotLeft - c.spacing[3], g = e.x - c.spacing[3]; "right" === e.align ? g += b - f : "center" === e.align && (g -= f / 2); d && d.align({ y: e.y, width: A(a, this.initialButtonGroupWidth), align: e.align, x: g }, !0, c.spacingBox) }; f.prototype.positionButtons = function () {
                    var b =
                        this.buttons, a = this.chart, c = this.options, d = this.zoomText, e = a.hasLoaded ? "animate" : "attr", f = c.buttonPosition, g = a.plotLeft, h = g; d && "hidden" !== d.visibility && (d[e]({ x: A(g + f.x, g) }), h += f.x + d.getBBox().width + 5); this.buttonOptions.forEach(function (a, d) { if ("hidden" !== b[d].visibility) b[d][e]({ x: h }), h += b[d].width + c.buttonSpacing; else b[d][e]({ x: g }) })
                }; f.prototype.handleCollision = function (b) {
                    var a = this, c = this.chart, d = this.buttonGroup, e = this.inputGroup, f = this.options, g = f.buttonPosition, h = f.dropdown, l = f.inputPosition;
                    f = function () { var b = 0; a.buttons.forEach(function (a) { a = a.getBBox(); a.width > b && (b = a.width) }); return b }; var p = function (a) { if (e && d) { var c = e.alignAttr.translateX + e.alignOptions.x - b + e.getBBox().x + 2, f = e.alignOptions.width, h = d.alignAttr.translateX + d.getBBox().x; return h + a > c && c + f > h && g.y < l.y + e.getBBox().height } return !1 }, q = function () { e && d && e.attr({ translateX: e.alignAttr.translateX + (c.axisOffset[1] >= -b ? 0 : -b), translateY: e.alignAttr.translateY + d.getBBox().height + 10 }) }; if (d) {
                        if ("always" === h) {
                            this.collapseButtons(b);
                            p(f()) && q(); return
                        } "never" === h && this.expandButtons()
                    } e && d ? l.align === g.align || p(this.initialButtonGroupWidth + 20) ? "responsive" === h ? (this.collapseButtons(b), p(f()) && q()) : q() : "responsive" === h && this.expandButtons() : d && "responsive" === h && (this.initialButtonGroupWidth > c.plotWidth ? this.collapseButtons(b) : this.expandButtons())
                }; f.prototype.collapseButtons = function (b) {
                    var a = this.buttons, c = this.buttonOptions, d = this.chart, e = this.dropdown, f = this.options, g = this.zoomText, h = d.userOptions.rangeSelector && d.userOptions.rangeSelector.buttonTheme ||
                        {}, l = function (b) { return { text: b ? b + " \u25be" : "\u25be", width: "auto", paddingLeft: A(f.buttonTheme.paddingLeft, h.padding, 8), paddingRight: A(f.buttonTheme.paddingRight, h.padding, 8) } }; g && g.hide(); var p = !1; c.forEach(function (b, c) { c = a[c]; 2 !== c.state ? c.hide() : (c.show(), c.attr(l(b.text)), p = !0) }); p || (e && (e.selectedIndex = 0), a[0].show(), a[0].attr(l(this.zoomText && this.zoomText.textStr))); c = f.buttonPosition.align; this.positionButtons(); "right" !== c && "center" !== c || this.alignButtonGroup(b, a[this.currentButtonIndex()].getBBox().width);
                    this.showDropdown()
                }; f.prototype.expandButtons = function () { var b = this.buttons, a = this.buttonOptions, c = this.options, d = this.zoomText; this.hideDropdown(); d && d.show(); a.forEach(function (a, d) { d = b[d]; d.show(); d.attr({ text: a.text, width: c.buttonTheme.width || 28, paddingLeft: A(c.buttonTheme.paddingLeft, "unset"), paddingRight: A(c.buttonTheme.paddingRight, "unset") }); 2 > d.state && d.setState(0) }); this.positionButtons() }; f.prototype.currentButtonIndex = function () {
                    var b = this.dropdown; return b && 0 < b.selectedIndex ? b.selectedIndex -
                        1 : 0
                }; f.prototype.showDropdown = function () { var b = this.buttonGroup, a = this.buttons, c = this.chart, d = this.dropdown; if (b && d) { var e = b.translateX; b = b.translateY; a = a[this.currentButtonIndex()].getBBox(); m(d, { left: c.plotLeft + e + "px", top: b + .5 + "px", width: a.width + "px", height: a.height + "px" }); this.hasVisibleDropdown = !0 } }; f.prototype.hideDropdown = function () { var b = this.dropdown; b && (m(b, { top: "-9999em", width: "1px", height: "1px" }), this.hasVisibleDropdown = !1) }; f.prototype.getHeight = function () {
                    var b = this.options, a = this.group,
                    c = b.y, d = b.buttonPosition.y, e = b.inputPosition.y; if (b.height) return b.height; this.alignElements(); b = a ? a.getBBox(!0).height + 13 + c : 0; a = Math.min(e, d); if (0 > e && 0 > d || 0 < e && 0 < d) b += Math.abs(a); return b
                }; f.prototype.titleCollision = function (b) { return !(b.options.title.text || b.options.subtitle.text) }; f.prototype.update = function (b) { var a = this.chart; x(!0, a.options.rangeSelector, b); this.destroy(); this.init(a); this.render() }; f.prototype.destroy = function () {
                    var b = this, a = b.minInput, d = b.maxInput; b.eventsToUnbind && (b.eventsToUnbind.forEach(function (b) { return b() }),
                        b.eventsToUnbind = void 0); e(b.buttons); a && (a.onfocus = a.onblur = a.onchange = null); d && (d.onfocus = d.onblur = d.onchange = null); G(b, function (a, d) { a && "chart" !== d && (a instanceof n ? a.destroy() : a instanceof window.HTMLElement && c(a)); a !== f.prototype[d] && (b[d] = null) }, this)
                }; return f
        }(); C.prototype.defaultButtons = [{ type: "month", count: 1, text: "1m", title: "View 1 month" }, { type: "month", count: 3, text: "3m", title: "View 3 months" }, { type: "month", count: 6, text: "6m", title: "View 6 months" }, { type: "ytd", text: "YTD", title: "View year to date" },
        { type: "year", count: 1, text: "1y", title: "View 1 year" }, { type: "all", text: "All", title: "View all" }]; C.prototype.inputTypeFormats = { "datetime-local": "%Y-%m-%dT%H:%M:%S", date: "%Y-%m-%d", time: "%H:%M:%S" }; a.prototype.minFromRange = function () {
            var b = this.range, a = b.type, c = this.max, d = this.chart.time, e = function (b, c) { var e = "year" === a ? "FullYear" : "Month", f = new d.Date(b), g = d.get(e, f); d.set(e, f, g + c); g === d.get(e, f) && d.set("Date", f, 0); return f.getTime() - b }; if (z(b)) { var f = c - b; var g = b } else f = c + e(c, -b.count), this.chart && (this.chart.fixedRange =
                c - f); var h = A(this.dataMin, Number.MIN_VALUE); z(f) || (f = h); f <= h && (f = h, "undefined" === typeof g && (g = e(f, b.count)), this.newMax = Math.min(f + g, this.dataMax)); z(c) || (f = void 0); return f
        }; if (!w.RangeSelector) {
            var D = [], I = function (b) {
                function a() { d && (c = b.xAxis[0].getExtremes(), e = b.legend, p = d && d.options.verticalAlign, z(c.min) && d.render(c.min, c.max), e.display && "top" === p && p === e.options.verticalAlign && (h = x(b.spacingBox), h.y = "vertical" === e.options.layout ? b.plotTop : h.y + d.getHeight(), e.group.placed = !1, e.align(h))) } var c,
                    d = b.rangeSelector, e, h, p; d && (f(D, function (a) { return a[0] === b }) || D.push([b, [g(b.xAxis[0], "afterSetExtremes", function (b) { d && d.render(b.min, b.max) }), g(b, "redraw", a)]]), a())
            }; g(h, "afterGetContainer", function () { this.options.rangeSelector && this.options.rangeSelector.enabled && (this.rangeSelector = new C(this)) }); g(h, "beforeRender", function () {
                var b = this.axes, a = this.rangeSelector; a && (z(a.deferredYTDClick) && (a.clickButton(a.deferredYTDClick), delete a.deferredYTDClick), b.forEach(function (b) { b.updateNames(); b.setScale() }),
                    this.getAxisMargins(), a.render(), b = a.options.verticalAlign, a.options.floating || ("bottom" === b ? this.extraBottomMargin = !0 : "middle" !== b && (this.extraTopMargin = !0)))
            }); g(h, "update", function (b) {
                var a = b.options.rangeSelector; b = this.rangeSelector; var c = this.extraBottomMargin, e = this.extraTopMargin; a && a.enabled && !d(b) && this.options.rangeSelector && (this.options.rangeSelector.enabled = !0, this.rangeSelector = b = new C(this)); this.extraTopMargin = this.extraBottomMargin = !1; b && (I(this), a = a && a.verticalAlign || b.options &&
                    b.options.verticalAlign, b.options.floating || ("bottom" === a ? this.extraBottomMargin = !0 : "middle" !== a && (this.extraTopMargin = !0)), this.extraBottomMargin !== c || this.extraTopMargin !== e) && (this.isDirtyBox = !0)
            }); g(h, "render", function () { var b = this.rangeSelector; b && !b.options.floating && (b.render(), b = b.options.verticalAlign, "bottom" === b ? this.extraBottomMargin = !0 : "middle" !== b && (this.extraTopMargin = !0)) }); g(h, "getMargins", function () {
                var b = this.rangeSelector; b && (b = b.getHeight(), this.extraTopMargin && (this.plotTop +=
                    b), this.extraBottomMargin && (this.marginBottom += b))
            }); h.prototype.callbacks.push(I); g(h, "destroy", function () { for (var b = 0; b < D.length; b++) { var a = D[b]; if (a[0] === this) { a[1].forEach(function (b) { return b() }); D.splice(b, 1); break } } }); w.RangeSelector = C
        } return C
    }); x(a, "Accessibility/Components/RangeSelectorComponent.js", [a["Extensions/RangeSelector.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/Announcer.js"], a["Accessibility/KeyboardNavigationHandler.js"],
    a["Core/Utilities.js"]], function (a, h, w, t, n, k) {
        var u = this && this.__extends || function () { var a = function (d, c) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, a) { b.__proto__ = a } || function (b, a) { for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]) }; return a(d, c) }; return function (d, c) { function b() { this.constructor = d } a(d, c); d.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b) } }(), y = w.unhideChartElementFromAT, g = w.getAxisRangeDescription, r = k.addEvent, m = k.attr; h = function (a) {
            function d() {
                var c =
                    null !== a && a.apply(this, arguments) || this; c.announcer = void 0; return c
            } u(d, a); d.prototype.init = function () { this.announcer = new t(this.chart, "polite") }; d.prototype.onChartUpdate = function () {
                var a = this.chart, b = this, d = a.rangeSelector; d && (this.updateSelectorVisibility(), this.setDropdownAttrs(), d.buttons && d.buttons.length && d.buttons.forEach(function (a) { b.setRangeButtonAttrs(a) }), d.maxInput && d.minInput && ["minInput", "maxInput"].forEach(function (c, e) {
                    if (c = d[c]) y(a, c), b.setRangeInputAttrs(c, "accessibility.rangeSelector." +
                        (e ? "max" : "min") + "InputLabel")
                }))
            }; d.prototype.updateSelectorVisibility = function () { var a = this.chart, b = a.rangeSelector, d = b && b.dropdown, e = b && b.buttons || []; b && b.hasVisibleDropdown && d ? (y(a, d), e.forEach(function (b) { return b.element.setAttribute("aria-hidden", !0) })) : (d && d.setAttribute("aria-hidden", !0), e.forEach(function (b) { return y(a, b.element) })) }; d.prototype.setDropdownAttrs = function () {
                var a = this.chart, b = a.rangeSelector && a.rangeSelector.dropdown; b && (a = a.langFormat("accessibility.rangeSelector.dropdownLabel",
                    { rangeTitle: a.options.lang.rangeSelectorZoom }), b.setAttribute("aria-label", a), b.setAttribute("tabindex", -1))
            }; d.prototype.setRangeButtonAttrs = function (a) { m(a.element, { tabindex: -1, role: "button" }) }; d.prototype.setRangeInputAttrs = function (a, b) { var c = this.chart; m(a, { tabindex: -1, "aria-label": c.langFormat(b, { chart: c }) }) }; d.prototype.onButtonNavKbdArrowKey = function (a, b) {
                var c = a.response, d = this.keyCodes, e = this.chart, g = e.options.accessibility.keyboardNavigation.wrapAround; b = b === d.left || b === d.up ? -1 : 1; return e.highlightRangeSelectorButton(e.highlightedRangeSelectorItemIx +
                    b) ? c.success : g ? (a.init(b), c.success) : c[0 < b ? "next" : "prev"]
            }; d.prototype.onButtonNavKbdClick = function (a) { a = a.response; var b = this.chart; 3 !== b.oldRangeSelectorItemState && this.fakeClickEvent(b.rangeSelector.buttons[b.highlightedRangeSelectorItemIx].element); return a.success }; d.prototype.onAfterBtnClick = function () { var a = this.chart, b = g(a.xAxis[0]); (a = a.langFormat("accessibility.rangeSelector.clickButtonAnnouncement", { chart: a, axisRangeDescription: b })) && this.announcer.announce(a) }; d.prototype.onInputKbdMove =
                function (a) { var b = this.chart, c = b.rangeSelector, d = b.highlightedInputRangeIx = (b.highlightedInputRangeIx || 0) + a; 1 < d || 0 > d ? b.accessibility && (b.accessibility.keyboardNavigation.tabindexContainer.focus(), b.accessibility.keyboardNavigation.move(a)) : c && (a = c[d ? "maxDateBox" : "minDateBox"], c = c[d ? "maxInput" : "minInput"], a && c && b.setFocusToElement(a, c)) }; d.prototype.onInputNavInit = function (a) {
                    var b = this, c = this, d = this.chart, e = 0 < a ? 0 : 1, g = d.rangeSelector, h = g && g[e ? "maxDateBox" : "minDateBox"]; a = g && g.minInput; g = g && g.maxInput;
                    d.highlightedInputRangeIx = e; if (h && a && g) { d.setFocusToElement(h, e ? g : a); this.removeInputKeydownHandler && this.removeInputKeydownHandler(); d = function (a) { (a.which || a.keyCode) === b.keyCodes.tab && (a.preventDefault(), a.stopPropagation(), c.onInputKbdMove(a.shiftKey ? -1 : 1)) }; var m = r(a, "keydown", d), k = r(g, "keydown", d); this.removeInputKeydownHandler = function () { m(); k() } }
                }; d.prototype.onInputNavTerminate = function () {
                    var a = this.chart.rangeSelector || {}; a.maxInput && a.hideInput("max"); a.minInput && a.hideInput("min"); this.removeInputKeydownHandler &&
                        (this.removeInputKeydownHandler(), delete this.removeInputKeydownHandler)
                }; d.prototype.initDropdownNav = function () {
                    var a = this, b = this.chart, d = b.rangeSelector, e = d && d.dropdown; d && e && (b.setFocusToElement(d.buttonGroup, e), this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeDropdownKeydownHandler = r(e, "keydown", function (d) {
                        var c = b.accessibility; (d.which || d.keyCode) === a.keyCodes.tab && (d.preventDefault(), d.stopPropagation(), c && (c.keyboardNavigation.tabindexContainer.focus(), c.keyboardNavigation.move(d.shiftKey ?
                            -1 : 1)))
                    }))
                }; d.prototype.getRangeSelectorButtonNavigation = function () {
                    var a = this.chart, b = this.keyCodes, d = this; return new n(a, {
                        keyCodeMap: [[[b.left, b.right, b.up, b.down], function (b) { return d.onButtonNavKbdArrowKey(this, b) }], [[b.enter, b.space], function () { return d.onButtonNavKbdClick(this) }]], validate: function () { return !!(a.rangeSelector && a.rangeSelector.buttons && a.rangeSelector.buttons.length) }, init: function (b) {
                            var c = a.rangeSelector; c && c.hasVisibleDropdown ? d.initDropdownNav() : c && (c = c.buttons.length - 1, a.highlightRangeSelectorButton(0 <
                                b ? 0 : c))
                        }, terminate: function () { d.removeDropdownKeydownHandler && (d.removeDropdownKeydownHandler(), delete d.removeDropdownKeydownHandler) }
                    })
                }; d.prototype.getRangeSelectorInputNavigation = function () {
                    var a = this.chart, b = this; return new n(a, {
                        keyCodeMap: [], validate: function () { return !!(a.rangeSelector && a.rangeSelector.inputGroup && "hidden" !== a.rangeSelector.inputGroup.element.style.visibility && !1 !== a.options.rangeSelector.inputEnabled && a.rangeSelector.minInput && a.rangeSelector.maxInput) }, init: function (a) { b.onInputNavInit(a) },
                        terminate: function () { b.onInputNavTerminate() }
                    })
                }; d.prototype.getKeyboardNavigation = function () { return [this.getRangeSelectorButtonNavigation(), this.getRangeSelectorInputNavigation()] }; d.prototype.destroy = function () { this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(); this.removeInputKeydownHandler && this.removeInputKeydownHandler(); this.announcer && this.announcer.destroy() }; return d
        }(h); (function (d) {
            function e(b) {
                var a = this.rangeSelector && this.rangeSelector.buttons || [], d = this.highlightedRangeSelectorItemIx,
                c = this.rangeSelector && this.rangeSelector.selected; "undefined" !== typeof d && a[d] && d !== c && a[d].setState(this.oldRangeSelectorItemState || 0); this.highlightedRangeSelectorItemIx = b; return a[b] ? (this.setFocusToElement(a[b].box, a[b].element), b !== c && (this.oldRangeSelectorItemState = a[b].state, a[b].setState(1)), !0) : !1
            } function c() { var b = this.chart.accessibility; if (b && b.components.rangeSelector) return b.components.rangeSelector.onAfterBtnClick() } var b = []; d.compose = function (d, g) {
                -1 === b.indexOf(d) && (b.push(d), d.prototype.highlightRangeSelectorButton =
                    e); -1 === b.indexOf(g) && (b.push(g), r(a, "afterBtnClick", c))
            }
        })(h || (h = {})); return h
    }); x(a, "Accessibility/Components/SeriesComponent/ForcedMarkers.js", [a["Core/Utilities.js"]], function (a) {
        var h = a.addEvent, u = a.merge, t; (function (a) {
            function k(a) { u(!0, a, { marker: { enabled: !0, states: { normal: { opacity: 0 } } } }) } function n(a) { return a.marker.states && a.marker.states.normal && a.marker.states.normal.opacity } function t() {
                if (this.chart.styledMode) {
                    if (this.markerGroup) this.markerGroup[this.a11yMarkersForced ? "addClass" : "removeClass"]("highcharts-a11y-markers-hidden");
                    this._hasPointMarkers && this.points && this.points.length && this.points.forEach(function (a) { a.graphic && (a.graphic[a.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-hidden"), a.graphic[!1 === a.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-visible")) })
                }
            } function g(a) { this.resetA11yMarkerOptions = u(a.options.marker || {}, this.userOptions.marker || {}) } function r() {
                var a = this.options, e = !1 !== (this.options.accessibility && this.options.accessibility.enabled); if (e = this.chart.options.accessibility.enabled &&
                    e) e = this.chart.options.accessibility, e = this.points.length < e.series.pointDescriptionEnabledThreshold || !1 === e.series.pointDescriptionEnabledThreshold; if (e) {
                        if (a.marker && !1 === a.marker.enabled && (this.a11yMarkersForced = !0, k(this.options)), this._hasPointMarkers && this.points && this.points.length) for (a = this.points.length; a--;) {
                            e = this.points[a]; var c = e.options, b = e.hasForcedA11yMarker; delete e.hasForcedA11yMarker; c.marker && (b = b && 0 === n(c), c.marker.enabled && !b ? (u(!0, c.marker, { states: { normal: { opacity: n(c) || 1 } } }),
                                e.hasForcedA11yMarker = !1) : !1 === c.marker.enabled && (k(c), e.hasForcedA11yMarker = !0))
                        }
                    } else this.a11yMarkersForced && (delete this.a11yMarkersForced, (a = this.resetA11yMarkerOptions) && this.update({ marker: { enabled: a.enabled, states: { normal: { opacity: a.states && a.states.normal && a.states.normal.opacity } } } }), delete this.resetA11yMarkerOptions)
            } var m = []; a.compose = function (a) { -1 === m.indexOf(a) && (m.push(a), h(a, "afterSetOptions", g), h(a, "render", r), h(a, "afterRender", t)) }
        })(t || (t = {})); return t
    }); x(a, "Accessibility/Components/SeriesComponent/SeriesKeyboardNavigation.js",
        [a["Core/Series/Point.js"], a["Core/Series/Series.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Accessibility/Utils/EventProvider.js"], a["Accessibility/Utils/ChartUtilities.js"]], function (a, h, w, t, n, k, x, y) {
            function g(a) { var b = a.index, c = a.series.points, d = c.length; if (c[b] !== a) for (; d--;) { if (c[d] === a) return d } else return b } function r(a) {
                var b = a.chart.options.accessibility.keyboardNavigation.seriesNavigation, c = a.options.accessibility ||
                    {}, d = c.keyboardNavigation; return d && !1 === d.enabled || !1 === c.enabled || !1 === a.options.enableMouseTracking || !a.visible || b.pointNavigationEnabledThreshold && b.pointNavigationEnabledThreshold <= a.points.length
            } function m(a) { var b = a.series.chart.options.accessibility, c = a.options.accessibility && !1 === a.options.accessibility.enabled; return a.isNull && b.keyboardNavigation.seriesNavigation.skipNullPoints || !1 === a.visible || !1 === a.isInside || c || r(a.series) } function d(a) {
                a = a.series || []; for (var b = a.length, c = 0; c < b; ++c)if (!r(a[c])) {
                    a: {
                        var d =
                            a[c].points || []; for (var e = d.length, f = 0; f < e; ++f)if (!m(d[f])) { d = d[f]; break a } d = null
                    } if (d) return d
                } return null
            } function e(a) { for (var b = a.series.length, c = !1; b-- && !(a.highlightedPoint = a.series[b].points[a.series[b].points.length - 1], c = a.series[b].highlightNextValidPoint());); return c } function c(a) { delete a.highlightedPoint; return (a = d(a)) ? a.highlight() : !1 } var b = w.seriesTypes, f = t.doc, q = n.defined, u = n.fireEvent, E = y.getPointFromXY, G = y.getSeriesFromName, H = y.scrollToPoint; w = function () {
                function b(a, b) {
                    this.keyCodes =
                    b; this.chart = a
                } b.prototype.init = function () {
                    var b = this, c = this.chart, e = this.eventProvider = new x; e.addEvent(h, "destroy", function () { return b.onSeriesDestroy(this) }); e.addEvent(c, "afterApplyDrilldown", function () { var a = d(this); a && a.highlight(!1) }); e.addEvent(c, "drilldown", function (a) { a = a.point; var c = a.series; b.lastDrilledDownPoint = { x: a.x, y: a.y, seriesName: c ? c.name : "" } }); e.addEvent(c, "drillupall", function () { setTimeout(function () { b.onDrillupAll() }, 10) }); e.addEvent(a, "afterSetState", function () {
                        var a = this.graphic &&
                            this.graphic.element, b = f.activeElement, d = b && b.getAttribute("class"); d = d && -1 < d.indexOf("highcharts-a11y-proxy-button"); c.highlightedPoint === this && b !== a && !d && a && a.focus && a.focus()
                    })
                }; b.prototype.onDrillupAll = function () { var a = this.lastDrilledDownPoint, b = this.chart, c = a && G(b, a.seriesName), e; a && c && q(a.x) && q(a.y) && (e = E(c, a.x, a.y)); e = e || d(b); b.container && b.container.focus(); e && e.highlight && e.highlight(!1) }; b.prototype.getKeyboardNavigationHandler = function () {
                    var a = this, b = this.keyCodes, f = this.chart, g = f.inverted;
                    return new k(f, {
                        keyCodeMap: [[g ? [b.up, b.down] : [b.left, b.right], function (b) { return a.onKbdSideways(this, b) }], [g ? [b.left, b.right] : [b.up, b.down], function (b) { return a.onKbdVertical(this, b) }], [[b.enter, b.space], function (a, b) { if (a = f.highlightedPoint) b.point = a, u(a.series, "click", b), a.firePointEvent("click"); return this.response.success }], [[b.home], function () { c(f); return this.response.success }], [[b.end], function () { e(f); return this.response.success }], [[b.pageDown, b.pageUp], function (a) {
                            f.highlightAdjacentSeries(a ===
                                b.pageDown); return this.response.success
                        }]], init: function () { return a.onHandlerInit(this) }, validate: function () { return !!d(f) }, terminate: function () { return a.onHandlerTerminate() }
                    })
                }; b.prototype.onKbdSideways = function (a, b) { var c = this.keyCodes; return this.attemptHighlightAdjacentPoint(a, b === c.right || b === c.down) }; b.prototype.onHandlerInit = function (a) { var b = this.chart; b.options.accessibility.keyboardNavigation.seriesNavigation.rememberPointFocus && b.highlightedPoint ? b.highlightedPoint.highlight() : c(b); return a.response.success };
                b.prototype.onKbdVertical = function (a, b) { var c = this.chart, d = this.keyCodes; b = b === d.down || b === d.right; d = c.options.accessibility.keyboardNavigation.seriesNavigation; if (d.mode && "serialize" === d.mode) return this.attemptHighlightAdjacentPoint(a, b); c[c.highlightedPoint && c.highlightedPoint.series.keyboardMoveVertical ? "highlightAdjacentPointVertical" : "highlightAdjacentSeries"](b); return a.response.success }; b.prototype.onHandlerTerminate = function () {
                    var a = this.chart, b = a.options.accessibility.keyboardNavigation;
                    a.tooltip && a.tooltip.hide(0); var c = a.highlightedPoint && a.highlightedPoint.series; if (c && c.onMouseOut) c.onMouseOut(); if (a.highlightedPoint && a.highlightedPoint.onMouseOut) a.highlightedPoint.onMouseOut(); b.seriesNavigation.rememberPointFocus || delete a.highlightedPoint
                }; b.prototype.attemptHighlightAdjacentPoint = function (a, b) {
                    var d = this.chart, f = d.options.accessibility.keyboardNavigation.wrapAround; return d.highlightAdjacentPoint(b) ? a.response.success : f && (b ? c(d) : e(d)) ? a.response.success : a.response[b ? "next" :
                        "prev"]
                }; b.prototype.onSeriesDestroy = function (a) { var b = this.chart; b.highlightedPoint && b.highlightedPoint.series === a && (delete b.highlightedPoint, b.focusElement && b.focusElement.removeFocusBorder()) }; b.prototype.destroy = function () { this.eventProvider.removeAddedEvents() }; return b
            }(); (function (a) {
                function c(a) {
                    var b = this.series, c = this.highlightedPoint, d = c && g(c) || 0, e = c && c.series.points || [], f = this.series && this.series[this.series.length - 1]; f = f && f.points && f.points[f.points.length - 1]; if (!b[0] || !b[0].points) return !1;
                    if (c) { if (b = b[c.series.index + (a ? 1 : -1)], d = e[d + (a ? 1 : -1)], !d && b && (d = b.points[a ? 0 : b.points.length - 1]), !d) return !1 } else d = a ? b[0].points[0] : f; return m(d) ? (b = d.series, r(b) ? this.highlightedPoint = a ? b.points[b.points.length - 1] : b.points[0] : this.highlightedPoint = d, this.highlightAdjacentPoint(a)) : d.highlight()
                } function d(a) {
                    var b = this.highlightedPoint, c = Infinity, d; if (!q(b.plotX) || !q(b.plotY)) return !1; this.series.forEach(function (e) {
                        r(e) || e.points.forEach(function (f) {
                            if (q(f.plotY) && q(f.plotX) && f !== b) {
                                var g = f.plotY -
                                    b.plotY, h = Math.abs(f.plotX - b.plotX); h = Math.abs(g) * Math.abs(g) + h * h * 4; e.yAxis && e.yAxis.reversed && (g *= -1); !(0 >= g && a || 0 <= g && !a || 5 > h || m(f)) && h < c && (c = h, d = f)
                            }
                        })
                    }); return d ? d.highlight() : !1
                } function e(a) {
                    var b = this.highlightedPoint, c = this.series && this.series[this.series.length - 1], d = c && c.points && c.points[c.points.length - 1]; if (!this.highlightedPoint) return c = a ? this.series && this.series[0] : c, (d = a ? c && c.points && c.points[0] : d) ? d.highlight() : !1; c = this.series[b.series.index + (a ? -1 : 1)]; if (!c) return !1; d = f(b, c, 4); if (!d) return !1;
                    if (r(c)) return d.highlight(), a = this.highlightAdjacentSeries(a), a ? a : (b.highlight(), !1); d.highlight(); return d.series.highlightNextValidPoint()
                } function f(a, b, c, d) { var e = Infinity, f = b.points.length, g = function (a) { return !(q(a.plotX) && q(a.plotY)) }; if (!g(a)) { for (; f--;) { var h = b.points[f]; if (!g(h) && (h = (a.plotX - h.plotX) * (a.plotX - h.plotX) * (c || 1) + (a.plotY - h.plotY) * (a.plotY - h.plotY) * (d || 1), h < e)) { e = h; var m = f } } return q(m) ? b.points[m] : void 0 } } function h(a) {
                    void 0 === a && (a = !0); var b = this.series.chart; if (!this.isNull &&
                        a) this.onMouseOver(); else b.tooltip && b.tooltip.hide(0); H(this); this.graphic && (b.setFocusToElement(this.graphic), !a && b.focusElement && b.focusElement.removeFocusBorder()); b.highlightedPoint = this; return this
                } function k() { var a = this.chart.highlightedPoint, b = (a && a.series) === this ? g(a) : 0; a = this.points; var c = a.length; if (a && c) { for (var d = b; d < c; ++d)if (!m(a[d])) return a[d].highlight(); for (; 0 <= b; --b)if (!m(a[b])) return a[b].highlight() } return !1 } var l = []; a.compose = function (a, f, g) {
                    -1 === l.indexOf(a) && (l.push(a), a =
                        a.prototype, a.highlightAdjacentPoint = c, a.highlightAdjacentPointVertical = d, a.highlightAdjacentSeries = e); -1 === l.indexOf(f) && (l.push(f), f.prototype.highlight = h); -1 === l.indexOf(g) && (l.push(g), f = g.prototype, f.keyboardMoveVertical = !0, ["column", "gantt", "pie"].forEach(function (a) { b[a] && (b[a].prototype.keyboardMoveVertical = !1) }), f.highlightNextValidPoint = k)
                }
            })(w || (w = {})); return w
        }); x(a, "Accessibility/Components/SeriesComponent/SeriesComponent.js", [a["Accessibility/AccessibilityComponent.js"], a["Accessibility/Utils/ChartUtilities.js"],
        a["Accessibility/Components/SeriesComponent/ForcedMarkers.js"], a["Accessibility/Components/SeriesComponent/NewDataAnnouncer.js"], a["Accessibility/Components/SeriesComponent/SeriesDescriber.js"], a["Accessibility/Components/SeriesComponent/SeriesKeyboardNavigation.js"], a["Core/Tooltip.js"]], function (a, h, w, t, n, k, x) {
            var u = this && this.__extends || function () {
                var a = function (d, e) {
                    a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) {
                        for (var c in b) b.hasOwnProperty(c) &&
                            (a[c] = b[c])
                    }; return a(d, e)
                }; return function (d, e) { function c() { this.constructor = d } a(d, e); d.prototype = null === e ? Object.create(e) : (c.prototype = e.prototype, new c) }
            }(), g = h.hideSeriesFromAT, r = n.describeSeries; return function (a) {
                function d() { return null !== a && a.apply(this, arguments) || this } u(d, a); d.compose = function (a, c, b) { t.compose(b); w.compose(b); k.compose(a, c, b) }; d.prototype.init = function () {
                    this.newDataAnnouncer = new t(this.chart); this.newDataAnnouncer.init(); this.keyboardNavigation = new k(this.chart, this.keyCodes);
                    this.keyboardNavigation.init(); this.hideTooltipFromATWhenShown(); this.hideSeriesLabelsFromATWhenShown()
                }; d.prototype.hideTooltipFromATWhenShown = function () { var a = this; this.addEvent(x, "refresh", function () { this.chart === a.chart && this.label && this.label.element && this.label.element.setAttribute("aria-hidden", !0) }) }; d.prototype.hideSeriesLabelsFromATWhenShown = function () {
                    this.addEvent(this.chart, "afterDrawSeriesLabels", function () {
                        this.series.forEach(function (a) {
                            a.labelBySeries && a.labelBySeries.attr("aria-hidden",
                                !0)
                        })
                    })
                }; d.prototype.onChartRender = function () { this.chart.series.forEach(function (a) { !1 !== (a.options.accessibility && a.options.accessibility.enabled) && a.visible ? r(a) : g(a) }) }; d.prototype.getKeyboardNavigation = function () { return this.keyboardNavigation.getKeyboardNavigationHandler() }; d.prototype.destroy = function () { this.newDataAnnouncer.destroy(); this.keyboardNavigation.destroy() }; return d
            }(a)
        }); x(a, "Accessibility/Components/ZoomComponent.js", [a["Accessibility/AccessibilityComponent.js"], a["Accessibility/Utils/ChartUtilities.js"],
        a["Core/Globals.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Core/Utilities.js"]], function (a, h, w, t, n) {
            var k = this && this.__extends || function () { var a = function (g, d) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, c) { a.__proto__ = c } || function (a, c) { for (var b in c) c.hasOwnProperty(b) && (a[b] = c[b]) }; return a(g, d) }; return function (g, d) { function e() { this.constructor = g } a(g, d); g.prototype = null === d ? Object.create(d) : (e.prototype = d.prototype, new e) } }(), u = h.unhideChartElementFromAT, y =
                n.attr, g = n.pick; a = function (a) {
                    function h() { var d = null !== a && a.apply(this, arguments) || this; d.focusedMapNavButtonIx = -1; return d } k(h, a); h.prototype.init = function () { var a = this, e = this.chart; this.proxyProvider.addGroup("zoom", "div");["afterShowResetZoom", "afterApplyDrilldown", "drillupall"].forEach(function (c) { a.addEvent(e, c, function () { a.updateProxyOverlays() }) }) }; h.prototype.onChartUpdate = function () {
                        var a = this.chart, e = this; a.mapNavigation && a.mapNavigation.navButtons.forEach(function (c, b) {
                            u(a, c.element);
                            e.setMapNavButtonAttrs(c.element, "accessibility.zoom.mapZoom" + (b ? "Out" : "In"))
                        })
                    }; h.prototype.setMapNavButtonAttrs = function (a, e) { var c = this.chart; e = c.langFormat(e, { chart: c }); y(a, { tabindex: -1, role: "button", "aria-label": e }) }; h.prototype.onChartRender = function () { this.updateProxyOverlays() }; h.prototype.updateProxyOverlays = function () {
                        var a = this.chart; this.proxyProvider.clearGroup("zoom"); a.resetZoomButton && this.createZoomProxyButton(a.resetZoomButton, "resetZoomProxyButton", a.langFormat("accessibility.zoom.resetZoomButton",
                            { chart: a })); a.drillUpButton && a.breadcrumbs && a.breadcrumbs.list && this.createZoomProxyButton(a.drillUpButton, "drillUpProxyButton", a.langFormat("accessibility.drillUpButton", { chart: a, buttonText: a.breadcrumbs.getButtonText(a.breadcrumbs.list[a.breadcrumbs.list.length - 1]) }))
                    }; h.prototype.createZoomProxyButton = function (a, e, c) { this[e] = this.proxyProvider.addProxyElement("zoom", { click: a }, { "aria-label": c, tabindex: -1 }) }; h.prototype.getMapZoomNavigation = function () {
                        var a = this.keyCodes, e = this.chart, c = this; return new t(e,
                            { keyCodeMap: [[[a.up, a.down, a.left, a.right], function (a) { return c.onMapKbdArrow(this, a) }], [[a.tab], function (a, d) { return c.onMapKbdTab(this, d) }], [[a.space, a.enter], function () { return c.onMapKbdClick(this) }]], validate: function () { return !!(e.mapZoom && e.mapNavigation && e.mapNavigation.navButtons.length) }, init: function (a) { return c.onMapNavInit(a) } })
                    }; h.prototype.onMapKbdArrow = function (a, e) { var c = this.keyCodes; this.chart[e === c.up || e === c.down ? "yAxis" : "xAxis"][0].panStep(e === c.left || e === c.up ? -1 : 1); return a.response.success };
                    h.prototype.onMapKbdTab = function (a, e) { var c = this.chart; a = a.response; var b = (e = e.shiftKey) && !this.focusedMapNavButtonIx || !e && this.focusedMapNavButtonIx; c.mapNavigation.navButtons[this.focusedMapNavButtonIx].setState(0); if (b) return c.mapZoom(), a[e ? "prev" : "next"]; this.focusedMapNavButtonIx += e ? -1 : 1; e = c.mapNavigation.navButtons[this.focusedMapNavButtonIx]; c.setFocusToElement(e.box, e.element); e.setState(2); return a.success }; h.prototype.onMapKbdClick = function (a) {
                        this.fakeClickEvent(this.chart.mapNavButtons[this.focusedMapNavButtonIx].element);
                        return a.response.success
                    }; h.prototype.onMapNavInit = function (a) { var d = this.chart, c = d.mapNavigation.navButtons[0], b = d.mapNavigation.navButtons[1]; c = 0 < a ? c : b; d.setFocusToElement(c.box, c.element); c.setState(2); this.focusedMapNavButtonIx = 0 < a ? 0 : 1 }; h.prototype.simpleButtonNavigation = function (a, e, c) {
                        var b = this.keyCodes, d = this, h = this.chart; return new t(h, {
                            keyCodeMap: [[[b.tab, b.up, b.down, b.left, b.right], function (a, c) { return this.response[a === b.tab && c.shiftKey || a === b.left || a === b.up ? "prev" : "next"] }], [[b.space,
                            b.enter], function () { var a = c(this, h); return g(a, this.response.success) }]], validate: function () { return h[a] && h[a].box && d[e].buttonElement }, init: function () { h.setFocusToElement(h[a].box, d[e].buttonElement) }
                        })
                    }; h.prototype.getKeyboardNavigation = function () { return [this.simpleButtonNavigation("resetZoomButton", "resetZoomProxyButton", function (a, e) { e.zoomOut() }), this.simpleButtonNavigation("drillUpButton", "drillUpProxyButton", function (a, e) { e.drillUp(); return a.response.prev }), this.getMapZoomNavigation()] }; return h
                }(a);
            (function (a) { function g(a, e) { var c = e || 3; e = this.getExtremes(); var b = (e.max - e.min) / c * a; c = e.max + b; b = e.min + b; var d = c - b; 0 > a && b < e.dataMin ? (b = e.dataMin, c = b + d) : 0 < a && c > e.dataMax && (c = e.dataMax, b = c - d); this.setExtremes(b, c) } a.composedClasses = []; a.compose = function (d) { -1 === a.composedClasses.indexOf(d) && (a.composedClasses.push(d), d.prototype.panStep = g) } })(a || (a = {})); return a
        }); x(a, "Accessibility/HighContrastMode.js", [a["Core/Globals.js"]], function (a) {
            var h = a.doc, u = a.isMS, t = a.win; return {
                isHighContrastModeActive: function () {
                    var a =
                        /(Edg)/.test(t.navigator.userAgent); if (t.matchMedia && a) return t.matchMedia("(-ms-high-contrast: active)").matches; if (u && t.getComputedStyle) { a = h.createElement("div"); a.style.backgroundImage = "url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)"; h.body.appendChild(a); var k = (a.currentStyle || t.getComputedStyle(a)).backgroundImage; h.body.removeChild(a); return "none" === k } return t.matchMedia && t.matchMedia("(forced-colors: active)").matches
                }, setHighContrastTheme: function (a) {
                    a.highContrastModeActive =
                    !0; var h = a.options.accessibility.highContrastTheme; a.update(h, !1); a.series.forEach(function (a) { var k = h.plotOptions[a.type] || {}; a.update({ color: k.color || "windowText", colors: [k.color || "windowText"], borderColor: k.borderColor || "window" }); a.points.forEach(function (a) { a.options && a.options.color && a.update({ color: k.color || "windowText", borderColor: k.borderColor || "window" }, !1) }) }); a.redraw()
                }
            }
        }); x(a, "Accessibility/HighContrastTheme.js", [], function () {
            return {
                chart: { backgroundColor: "window" }, title: { style: { color: "windowText" } },
                subtitle: { style: { color: "windowText" } }, colorAxis: { minColor: "windowText", maxColor: "windowText", stops: [] }, colors: ["windowText"], xAxis: { gridLineColor: "windowText", labels: { style: { color: "windowText" } }, lineColor: "windowText", minorGridLineColor: "windowText", tickColor: "windowText", title: { style: { color: "windowText" } } }, yAxis: { gridLineColor: "windowText", labels: { style: { color: "windowText" } }, lineColor: "windowText", minorGridLineColor: "windowText", tickColor: "windowText", title: { style: { color: "windowText" } } }, tooltip: {
                    backgroundColor: "window",
                    borderColor: "windowText", style: { color: "windowText" }
                }, plotOptions: {
                    series: { lineColor: "windowText", fillColor: "window", borderColor: "windowText", edgeColor: "windowText", borderWidth: 1, dataLabels: { connectorColor: "windowText", color: "windowText", style: { color: "windowText", textOutline: "none" } }, marker: { lineColor: "windowText", fillColor: "windowText" } }, pie: { color: "window", colors: ["window"], borderColor: "windowText", borderWidth: 1 }, boxplot: { fillColor: "window" }, candlestick: { lineColor: "windowText", fillColor: "window" },
                    errorbar: { fillColor: "window" }
                }, legend: { backgroundColor: "window", itemStyle: { color: "windowText" }, itemHoverStyle: { color: "windowText" }, itemHiddenStyle: { color: "#555" }, title: { style: { color: "windowText" } } }, credits: { style: { color: "windowText" } }, labels: { style: { color: "windowText" } }, drilldown: { activeAxisLabelStyle: { color: "windowText" }, activeDataLabelStyle: { color: "windowText" } }, navigation: { buttonOptions: { symbolStroke: "windowText", theme: { fill: "window" } } }, rangeSelector: {
                    buttonTheme: {
                        fill: "window", stroke: "windowText",
                        style: { color: "windowText" }, states: { hover: { fill: "window", stroke: "windowText", style: { color: "windowText" } }, select: { fill: "#444", stroke: "windowText", style: { color: "windowText" } } }
                    }, inputBoxBorderColor: "windowText", inputStyle: { backgroundColor: "window", color: "windowText" }, labelStyle: { color: "windowText" }
                }, navigator: { handles: { backgroundColor: "window", borderColor: "windowText" }, outlineColor: "windowText", maskFill: "transparent", series: { color: "windowText", lineColor: "windowText" }, xAxis: { gridLineColor: "windowText" } },
                scrollbar: { barBackgroundColor: "#444", barBorderColor: "windowText", buttonArrowColor: "windowText", buttonBackgroundColor: "window", buttonBorderColor: "windowText", rifleColor: "windowText", trackBackgroundColor: "window", trackBorderColor: "windowText" }
            }
        }); x(a, "Accessibility/Options/Options.js", [], function () {
            return {
                accessibility: {
                    enabled: !0, screenReaderSection: {
                        beforeChartFormat: "<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{playAsSoundButton}</div><div>{viewTableButton}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div><div>{annotationsTitle}{annotationsList}</div>",
                        afterChartFormat: "{endOfChartMarker}", axisRangeDateFormat: "%Y-%m-%d %H:%M:%S"
                    }, series: { descriptionFormat: "{seriesDescription}{authorDescription}{axisDescription}", describeSingleSeries: !1, pointDescriptionEnabledThreshold: 200 }, point: { valueDescriptionFormat: "{xDescription}{separator}{value}.", describeNull: !0 }, landmarkVerbosity: "all", linkedDescription: '*[data-highcharts-chart="{index}"] + .highcharts-description', keyboardNavigation: {
                        enabled: !0, focusBorder: {
                            enabled: !0, hideBrowserFocusOutline: !0, style: {
                                color: "#335cad",
                                lineWidth: 2, borderRadius: 3
                            }, margin: 2
                        }, order: ["series", "zoom", "rangeSelector", "legend", "chartMenu"], wrapAround: !0, seriesNavigation: { skipNullPoints: !0, pointNavigationEnabledThreshold: !1, rememberPointFocus: !1 }
                    }, announceNewData: { enabled: !1, minAnnounceInterval: 5E3, interruptUser: !1 }
                }, legend: { accessibility: { enabled: !0, keyboardNavigation: { enabled: !0 } } }, exporting: { accessibility: { enabled: !0 } }
            }
        }); x(a, "Accessibility/Options/LangOptions.js", [], function () {
            return {
                accessibility: {
                    defaultChartTitle: "Chart", chartContainerLabel: "{title}. Highcharts interactive chart.",
                    svgContainerLabel: "Interactive chart", drillUpButton: "{buttonText}", credits: "Chart credits: {creditsStr}", thousandsSep: ",", svgContainerTitle: "", graphicContainerLabel: "", screenReaderSection: {
                        beforeRegionLabel: "", afterRegionLabel: "", annotations: { heading: "Chart annotations summary", descriptionSinglePoint: "{annotationText}. Related to {annotationPoint}", descriptionMultiplePoints: "{annotationText}. Related to {annotationPoint}{ Also related to, #each(additionalAnnotationPoints)}", descriptionNoPoints: "{annotationText}" },
                        endOfChartMarker: "End of interactive chart."
                    }, sonification: { playAsSoundButtonText: "Play as sound, {chartTitle}", playAsSoundClickAnnouncement: "Play" }, legend: { legendLabelNoTitle: "Toggle series visibility, {chartTitle}", legendLabel: "Chart legend: {legendTitle}", legendItem: "Show {itemName}" }, zoom: { mapZoomIn: "Zoom chart", mapZoomOut: "Zoom out chart", resetZoomButton: "Reset zoom" }, rangeSelector: { dropdownLabel: "{rangeTitle}", minInputLabel: "Select start date.", maxInputLabel: "Select end date.", clickButtonAnnouncement: "Viewing {axisRangeDescription}" },
                    table: { viewAsDataTableButtonText: "View as data table, {chartTitle}", tableSummary: "Table representation of chart." }, announceNewData: { newDataAnnounce: "Updated data for chart {chartTitle}", newSeriesAnnounceSingle: "New data series: {seriesDesc}", newPointAnnounceSingle: "New data point: {pointDesc}", newSeriesAnnounceMultiple: "New data series in chart {chartTitle}: {seriesDesc}", newPointAnnounceMultiple: "New data point in chart {chartTitle}: {pointDesc}" }, seriesTypeDescriptions: {
                        boxplot: "Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.",
                        arearange: "Arearange charts are line charts displaying a range between a lower and higher value for each point.", areasplinerange: "These charts are line charts displaying a range between a lower and higher value for each point.", bubble: "Bubble charts are scatter charts where each data point also has a size value.", columnrange: "Columnrange charts are column charts displaying a range between a lower and higher value for each point.", errorbar: "Errorbar series are used to display the variability of the data.",
                        funnel: "Funnel charts are used to display reduction of data in stages.", pyramid: "Pyramid charts consist of a single pyramid with item heights corresponding to each point value.", waterfall: "A waterfall chart is a column chart where each column contributes towards a total end value."
                    }, chartTypes: {
                        emptyChart: "Empty chart", mapTypeDescription: "Map of {mapTitle} with {numSeries} data series.", unknownMap: "Map of unspecified region with {numSeries} data series.", combinationChart: "Combination chart with {numSeries} data series.",
                        defaultSingle: "Chart with {numPoints} data {#plural(numPoints, points, point)}.", defaultMultiple: "Chart with {numSeries} data series.", splineSingle: "Line chart with {numPoints} data {#plural(numPoints, points, point)}.", splineMultiple: "Line chart with {numSeries} lines.", lineSingle: "Line chart with {numPoints} data {#plural(numPoints, points, point)}.", lineMultiple: "Line chart with {numSeries} lines.", columnSingle: "Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.", columnMultiple: "Bar chart with {numSeries} data series.",
                        barSingle: "Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.", barMultiple: "Bar chart with {numSeries} data series.", pieSingle: "Pie chart with {numPoints} {#plural(numPoints, slices, slice)}.", pieMultiple: "Pie chart with {numSeries} pies.", scatterSingle: "Scatter chart with {numPoints} {#plural(numPoints, points, point)}.", scatterMultiple: "Scatter chart with {numSeries} data series.", boxplotSingle: "Boxplot with {numPoints} {#plural(numPoints, boxes, box)}.", boxplotMultiple: "Boxplot with {numSeries} data series.",
                        bubbleSingle: "Bubble chart with {numPoints} {#plural(numPoints, bubbles, bubble)}.", bubbleMultiple: "Bubble chart with {numSeries} data series."
                    }, axis: {
                        xAxisDescriptionSingular: "The chart has 1 X axis displaying {names[0]}. {ranges[0]}", xAxisDescriptionPlural: "The chart has {numAxes} X axes displaying {#each(names, -1) }and {names[-1]}.", yAxisDescriptionSingular: "The chart has 1 Y axis displaying {names[0]}. {ranges[0]}", yAxisDescriptionPlural: "The chart has {numAxes} Y axes displaying {#each(names, -1) }and {names[-1]}.",
                        timeRangeDays: "Data range: {range} days.", timeRangeHours: "Data range: {range} hours.", timeRangeMinutes: "Data range: {range} minutes.", timeRangeSeconds: "Data range: {range} seconds.", rangeFromTo: "Data ranges from {rangeFrom} to {rangeTo}.", rangeCategories: "Data range: {numCategories} categories."
                    }, exporting: { chartMenuLabel: "Chart menu", menuButtonLabel: "View chart menu, {chartTitle}" }, series: {
                        summary: {
                            "default": "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#plural(series.points.length, points, point)}.",
                            defaultCombination: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#plural(series.points.length, points, point)}.", line: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#plural(series.points.length, points, point)}.", lineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#plural(series.points.length, points, point)}.", spline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#plural(series.points.length, points, point)}.",
                            splineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#plural(series.points.length, points, point)}.", column: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#plural(series.points.length, bars, bar)}.", columnCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#plural(series.points.length, bars, bar)}.", bar: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#plural(series.points.length, bars, bar)}.",
                            barCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#plural(series.points.length, bars, bar)}.", pie: "{series.name}, pie {seriesNumber} of {chart.series.length} with {series.points.length} {#plural(series.points.length, slices, slice)}.", pieCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Pie with {series.points.length} {#plural(series.points.length, slices, slice)}.", scatter: "{series.name}, scatter plot {seriesNumber} of {chart.series.length} with {series.points.length} {#plural(series.points.length, points, point)}.",
                            scatterCombination: "{series.name}, series {seriesNumber} of {chart.series.length}, scatter plot with {series.points.length} {#plural(series.points.length, points, point)}.", boxplot: "{series.name}, boxplot {seriesNumber} of {chart.series.length} with {series.points.length} {#plural(series.points.length, boxes, box)}.", boxplotCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Boxplot with {series.points.length} {#plural(series.points.length, boxes, box)}.", bubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#plural(series.points.length, bubbles, bubble)}.",
                            bubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#plural(series.points.length, bubbles, bubble)}.", map: "{series.name}, map {seriesNumber} of {chart.series.length} with {series.points.length} {#plural(series.points.length, areas, area)}.", mapCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Map with {series.points.length} {#plural(series.points.length, areas, area)}.", mapline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#plural(series.points.length, points, point)}.",
                            maplineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#plural(series.points.length, points, point)}.", mapbubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#plural(series.points.length, bubbles, bubble)}.", mapbubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#plural(series.points.length, bubbles, bubble)}."
                        },
                        description: "{description}", xAxisDescription: "X axis, {name}", yAxisDescription: "Y axis, {name}", nullPointValue: "No value", pointAnnotationsDescription: "{Annotation: #each(annotations). }"
                    }
                }
            }
        }); x(a, "Accessibility/Options/DeprecatedOptions.js", [a["Core/Utilities.js"]], function (a) {
            function h(a, h, k) { for (var d, e = 0; e < h.length - 1; ++e)d = h[e], a = a[d] = y(a[d], {}); a[h[h.length - 1]] = k } function u(a, k, m, d) {
                function e(a, b) { return b.reduce(function (a, b) { return a[b] }, a) } var c = e(a.options, k), b = e(a.options, m); Object.keys(d).forEach(function (e) {
                    var f,
                    g = c[e]; "undefined" !== typeof g && (h(b, d[e], g), x(32, !1, a, (f = {}, f[k.join(".") + "." + e] = m.join(".") + "." + d[e].join("."), f)))
                })
            } function t(a) { var g = a.options.chart, h = a.options.accessibility || {};["description", "typeDescription"].forEach(function (d) { var e; g[d] && (h[d] = g[d], x(32, !1, a, (e = {}, e["chart." + d] = "use accessibility." + d, e))) }) } function n(a) { a.axes.forEach(function (g) { (g = g.options) && g.description && (g.accessibility = g.accessibility || {}, g.accessibility.description = g.description, x(32, !1, a, { "axis.description": "use axis.accessibility.description" })) }) }
            function k(a) {
                var g = { description: ["accessibility", "description"], exposeElementToA11y: ["accessibility", "exposeAsGroupOnly"], pointDescriptionFormatter: ["accessibility", "point", "descriptionFormatter"], skipKeyboardNavigation: ["accessibility", "keyboardNavigation", "enabled"], "accessibility.pointDescriptionFormatter": ["accessibility", "point", "descriptionFormatter"] }; a.series.forEach(function (k) {
                    Object.keys(g).forEach(function (d) {
                        var e, c = k.options[d]; "accessibility.pointDescriptionFormatter" === d && (c = k.options.accessibility &&
                            k.options.accessibility.pointDescriptionFormatter); "undefined" !== typeof c && (h(k.options, g[d], "skipKeyboardNavigation" === d ? !c : c), x(32, !1, a, (e = {}, e["series." + d] = "series." + g[d].join("."), e)))
                    })
                })
            } var x = a.error, y = a.pick; return function (a) {
                t(a); n(a); a.series && k(a); u(a, ["accessibility"], ["accessibility"], {
                    pointDateFormat: ["point", "dateFormat"], pointDateFormatter: ["point", "dateFormatter"], pointDescriptionFormatter: ["point", "descriptionFormatter"], pointDescriptionThreshold: ["series", "pointDescriptionEnabledThreshold"],
                    pointNavigationThreshold: ["keyboardNavigation", "seriesNavigation", "pointNavigationEnabledThreshold"], pointValueDecimals: ["point", "valueDecimals"], pointValuePrefix: ["point", "valuePrefix"], pointValueSuffix: ["point", "valueSuffix"], screenReaderSectionFormatter: ["screenReaderSection", "beforeChartFormatter"], describeSingleSeries: ["series", "describeSingleSeries"], seriesDescriptionFormatter: ["series", "descriptionFormatter"], onTableAnchorClick: ["screenReaderSection", "onViewDataTableClick"], axisRangeDateFormat: ["screenReaderSection",
                        "axisRangeDateFormat"]
                }); u(a, ["accessibility", "keyboardNavigation"], ["accessibility", "keyboardNavigation", "seriesNavigation"], { skipNullPoints: ["skipNullPoints"], mode: ["mode"] }); u(a, ["lang", "accessibility"], ["lang", "accessibility"], {
                    legendItem: ["legend", "legendItem"], legendLabel: ["legend", "legendLabel"], mapZoomIn: ["zoom", "mapZoomIn"], mapZoomOut: ["zoom", "mapZoomOut"], resetZoomButton: ["zoom", "resetZoomButton"], screenReaderRegionLabel: ["screenReaderSection", "beforeRegionLabel"], rangeSelectorButton: ["rangeSelector",
                        "buttonText"], rangeSelectorMaxInput: ["rangeSelector", "maxInputLabel"], rangeSelectorMinInput: ["rangeSelector", "minInputLabel"], svgContainerEnd: ["screenReaderSection", "endOfChartMarker"], viewAsDataTable: ["table", "viewAsDataTableButtonText"], tableSummary: ["table", "tableSummary"]
                })
            }
        }); x(a, "Accessibility/Accessibility.js", [a["Core/DefaultOptions.js"], a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/A11yI18n.js"], a["Accessibility/Components/ContainerComponent.js"], a["Accessibility/FocusBorder.js"],
        a["Accessibility/Components/InfoRegionsComponent.js"], a["Accessibility/KeyboardNavigation.js"], a["Accessibility/Components/LegendComponent.js"], a["Accessibility/Components/MenuComponent.js"], a["Accessibility/Components/SeriesComponent/NewDataAnnouncer.js"], a["Accessibility/ProxyProvider.js"], a["Accessibility/Components/RangeSelectorComponent.js"], a["Accessibility/Components/SeriesComponent/SeriesComponent.js"], a["Accessibility/Components/ZoomComponent.js"], a["Accessibility/HighContrastMode.js"], a["Accessibility/HighContrastTheme.js"],
        a["Accessibility/Options/Options.js"], a["Accessibility/Options/LangOptions.js"], a["Accessibility/Options/DeprecatedOptions.js"]], function (a, h, w, t, n, k, x, y, g, r, m, d, e, c, b, f, q, z, M, G) {
            a = a.defaultOptions; var u = h.doc, A = w.addEvent, E = w.extend, B = w.fireEvent, C = w.merge; h = function () {
                function a(a) { this.proxyProvider = this.keyboardNavigation = this.components = this.chart = void 0; this.init(a) } a.prototype.init = function (a) {
                    this.chart = a; u.addEventListener && a.renderer.isSVG ? (G(a), this.proxyProvider = new d(this.chart), this.initComponents(),
                        this.keyboardNavigation = new y(a, this.components)) : (this.zombie = !0, this.components = {}, a.renderTo.setAttribute("aria-hidden", !0))
                }; a.prototype.initComponents = function () { var a = this.chart, d = this.proxyProvider, f = a.options.accessibility; this.components = { container: new n, infoRegions: new x, legend: new g, chartMenu: new r, rangeSelector: new e, series: new c, zoom: new b }; f.customComponents && E(this.components, f.customComponents); var h = this.components; this.getComponentOrder().forEach(function (b) { h[b].initBase(a, d); h[b].init() }) };
                a.prototype.getComponentOrder = function () { if (!this.components) return []; if (!this.components.series) return Object.keys(this.components); var a = Object.keys(this.components).filter(function (a) { return "series" !== a }); return ["series"].concat(a) }; a.prototype.update = function () {
                    var a = this.components, b = this.chart, c = b.options.accessibility; B(b, "beforeA11yUpdate"); b.types = this.getChartTypes(); c = c.keyboardNavigation.order; this.proxyProvider.updateGroupOrder(c); this.getComponentOrder().forEach(function (c) {
                        a[c].onChartUpdate();
                        B(b, "afterA11yComponentUpdate", { name: c, component: a[c] })
                    }); this.keyboardNavigation.update(c); !b.highContrastModeActive && f.isHighContrastModeActive() && f.setHighContrastTheme(b); B(b, "afterA11yUpdate", { accessibility: this })
                }; a.prototype.destroy = function () {
                    var a = this.chart || {}, b = this.components; Object.keys(b).forEach(function (a) { b[a].destroy(); b[a].destroyBase() }); this.proxyProvider && this.proxyProvider.destroy(); this.keyboardNavigation && this.keyboardNavigation.destroy(); a.renderTo && a.renderTo.setAttribute("aria-hidden",
                        !0); a.focusElement && a.focusElement.removeFocusBorder()
                }; a.prototype.getChartTypes = function () { var a = {}; this.chart.series.forEach(function (b) { a[b.type] = 1 }); return Object.keys(a) }; return a
            }(); (function (a) {
                function d() { this.accessibility && this.accessibility.destroy() } function f() { this.a11yDirty && this.renderTo && (delete this.a11yDirty, this.updateA11yEnabled()); var a = this.accessibility; a && !a.zombie && (a.proxyProvider.updateProxyElementPositions(), a.getComponentOrder().forEach(function (b) { a.components[b].onChartRender() })) }
                function h(a) { if (a = a.options.accessibility) a.customComponents && (this.options.accessibility.customComponents = a.customComponents, delete a.customComponents), C(!0, this.options.accessibility, a), this.accessibility && this.accessibility.destroy && (this.accessibility.destroy(), delete this.accessibility); this.a11yDirty = !0 } function n() {
                    var b = this.accessibility, c = this.options.accessibility; c && c.enabled ? b && !b.zombie ? b.update() : (this.accessibility = b = new a(this), !b.zombie) && b.update() : b ? (b.destroy && b.destroy(), delete this.accessibility) :
                        this.renderTo.setAttribute("aria-hidden", !0)
                } function u() { this.series.chart.accessibility && (this.series.chart.a11yDirty = !0) } var q = []; a.i18nFormat = t.i18nFormat; a.compose = function (a, l, p, v, w, x, z) {
                    y.compose(l); m.compose(w); g.compose(l, p); r.compose(l); c.compose(l, v, w); b.compose(a); t.compose(l); k.compose(l, x); z && e.compose(l, z); -1 === q.indexOf(l) && (q.push(l), l.prototype.updateA11yEnabled = n, A(l, "destroy", d), A(l, "render", f), A(l, "update", h), ["addSeries", "init"].forEach(function (a) {
                        A(l, a, function () {
                            this.a11yDirty =
                            !0
                        })
                    }), ["afterApplyDrilldown", "drillupall"].forEach(function (a) { A(l, a, function () { var a = this.accessibility; a && !a.zombie && a.update() }) })); -1 === q.indexOf(v) && (q.push(v), A(v, "update", u)); -1 === q.indexOf(w) && (q.push(w), ["update", "updatedData", "remove"].forEach(function (a) { A(w, a, function () { this.chart.accessibility && (this.chart.a11yDirty = !0) }) }))
                }
            })(h || (h = {})); C(!0, a, z, { accessibility: { highContrastTheme: q }, lang: M }); return h
        }); x(a, "masters/modules/accessibility.src.js", [a["Core/Globals.js"], a["Accessibility/Accessibility.js"],
        a["Accessibility/AccessibilityComponent.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/HTMLUtilities.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Accessibility/Components/SeriesComponent/SeriesDescriber.js"]], function (a, h, w, t, n, k, x) { a.i18nFormat = h.i18nFormat; a.A11yChartUtilities = t; a.A11yHTMLUtilities = n; a.AccessibilityComponent = w; a.KeyboardNavigationHandler = k; a.SeriesAccessibilityDescriber = x; h.compose(a.Axis, a.Chart, a.Legend, a.Point, a.Series, a.SVGElement, a.RangeSelector) })
});
//# sourceMappingURL=accessibility.js.map