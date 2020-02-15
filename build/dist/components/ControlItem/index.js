'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/myao/Desktop/github/calculator/components/ControlItem/index.js';
/** @format */

var hoc = function hoc(WrappedComponent, type) {
	return function (_React$Component) {
		(0, _inherits3.default)(_class, _React$Component);

		function _class() {
			(0, _classCallCheck3.default)(this, _class);

			return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
		}

		(0, _createClass3.default)(_class, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, this.props, { type: type, __source: {
						fileName: _jsxFileName,
						lineNumber: 9
					}
				}));
			}
		}]);

		return _class;
	}(_react2.default.Component);
};

exports.default = {
	Number: hoc(_container2.default, 'number'),
	Operator: hoc(_container2.default, 'operator')
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJvbEl0ZW0vaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb250cm9sSXRlbUNvbnRhaW5lciIsImhvYyIsIldyYXBwZWRDb21wb25lbnQiLCJ0eXBlIiwicHJvcHMiLCJDb21wb25lbnQiLCJOdW1iZXIiLCJPcGVyYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBMEI7Ozs7Ozs7QUFIakM7O0FBS0EsSUFBTSxNQUFNLFNBQU4sQUFBTSxJQUFBLEFBQUMsa0JBQUQsQUFBbUIsTUFBbkI7b0NBQUE7a0NBQUE7O29CQUFBO3VDQUFBOztpSUFBQTtBQUFBOzs7UUFBQTs0QkFFRCxBQUNSO3lDQUFPLEFBQUMsNkNBQXFCLEtBQXRCLEFBQTJCLFNBQU8sTUFBbEMsQUFBd0M7Z0JBQXhDO2tCQUFQLEFBQU8sQUFDUDtBQURPO01BQUE7QUFIRTtBQUFBOztTQUFBO0dBQ0csZ0JBREgsQUFDUztBQURyQixBQU9BOzs7U0FDUyxBQUFJLHlCQURFLEFBQ04sQUFBMEIsQUFDbEM7V0FBVSxBQUFJLHlCQUZmLEFBQWUsQUFFSixBQUEwQjtBQUZ0QixBQUNkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9teWFvL0Rlc2t0b3AvZ2l0aHViL2NhbGN1bGF0b3IifQ==