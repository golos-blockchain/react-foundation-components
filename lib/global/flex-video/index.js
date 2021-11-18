'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexVideo = undefined;

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

var FlexVideo = function FlexVideo(_ref) {
  var containerClassName = _ref.containerClassName,
      containerStyle = _ref.containerStyle,
      vimeo = _ref.vimeo,
      widescreen = _ref.widescreen,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['containerClassName', 'containerStyle', 'vimeo', 'widescreen']);

  var classNames = (0, _classnames2.default)(containerClassName, cxStyles('flex-video', { vimeo: vimeo, widescreen: widescreen }));

  return _react2.default.createElement(
    'div',
    { className: classNames, style: containerStyle },
    _react2.default.createElement('iframe', restProps)
  );
};

exports.FlexVideo = FlexVideo;
FlexVideo.propTypes = {
  containerClassName: _propTypes2.default.string,
  containerStyle: _propTypes2.default.shape({}),
  vimeo: _propTypes2.default.bool,
  widescreen: _propTypes2.default.bool
};

exports.default = FlexVideo;