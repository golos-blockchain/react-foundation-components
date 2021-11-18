'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = undefined;

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

var _bind = require('classnames');

var _bind2 = _interopRequireDefault(_bind);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../../util/constants');

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var ProgressBar = function ProgressBar(_ref) {
  var className = _ref.className,
      color = _ref.color,
      labelFormatter = _ref.labelFormatter,
      max = _ref.max,
      meterClassName = _ref.meterClassName,
      meterStyle = _ref.meterStyle,
      meterTextClassName = _ref.meterTextClassName,
      meterTextStyle = _ref.meterTextStyle,
      min = _ref.min,
      value = _ref.value,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'color', 'labelFormatter', 'max', 'meterClassName', 'meterStyle', 'meterTextClassName', 'meterTextStyle', 'min', 'value']);

  var classNames = (0, _classnames2.default)(className, cxStyles('progress', (0, _defineProperty3.default)({}, color, (0, _includes2.default)(_constants.COMPONENT_COLORS, color))));
  var meterClassNames = (0, _classnames2.default)(meterClassName, cxStyles('progress-meter'));
  var boundedValue = Math.min(Math.max(min, value), max);
  var percent = (boundedValue - min) / (max - min);
  var width = Math.round(percent * 100 * 1000) / 1000;
  var label = null;

  if (labelFormatter) {
    var meterTextClassNames = (0, _classnames2.default)(meterTextClassName, cxStyles('progress-meter-text'));

    label = _react2.default.createElement(
      'span',
      { className: meterTextClassNames, style: meterTextStyle },
      labelFormatter(percent, boundedValue, min, max)
    );
  }

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, restProps, {
      'aria-valuemax': max,
      'aria-valuemin': min,
      'aria-valuenow': boundedValue,
      'aria-valuetext': label,
      className: classNames,
      role: 'progressbar'
    }),
    _react2.default.createElement(
      'span',
      { className: meterClassNames, style: (0, _extends3.default)({}, meterStyle, { width: width + '%' }) },
      label
    )
  );
};

exports.ProgressBar = ProgressBar;
ProgressBar.propTypes = {
  className: _propTypes2.default.string,
  color: _propTypes2.default.oneOf(_constants.COMPONENT_COLORS),
  labelFormatter: _propTypes2.default.func,
  max: _propTypes2.default.number,
  meterClassName: _propTypes2.default.string,
  meterStyle: _propTypes2.default.object,
  meterTextClassName: _propTypes2.default.string,
  meterTextStyle: _propTypes2.default.object,
  min: _propTypes2.default.number,
  value: _propTypes2.default.number
};
ProgressBar.defaultProps = {
  max: 100,
  min: 0,
  value: 0
};

exports.default = ProgressBar;