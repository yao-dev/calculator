'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _NumberList = require('../NumberList');

var _NumberList2 = _interopRequireDefault(_NumberList);

var _OperatorList = require('../OperatorList');

var _OperatorList2 = _interopRequireDefault(_OperatorList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/myao/Desktop/github/calculator/components/CalculationControl/index.js';
/** @format */

var CalculationControl = function CalculationControl(_ref) {
	var numbers = _ref.numbers,
	    handleCalculation = _ref.handleCalculation,
	    resetCalculator = _ref.resetCalculator;

	return _react2.default.createElement(_styles.Container, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement(_NumberList2.default, {
		numbers: numbers,
		handleCalculation: handleCalculation,
		resetCalculator: resetCalculator,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}), _react2.default.createElement(_OperatorList2.default, { handleCalculation: handleCalculation, __source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}));
};

CalculationControl.propTypes = {
	numbers: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.string).isRequired).isRequired,
	handleCalculation: _propTypes2.default.func.isRequired,
	resetCalculator: _propTypes2.default.func.isRequired
};

exports.default = CalculationControl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FsY3VsYXRpb25Db250cm9sL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIkNvbnRhaW5lciIsIk51bWJlckxpc3QiLCJPcGVyYXRvckxpc3QiLCJDYWxjdWxhdGlvbkNvbnRyb2wiLCJudW1iZXJzIiwiaGFuZGxlQ2FsY3VsYXRpb24iLCJyZXNldENhbGN1bGF0b3IiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFpQjs7QUFDMUIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7QUFMUDs7QUFPQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQix5QkFJckI7S0FITCxBQUdLLGVBSEwsQUFHSztLQUZMLEFBRUsseUJBRkwsQUFFSztLQURMLEFBQ0ssdUJBREwsQUFDSyxBQUNMOzt3QkFDQyxBQUFDOzthQUFEO2VBQUEsQUFDQztBQUREO0FBQUEsRUFBQSxrQkFDQyxBQUFDO1dBQUQsQUFDVSxBQUNUO3FCQUZELEFBRW9CLEFBQ25CO21CQUhELEFBR2tCOzthQUhsQjtlQURELEFBQ0MsQUFLQTtBQUxBO0FBQ0MscUJBSUQsQUFBQyx3Q0FBYSxtQkFBZCxBQUFpQzthQUFqQztlQVBGLEFBQ0MsQUFNQyxBQUdGO0FBSEU7O0FBWkg7O0FBaUJBLG1CQUFBLEFBQW1CO1VBQ1Qsb0JBQUEsQUFBVSxRQUFRLG9CQUFBLEFBQVUsUUFBUSxvQkFBbEIsQUFBNEIsUUFBOUMsQUFBc0QsWUFEakMsQUFFNUIsQUFDRjtvQkFBbUIsb0JBQUEsQUFBVSxLQUhDLEFBR0ksQUFDbEM7a0JBQWlCLG9CQUFBLEFBQVUsS0FKNUIsQUFBK0IsQUFJRSxBQUdqQztBQVArQixBQUM5Qjs7a0JBTUQsQUFBZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbXlhby9EZXNrdG9wL2dpdGh1Yi9jYWxjdWxhdG9yIn0=