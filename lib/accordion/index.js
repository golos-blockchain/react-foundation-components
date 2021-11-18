'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = exports.AccordionItem = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _isBlank = require('underscore.string/isBlank');

var _isBlank2 = _interopRequireDefault(_isBlank);

var _collapse = require('../collapse');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var AccordionItemControlled = function AccordionItemControlled(_ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      contentClassName = _ref.contentClassName,
      contentStyle = _ref.contentStyle,
      eventKey = _ref.eventKey,
      id = _ref.id,
      onClick = _ref.onClick,
      onSelect = _ref.onSelect,
      onToggle = _ref.onToggle,
      title = _ref.title,
      titleClassName = _ref.titleClassName,
      titleStyle = _ref.titleStyle,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['active', 'children', 'className', 'contentClassName', 'contentStyle', 'eventKey', 'id', 'onClick', 'onSelect', 'onToggle', 'title', 'titleClassName', 'titleStyle']);

  var classNames = (0, _classnames2.default)(className, cxStyles('accordion-item', { 'is-active': active }));
  var titleClassNames = (0, _classnames2.default)(titleClassName, cxStyles('accordion-title'));
  var contentClassNames = (0, _classnames2.default)(contentClassName, cxStyles('accordion-content'));
  var titleId = null;
  var contentId = null;

  if (!(0, _isBlank2.default)(id)) {
    titleId = id + 'Title';
    contentId = id + 'Content';
  }

  var onTitleClick = function onTitleClick() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var event = args[0];


    event.preventDefault();

    if (onClick) {
      onClick.apply(undefined, args);
    }

    if (onToggle) {
      onToggle.apply(undefined, [!active].concat(args));
    }

    if (onSelect) {
      onSelect.apply(undefined, [eventKey].concat(args));
    }
  };

  return _react2.default.createElement(
    'li',
    (0, _extends3.default)({}, restProps, { className: classNames, id: id }),
    _react2.default.createElement(
      'a',
      {
        'aria-controls': contentId,
        'aria-expanded': active,
        'aria-selected': active,
        className: titleClassNames,
        href: '#',
        id: titleId,
        onClick: onTitleClick,
        role: 'tab',
        style: titleStyle
      },
      title
    ),
    _react2.default.createElement(
      _collapse.Collapse,
      { 'in': active },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          {
            'aria-hidden': !active,
            'aria-labelledby': titleId,
            className: contentClassNames,
            id: contentId,
            role: 'tabpanel',
            style: (0, _extends3.default)({}, contentStyle, { display: 'block' })
          },
          children
        )
      )
    )
  );
};

AccordionItemControlled.propTypes = {
  active: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  contentClassName: _propTypes2.default.string,
  contentStyle: _propTypes2.default.object,
  eventKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onClick: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  onToggle: _propTypes2.default.func,
  title: _propTypes2.default.node,
  titleClassName: _propTypes2.default.string,
  titleStyle: _propTypes2.default.object
};

var AccordionItem = exports.AccordionItem = (0, _uncontrollable2.default)(AccordionItemControlled, { active: 'onToggle' });
AccordionItem.displayName = 'AccordionItem';

var AccordionControlled = function AccordionControlled(_ref2) {
  var allowAllClosed = _ref2.allowAllClosed,
      children = _ref2.children,
      className = _ref2.className,
      multiExpand = _ref2.multiExpand,
      _ref2$activeKey = _ref2.activeKey,
      maybeActiveKey = _ref2$activeKey === undefined ? multiExpand ? [] : null : _ref2$activeKey,
      onSelect = _ref2.onSelect,
      restProps = (0, _objectWithoutProperties3.default)(_ref2, ['allowAllClosed', 'children', 'className', 'multiExpand', 'activeKey', 'onSelect']);

  var activeKey = maybeActiveKey;

  if (!allowAllClosed && (multiExpand && activeKey.length === 0 || (0, _isBlank2.default)(activeKey))) {
    var childArray = _react.Children.toArray(children).filter(function (child) {
      return (0, _react.isValidElement)(child) && !(0, _isBlank2.default)(child.props.eventKey);
    });

    if (childArray.length >= 1) {
      var firstKey = childArray[0].props.eventKey;
      activeKey = multiExpand ? [firstKey] : firstKey;
    }
  }

  var onChildSelect = function onChildSelect(eventKey) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (multiExpand) {
      if ((0, _includes2.default)(activeKey, eventKey)) {
        var filtered = activeKey.filter(function (item) {
          return item !== eventKey;
        });

        if (!allowAllClosed && filtered.length === 0) {
          onSelect.apply(undefined, [[eventKey]].concat(args));
        } else {
          onSelect.apply(undefined, [filtered].concat(args));
        }
      } else {
        onSelect.apply(undefined, [[].concat((0, _toConsumableArray3.default)(activeKey), [eventKey])].concat(args));
      }
    } else {
      if (allowAllClosed && activeKey === eventKey) {
        onSelect.apply(undefined, [null].concat(args));
      } else {
        onSelect.apply(undefined, [eventKey].concat(args));
      }
    }
  };

  var classNames = (0, _classnames2.default)(className, cxStyles('accordion'));
  var clonedChildren = _react.Children.map(children, function (child) {
    if ((0, _react.isValidElement)(child)) {
      return (0, _react.cloneElement)(child, {
        active: multiExpand ? (0, _includes2.default)(activeKey, child.props.eventKey) : activeKey === child.props.eventKey,
        onSelect: onChildSelect,
        onToggle: _noop2.default
      });
    }

    return child;
  });

  return _react2.default.createElement(
    'ul',
    (0, _extends3.default)({}, restProps, { className: classNames, role: 'tablist' }),
    clonedChildren
  );
};

AccordionControlled.propTypes = {
  activeKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]))]),
  allowAllClosed: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  defaultActiveKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]))]),
  multiExpand: _propTypes2.default.bool,
  onSelect: _propTypes2.default.func
};

var Accordion = exports.Accordion = (0, _uncontrollable2.default)(AccordionControlled, { activeKey: 'onSelect' });
Accordion.displayName = 'Accordion';

Accordion.Item = AccordionItem;

exports.default = Accordion;