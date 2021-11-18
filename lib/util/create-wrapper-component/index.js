'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = createWrapperComponent;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _elementType = require('prop-types-extra/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createWrapperComponent() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === undefined ? 'Wrapper' : _ref$displayName,
      _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$propTypes = _ref.propTypes,
      propTypes = _ref$propTypes === undefined ? {} : _ref$propTypes,
      _ref$mapProps = _ref.mapProps,
      mapProps = _ref$mapProps === undefined ? function (props) {
    return { props: props, classNames: {}, style: {} };
  } : _ref$mapProps,
      _ref$defaultComponent = _ref.defaultComponentClass,
      defaultComponentClass = _ref$defaultComponent === undefined ? 'span' : _ref$defaultComponent;

  var cxStyles = _bind2.default.bind(styles);
  var Wrapper = function Wrapper(_ref2) {
    var children = _ref2.children,
        className = _ref2.className,
        componentClass = _ref2.componentClass,
        style = _ref2.style,
        noWrap = _ref2.noWrap,
        restProps = (0, _objectWithoutProperties3.default)(_ref2, ['children', 'className', 'componentClass', 'style', 'noWrap']);

    var ComponentClass = componentClass || defaultComponentClass;

    var _mapProps = mapProps(restProps),
        mappedProps = _mapProps.props,
        mappedClassNames = _mapProps.classNames,
        mappedStyle = _mapProps.style;

    if (noWrap) {
      var child = _react.Children.only(children);
      var childProps = child.props ? child.props : {};

      return (0, _react.cloneElement)(child, (0, _extends3.default)({}, childProps, mappedProps, {
        className: (0, _classnames2.default)(className, child.props.className, cxStyles(mappedClassNames)),
        style: (0, _extends3.default)({}, style, child.props.style, mappedStyle)
      }));
    }

    return _react2.default.createElement(
      ComponentClass,
      (0, _extends3.default)({}, mappedProps, {
        className: (0, _classnames2.default)(className, cxStyles(mappedClassNames)),
        style: (0, _extends3.default)({}, style, mappedStyle)
      }),
      children
    );
  };

  Wrapper.displayName = displayName;
  Wrapper.propTypes = (0, _extends3.default)({
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    componentClass: _elementType2.default,
    style: _propTypes2.default.shape({}),
    noWrap: _propTypes2.default.bool
  }, propTypes);

  return Wrapper;
}