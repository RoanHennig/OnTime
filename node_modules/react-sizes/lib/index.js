"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withSizes", {
  enumerable: true,
  get: function get() {
    return _withSizes.default;
  }
});
Object.defineProperty(exports, "SizesProvider", {
  enumerable: true,
  get: function get() {
    return _SizesProvider.default;
  }
});
Object.defineProperty(exports, "createSizedComponent", {
  enumerable: true,
  get: function get() {
    return _createSizedComponent.default;
  }
});
exports.presets = exports.default = void 0;

var _withSizes = _interopRequireDefault(require("./withSizes"));

var _SizesProvider = _interopRequireDefault(require("./SizesProvider"));

var _createSizedComponent = _interopRequireDefault(require("./createSizedComponent"));

var presets = _interopRequireWildcard(require("./presets"));

exports.presets = presets;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _withSizes.default;
exports.default = _default;