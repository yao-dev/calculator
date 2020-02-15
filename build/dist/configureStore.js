'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextConnect = exports.initStore = undefined;

var _redux = require('redux');

var _nextConnectRedux = require('next-connect-redux');

var _nextConnectRedux2 = _interopRequireDefault(_nextConnectRedux);

var _reducer = require('./components/Calculator/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initStore = exports.initStore = function initStore() {
  var REDUX_DEVTOOLS = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || undefined;

  return (0, _redux.createStore)(_reducer2.default, REDUX_DEVTOOLS);
};

var nextConnect = exports.nextConnect = (0, _nextConnectRedux2.default)(initStore);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyZVN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwibmV4dENvbm5lY3RSZWR1eCIsImNhbGN1bGF0b3JSZWR1Y2VyIiwiaW5pdFN0b3JlIiwiUkVEVVhfREVWVE9PTFMiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIiwidW5kZWZpbmVkIiwibmV4dENvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFTLEFBQVQ7O0FBQ0EsQUFBTyxBQUFQOzs7O0FBQ0EsQUFBTyxBQUFQLEFBRUE7Ozs7OztBQUFPLElBQU0sZ0NBQVksU0FBWixBQUFZLFlBQU0sQUFDN0I7TUFBTSxpQkFBaUIsT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sQUFBeEMsZ0NBQXdFLE9BQU8sQUFBUCxBQUF4RSxrQ0FBaUgsQUFBeEksQUFFQTs7U0FBTyxBQUNMLEFBREssMkNBRUwsQUFGSyxBQUFQLEFBSUQ7QUFQTSxBQVNQOztBQUFPLElBQU0sb0NBQWMsZ0NBQWlCLEFBQWpCLEFBQXBCIiwiZmlsZSI6ImNvbmZpZ3VyZVN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9teWFvL0Rlc2t0b3AvZ2l0aHViL2NhbGN1bGF0b3IifQ==