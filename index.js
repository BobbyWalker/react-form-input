"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormInputText = exports.FormInputLabel = exports.FormInputGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background: none;\n    background-color: transparent;\n    color: ", ";\n    font-size: 18px;\n    padding: 10px 10px 10px 5px;\n    display: block;\n    width: 100%;\n    border: none;\n    border-radius: 0;\n    border-bottom: 1px solid ", ";\n    margin: 25px 0;\n    \n    letter-spacing: ", ";\n    \n    &:focus {\n        outline: none;\n    }\n    &:focus ~ ", " {\n            ", "\n        }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 16px;\n    font-weight: normal;\n    position: absolute;\n    pointer-events: none;\n    left: 5px;\n    top: 50%;\n    transform: translateY(-50%);\n    transition: 300ms ease all;\n    ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    margin: 45px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    top: -15px;\n    font-size: 12px;\n    transform: translateY(0);\n    color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mainColor = 'black';
var mainColorInverted = 'white';
var subColor = 'grey';
var subColorInverted = 'lightgrey';
var shrinkLabel = (0, _styledComponents.css)(_templateObject(), function (props) {
  return props.light ? mainColorInverted : mainColor;
});

var FormInputGroup = _styledComponents["default"].div(_templateObject2());

exports.FormInputGroup = FormInputGroup;

var FormInputLabel = _styledComponents["default"].label(_templateObject3(), function (props) {
  return props.light ? subColorInverted : subColor;
}, function (props) {
  return props.shrink && shrinkLabel;
});

exports.FormInputLabel = FormInputLabel;

var FormInputText = _styledComponents["default"].input(_templateObject4(), function (props) {
  return props.light ? subColorInverted : subColor;
}, function (props) {
  return props.light ? subColorInverted : subColor;
}, function (props) {
  return props.type === 'password' ? '0.3em' : 'inherit';
}, FormInputLabel, shrinkLabel);

exports.FormInputText = FormInputText;

var FormInput = function FormInput(_ref) {
  var handleChange = _ref.handleChange,
      containerClasses = _ref.containerClasses,
      labelClasses = _ref.labelClasses,
      inputClasses = _ref.inputClasses,
      label = _ref.label,
      otherProps = _objectWithoutProperties(_ref, ["handleChange", "containerClasses", "labelClasses", "inputClasses", "label"]);

  return /*#__PURE__*/_react["default"].createElement(FormInputGroup, {
    className: containerClasses
  }, /*#__PURE__*/_react["default"].createElement(FormInputText, _extends({
    onChange: handleChange,
    className: inputClasses
  }, otherProps)), label && /*#__PURE__*/_react["default"].createElement(FormInputLabel, {
    className: labelClasses,
    light: otherProps.light,
    shrink: otherProps.value.length
  }, label));
};

var _default = FormInput;
exports["default"] = _default;
