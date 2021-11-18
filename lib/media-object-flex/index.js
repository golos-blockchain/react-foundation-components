'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaObject = exports.MediaObjectSection = undefined;

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

var _flexMock = require('../flex');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);
var IS_FLEX_MODE = true;

var MediaObjectSection = function MediaObjectSection(_ref) {
  var _cxStyles;

  var className = _ref.className,
      main = _ref.main,
      verticalAlignment = _ref.verticalAlignment,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'main', 'verticalAlignment']);

  var classNames = (0, _classnames2.default)(className, cxStyles('media-object-section', (_cxStyles = {}, (0, _defineProperty3.default)(_cxStyles, verticalAlignment, !IS_FLEX_MODE && (0, _includes2.default)(_constants.MEDIA_OBJECT_SECTION_ALIGNMENTS, verticalAlignment)), (0, _defineProperty3.default)(_cxStyles, 'main-section', IS_FLEX_MODE && main), _cxStyles)));
  var flexProps = {};

  if (IS_FLEX_MODE) {
    flexProps.verticalAlignment = verticalAlignment;
  }

  return _react2.default.createElement(_flexMock.FlexChild, (0, _extends3.default)({}, restProps, {
    className: classNames
  }, flexProps));
};

exports.MediaObjectSection = MediaObjectSection;
MediaObjectSection.propTypes = {
  className: _propTypes2.default.string,
  main: _propTypes2.default.bool,
  verticalAlignment: _propTypes2.default.oneOf(IS_FLEX_MODE ? _constants.FLEX_VERTICAL_ALIGNMENTS : _constants.MEDIA_OBJECT_SECTION_ALIGNMENTS)
};

var MediaObject = function MediaObject(_ref2) {
  var className = _ref2.className,
      stackForSmall = _ref2.stackForSmall,
      restProps = (0, _objectWithoutProperties3.default)(_ref2, ['className', 'stackForSmall']);

  var classNames = (0, _classnames2.default)(className, cxStyles('media-object', { 'stack-for-small': stackForSmall }));

  return _react2.default.createElement(_flexMock.FlexParent, (0, _extends3.default)({}, restProps, { className: classNames }));
};

exports.MediaObject = MediaObject;
MediaObject.propTypes = {
  className: _propTypes2.default.string,
  stackForSmall: _propTypes2.default.bool
};

MediaObject.Section = MediaObjectSection;

exports.default = MediaObject;