'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CalculatorContainer = undefined;

var _redux = require('redux');

var _configureStore = require('../../configureStore');

var _actions = require('./actions');

var mapStateToProps = function mapStateToProps(state) {
	return state;
}; /** @format */

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		initDb: (0, _redux.bindActionCreators)(_actions.initDb, dispatch),
		updateResult: (0, _redux.bindActionCreators)(_actions.updateResult, dispatch),
		reset: (0, _redux.bindActionCreators)(_actions.reset, dispatch)
	};
};

var CalculatorContainer = exports.CalculatorContainer = function CalculatorContainer(Component) {
	return (0, _configureStore.nextConnect)(mapStateToProps, mapDispatchToProps)(Component);
};

exports.default = CalculatorContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FsY3VsYXRvci9jb250YWluZXIuanMiXSwibmFtZXMiOlsiYmluZEFjdGlvbkNyZWF0b3JzIiwibmV4dENvbm5lY3QiLCJpbml0RGIiLCJyZXNldCIsInVwZGF0ZVJlc3VsdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJDYWxjdWxhdG9yQ29udGFpbmVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVMsQUFBUSxBQUFPLEFBQW9COztBQUU1QyxJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQUQ7UUFBQSxBQUFXO0FBQW5DLEdBTkE7O0FBT0EsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFEOztVQUNsQixBQUFtQixnREFEYyxBQUNqQyxBQUEyQixBQUNuQztnQkFBYyxBQUFtQixzREFGUSxBQUUzQixBQUFpQyxBQUMvQztTQUFPLEFBQW1CLCtDQUhBLEFBQWUsQUFHbEMsQUFBMEI7QUFIUSxBQUN6QztBQURELEFBTUE7O0FBQU8sSUFBTSxvREFBc0IsU0FBdEIsQUFBc0Isb0JBQUEsQUFBQyxXQUFEO1FBQ2xDLGlDQUFBLEFBQVksaUJBQVosQUFBNkIsb0JBREssQUFDbEMsQUFBaUQ7QUFEM0MsQUFHUDs7a0JBQUEsQUFBZSIsImZpbGUiOiJjb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL215YW8vRGVza3RvcC9naXRodWIvY2FsY3VsYXRvciJ9