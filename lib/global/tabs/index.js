'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = undefined;

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

var _bind = require('classnames');

var _bind2 = _interopRequireDefault(_bind);

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _isBlank = require('underscore.string/isBlank');

var _isBlank2 = _interopRequireDefault(_isBlank);

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Tab = function Tab(_ref) {
  var active = _ref.active,
      className = _ref.className,
      id = _ref.id,
      eventKey = _ref.eventKey,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['active', 'className', 'id', 'eventKey']);

  var classNames = (0, _classnames2.default)(className, cxStyles('tabs-panel', { 'is-active': active }));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, {
    'aria-hidden': !active,
    'aria-labelledby': (0, _isBlank2.default)(id) ? null : id + 'Label',
    className: classNames,
    id: id,
    role: 'tabpanel'
  }));
};

exports.Tab = Tab;
Tab.propTypes = {
  active: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  eventKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

var TabTitle = function TabTitle(_ref2) {
  var active = _ref2.active,
      containerClassName = _ref2.containerClassName,
      containerStyle = _ref2.containerStyle,
      eventKey = _ref2.eventKey,
      onSelect = _ref2.onSelect,
      tabId = _ref2.tabId,
      restProps = (0, _objectWithoutProperties3.default)(_ref2, ['active', 'containerClassName', 'containerStyle', 'eventKey', 'onSelect', 'tabId']);

  var classNames = (0, _classnames2.default)(containerClassName, cxStyles('tabs-title', { 'is-active': active }));
  var onClick = function onClick() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var event = args[0];


    event.preventDefault();

    if (onSelect && !(0, _isBlank2.default)(eventKey)) {
      onSelect.apply(undefined, [eventKey].concat(args));
    }
  };

  return _react2.default.createElement(
    'li',
    {
      className: classNames,
      role: 'presentation',
      style: containerStyle
    },
    _react2.default.createElement('a', (0, _extends3.default)({}, restProps, {
      'aria-controls': tabId,
      'aria-selected': active,
      href: '#' + ((0, _isBlank2.default)(tabId) ? '' : tabId),
      onClick: onClick,
      role: 'tab'
    }))
  );
};

TabTitle.propTypes = {
  active: _propTypes2.default.bool,
  containerClassName: _propTypes2.default.string,
  containerStyle: _propTypes2.default.object,
  eventKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onSelect: _propTypes2.default.func,
  tabId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

var TabsHeader = function TabsHeader(_ref3) {
  var className = _ref3.className,
      vertical = _ref3.vertical,
      restProps = (0, _objectWithoutProperties3.default)(_ref3, ['className', 'vertical']);

  var classNames = (0, _classnames2.default)(className, cxStyles('tabs', { vertical: vertical }));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames }));
};

TabsHeader.propTypes = {
  className: _propTypes2.default.string,
  vertical: _propTypes2.default.bool
};

var TabsContent = function TabsContent(_ref4) {
  var className = _ref4.className,
      restProps = (0, _objectWithoutProperties3.default)(_ref4, ['className']);

  var classNames = (0, _classnames2.default)(className, cxStyles('tabs-content'));

  return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: classNames }));
};

TabsContent.propTypes = {
  className: _propTypes2.default.string
};

var TabsControlled = function TabsControlled(_ref5) {
  var activeKey = _ref5.activeKey,
      children = _ref5.children,
      contentClassName = _ref5.contentClassName,
      contentStyle = _ref5.contentStyle,
      headerClassName = _ref5.headerClassName,
      headerStyle = _ref5.headerStyle,
      onSelect = _ref5.onSelect,
      vertical = _ref5.vertical,
      restProps = (0, _objectWithoutProperties3.default)(_ref5, ['activeKey', 'children', 'contentClassName', 'contentStyle', 'headerClassName', 'headerStyle', 'onSelect', 'vertical']);

  var headerChildren = _react.Children.map(children, function (child) {
    if ((0, _react.isValidElement)(child)) {
      return _react2.default.createElement(
        TabTitle,
        (0, _extends3.default)({}, child.props, {
          active: child.props.eventKey === activeKey,
          id: (0, _isBlank2.default)(child.props.id) ? null : child.props.id + 'Title',
          onSelect: onSelect,
          tabId: child.props.id
        }),
        child.props.title
      );
    }

    return null;
  });
  var contentChildren = _react.Children.map(children, function (child) {
    if ((0, _react.isValidElement)(child)) {
      return (0, _react.cloneElement)(child, { active: activeKey === child.props.eventKey });
    }

    return child;
  });

  return _react2.default.createElement(
    'div',
    restProps,
    _react2.default.createElement(
      TabsHeader,
      { className: headerClassName, style: headerStyle, vertical: vertical },
      headerChildren
    ),
    _react2.default.createElement(
      TabsContent,
      { className: contentClassName, style: contentStyle },
      contentChildren
    )
  );
};

TabsControlled.propTypes = {
  activeKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  children: _propTypes2.default.node,
  contentClassName: _propTypes2.default.string,
  contentStyle: _propTypes2.default.object,
  headerClassName: _propTypes2.default.string,
  headerStyle: _propTypes2.default.object,
  onSelect: _propTypes2.default.func,
  vertical: _propTypes2.default.bool
};

var Tabs = exports.Tabs = (0, _uncontrollable2.default)(TabsControlled, { activeKey: 'onSelect' });
Tabs.displayName = 'Tabs';

Tabs.Tab = Tab;

exports.default = Tabs;