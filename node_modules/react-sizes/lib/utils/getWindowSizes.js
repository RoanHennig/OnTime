"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getWindowSizes = function getWindowSizes(_ref) {
  var _ref$fallbackWidth = _ref.fallbackWidth,
      fallbackWidth = _ref$fallbackWidth === void 0 ? null : _ref$fallbackWidth,
      _ref$fallbackHeight = _ref.fallbackHeight,
      fallbackHeight = _ref$fallbackHeight === void 0 ? null : _ref$fallbackHeight,
      _ref$forceFallback = _ref.forceFallback,
      forceFallback = _ref$forceFallback === void 0 ? false : _ref$forceFallback;
  var canUseDOM = typeof window !== 'undefined';
  return {
    width: canUseDOM && !forceFallback ? window.innerWidth : fallbackWidth,
    height: canUseDOM && !forceFallback ? window.innerHeight : fallbackHeight,
    canUseDOM: canUseDOM
  };
};

var _default = getWindowSizes;
exports.default = _default;