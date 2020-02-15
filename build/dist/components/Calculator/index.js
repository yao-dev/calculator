'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _styles = require('./styles');

var _Layout = require('../Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _CalculationScreen = require('../CalculationScreen');

var _CalculationScreen2 = _interopRequireDefault(_CalculationScreen);

var _CalculationControl = require('../CalculationControl');

var _CalculationControl2 = _interopRequireDefault(_CalculationControl);

var _localDb = require('../../helpers/localDb');

var _calculator = require('../../helpers/calculator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/myao/Desktop/github/calculator/components/Calculator/index.js';
/** @format */

var Calculator = function (_React$Component) {
	(0, _inherits3.default)(Calculator, _React$Component);

	function Calculator(props) {
		var _this2 = this;

		(0, _classCallCheck3.default)(this, Calculator);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Calculator.__proto__ || (0, _getPrototypeOf2.default)(Calculator)).call(this, props));

		_this.state = {
			delayToReset: 750,
			operators: ['+', '-', '/', '*', 'x'],
			numbers: [['7', '8', '9'], ['4', '5', '6'], ['1', '2', '3'], ['.', '0', 'remove']]
		};

		_this.initKeyboardEvent = function (event) {
			var _this$state = _this.state,
			    operators = _this$state.operators,
			    numbers = _this$state.numbers;

			var isOperator = operators.includes(event.key);
			var isNumber = numbers.filter(function (row) {
				return row.includes(event.key);
			}).length;

			if (isOperator || isNumber) {
				var operatorToDisplay = event.key === '*' ? 'x' : '';

				_this.handleCalculation(event.key, operatorToDisplay);
			}

			if ((0, _calculator.mustRemoveLastChar)(event.key)) {
				_this.resetCalculator();
				_this.handleCalculation(event.key);
			}
		};

		_this.getActionsToCheck = function (selectedValue, operatorToDisplay, value) {
			var currentCalculation = _this.props.currentCalculation;
			var operators = _this.state.operators;

			var notChangeCalculation = currentCalculation == '0' && value == '0';
			var mustReplaceOperator = (0, _calculator.isOperator)(operators, selectedValue) && (0, _calculator.lastCharIsOperator)(operators, currentCalculation);
			var mustAddOperator = (0, _calculator.isOperator)(operators, selectedValue) || (0, _calculator.lastCharIsOperator)(operators, currentCalculation);
			var mustSetValueToCalculation = currentCalculation == '0';

			var actions = {
				notChangeCalculation: notChangeCalculation,
				mustReplaceOperator: mustReplaceOperator,
				mustAddOperator: mustAddOperator,
				mustSetValueToCalculation: mustSetValueToCalculation
			};

			return actions;
		};

		_this.setCalculation = function (value, actionsToCheck) {
			var currentCalculation = _this.props.currentCalculation;
			var notChangeCalculation = actionsToCheck.notChangeCalculation,
			    mustReplaceOperator = actionsToCheck.mustReplaceOperator,
			    mustAddOperator = actionsToCheck.mustAddOperator,
			    mustSetValueToCalculation = actionsToCheck.mustSetValueToCalculation;

			var calculation = void 0;

			if (notChangeCalculation) {
				return calculation;
			} else if (mustReplaceOperator) {
				calculation = (0, _calculator.replaceOperator)(currentCalculation, value);
			} else if (mustAddOperator) {
				if (value !== '.') calculation = currentCalculation + ' ' + value;else calculation = currentCalculation + ' 0' + value;
			} else if (mustSetValueToCalculation) {
				if (currentCalculation === '0' && value === '.') calculation = '' + currentCalculation + value;else calculation = value;
			} else {
				calculation = '' + currentCalculation + value;
			}

			return calculation;
		};

		_this.getCalculationToExecute = function (selectedValue, operatorToDisplay) {
			var value = operatorToDisplay || selectedValue;
			var actionsToCheck = _this.getActionsToCheck(selectedValue, operatorToDisplay, value);
			var calculation = _this.setCalculation(value, actionsToCheck);

			return calculation;
		};

		_this.handleCalculation = function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(selectedValue) {
				var operatorToDisplay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
				var currentCalculation, operators, resultAfterRemoveLastChar, calculation, result;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!(0, _calculator.mustRemoveLastChar)(selectedValue)) {
									_context.next = 7;
									break;
								}

								currentCalculation = _this.props.currentCalculation;
								operators = _this.state.operators;
								resultAfterRemoveLastChar = (0, _calculator.removeLastChar)(currentCalculation, operators);
								_context.next = 6;
								return (0, _localDb.dbSave)(resultAfterRemoveLastChar, _this.props.updateResult);

							case 6:
								return _context.abrupt('return', _context.sent);

							case 7:
								calculation = _this.getCalculationToExecute(selectedValue, operatorToDisplay);
								result = (0, _calculator.getCalculationResult)(calculation);
								_context.next = 11;
								return (0, _localDb.dbSave)(result, _this.props.updateResult);

							case 11:
								return _context.abrupt('return', _context.sent);

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2);
			}));

			return function (_x) {
				return _ref.apply(this, arguments);
			};
		}();

		_this.resetCalculator = function () {
			var down = 1;
			var up = 2;

			var keyboardState = down;

			document.onmouseup = function () {
				return keyboardState = up;
			};
			document.onkeyup = function () {
				return keyboardState = up;
			};

			return setTimeout((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								if (!(keyboardState === down)) {
									_context2.next = 4;
									break;
								}

								_context2.next = 3;
								return (0, _localDb.dbSave)(null, _this.props.reset);

							case 3:
								return _context2.abrupt('return', _context2.sent);

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this2);
			})), _this.state.delayToReset);
		};

		return _this;
	}

	(0, _createClass3.default)(Calculator, [{
		key: 'componentDidMount',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
				var dbState;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								document.addEventListener('keydown', this.initKeyboardEvent);

								_context3.next = 3;
								return (0, _localDb.getDbState)();

							case 3:
								dbState = _context3.sent;
								_context3.next = 6;
								return (0, _localDb.dbSave)(dbState, this.props.initDb);

							case 6:
								return _context3.abrupt('return', _context3.sent);

							case 7:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function componentDidMount() {
				return _ref3.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 162
				}
			}, _react2.default.createElement(_styles.Container, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 163
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 164
				}
			}, _react2.default.createElement(_CalculationScreen2.default, {
				currentCalculation: this.props.currentCalculation,
				result: this.props.result,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 165
				}
			}), _react2.default.createElement(_CalculationControl2.default, {
				handleCalculation: this.handleCalculation,
				resetCalculator: this.resetCalculator,
				numbers: this.state.numbers,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 169
				}
			}))));
		}
	}]);

	return Calculator;
}(_react2.default.Component);

