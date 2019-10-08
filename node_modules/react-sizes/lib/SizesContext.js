"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SizesContext = _react.default.createContext({
  fallbackWidth: null,
  fallbackHeight: null,
  forceFallback: false,
  throttle: 200
});

SizesContext.displayName = 'SizesContext';
var _default = SizesContext;
exports.default = _default;