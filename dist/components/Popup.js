"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./popup.css");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Popup = props => {
  return props.trigger ? /*#__PURE__*/_react.default.createElement("div", {
    className: "popup"
  }, props.children, /*#__PURE__*/_react.default.createElement("button", {
    className: "popup-button",
    type: "button",
    onClick: () => props.setTrigger(false)
  }, "Close")) : "";
};
var _default = Popup;
exports.default = _default;