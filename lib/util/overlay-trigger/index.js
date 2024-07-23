'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _elementType = require('prop-types-extra/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _componentOrElement = require('prop-types-extra/lib/componentOrElement');

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _Overlay = require('react-overlays/lib/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Transition = require('react-overlays/lib/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _offset = require('dom-helpers/query/offset');

var _offset2 = _interopRequireDefault(_offset);

var _position = require('dom-helpers/query/position');

var _position2 = _interopRequireDefault(_position);

var _ownerDocument = require('react-overlays/lib/utils/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _getContainer = require('react-overlays/lib/utils/getContainer');

var _getContainer2 = _interopRequireDefault(_getContainer);

var _contains = require('dom-helpers/query/contains');

var _contains2 = _interopRequireDefault(_contains);

var _style = require('dom-helpers/style');

var _style2 = _interopRequireDefault(_style);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mouseOverOut(event, callback) {
  var target = event.currentTarget;
  var related = event.relatedTarget || event.nativeEvent.toElement;

  if (!related || related !== target && !(0, _contains2.default)(target, related)) {
    callback(event);
  }
}

function showOverlay(state) {
  var showClick = state.showClick,
      showFocus = state.showFocus,
      showHover = state.showHover,
      overlayHoverCount = state.overlayHoverCount;


  return showClick || showFocus || showHover || overlayHoverCount > 0;
}

function adjustPosition(elem, getOverlayTarget, getOverlayContainer, position, alignment) {
  var target = getOverlayTarget();
  var container = getOverlayContainer();
  var targetPosition = container.tagName === 'BODY' ? (0, _offset2.default)(target) : (0, _position2.default)(target, container);

  if (position === 'top') {
    (0, _style2.default)(elem, 'top', targetPosition.top - parseInt((0, _style2.default)(elem, 'height'), 10) + 'px');
  } else if (position === 'bottom') {
    (0, _style2.default)(elem, 'top', targetPosition.top + targetPosition.height + 'px');
  } else if (position === 'left') {
    (0, _style2.default)(elem, 'left', targetPosition.left - parseInt((0, _style2.default)(elem, 'width'), 10) + 'px');
  } else if (position === 'right') {
    (0, _style2.default)(elem, 'left', targetPosition.left + targetPosition.width + 'px');
  }

  if (position === 'top' || position === 'bottom') {
    var leftOffset = 0;

    if (alignment !== 'left') {
      leftOffset = targetPosition.width - parseInt((0, _style2.default)(elem, 'width'), 10);

      if (alignment !== 'right') {
        leftOffset /= 2;
      }
    }

    (0, _style2.default)(elem, 'left', targetPosition.left + leftOffset + 'px');
  } else if (position === 'left' || position === 'right') {
    var topOffset = 0;

    if (alignment !== 'top') {
      topOffset = targetPosition.height - parseInt((0, _style2.default)(elem, 'height'), 10);

      if (alignment !== 'bottom') {
        topOffset /= 2;
      }
    }

    (0, _style2.default)(elem, 'top', targetPosition.top + topOffset + 'px');
  }
}

// This is a hack to align overlay to edges of target instead of always centering it.
function hackTransition(CustomTransition, customHandleEntering) {
  var CombinedTransition = function CombinedTransition(_ref) {
    var onEntering = _ref.onEntering,
        props = (0, _objectWithoutProperties3.default)(_ref, ['onEntering']);

    function handleEntering() {
      if (customHandleEntering) {
        customHandleEntering.apply(undefined, arguments);
      }

      if (onEntering) {
        onEntering.apply(undefined, arguments);
      }
    }

    if (CustomTransition) {
      return _react2.default.createElement(CustomTransition, (0, _extends3.default)({}, props, { onEntering: handleEntering }));
    }

    return _react2.default.createElement(_Transition2.default, (0, _extends3.default)({}, props, { onEntering: handleEntering, timeout: 0 }));
  };

  CombinedTransition.propTypes = {
    onEntering: _propTypes2.default.func
  };

  return CombinedTransition;
}

var OverlayTrigger = function (_Component) {
  (0, _inherits3.default)(OverlayTrigger, _Component);

  function OverlayTrigger(props) {
    (0, _classCallCheck3.default)(this, OverlayTrigger);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OverlayTrigger.__proto__ || (0, _getPrototypeOf2.default)(OverlayTrigger)).call(this, props));

    _this.state = {
      showClick: false,
      showFocus: false,
      showHover: false,
      overlayHoverCount: 0
    };

    _this.getOverlayTarget = function () {
      return (0, _reactDom.findDOMNode)(_this);
    };

    _this.getOverlayContainer = function () {
      return (0, _getContainer2.default)(_this.props.container, (0, _ownerDocument2.default)(_this).body);
    };

    _this.handleAnyClick = (0, _debounce2.default)(function (showClick) {
      var showClickPrev = _this.state.showClick;


      if (showClick !== showClickPrev) {
        _this.setState({ showClick: showClick });
      }
    }, 100);

    _this.handleClick = function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          triggerClick = _this$props.triggerClick;
      var showClick = _this.state.showClick;


      if (triggerClick) {
        _this.handleAnyClick(!showClick);

        if (onClick) {
          onClick.apply(undefined, arguments);
        }
      }
    };

    _this.handleRootClose = function () {
      var showClick = _this.state.showClick;


      if (showClick) {
        _this.handleAnyClick(false);
      }
    };

    _this.handleBlur = function () {
      var _this$props2 = _this.props,
          onBlur = _this$props2.onBlur,
          triggerFocus = _this$props2.triggerFocus;
      var showFocus = _this.state.showFocus;


      if (triggerFocus) {
        if (showFocus) {
          _this.setState({ showFocus: false });
        }

        if (onBlur) {
          onBlur.apply(undefined, arguments);
        }
      }
    };

    _this.handleFocus = function () {
      var _this$props3 = _this.props,
          onFocus = _this$props3.onFocus,
          triggerFocus = _this$props3.triggerFocus;
      var showFocus = _this.state.showFocus;


      if (triggerFocus) {
        if (!showFocus) {
          _this.setState({ showFocus: true });
        }

        if (onFocus) {
          onFocus.apply(undefined, arguments);
        }
      }
    };

    _this.handleMouseOut = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this$props4 = _this.props,
          onMouseOut = _this$props4.onMouseOut,
          triggerHover = _this$props4.triggerHover;
      var showHover = _this.state.showHover;


      if (triggerHover) {
        var event = args[0];


        mouseOverOut(event, function () {
          if (showHover) {
            _this.setState({ showHover: false });
          }

          if (onMouseOut) {
            onMouseOut.apply(undefined, args);
          }
        });
      }
    };

    _this.handleMouseOver = function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var _this$props5 = _this.props,
          onMouseOver = _this$props5.onMouseOver,
          triggerHover = _this$props5.triggerHover;
      var showHover = _this.state.showHover;


      if (triggerHover) {
        var event = args[0];


        mouseOverOut(event, function () {
          if (!showHover) {
            _this.setState({ showHover: true });
          }

          if (onMouseOver) {
            onMouseOver.apply(undefined, args);
          }
        });
      }
    };

    _this.handleOverlayMouseOut = function () {
      var _this$props6 = _this.props,
          triggerHover = _this$props6.triggerHover,
          triggerOverlayHover = _this$props6.triggerOverlayHover;
      var overlayHoverCount = _this.state.overlayHoverCount;


      if (triggerHover && triggerOverlayHover) {
        _this.setState({ overlayHoverCount: overlayHoverCount - 1 });
      }
    };

    _this.handleOverlayMouseOver = function () {
      var _this$props7 = _this.props,
          triggerHover = _this$props7.triggerHover,
          triggerOverlayHover = _this$props7.triggerOverlayHover;
      var overlayHoverCount = _this.state.overlayHoverCount;


      if (triggerHover && triggerOverlayHover) {
        _this.setState({ overlayHoverCount: overlayHoverCount + 1 });
      }
    };

    _this.handleResize = function () {
      var _this$props8 = _this.props,
          position = _this$props8.position,
          alignment = _this$props8.alignment;

      var show = showOverlay(_this.state);

      if (show && _this.elem) {
        adjustPosition(_this.elem, _this.getOverlayTarget, _this.getOverlayContainer, position, alignment);
      }
    };

    _this.handleEntering = function (elem) {
      _this.elem = elem;

      _this.handleResize();
    };

    _this._transition = hackTransition(_this.props.transition, _this.handleEntering);

    _this.createOverlay = function () {
      var _this$props9 = _this.props,
          closeOnClickOutside = _this$props9.closeOnClickOutside,
          overlay = _this$props9.overlay,
          position = _this$props9.position;

      var show = showOverlay(_this.state);
      var clonedOverlay = null;
      var overalyProps = {
        onMouseOver: _this.handleOverlayMouseOver,
        onMouseOut: _this.handleOverlayMouseOut
      };

      if ((0, _react.isValidElement)(overlay)) {
        clonedOverlay = (0, _react.cloneElement)(overlay, overalyProps);
      } else {
        clonedOverlay = _react2.default.createElement(
          'span',
          overalyProps,
          overlay
        );
      }

      return _react2.default.createElement(
        _Overlay2.default,
        {
          container: _this.getOverlayContainer,
          onHide: _this.handleRootClose,
          placement: position,
          rootClose: closeOnClickOutside,
          show: show,
          target: _this.getOverlayTarget,
          transition: _this._transition
        },
        clonedOverlay
      );
    };

    if (typeof document !== 'undefined') {
      _this.isBrowser = true;
      _this.mountNode = document.createElement('div');
      document.body.appendChild(_this.mountNode);
    }
    return _this;
  }

  (0, _createClass3.default)(OverlayTrigger, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var updateWindowResize = this.props.updateWindowResize;


      if (updateWindowResize) {
        window.addEventListener('resize', this.handleResize);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
      (0, _reactDom.unmountComponentAtNode)(this.mountNode);
      document.body.removeChild(this.mountNode);
      this.mountNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var show = this.state.show;

      var childProps = {
        'aria-expanded': show,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onMouseOut: this.handleMouseOut,
        onMouseOver: this.handleMouseOver
      };
      var clonedChild = null;

      if ((0, _react.isValidElement)(children)) {
        clonedChild = (0, _react.cloneElement)(children, childProps);
      } else {
        clonedChild = _react2.default.createElement(
          'span',
          childProps,
          children
        );
      }

      this.overlay = this.createOverlay();

      return _react2.default.createElement(
        _react.Fragment,
        null,
        clonedChild,
        this.isBrowser && (0, _reactDom.createPortal)(this.overlay, this.mountNode)
      );
    }
  }]);
  return OverlayTrigger;
}(_react.Component);

OverlayTrigger.propTypes = {
  alignment: _propTypes2.default.oneOf(_constants.OVERLAY_ALIGNMENTS),
  children: _propTypes2.default.node,
  closeOnClickOutside: _propTypes2.default.bool,
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),
  onBlur: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onMouseOut: _propTypes2.default.func,
  onMouseOver: _propTypes2.default.func,
  overlay: _propTypes2.default.node,
  position: _propTypes2.default.oneOf(_constants.OVERLAY_POSITIONS),
  transition: _elementType2.default,
  triggerClick: _propTypes2.default.bool,
  triggerFocus: _propTypes2.default.bool,
  triggerHover: _propTypes2.default.bool,
  triggerOverlayHover: _propTypes2.default.bool,
  updateWindowResize: _propTypes2.default.bool
};
OverlayTrigger.defaultProps = {
  updateWindowResize: true
};
exports.default = OverlayTrigger;