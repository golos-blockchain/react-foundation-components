'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = undefined;

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

var Table = function Table(_ref) {
  var className = _ref.className,
      containerClassName = _ref.containerClassName,
      containerStyle = _ref.containerStyle,
      hover = _ref.hover,
      scroll = _ref.scroll,
      scrollContainerClassName = _ref.scrollContainerClassName,
      scrollContainerStyle = _ref.scrollContainerStyle,
      stack = _ref.stack,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'containerClassName', 'containerStyle', 'hover', 'scroll', 'scrollContainerClassName', 'scrollContainerStyle', 'stack']);

  var containerClassNames = (0, _classnames2.default)(containerClassName, cxStyles('table'));
  var classNames = (0, _classnames2.default)(className, cxStyles({ hover: hover, stack: stack }));
  var table = _react2.default.createElement('table', (0, _extends3.default)({}, restProps, { className: classNames }));

  if (scroll) {
    var scrollContainerClassNames = (0, _classnames2.default)(scrollContainerClassName, cxStyles('table-scroll'));

    table = _react2.default.createElement(
      'div',
      { className: scrollContainerClassNames, style: scrollContainerStyle },
      table
    );
  }

  return _react2.default.createElement(
    'div',
    { className: containerClassNames, style: containerStyle },
    table
  );
};

exports.Table = Table;
Table.propTypes = {
  className: _propTypes2.default.string,
  containerClassName: _propTypes2.default.string,
  containerStyle: _propTypes2.default.object,
  hover: _propTypes2.default.bool,
  scroll: _propTypes2.default.bool,
  scrollContainerClassName: _propTypes2.default.string,
  scrollContainerStyle: _propTypes2.default.object,
  stack: _propTypes2.default.bool
};

exports.default = Table;