'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../util/constants');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Button = function Button(_ref) {
  var _cxStyles;

  var className = _ref.className,
      color = _ref.color,
      disabled = _ref.disabled,
      dropdown = _ref.dropdown,
      dropdownArrowOnly = _ref.dropdownArrowOnly,
      expanded = _ref.expanded,
      hollow = _ref.hollow,
      href = _ref.href,
      size = _ref.size,
      target = _ref.target,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'color', 'disabled', 'dropdown', 'dropdownArrowOnly', 'expanded', 'hollow', 'href', 'size', 'target']);

  var classNames = (0, _classnames2.default)(className, cxStyles('button', (_cxStyles = {}, (0, _defineProperty3.default)(_cxStyles, color, (0, _includes2.default)(_constants.COMPONENT_COLORS, color)), (0, _defineProperty3.default)(_cxStyles, 'disabled', disabled), (0, _defineProperty3.default)(_cxStyles, 'dropdown', dropdown), (0, _defineProperty3.default)(_cxStyles, 'arrow-only', dropdown && dropdownArrowOnly), (0, _defineProperty3.default)(_cxStyles, 'expanded', expanded), (0, _defineProperty3.default)(_cxStyles, 'hollow', hollow), (0, _defineProperty3.default)(_cxStyles, size, (0, _includes2.default)(_constants.COMPONENT_SIZES, size)), _cxStyles)));

  if (href || target) {
    return _react2.default.createElement('a', (0, _extends3.default)({}, restProps, {
      'aria-disabled': disabled,
      className: classNames,
      href: href || '#',
      target: target,
      role: 'button'
    }));
  }

  return _react2.default.createElement('button', (0, _extends3.default)({}, restProps, { className: classNames, disabled: disabled }));
};

exports.Button = Button;
Button.propTypes = {
  className: _propTypes2.default.string,
  color: _propTypes2.default.oneOf(_constants.COMPONENT_COLORS),
  disabled: _propTypes2.default.bool,
  dropdown: _propTypes2.default.bool,
  dropdownArrowOnly: _propTypes2.default.bool,
  expanded: _propTypes2.default.bool,
  hollow: _propTypes2.default.bool,
  href: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(_constants.COMPONENT_SIZES),
  target: _propTypes2.default.string
};
Button.defaultProps = {
  type: 'button'
};

exports.default = Button;