exports.default = (0, _container2.default)(Calculator);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FsY3VsYXRvci9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhbGN1bGF0b3JDb250YWluZXIiLCJDb250YWluZXIiLCJMYXlvdXQiLCJDYWxjdWxhdGlvblNjcmVlbiIsIkNhbGN1bGF0aW9uQ29udHJvbCIsImdldERiU3RhdGUiLCJkYlNhdmUiLCJpc09wZXJhdG9yIiwibGFzdENoYXJJc09wZXJhdG9yIiwicmVwbGFjZU9wZXJhdG9yIiwiZ2V0Q2FsY3VsYXRpb25SZXN1bHQiLCJyZW1vdmVMYXN0Q2hhciIsIm11c3RSZW1vdmVMYXN0Q2hhciIsIkNhbGN1bGF0b3IiLCJwcm9wcyIsInN0YXRlIiwiZGVsYXlUb1Jlc2V0Iiwib3BlcmF0b3JzIiwibnVtYmVycyIsImluaXRLZXlib2FyZEV2ZW50IiwiZXZlbnQiLCJpbmNsdWRlcyIsImtleSIsImlzTnVtYmVyIiwiZmlsdGVyIiwicm93IiwibGVuZ3RoIiwib3BlcmF0b3JUb0Rpc3BsYXkiLCJoYW5kbGVDYWxjdWxhdGlvbiIsInJlc2V0Q2FsY3VsYXRvciIsImdldEFjdGlvbnNUb0NoZWNrIiwic2VsZWN0ZWRWYWx1ZSIsInZhbHVlIiwiY3VycmVudENhbGN1bGF0aW9uIiwibm90Q2hhbmdlQ2FsY3VsYXRpb24iLCJtdXN0UmVwbGFjZU9wZXJhdG9yIiwibXVzdEFkZE9wZXJhdG9yIiwibXVzdFNldFZhbHVlVG9DYWxjdWxhdGlvbiIsImFjdGlvbnMiLCJzZXRDYWxjdWxhdGlvbiIsImFjdGlvbnNUb0NoZWNrIiwiY2FsY3VsYXRpb24iLCJnZXRDYWxjdWxhdGlvblRvRXhlY3V0ZSIsInJlc3VsdEFmdGVyUmVtb3ZlTGFzdENoYXIiLCJ1cGRhdGVSZXN1bHQiLCJyZXN1bHQiLCJkb3duIiwidXAiLCJrZXlib2FyZFN0YXRlIiwiZG9jdW1lbnQiLCJvbm1vdXNldXAiLCJvbmtleXVwIiwic2V0VGltZW91dCIsInJlc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRiU3RhdGUi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O0FBQUEsSUFBQSxrQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQzt3QkFDb0IsS0FBQSxBQUFLLE1BRDFCLEFBQ2dDLEFBQy9CO1lBQVEsS0FBQSxBQUFLLE1BRmQsQUFFb0I7O2VBRnBCO2lCQURELEFBQ0MsQUFJQTtBQUpBO0FBQ0MsdUJBR0QsQUFBQzt1QkFDbUIsS0FEcEIsQUFDeUIsQUFDeEI7cUJBQWlCLEtBRmxCLEFBRXVCLEFBQ3RCO2FBQVMsS0FBQSxBQUFLLE1BSGYsQUFHcUI7O2VBSHJCO2lCQVJKLEFBQ0MsQUFDQyxBQUNDLEFBS0MsQUFTSjtBQVRJO0FBQ0M7Ozs7O0VBdkprQixnQkFBTSxBLEFBa0svQjs7a0JBQWUseUJBQWYsQUFBZSxBQUFvQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbXlhby9EZXNrdG9wL2dpdGh1Yi9jYWxjdWxhdG9yIn0=