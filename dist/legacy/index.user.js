// ==UserScript==
// @author          Oleg Valter <oleg.a.valter@gmail.com>
// @description     Teaching SE's character counter how to count
// @grant           none
// @homepage        https://github.com/userscripters/unicode-char-counter#readme
// @match           https://*.askubuntu.com/questions/*
// @match           https://*.mathoverflow.net/questions/*
// @match           https://*.serverfault.com/questions/*
// @match           https://*.stackapps.com/questions/*
// @match           https://*.stackexchange.com/questions/*
// @match           https://*.stackoverflow.com/questions/*
// @name            unicode-char-counter
// @namespace       userscripters
// @run-at          document-start
// @source          git+https://github.com/userscripters/unicode-char-counter.git
// @supportURL      https://github.com/userscripters/unicode-char-counter/issues
// @version         0.1.0
// ==/UserScript==

"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
(function (w, d) {
    var safeStringLength = function (text) {
        var e_1, _a;
        var count = 0;
        var ZWJ = 8205;
        var variationSelectorMatch = /[\ufe00-\ufe0F]/;
        var skipNextChar = false;
        try {
            for (var text_1 = __values(text), text_1_1 = text_1.next(); !text_1_1.done; text_1_1 = text_1.next()) {
                var char = text_1_1.value;
                if (skipNextChar) {
                    skipNextChar = false;
                    continue;
                }
                if (variationSelectorMatch.test(char))
                    continue;
                var code = char.codePointAt(0);
                if (code === ZWJ) {
                    skipNextChar = true;
                    continue;
                }
                count += 1;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (text_1_1 && !text_1_1.done && (_a = text_1.return)) _a.call(text_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return count;
    };
    w.addEventListener("load", function () {
        var friendlyCounter = d.createElement("div");
        friendlyCounter.classList.add("flex--item", "ta-right", "mr0", "fs-caption", "mt4", "cool");
        var colorMap = {
            "warm": 0.4,
            "hot": 0.6,
            "supernova": 0.8,
            "fc-red-400": 1,
        };
        var colorEntries = Object.entries(colorMap);
        var colorClasses = Object.keys(colorMap);
        d.addEventListener("input", function (_a) {
            var _b;
            var target = _a.target;
            if (target.id !== "title")
                return;
            var counter = (_b = target
                .closest(".js-stacks-validation")) === null || _b === void 0 ? void 0 : _b.querySelector(".text-counter");
            if (!counter)
                return;
            if (!counter.classList.contains("d-none")) {
                counter.classList.add("d-none");
                counter.after(friendlyCounter);
            }
            var _c = target, _d = _c.dataset.maxLength, maxLength = _d === void 0 ? "0" : _d, value = _c.value;
            var max = +maxLength;
            var ourLength = safeStringLength(value);
            var theirLength = value.length;
            var ourLeft = max - ourLength;
            var theirLeft = max - theirLength;
            var unfriendlyCount = counter.textContent;
            if (!unfriendlyCount)
                return (friendlyCounter.textContent = "");
            var agreement = theirLeft === ourLeft ? "and" : "but";
            var ours = ourLeft >= 0
                ? ourLeft + " char" + (ourLeft !== 1 ? "s" : "")
                : "over by " + Math.abs(ourLeft);
            var theirs = theirLeft >= 0
                ? theirLeft + " left"
                : "is over by " + Math.abs(theirLeft);
            friendlyCounter.textContent = ours + " (of " + max + ") left (" + agreement + " SE thinks " + theirs + ")";
            var matchingColors = colorEntries.filter(function (_a) {
                var _b = __read(_a, 2), _color = _b[0], mod = _b[1];
                return max * mod < ourLength;
            });
            var _e = __read(matchingColors.reduce(function (a, c) { return (a[1] < c[1] ? c : a); }, ["cool", 0]), 1), colorCls = _e[0];
            var classList = friendlyCounter.classList;
            classList.remove.apply(classList, __spreadArray([], __read(colorClasses)));
            classList.add(colorCls);
        });
    });
})(window, document);
