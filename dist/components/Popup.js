"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./popup.css");
const Popup = props => {
  return props.trigger ? /*#__PURE__*/React.createElement("div", {
    className: "popup"
  }, props.children, /*#__PURE__*/React.createElement("button", {
    className: "popup-button",
    type: "button",
    onClick: () => props.setTrigger(false)
  }, "Close")) : "";
};
var _default = Popup;
exports.default = _default;