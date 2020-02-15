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

var _jsxFileName = '/Users/myao/Desktop/github/calculator/components/MadeWithLoveByMe/index.js';
/** @format */

var MadeWithLoveByMe = function MadeWithLoveByMe(_ref) {
	var name = _ref.name,
	    heartColor = _ref.heartColor;

	var love = _react2.default.createElement(_styles.HeartIcon, {
		heartColor: heartColor,
		className: 'fa fa-heart',
		'aria-hidden': 'true',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	});

	return _react2.default.createElement(_styles.Container, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, 'Made with ', love, ' by ', name);
};

MadeWithLoveByMe.propTypes = {
	name: _propTypes2.default.string,
	heartColor: _propTypes2.default.string
};

MadeWithLoveByMe.defaultProps = {
	name: 'Michaël Yao',
	heartColor: '#D43929'
};

exports.default = MadeWithLoveByMe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFkZVdpdGhMb3ZlQnlNZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJDb250YWluZXIiLCJIZWFydEljb24iLCJNYWRlV2l0aExvdmVCeU1lIiwibmFtZSIsImhlYXJ0Q29sb3IiLCJsb3ZlIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBVyxBQUFpQjs7Ozs7QUFIckM7O0FBS0EsSUFBTSxtQkFBbUIsU0FBbkIsQUFBbUIsdUJBQTBCO0tBQXZCLEFBQXVCLFlBQXZCLEFBQXVCO0tBQWpCLEFBQWlCLGtCQUFqQixBQUFpQixBQUNsRDs7S0FBTSx1QkFDTCxBQUFDO2NBQUQsQUFDYSxBQUNaO2FBRkQsQUFFVyxBQUNWO2lCQUhELEFBR2E7O2FBSGI7ZUFERCxBQUNDLEFBT0Q7QUFQQztBQUNDLEVBREQ7O3dCQVFBLEFBQUM7O2FBQUQ7ZUFBQTtBQUFBO0FBQUEsRUFBQSxFQUNZLGNBRFosTUFDc0IsUUFGdkIsQUFDQyxBQUlEO0FBZEQ7O0FBZ0JBLGlCQUFBLEFBQWlCO09BQ1Ysb0JBRHNCLEFBQ1osQUFDaEI7YUFBWSxvQkFGYixBQUE2QixBQUVOO0FBRk0sQUFDNUI7O0FBSUQsaUJBQUEsQUFBaUI7T0FBZSxBQUN6QixBQUNOO2FBRkQsQUFBZ0MsQUFFbkIsQUFHYjtBQUxnQyxBQUMvQjs7a0JBSUQsQUFBZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbXlhby9EZXNrdG9wL2dpdGh1Yi9jYWxjdWxhdG9yIn0=