'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reveal = undefined;

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

var _elementType = require('prop-types-extra/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _Modal = require('react-overlays/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _constants = require('../../util/constants');

var _fade = require('../fade');

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Reveal = function Reveal(_ref) {
  var children = _ref.children,
      containerClassName = _ref.containerClassName,
      containerStyle = _ref.containerStyle,
      revealClassName = _ref.revealClassName,
      revealStyle = _ref.revealStyle,
      overlay = _ref.overlay,
      overlayClassName = _ref.overlayClassName,
      overlayStyle = _ref.overlayStyle,
      size = _ref.size,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['children', 'containerClassName', 'containerStyle', 'revealClassName', 'revealStyle', 'overlay', 'overlayClassName', 'overlayStyle', 'size']);

  var revealClassNames = (0, _classnames2.default)(revealClassName, cxStyles('reveal', (0, _defineProperty3.default)({}, size, (0, _includes2.default)(_constants.MODAL_SIZES, size))));
  var overlayClassNames = (0, _classnames2.default)(overlayClassName, cxStyles('reveal-overlay'));
  var containerStyleMerged = (0, _extends3.default)({}, containerStyle, {
    bottom: 0,
    left: 0,
    overflowY: 'scroll',
    position: 'fixed',
    right: 0,
    top: 0
  });

  return _react2.default.createElement(
    _Modal2.default,
    (0, _extends3.default)({}, restProps, {
      backdrop: overlay,
      backdropClassName: overlayClassNames,
      backdropStyle: { overlayStyle: overlayStyle, display: 'block' },
      className: containerClassName,
      style: containerStyleMerged
    }),
    _react2.default.createElement(
      'div',
      { className: revealClassNames, style: (0, _extends3.default)({}, revealStyle, { display: 'block' }) },
      children
    )
  );
};

exports.Reveal = Reveal;
Reveal.propTypes = {
  children: _propTypes2.default.node,
  containerClassName: _propTypes2.default.string,
  containerStyle: _propTypes2.default.object,
  overlay: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['static'])]),
  overlayClassName: _propTypes2.default.string,
  overlayStyle: _propTypes2.default.object,
  revealClassName: _propTypes2.default.string,
  revealStyle: _propTypes2.default.object,
  size: _propTypes2.default.oneOf(_constants.MODAL_SIZES),
  transition: _elementType2.default
};
Reveal.defaultProps = {
  overlay: true,
  transition: _fade.Fade
};

exports.default = Reveal;