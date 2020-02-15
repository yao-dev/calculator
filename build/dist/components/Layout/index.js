'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _styles = require('./styles');

var _MadeWithLoveByMe = require('../MadeWithLoveByMe');

var _MadeWithLoveByMe2 = _interopRequireDefault(_MadeWithLoveByMe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/myao/Desktop/github/calculator/components/Layout/index.js';
/** @format */

var Layout = function Layout(_ref) {
	var children = _ref.children,
	    title = _ref.title;

	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement(_head2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, _react2.default.createElement('title', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, title), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}), _react2.default.createElement('link', {
		rel: 'stylesheet',
		href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}), _react2.default.createElement('style', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, '\n\t\t\t\t\tbody {\n\t\t\t\t\t\tmargin: 0px;\n\t\t\t\t\t\tpadding: 0px;\n\t\t\t\t\t\tbackground: linear-gradient(to left, #8dc26f, #76b852);\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tflex-flow: row wrap;\n\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\tfont-family: sans-serif;\n\t\t\t\t\t}')), _react2.default.createElement(_styles.Container, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, children, _react2.default.createElement(_MadeWithLoveByMe2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	})));
};

Layout.propTypes = {
	children: _propTypes2.default.node.isRequired,
	title: _propTypes2.default.string
};

Layout.defaultProps = {
	title: 'Calculatrice'
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIkhlYWQiLCJDb250YWluZXIiLCJNYWRlV2l0aExvdmVCeU1lIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWlCOztBQUMxQixBQUFPOzs7Ozs7O0FBTFA7O0FBT0EsSUFBTSxTQUFTLFNBQVQsQUFBUyxhQUF5QjtLQUF0QixBQUFzQixnQkFBdEIsQUFBc0I7S0FBWixBQUFZLGFBQVosQUFBWSxBQUN2Qzs7d0JBQ0MsY0FBQTs7YUFBQTtlQUFBLEFBQ0M7QUFERDtBQUFBLEVBQUEsa0JBQ0MsQUFBQzs7YUFBRDtlQUFBLEFBQ0M7QUFERDtBQUFBLG9CQUNDLGNBQUE7O2FBQUE7ZUFBQSxBQUFRO0FBQVI7QUFBQSxJQURELEFBQ0MsQUFDQSxnREFBTSxTQUFOLEFBQWM7YUFBZDtlQUZELEFBRUMsQUFDQTtBQURBOzZDQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO2FBQTlCO2VBSEQsQUFHQyxBQUNBO0FBREE7O09BQ0EsQUFDSyxBQUNKO1FBRkQsQUFFTTs7YUFGTjtlQUpELEFBSUMsQUFJQTtBQUpBO0FBQ0MscUJBR0QsY0FBQTs7YUFBQTtlQUFBO0FBQUE7QUFBQSxJQVRGLEFBQ0MsQUFRQyxBQVlELHlUQUFBLEFBQUM7O2FBQUQ7ZUFBQSxBQUNFO0FBREY7QUFBQSxJQUFBLEFBRUMsMEJBQUEsQUFBQzs7YUFBRDtlQXhCSCxBQUNDLEFBcUJDLEFBRUMsQUFJSDtBQUpHO0FBQUE7QUF6Qko7O0FBK0JBLE9BQUEsQUFBTztXQUNJLG9CQUFBLEFBQVUsS0FERixBQUNPLEFBQ3pCO1FBQU8sb0JBRlIsQUFBbUIsQUFFRDtBQUZDLEFBQ2xCOztBQUlELE9BQUEsQUFBTztRQUFQLEFBQXNCLEFBQ2QsQUFHUjtBQUpzQixBQUNyQjs7a0JBR0QsQUFBZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbXlhby9EZXNrdG9wL2dpdGh1Yi9jYWxjdWxhdG9yIn0=