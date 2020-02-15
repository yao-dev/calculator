'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _ControlItem = require('../ControlItem');

var _ControlItem2 = _interopRequireDefault(_ControlItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/myao/Desktop/github/calculator/components/OperatorList/index.js';
/** @format */

var OperatorList = function OperatorList(_ref) {
	var _handleCalculation = _ref.handleCalculation;

	return _react2.default.createElement(_styles.Container, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement(_ControlItem2.default.Operator, {
		value: '/',
		handleCalculation: function handleCalculation() {
			return _handleCalculation('/');
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}), _react2.default.createElement(_ControlItem2.default.Operator, {
		value: 'x',
		handleCalculation: function handleCalculation() {
			return _handleCalculation('*', 'x');
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}), _react2.default.createElement(_ControlItem2.default.Operator, {
		value: '-',
		handleCalculation: function handleCalculation() {
			return _handleCalculation('-');
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}), _react2.default.createElement(_ControlItem2.default.Operator, {
		value: '+',
		handleCalculation: function handleCalculation() {
			return _handleCalculation('+');
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}));
};

OperatorList.propTypes = {
	handleCalculation: _propTypes2.default.func.isRequired
};

exports.default = OperatorList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvT3BlcmF0b3JMaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIkNvbnRhaW5lciIsIkNvbnRyb2xJdGVtIiwiT3BlcmF0b3JMaXN0IiwiaGFuZGxlQ2FsY3VsYXRpb24iLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWlCOztBQUMxQixBQUFPOzs7Ozs7O0FBSlA7O0FBTUEsSUFBTSxlQUFlLFNBQWYsQUFBZSxtQkFBMkI7S0FBeEIsQUFBd0IsMEJBQXhCLEFBQXdCLEFBQy9DOzt3QkFDQyxBQUFDOzthQUFEO2VBQUEsQUFDQztBQUREO0FBQUEsRUFBQSxnQ0FDQyxBQUFDLHNCQUFELEFBQWE7U0FBYixBQUNRLEFBQ1A7cUJBQW1CLDZCQUFBO1VBQU0sbUJBQU4sQUFBTSxBQUFrQjtBQUY1Qzs7YUFBQTtlQURELEFBQ0MsQUFJQTtBQUpBO0FBQ0MsbUNBR0QsQUFBQyxzQkFBRCxBQUFhO1NBQWIsQUFDUSxBQUNQO3FCQUFtQiw2QkFBQTtVQUFNLG1CQUFBLEFBQWtCLEtBQXhCLEFBQU0sQUFBdUI7QUFGakQ7O2FBQUE7ZUFMRCxBQUtDLEFBSUE7QUFKQTtBQUNDLG1DQUdELEFBQUMsc0JBQUQsQUFBYTtTQUFiLEFBQ1EsQUFDUDtxQkFBbUIsNkJBQUE7VUFBTSxtQkFBTixBQUFNLEFBQWtCO0FBRjVDOzthQUFBO2VBVEQsQUFTQyxBQUlBO0FBSkE7QUFDQyxtQ0FHRCxBQUFDLHNCQUFELEFBQWE7U0FBYixBQUNRLEFBQ1A7cUJBQW1CLDZCQUFBO1VBQU0sbUJBQU4sQUFBTSxBQUFrQjtBQUY1Qzs7YUFBQTtlQWRGLEFBQ0MsQUFhQyxBQU1GO0FBTkU7QUFDQztBQWhCSjs7QUF1QkEsYUFBQSxBQUFhO29CQUNPLG9CQUFBLEFBQVUsS0FEOUIsQUFBeUIsQUFDVSxBQUduQztBQUp5QixBQUN4Qjs7a0JBR0QsQUFBZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbXlhby9EZXNrdG9wL2dpdGh1Yi9jYWxjdWxhdG9yIn0=