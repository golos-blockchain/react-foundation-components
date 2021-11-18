'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkWithTooltip = exports.Tooltip = undefined;

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

var _overlayTrigger = require('../../util/overlay-trigger');

var _overlayTrigger2 = _interopRequireDefault(_overlayTrigger);

var _fade = require('../fade');

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Tooltip = function Tooltip(_ref) {
  var className = _ref.className,
      position = _ref.position,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'position']);

  var classNames = (0, _classnames2.default)(className, cxStyles('tooltip', (0, _defineProperty3.default)({}, position, (0, _includes2.default)(_constants.OVERLAY_POSITIONS_INTERNAL, position))));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames, role: 'tooltip' }));
};

exports.Tooltip = Tooltip;
Tooltip.propTypes = {
  className: _propTypes2.default.string,
  position: _propTypes2.default.oneOf(_constants.OVERLAY_POSITIONS)
};
Tooltip.defaultProps = {
  position: 'bottom'
};

var TooltipOverlay = function TooltipOverlay(_ref2) {
  var placement = _ref2.placement,
      arrowOffsetLeft = _ref2.arrowOffsetLeft,
      arrowOffsetTop = _ref2.arrowOffsetTop,
      positionLeft = _ref2.positionLeft,
      positionTop = _ref2.positionTop,
      restProps = (0, _objectWithoutProperties3.default)(_ref2, ['placement', 'arrowOffsetLeft', 'arrowOffsetTop', 'positionLeft', 'positionTop']);
  return _react2.default.createElement(Tooltip, restProps);
};

var LinkWithTooltip = function LinkWithTooltip(_ref3) {
  var children = _ref3.children,
      tooltipAlignment = _ref3.tooltipAlignment,
      tooltipClassName = _ref3.tooltipClassName,
      tooltipContent = _ref3.tooltipContent,
      tooltipIndicator = _ref3.tooltipIndicator,
      tooltipId = _ref3.tooltipId,
      tooltipPosition = _ref3.tooltipPosition,
      tooltipStyle = _ref3.tooltipStyle,
      restProps = (0, _objectWithoutProperties3.default)(_ref3, ['children', 'tooltipAlignment', 'tooltipClassName', 'tooltipContent', 'tooltipIndicator', 'tooltipId', 'tooltipPosition', 'tooltipStyle']);

  var childProps = {
    'aria-haspopup': true,
    'aria-describedby': tooltipId
  };
  var childClassNames = cxStyles({ 'has-tip': tooltipIndicator });
  var clonedChild = null;

  if ((0, _react.isValidElement)(children)) {
    clonedChild = (0, _react.cloneElement)(children, (0, _extends3.default)({}, childProps, {
      className: (0, _classnames2.default)(children.props.className, childClassNames)
    }));
  } else {
    clonedChild = _react2.default.createElement(
      'span',
      (0, _extends3.default)({}, childProps, { className: childClassNames }),
      children
    );
  }

  var tooltip = _react2.default.createElement(
    TooltipOverlay,
    {
      className: tooltipClassName,
      id: tooltipId,
      position: tooltipPosition,
      style: tooltipStyle
    },
    tooltipContent
  );

  return _react2.default.createElement(
    _overlayTrigger2.default,
    (0, _extends3.default)({}, restProps, {
      alignment: tooltipAlignment,
      overlay: tooltip,
      position: tooltipPosition
    }),
    clonedChild
  );
};

exports.LinkWithTooltip = LinkWithTooltip;
LinkWithTooltip.propTypes = {
  children: _propTypes2.default.node,
  tooltipAlignment: _propTypes2.default.oneOf(_constants.OVERLAY_ALIGNMENTS),
  tooltipClassName: _propTypes2.default.string,
  tooltipContent: _propTypes2.default.node,
  tooltipIndicator: _propTypes2.default.bool,
  tooltipId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  tooltipPosition: _propTypes2.default.oneOf(_constants.OVERLAY_POSITIONS),
  tooltipStyle: _propTypes2.default.object
};
LinkWithTooltip.defaultProps = {
  closeOnClickOutside: true,
  tooltipIndicator: true,
  tooltipPosition: 'bottom',
  transition: _fade.Fade,
  triggerClick: true,
  triggerFocus: true,
  triggerHover: true
};

Tooltip.LinkWith = LinkWithTooltip;

exports.default = Tooltip;