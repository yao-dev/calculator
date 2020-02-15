'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.reset = exports.updateResult = exports.initDb = undefined;

var _reducer = require('./reducer');

var initDb = exports.initDb = function initDb(_ref) {
	var currentCalculation = _ref.currentCalculation,
	    result = _ref.result;
	return {
		type: _reducer.INIT_LOCAL_DB,
		payload: {
			currentCalculation: currentCalculation,
			result: result
		}
	};
}; /** @format */

var updateResult = exports.updateResult = function updateResult(_ref2) {
	var currentCalculation = _ref2.currentCalculation,
	    _ref2$result = _ref2.result,
	    result = _ref2$result === undefined ? 0 : _ref2$result;
	return {
		type: _reducer.UPDATE_RESULT,
		payload: {
			currentCalculation: currentCalculation,
			result: result
		}
	};
};

var reset = exports.reset = function reset() {
	return {
		type: _reducer.RESET
	};
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FsY3VsYXRvci9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIklOSVRfTE9DQUxfREIiLCJVUERBVEVfUkVTVUxUIiwiUkVTRVQiLCJpbml0RGIiLCJjdXJyZW50Q2FsY3VsYXRpb24iLCJyZXN1bHQiLCJ0eXBlIiwicGF5bG9hZCIsInVwZGF0ZVJlc3VsdCIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsQUFBUyxBQUFlLEFBQWUsQUFBYSxBQUVwRDs7QUFBTyxJQUFNLDBCQUFTLFNBQVQsQUFBUyxhQUFBO0tBQUEsQUFBRywwQkFBSCxBQUFHO0tBQUgsQUFBdUIsY0FBdkIsQUFBdUI7O0FBQWMsQUFDcEQsQUFDTjs7dUJBQVMsQUFFUjtXQUpvQixBQUFxQyxBQUVqRDtBQUFBLEFBQ1I7QUFIeUQsQUFDMUQ7QUFETSxBQVFQLEdBWkE7O0FBWU8sSUFBTSxzQ0FBZSxTQUFmLEFBQWUsb0JBQUE7S0FBQSxBQUFHLDJCQUFILEFBQUc7MEJBQUgsQUFBdUI7S0FBdkIsQUFBdUIsc0NBQXZCLEFBQWdDLElBQWhDOztBQUF5QyxBQUM5RCxBQUNOOzt1QkFBUyxBQUVSO1dBSjBCLEFBQXlDLEFBRTNEO0FBQUEsQUFDUjtBQUhtRSxBQUNwRTtBQURNLEFBUVA7O0FBQU8sSUFBTSx3QkFBUSxTQUFSLEFBQVEsUUFBQTs7QUFBQSxBQUFPLEFBQ3JCO0FBRHFCLEFBQzNCO0FBRE0iLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbXlhby9EZXNrdG9wL2dpdGh1Yi9jYWxjdWxhdG9yIn0=