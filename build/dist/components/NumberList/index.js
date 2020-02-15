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

var _jsxFileName = '/Users/myao/Desktop/github/calculator/components/NumberList/index.js';
/** @format */

var NumberList = function NumberList(_ref) {
	var numbers = _ref.numbers,
	    _handleCalculation = _ref.handleCalculation,
	    resetCalculator = _ref.resetCalculator;

	return _react2.default.createElement(_styles.Container, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, numbers.map(function (column, columnIndex) {
		return _react2.default.createElement(_styles.RowNumber, { key: columnIndex, __source: {
				fileName: _jsxFileName,
				lineNumber: 11
			}
		}, column.map(function (row, rowIndex) {
			var isRemoveItem = row === 'remove';
			var ControlItemValue = isRemoveItem ? _react2.default.createElement('i', { className: 'fa fa-arrow-left', 'aria-hidden': 'true', __source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}) : row;

			return _react2.default.createElement('div', {
				key: rowIndex,
				onMouseDown: isRemoveItem && resetCalculator ? true : false,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}, _react2.default.createElement(_ControlItem2.default.Number, {
				value: ControlItemValue,
				handleCalculation: function handleCalculation() {
					return _handleCalculation(row);
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			}));
		}));
	}));
};

NumberList.propTypes = {
	numbers: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.string)).isRequired,
	handleCalculation: _propTypes2.default.func.isRequired,
	resetCalculator: _propTypes2.default.func.isRequired
};

exports.default = NumberList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTnVtYmVyTGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJDb250YWluZXIiLCJSb3dOdW1iZXIiLCJDb250cm9sSXRlbSIsIk51bWJlckxpc3QiLCJudW1iZXJzIiwiaGFuZGxlQ2FsY3VsYXRpb24iLCJyZXNldENhbGN1bGF0b3IiLCJtYXAiLCJjb2x1bW4iLCJjb2x1bW5JbmRleCIsInJvdyIsInJvd0luZGV4IiwiaXNSZW1vdmVJdGVtIiwiQ29udHJvbEl0ZW1WYWx1ZSIsInByb3BUeXBlcyIsImFycmF5T2YiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVcsQUFBaUI7O0FBQ3JDLEFBQU87Ozs7Ozs7QUFKUDs7QUFNQSxJQUFNLGFBQWEsU0FBYixBQUFhLGlCQUFxRDtLQUFsRCxBQUFrRCxlQUFsRCxBQUFrRDtLQUF6QyxBQUF5QywwQkFBekMsQUFBeUM7S0FBdEIsQUFBc0IsdUJBQXRCLEFBQXNCLEFBQ3ZFOzt3QkFDQyxBQUFDOzthQUFEO2VBQUEsQUFDRTtBQURGO0FBQUEsRUFBQSxVQUNFLEFBQVEsSUFBSSxVQUFBLEFBQUMsUUFBRCxBQUFTLGFBQVQ7eUJBQ1osQUFBQyxtQ0FBVSxLQUFYLEFBQWdCO2NBQWhCO2dCQUFBLEFBQ0U7QUFERjtHQUFBLFNBQ0UsQUFBTyxJQUFJLFVBQUEsQUFBQyxLQUFELEFBQU0sVUFBYSxBQUM5QjtPQUFNLGVBQWUsUUFBckIsQUFBNkIsQUFDN0I7T0FBTSx1RUFDRixXQUFILEFBQWEsb0JBQW1CLGVBQWhDLEFBQTRDO2VBQTVDO2lCQUR3QixBQUN4QjtBQUFBO0lBQUEsQ0FEd0IsR0FBekIsQUFHQyxBQUdEOzswQkFDQyxjQUFBO1NBQUEsQUFDTSxBQUNMO2lCQUFhLGdCQUFBLEFBQWdCLGtCQUFoQixBQUFrQyxPQUZoRCxBQUV1RDs7ZUFGdkQ7aUJBQUEsQUFJQztBQUpEO0FBQ0MsSUFERCxnQ0FJQyxBQUFDLHNCQUFELEFBQWE7V0FBYixBQUNRLEFBQ1A7dUJBQW1CLDZCQUFBO1lBQU0sbUJBQU4sQUFBTSxBQUFrQjtBQUY1Qzs7ZUFBQTtpQkFMRixBQUNDLEFBSUMsQUFNRjtBQU5FO0FBQ0M7QUFoQk8sQUFDWixBQUNFO0FBSkwsQUFDQyxBQUNFLEFBMEJIO0FBN0JEOztBQStCQSxXQUFBLEFBQVc7VUFDRCxvQkFBQSxBQUFVLFFBQVEsb0JBQUEsQUFBVSxRQUFRLG9CQUFwQyxBQUFrQixBQUE0QixTQURqQyxBQUMwQyxBQUNoRTtvQkFBbUIsb0JBQUEsQUFBVSxLQUZQLEFBRVksQUFDbEM7a0JBQWlCLG9CQUFBLEFBQVUsS0FINUIsQUFBdUIsQUFHVSxBQUdqQztBQU51QixBQUN0Qjs7a0JBS0QsQUFBZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbXlhby9EZXNrdG9wL2dpdGh1Yi9jYWxjdWxhdG9yIn0=