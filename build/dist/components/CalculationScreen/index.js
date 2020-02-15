'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/myao/Desktop/github/calculator/components/CalculationScreen/index.js';
/** @format */

var CalculationScreen = function CalculationScreen(_ref) {
	var currentCalculation = _ref.currentCalculation,
	    result = _ref.result;

	return _react2.default.createElement(_styles.Container, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, currentCalculation), _react2.default.createElement('span', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, result)));
};

CalculationScreen.propTypes = {
	currentCalculation: _propTypes2.default.string.isRequired,
	result: _propTypes2.default.number.isRequired
};

exports.default = CalculationScreen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FsY3VsYXRpb25TY3JlZW4vaW5kZXguanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiQ29udGFpbmVyIiwiQ2FsY3VsYXRpb25TY3JlZW4iLCJjdXJyZW50Q2FsY3VsYXRpb24iLCJyZXN1bHQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBaUI7Ozs7O0FBSDFCOztBQUtBLElBQU0sb0JBQW9CLFNBQXBCLEFBQW9CLHdCQUFvQztLQUFqQyxBQUFpQywwQkFBakMsQUFBaUM7S0FBYixBQUFhLGNBQWIsQUFBYSxBQUM3RDs7d0JBQ0MsQUFBQzs7YUFBRDtlQUFBLEFBQ0M7QUFERDtBQUFBLEVBQUEsa0JBQ0MsY0FBQTs7YUFBQTtlQUFBLEFBQ0M7QUFERDtBQUFBLG9CQUNDLGNBQUE7O2FBQUE7ZUFBQSxBQUFJO0FBQUo7QUFBQSxJQURELEFBQ0MsQUFDQSxxQ0FBQSxjQUFBOzthQUFBO2VBQUEsQUFBTztBQUFQO0FBQUEsSUFKSCxBQUNDLEFBQ0MsQUFFQyxBQUlIO0FBVEQ7O0FBV0Esa0JBQUEsQUFBa0I7cUJBQ0csb0JBQUEsQUFBVSxPQURELEFBQ1EsQUFDckM7U0FBUSxvQkFBQSxBQUFVLE9BRm5CLEFBQThCLEFBRUosQUFHMUI7QUFMOEIsQUFDN0I7O2tCQUlELEFBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL215YW8vRGVza3RvcC9naXRodWIvY2FsY3VsYXRvciJ9