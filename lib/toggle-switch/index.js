'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleSwitch = exports.ToggleSwitchItem = undefined;

var _isInteger = require('babel-runtime/core-js/number/is-integer');

var _isInteger2 = _interopRequireDefault(_isInteger);

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

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _constants = require('../util/constants');

var _float = require('../float');

var _callout = require('../callout');

var _button = require('../button');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var ToggleSwitchItem = function ToggleSwitchItem(_ref) {
  var className = _ref.className,
      eventKey = _ref.eventKey,
      onClick = _ref.onClick,
      onSelect = _ref.onSelect,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'eventKey', 'onClick', 'onSelect']);

  var classNames = (0, _classnames2.default)(className, cxStyles('switch-toggle-item'));
  var onTitleClick = function onTitleClick() {
    if (onClick) {
      onClick.apply(undefined, arguments);
    }

    if (onSelect) {
      onSelect(eventKey);
    }
  };

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames, onClick: onTitleClick }));
};

exports.ToggleSwitchItem = ToggleSwitchItem;
ToggleSwitchItem.propTypes = {
  className: _propTypes2.default.string,
  eventKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onClick: _propTypes2.default.func,
  onSelect: _propTypes2.default.func
};

var ToggleSwitchControlled = function ToggleSwitchControlled(_ref2) {
  var activeKey = _ref2.activeKey,
      children = _ref2.children,
      className = _ref2.className,
      onSelect = _ref2.onSelect,
      paddleClassName = _ref2.paddleClassName,
      paddleColor = _ref2.paddleColor,
      paddleStyle = _ref2.paddleStyle,
      restProps = (0, _objectWithoutProperties3.default)(_ref2, ['activeKey', 'children', 'className', 'onSelect', 'paddleClassName', 'paddleColor', 'paddleStyle']);

  var classNames = (0, _classnames2.default)(className, cxStyles('switch-toggle'));
  var paddleClassNames = (0, _classnames2.default)(paddleClassName, cxStyles('switch-toggle-paddle'));
  var childrenCount = _react.Children.count(children);
  var width = childrenCount > 0 ? 100 / childrenCount : 0;
  var paddle = null;
  var selectedIndex = null;
  var clonedChildren = _react.Children.map(children, function (child, index) {
    if ((0, _react.isValidElement)(child)) {
      if (child.props.eventKey === activeKey) {
        selectedIndex = index;
      }

      return (0, _react.cloneElement)(child, { onSelect: onSelect, style: (0, _extends3.default)({}, child.props.style, { width: width + '%' }) });
    }

    return child;
  });

  if ((0, _isInteger2.default)(selectedIndex)) {
    paddle = _react2.default.createElement(_button.Button, {
      className: paddleClassNames,
      color: paddleColor,
      style: (0, _extends3.default)({}, paddleStyle, { width: width + '%', left: width * selectedIndex + '%' })
    });
  }

  return _react2.default.createElement(
    _float.ClearFix,
    { noWrap: true },
    _react2.default.createElement(
      _callout.Callout,
      (0, _extends3.default)({}, restProps, { className: classNames }),
      clonedChildren,
      paddle
    )
  );
};

ToggleSwitchControlled.propTypes = {
  activeKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  onSelect: _propTypes2.default.func,
  paddleClassName: _propTypes2.default.string,
  paddleColor: _propTypes2.default.oneOf(_constants.COMPONENT_COLORS),
  paddleStyle: _propTypes2.default.object
};

var ToggleSwitch = exports.ToggleSwitch = (0, _uncontrollable2.default)(ToggleSwitchControlled, { activeKey: 'onSelect' });
ToggleSwitch.displayName = 'ToggleSwitch';

ToggleSwitch.Item = ToggleSwitchItem;

exports.default = ToggleSwitch;