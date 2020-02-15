'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.reducer = exports.initialState = exports.UPDATE_RESULT = exports.INIT_LOCAL_DB = exports.RESET = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */

var RESET = exports.RESET = 'RESET';
var INIT_LOCAL_DB = exports.INIT_LOCAL_DB = 'INIT_LOCAL_DB';
var UPDATE_RESULT = exports.UPDATE_RESULT = 'UPDATE_RESULT';

var initialState = exports.initialState = {
	currentCalculation: '0',
	result: 0
};

var reducer = exports.reducer = function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case INIT_LOCAL_DB:
			{
				var _action$payload = action.payload,
				    currentCalculation = _action$payload.currentCalculation,
				    result = _action$payload.result;

				return (0, _extends3.default)({}, state, {
					currentCalculation: currentCalculation,
					result: result
				});
				// return action.payload.dbState;
			}
		case UPDATE_RESULT:
			{
				var _action$payload2 = action.payload,
				    _currentCalculation = _action$payload2.currentCalculation,
				    _result = _action$payload2.result;

				return (0, _extends3.default)({}, state, {
					currentCalculation: _currentCalculation,
					result: _result
				});
			}
		case RESET:
			return initialState;
		default:
			return state;
	}
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FsY3VsYXRvci9yZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIlJFU0VUIiwiSU5JVF9MT0NBTF9EQiIsIlVQREFURV9SRVNVTFQiLCJpbml0aWFsU3RhdGUiLCJjdXJyZW50Q2FsY3VsYXRpb24iLCJyZXN1bHQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLEFBRUE7O0FBQU8sSUFBTSx3QkFBTixBQUFjLEFBQ3JCO0FBQU8sSUFBTSx3Q0FBTixBQUFzQixBQUM3QjtBQUFPLElBQU0sd0NBQU4sQUFBc0IsQUFFN0I7O0FBQU8sSUFBTTtxQkFBZSxBQUNQLEFBQ3BCO1NBRk0sQUFBcUIsQUFFbkIsQUFHVDtBQUw0QixBQUMzQjs7QUFJTSxJQUFNLDRCQUFVLFNBQVYsQUFBVSxVQUFrQztLQUFqQyxBQUFpQyw0RUFBekIsQUFBeUI7S0FBWCxBQUFXLG1CQUN4RDs7U0FBUSxPQUFSLEFBQWUsQUFDZDtPQUFBLEFBQUssQUFBZTtBQUFBOzBCQUNvQixPQURwQixBQUMyQjtRQUQzQixBQUNYLHFDQURXLEFBQ1g7UUFEVyxBQUNTLHlCQURULEFBQ1MsQUFFNUI7O3NDQUFBLEFBQ0k7eUJBREosQUFHQzthQUhELEFBS0E7QUFIQztBQUlEO0FBQ0Q7T0FBQSxBQUFLLEFBQWU7QUFBQTsyQkFDb0IsT0FEcEIsQUFDMkI7UUFEM0IsQUFDWCx1Q0FEVyxBQUNYO1FBRFcsQUFDUywyQkFEVCxBQUNTLEFBRTVCOztzQ0FBQSxBQUNJO3lCQURKLEFBR0M7YUFIRCxBQUtBO0FBSEM7QUFJRjtPQUFBLEFBQUssQUFDSjtVQUFBLEFBQU8sQUFDUjtBQUNDO1VBdkJGLEFBdUJFLEFBQU8sQUFFVDs7QUExQk0sQUE0QlA7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbXlhby9EZXNrdG9wL2dpdGh1Yi9jYWxjdWxhdG9yIn0=