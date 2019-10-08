"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SizesContext = _interopRequireDefault(require("./SizesContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SizesProvider = function SizesProvider(_ref) {
  var config = _ref.config,
      children = _ref.children;
  return _react.default.createElement(_SizesContext.default.Provider, {
    value: config
  }, children);
};

var _default = SizesProvider;
exports.default = _default;