'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dbSave = exports.getDbState = exports.db = exports.dbName = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _localforage = require('localforage');

var _localforage2 = _interopRequireDefault(_localforage);

var _reducer = require('../components/Calculator/reducer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

/** @format */

var dbName = exports.dbName = 'calculator';

_localforage2.default.config({
	driver: _localforage2.default.WEBSQL, // Force WebSQL; same as using setDriver()
	name: dbName,
	version: 1.0
	// size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
	// storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
	// description : 'some description'
});

var db = exports.db = _localforage2.default.createInstance({
	name: dbName
});

var getDbState = exports.getDbState = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
		var dbState;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return db.getItem(dbName);

					case 3:
						dbState = _context.sent;
						return _context.abrupt('return', dbState);

					case 7:
						_context.prev = 7;
						_context.t0 = _context['catch'](0);

						console.log('getDbState', _context.t0);
						return _context.abrupt('return', _reducer.initialState);

					case 11:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, _this, [[0, 7]]);
	}));

	return function getDbState() {
		return _ref.apply(this, arguments);
	};
}();

var dbSave = exports.dbSave = function () {
	var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
		var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _reducer.initialState;
		var cbk = arguments[1];
		var dbState;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.prev = 0;
						_context2.next = 3;
						return db.setItem(dbName, item);

					case 3:
						_context2.next = 5;
						return db.getItem(dbName);

					case 5:
						dbState = _context2.sent;
						return _context2.abrupt('return', cbk(dbState));

					case 9:
						_context2.prev = 9;
						_context2.t0 = _context2['catch'](0);

						console.log('dbSave', _context2.t0);
						return _context2.abrupt('return', cbk(item));

					case 13:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, _this, [[0, 9]]);
	}));

	return function dbSave() {
		return _ref2.apply(this, arguments);
	};
}();

exports.default = {
	db: db,
	getDbState: getDbState,
	dbSave: dbSave
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvbG9jYWxEYi5qcyJdLCJuYW1lcyI6WyJsb2NhbGZvcmFnZSIsImluaXRpYWxTdGF0ZSIsImRiTmFtZSIsImNvbmZpZyIsImRyaXZlciIsIldFQlNRTCIsIm5hbWUiLCJ2ZXJzaW9uIiwiZGIiLCJjcmVhdGVJbnN0YW5jZSIsImdldERiU3RhdGUiLCJnZXRJdGVtIiwiZGJTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkYlNhdmUiLCJpdGVtIiwiY2JrIiwic2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTzs7OztBQUNQLEFBQVMsQUFFVDs7Ozs7O0FBTEE7O0FBS08sSUFBTSwwQkFBTixBQUFlOztBQUV0QixzQkFBQSxBQUFZO1NBQ0gsc0JBRFUsQUFDRSxRQUFRLEFBQzVCO09BRmtCLEFBRVosQUFDTjtVQUFTLEFBQ1Q7QUFDQTtBQUNBO0FBTkQsQUFBbUIsQUFTbkI7QUFUbUIsQUFDbEI7O0FBUU0sSUFBTSx3Q0FBSyxBQUFZO09BQXZCLEFBQVcsQUFBMkIsQUFDdEMsQUFHUDtBQUo2QyxBQUM1QyxDQURpQjs7QUFJWCxJQUFNLDhDQUFBO3FGQUFhLG1CQUFBO01BQUE7Z0VBQUE7YUFBQTtxQ0FBQTtVQUFBO3NCQUFBO3NCQUFBO2FBRUYsR0FBQSxBQUFHLFFBRkQsQUFFRixBQUFXOztVQUEzQjtBQUZrQix5QkFBQTt1Q0FBQSxBQUdqQjs7VUFIaUI7c0JBQUE7c0NBS3hCOztjQUFBLEFBQVEsSUFBUixBQUFZLHVCQUxZOzZCQUFBLEFBTWpCOztVQU5pQjtVQUFBO3NCQUFBOztBQUFBOzBCQUFBO0FBQWI7OzhCQUFBOzBCQUFBO0FBQUE7QUFBTixBQVVQOztBQUFPLElBQU0sc0NBQUE7c0ZBQVMsb0JBQUE7TUFBQSxBQUFPLHNFQUFQLEFBQWM7TUFBZCxBQUE0QixnQkFBNUI7TUFBQTtrRUFBQTthQUFBO3VDQUFBO1VBQUE7dUJBQUE7dUJBQUE7YUFFZCxHQUFBLEFBQUcsUUFBSCxBQUFXLFFBRkcsQUFFZCxBQUFtQjs7VUFGTDt1QkFBQTthQUdFLEdBQUEsQUFBRyxRQUhMLEFBR0UsQUFBVzs7VUFBM0I7QUFIYywwQkFBQTt3Q0FLYixJQUxhLEFBS2IsQUFBSTs7VUFMUzt1QkFBQTt3Q0FPcEI7O2NBQUEsQUFBUSxJQUFSLEFBQVksb0JBUFE7d0NBUWIsSUFSYSxBQVFiLEFBQUk7O1VBUlM7VUFBQTt1QkFBQTs7QUFBQTsyQkFBQTtBQUFUOzswQkFBQTsyQkFBQTtBQUFBO0FBQU4sQUFZUDs7O0tBQWUsQUFFZDthQUZjLEFBR2Q7U0FIRCxBQUFlO0FBQUEsQUFDZCIsImZpbGUiOiJsb2NhbERiLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9teWFvL0Rlc2t0b3AvZ2l0aHViL2NhbGN1bGF0b3IifQ==