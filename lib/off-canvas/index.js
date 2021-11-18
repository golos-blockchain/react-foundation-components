'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OffCanvasContainer = exports.OffCanvasContent = exports.OffCanvas = undefined;

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

var OffCanvas = function OffCanvas(_ref) {
  var _cxStyles;

  var className = _ref.className,
      position = _ref.position,
      revealFor = _ref.revealFor,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'position', 'revealFor']);

  var classNames = (0, _classnames2.default)(className, cxStyles('off-canvas', (_cxStyles = {}, (0, _defineProperty3.default)(_cxStyles, 'position-' + position, (0, _includes2.default)(_constants.OFF_CANVAS_POSITIONS, position)), (0, _defineProperty3.default)(_cxStyles, 'reveal-for-' + revealFor, (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, revealFor)), _cxStyles)));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames }));
};

exports.OffCanvas = OffCanvas;
OffCanvas.propTypes = {
  className: _propTypes2.default.string,
  position: _propTypes2.default.oneOf(_constants.OFF_CANVAS_POSITIONS),
  revealFor: _propTypes2.default.oneOf(_constants.LARGER_SCREEN_SIZES)
};

var OffCanvasContent = function OffCanvasContent(_ref2) {
  var blocked = _ref2.blocked,
      children = _ref2.children,
      className = _ref2.className,
      contentBlockerClassName = _ref2.contentBlockerClassName,
      contentBlockerStyle = _ref2.contentBlockerStyle,
      onContentBlockerClick = _ref2.onContentBlockerClick,
      restProps = (0, _objectWithoutProperties3.default)(_ref2, ['blocked', 'children', 'className', 'contentBlockerClassName', 'contentBlockerStyle', 'onContentBlockerClick']);

  var classNames = (0, _classnames2.default)(className, cxStyles('off-canvas-content'));
  var contentBlockerClassNames = (0, _classnames2.default)(contentBlockerClassName, cxStyles('js-off-canvas-exit'));

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, restProps, { className: classNames }),
    children,
    _react2.default.createElement('div', {
      className: contentBlockerClassNames,
      onClick: onContentBlockerClick,
      style: blocked ? (0, _extends3.default)({}, contentBlockerStyle, { display: 'block' }) : contentBlockerStyle
    })
  );
};

exports.OffCanvasContent = OffCanvasContent;
OffCanvasContent.propTypes = {
  blocked: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  contentBlockerClassName: _propTypes2.default.string,
  contentBlockerStyle: _propTypes2.default.shape({}),
  onContentBlockerClick: _propTypes2.default.func
};

var OffCanvasContainer = function OffCanvasContainer(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      innerClassName = _ref3.innerClassName,
      innerStyle = _ref3.innerStyle,
      open = _ref3.open,
      restProps = (0, _objectWithoutProperties3.default)(_ref3, ['children', 'className', 'innerClassName', 'innerStyle', 'open']);

  var blocked = (0, _includes2.default)(_constants.OFF_CANVAS_POSITIONS, open);
  var classNames = (0, _classnames2.default)(className, cxStyles('off-canvas-wrapper'));
  var innerClassNames = (0, _classnames2.default)(innerClassName, cxStyles('off-canvas-wrapper-inner', (0, _defineProperty3.default)({}, 'is-open-' + open, blocked)));
  var clonedChildren = _react.Children.map(children, function (child) {
    if ((0, _react.isValidElement)(child) && child.type === OffCanvasContent) {
      return (0, _react.cloneElement)(child, { blocked: blocked });
    }

    return child;
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, restProps, { className: classNames }),
    _react2.default.createElement(
      'div',
      { className: innerClassNames, style: innerStyle },
      clonedChildren
    )
  );
};

exports.OffCanvasContainer = OffCanvasContainer;
OffCanvasContainer.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  innerClassName: _propTypes2.default.string,
  innerStyle: _propTypes2.default.shape({}),
  open: _propTypes2.default.oneOf(_constants.OFF_CANVAS_POSITIONS)
};

OffCanvas.Content = OffCanvasContent;
OffCanvas.Container = OffCanvasContainer;

exports.default = OffCanvas;