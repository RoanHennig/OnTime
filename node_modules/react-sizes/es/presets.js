"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTabletAndSmaller = exports.isTabletAndGreater = exports.isStDesktop = exports.isStTablet = exports.isGtTablet = exports.isGtMobile = exports.isDesktop = exports.isTablet = exports.isMobile = void 0;

var isMobile = function isMobile(_ref) {
  var width = _ref.width;
  return width < 480;
};

exports.isMobile = isMobile;

var isTablet = function isTablet(_ref2) {
  var width = _ref2.width;
  return width >= 480 && width < 1024;
};

exports.isTablet = isTablet;

var isDesktop = function isDesktop(_ref3) {
  var width = _ref3.width;
  return width >= 1024;
};

exports.isDesktop = isDesktop;

var isGtMobile = function isGtMobile(sizes) {
  return !isMobile(sizes);
};

exports.isGtMobile = isGtMobile;

var isGtTablet = function isGtTablet(sizes) {
  return isDesktop(sizes);
};

exports.isGtTablet = isGtTablet;

var isStTablet = function isStTablet(sizes) {
  return isMobile(sizes);
};

exports.isStTablet = isStTablet;

var isStDesktop = function isStDesktop(sizes) {
  return !isDesktop(sizes);
};

exports.isStDesktop = isStDesktop;

var isTabletAndGreater = function isTabletAndGreater(sizes) {
  return !isMobile(sizes);
};

exports.isTabletAndGreater = isTabletAndGreater;

var isTabletAndSmaller = function isTabletAndSmaller(sizes) {
  return !isStDesktop(sizes);
};

exports.isTabletAndSmaller = isTabletAndSmaller;