'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = undefined;

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

var _textAlignment = require('../text-alignment');

var _textAlignment2 = _interopRequireDefault(_textAlignment);

var _visibility = require('../visibility');

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

function createPaginationLink(baseClassName, disabledCalculator, newPageCalculator) {
  var PaginationEndPoint = function PaginationEndPoint(_ref) {
    var activePage = _ref.activePage,
        children = _ref.children,
        className = _ref.className,
        label = _ref.label,
        lastPage = _ref.lastPage,
        onSelect = _ref.onSelect,
        page = _ref.page,
        startPage = _ref.startPage,
        restProps = (0, _objectWithoutProperties3.default)(_ref, ['activePage', 'children', 'className', 'label', 'lastPage', 'onSelect', 'page', 'startPage']);

    var current = activePage === page;
    var disabled = lastPage < startPage || disabledCalculator({ activePage: activePage, startPage: startPage, lastPage: lastPage });
    var classNames = (0, _classnames2.default)(className, cxStyles(baseClassName, { current: current, disabled: disabled }));
    var content = children;

    if (!current && !disabled) {
      var onClick = function onClick() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var event = args[0];


        event.preventDefault();

        if (onSelect) {
          onSelect.apply(undefined, [newPageCalculator({ activePage: activePage, startPage: startPage, lastPage: lastPage, page: page })].concat(args));
        }
      };

      content = _react2.default.createElement(
        'a',
        {
          href: '#',
          'aria-label': label,
          onClick: onClick
        },
        children
      );
    }

    return _react2.default.createElement(
      'li',
      (0, _extends3.default)({}, restProps, { className: classNames }),
      content
    );
  };

  PaginationEndPoint.propTypes = {
    activePage: _propTypes2.default.number,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    label: _propTypes2.default.string,
    lastPage: _propTypes2.default.number,
    onSelect: _propTypes2.default.func,
    page: _propTypes2.default.number,
    startPage: _propTypes2.default.number
  };

  return PaginationEndPoint;
}

var PaginationPrevious = createPaginationLink('pagination-previous', function (_ref2) {
  var activePage = _ref2.activePage,
      startPage = _ref2.startPage;
  return activePage <= startPage;
}, function (_ref3) {
  var activePage = _ref3.activePage,
      startPage = _ref3.startPage,
      lastPage = _ref3.lastPage;
  return Math.max(startPage, Math.min(activePage - 1, lastPage));
});

PaginationPrevious.displayName = 'PaginationPrevious';
PaginationPrevious.propTypes = {
  activePage: _propTypes2.default.number,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  label: _propTypes2.default.string,
  lastPage: _propTypes2.default.number,
  onSelect: _propTypes2.default.func,
  startPage: _propTypes2.default.number
};

var PaginationNext = createPaginationLink('pagination-next', function (_ref4) {
  var activePage = _ref4.activePage,
      lastPage = _ref4.lastPage;
  return activePage >= lastPage;
}, function (_ref5) {
  var activePage = _ref5.activePage,
      startPage = _ref5.startPage,
      lastPage = _ref5.lastPage;
  return Math.min(lastPage, Math.max(activePage + 1, startPage));
});

PaginationNext.displayName = 'PaginationNext';
PaginationNext.propTypes = {
  activePage: _propTypes2.default.number,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  label: _propTypes2.default.string,
  lastPage: _propTypes2.default.number,
  onSelect: _propTypes2.default.func,
  startPage: _propTypes2.default.number
};

var PaginationPage = createPaginationLink(null, function () {
  return false;
}, function (_ref6) {
  var page = _ref6.page;
  return page;
});

PaginationPage.displayName = 'PaginationPage';
PaginationPage.propTypes = {
  activePage: _propTypes2.default.number,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  label: _propTypes2.default.string,
  onSelect: _propTypes2.default.func,
  page: _propTypes2.default.number
};

var PaginationEllipsis = function PaginationEllipsis(_ref7) {
  var className = _ref7.className,
      restProps = (0, _objectWithoutProperties3.default)(_ref7, ['className']);

  var classNames = (0, _classnames2.default)(className, cxStyles('ellipsis'));

  return _react2.default.createElement(_visibility.HideForScreenReader, (0, _extends3.default)({}, restProps, { className: classNames, componentClass: 'li' }));
};

PaginationEllipsis.propTypes = {
  className: _propTypes2.default.string
};

