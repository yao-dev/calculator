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

var _jsxFileName = '/Users/myao/Desktop/github/calculator/components/ControlItem/container.js';
/** @format */

var ControlItemContainer = function ControlItemContainer(_ref) {
	var type = _ref.type,
	    handleCalculation = _ref.handleCalculation,
	    value = _ref.value;

	return _react2.default.createElement(_styles.Container, { type: type, onClick: handleCalculation, __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, value);
};

ControlItemContainer.propTypes = {
	value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.node]).isRequired,
	handleCalculation: _propTypes2.default.func.isRequired,
	type: _propTypes2.default.oneOf(['number', 'operator'])
};

exports.default = ControlItemContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJvbEl0ZW0vY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIkNvbnRhaW5lciIsIkNvbnRyb2xJdGVtQ29udGFpbmVyIiwidHlwZSIsImhhbmRsZUNhbGN1bGF0aW9uIiwidmFsdWUiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzdHJpbmciLCJub2RlIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWlCOzs7OztBQUgxQjs7QUFLQSxJQUFNLHVCQUF1QixTQUF2QixBQUF1QiwyQkFBd0M7S0FBckMsQUFBcUMsWUFBckMsQUFBcUM7S0FBL0IsQUFBK0IseUJBQS9CLEFBQStCO0tBQVosQUFBWSxhQUFaLEFBQVksQUFDcEU7O3dCQUNDLEFBQUMsbUNBQVUsTUFBWCxBQUFpQixNQUFNLFNBQXZCLEFBQWdDO2FBQWhDO2VBQUEsQUFDRTtBQURGO0VBQUEsRUFERCxBQUNDLEFBSUQ7QUFORDs7QUFRQSxxQkFBQSxBQUFxQjtRQUNiLG9CQUFBLEFBQVUsVUFBVSxDQUMxQixvQkFEMEIsQUFDaEIsUUFDVixvQkFGMEIsQUFFaEIsUUFDVixvQkFITSxBQUFvQixBQUdoQixPQUpxQixBQUs3QixBQUNIO29CQUFtQixvQkFBQSxBQUFVLEtBTkcsQUFNRSxBQUNsQztPQUFNLG9CQUFBLEFBQVUsTUFBTSxDQUFBLEFBQUMsVUFQeEIsQUFBaUMsQUFPMUIsQUFBZ0IsQUFBVyxBQUdsQztBQVZpQyxBQUNoQzs7a0JBU0QsQUFBZSIsImZpbGUiOiJjb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL215YW8vRGVza3RvcC9naXRodWIvY2FsY3VsYXRvciJ9