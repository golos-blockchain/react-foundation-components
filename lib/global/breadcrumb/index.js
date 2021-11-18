'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbItem = exports.Breadcrumb = undefined;

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

var Breadcrumb = function Breadcrumb(_ref) {
  var className = _ref.className,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['className']);

  var classNames = (0, _classnames2.default)(className, cxStyles('breadcrumbs'));

  return _react2.default.createElement('ul', (0, _extends3.default)({}, restProps, { className: classNames }));
};

exports.Breadcrumb = Breadcrumb;
Breadcrumb.propTypes = {
  className: _propTypes2.default.string
};

var BreadcrumbItem = function BreadcrumbItem(_ref2) {
  var className = _ref2.className,
      disabled = _ref2.disabled,
      restProps = (0, _objectWithoutProperties3.default)(_ref2, ['className', 'disabled']);

  var classNames = (0, _classnames2.default)(className, cxStyles({ disabled: disabled }));

  return _react2.default.createElement('li', (0, _extends3.default)({}, restProps, { className: classNames }));
};

exports.BreadcrumbItem = BreadcrumbItem;
BreadcrumbItem.propTypes = {
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool
};

Breadcrumb.Item = BreadcrumbItem;

exports.default = Breadcrumb;