var Pagination = function Pagination(_ref8) {
  var activePage = _ref8.activePage,
      className = _ref8.className,
      label = _ref8.label,
      maxPages = _ref8.maxPages,
      nextClassName = _ref8.nextClassName,
      nextContent = _ref8.nextContent,
      nextLabel = _ref8.nextLabel,
      nextStyle = _ref8.nextStyle,
      maybeNumPages = _ref8.numPages,
      onSelect = _ref8.onSelect,
      pageClassName = _ref8.pageClassName,
      pageContentFormatter = _ref8.pageContentFormatter,
      pageLabelFormatter = _ref8.pageLabelFormatter,
      pageStyle = _ref8.pageStyle,
      previousClassName = _ref8.previousClassName,
      previousContent = _ref8.previousContent,
      previousLabel = _ref8.previousLabel,
      previousStyle = _ref8.previousStyle,
      startPage = _ref8.startPage,
      restProps = (0, _objectWithoutProperties3.default)(_ref8, ['activePage', 'className', 'label', 'maxPages', 'nextClassName', 'nextContent', 'nextLabel', 'nextStyle', 'numPages', 'onSelect', 'pageClassName', 'pageContentFormatter', 'pageLabelFormatter', 'pageStyle', 'previousClassName', 'previousContent', 'previousLabel', 'previousStyle', 'startPage']);

  var classNames = (0, _classnames2.default)(className, cxStyles('pagination'));
  var pages = [];
  var numPages = maybeNumPages >= 1 ? maybeNumPages : 1;
  var lastPage = startPage + numPages - 1;
  var limitPages = maxPages > 0 && numPages > maxPages;
  var innerStartPage = startPage + 1;
  var innerLastPage = lastPage - 1;

  if (limitPages) {
    if (activePage >= startPage && activePage <= lastPage) {
      var offset = Math.ceil((maxPages - 1) / 2);
      var offsetStartPage = activePage - offset + 1;
      var offsetLastPage = activePage + maxPages - offset - 2;

      if (offsetStartPage < innerStartPage) {
        innerLastPage = innerStartPage + maxPages - 3;
      } else if (offsetLastPage > innerLastPage) {
        innerStartPage = innerLastPage - maxPages + 3;
      } else {
        innerStartPage = offsetStartPage;
        innerLastPage = offsetLastPage;
      }
    } else {
      innerLastPage = startPage + maxPages - 2;
    }
  }

  pages.push(_react2.default.createElement(
    PaginationPage,
    {
      activePage: activePage,
      className: pageClassName,
      key: startPage,
      label: pageLabelFormatter ? pageLabelFormatter(startPage, activePage) : null,
      onSelect: onSelect,
      page: startPage,
      style: pageStyle
    },
    pageContentFormatter ? pageContentFormatter(startPage, activePage) : startPage
  ));

  if (limitPages && innerStartPage > startPage + 1) {
    pages.push(_react2.default.createElement(PaginationEllipsis, { key: 'startEllipsis' }));
  }

  for (var i = innerStartPage; i <= innerLastPage; i++) {
    pages.push(_react2.default.createElement(
      PaginationPage,
      {
        activePage: activePage,
        className: pageClassName,
        key: i,
        label: pageLabelFormatter ? pageLabelFormatter(i, activePage) : null,
        onSelect: onSelect,
        page: i,
        style: pageStyle
      },
      pageContentFormatter ? pageContentFormatter(i, activePage) : i
    ));
  }

  if (limitPages && innerLastPage < lastPage - 1) {
    pages.push(_react2.default.createElement(PaginationEllipsis, { key: 'lastEllipsis' }));
  }

  pages.push(_react2.default.createElement(
    PaginationPage,
    {
      activePage: activePage,
      className: pageClassName,
      key: lastPage,
      label: pageLabelFormatter ? pageLabelFormatter(lastPage, activePage) : null,
      onSelect: onSelect,
      page: lastPage,
      style: pageStyle
    },
    pageContentFormatter ? pageContentFormatter(lastPage, activePage) : lastPage
  ));

  return _react2.default.createElement(
    _textAlignment2.default,
    (0, _extends3.default)({}, restProps, {
      'aria-label': label,
      className: classNames,
      componentClass: 'ul',
      role: 'navigation'
    }),
    _react2.default.createElement(
      PaginationPrevious,
      {
        activePage: activePage,
        className: previousClassName,
        label: previousLabel,
        lastPage: lastPage,
        onSelect: onSelect,
        startPage: startPage,
        style: previousStyle
      },
      previousContent
    ),
    pages,
    _react2.default.createElement(
      PaginationNext,
      {
        activePage: activePage,
        className: nextClassName,
        label: nextLabel,
        lastPage: lastPage,
        onSelect: onSelect,
        startPage: startPage,
        style: nextStyle
      },
      nextContent
    )
  );
};

exports.Pagination = Pagination;
Pagination.propTypes = {
  activePage: _propTypes2.default.number,
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  maxPages: _propTypes2.default.number,
  nextClassName: _propTypes2.default.string,
  nextContent: _propTypes2.default.node,
  nextLabel: _propTypes2.default.string,
  nextStyle: _propTypes2.default.object,
  numPages: _propTypes2.default.number,
  onSelect: _propTypes2.default.func,
  pageClassName: _propTypes2.default.string,
  pageContentFormatter: _propTypes2.default.func,
  pageLabelFormatter: _propTypes2.default.func,
  pageStyle: _propTypes2.default.object,
  previousClassName: _propTypes2.default.string,
  previousContent: _propTypes2.default.node,
  previousLabel: _propTypes2.default.string,
  previousStyle: _propTypes2.default.object,
  startPage: _propTypes2.default.number
};
Pagination.defaultProps = {
  maxPages: 0,
  numPages: 1,
  startPage: 1
};

exports.default = Pagination;