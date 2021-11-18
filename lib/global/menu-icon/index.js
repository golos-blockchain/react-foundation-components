'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuIcon = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames');

var _bind2 = _interopRequireDefault(_bind);

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var MenuIcon = function MenuIcon(_ref) {
  var className = _ref.className,
      dark = _ref.dark,
      controls = _ref.controls,
      open = _ref.open,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'dark', 'controls', 'open']);

  var classNames = (0, _classnames2.default)(className, cxStyles('menu-icon', { dark: dark }));

  return _react2.default.createElement('button', (0, _extends3.default)({}, restProps, {
    'aria-controls': controls,
    'aria-expanded': open,
    className: classNames,
    type: 'button'
  }));
};

exports.MenuIcon = MenuIcon;
MenuIcon.propTypes = {
  className: _propTypes2.default.string,
  dark: _propTypes2.default.bool,
  controls: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  open: _propTypes2.default.bool
};

exports.default = MenuIcon;