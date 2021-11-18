'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearFix = exports.Float = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../../util/constants');

var _createWrapperComponent = require('../../util/create-wrapper-component');

var _createWrapperComponent2 = _interopRequireDefault(_createWrapperComponent);

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Float = (0, _createWrapperComponent2.default)({
  displayName: 'Float',
  styles: _styles2.default,
  propTypes: {
    position: _propTypes2.default.oneOf(_constants.FLOAT_POSITIONS).isRequired
  },
  mapProps: function mapProps(_ref) {
    var position = _ref.position,
        props = (0, _objectWithoutProperties3.default)(_ref, ['position']);
    return {
      props: props,
      classNames: (0, _defineProperty3.default)({}, 'float-' + position, (0, _includes2.default)(_constants.FLOAT_POSITIONS, position))
    };
  },
  defaultComponentClass: 'div'
});

exports.Float = Float;
var ClearFix = exports.ClearFix = (0, _createWrapperComponent2.default)({
  displayName: 'ClearFix',
  styles: _styles2.default,
  mapProps: function mapProps(props) {
    return { props: props, classNames: 'clearfix' };
  },
  defaultComponentClass: 'div'
});

Float.ClearFix = ClearFix;

exports.default = Float;