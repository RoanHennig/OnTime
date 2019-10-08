"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _withSizes = _interopRequireDefault(require("./withSizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Conductor = function Conductor(_ref) {
  var children = _ref.children,
      render = _ref.render,
      props = _objectWithoutProperties(_ref, ["children", "render"]);

  var fn = children || render;
  return fn ? fn(props) : null;
};

var createSizedComponent = function createSizedComponent() {
  for (var _len = arguments.length, mapSizesToProps = new Array(_len), _key = 0; _key < _len; _key++) {
    mapSizesToProps[_key] = arguments[_key];
  }

  return (0, _withSizes.default)(mapSizesToProps)(Conductor);
};

var _default = createSizedComponent;
exports.default = _default;