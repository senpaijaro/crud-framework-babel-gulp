'use strict';

var _regenerator = require('C:\\node_file\\crud-framework-babel\\node_modules\\babel-runtime\\regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('C:\\node_file\\crud-framework-babel\\node_modules\\babel-runtime\\helpers\\asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('C:\\node_file\\crud-framework-babel\\node_modules\\babel-runtime\\helpers\\classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('C:\\node_file\\crud-framework-babel\\node_modules\\babel-runtime\\helpers\\createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _trim = require('C:\\node_file\\crud-framework-babel\\node_modules\\trim');

var _trim2 = _interopRequireDefault(_trim);

var _classAutobind = require('C:\\node_file\\crud-framework-babel\\node_modules\\class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Controller = function () {
	function Controller() {
		(0, _classCallCheck3.default)(this, Controller);

		(0, _classAutobind2.default)(this);
	}

	(0, _createClass3.default)(Controller, [{
		key: 'view',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(res) {
				var _view = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				var json = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!(_view != null)) {
									_context.next = 2;
									break;
								}

								return _context.abrupt('return', res.render(_view, json != null ? json : {}));

							case 2:
								res.end('No file loaded');

							case 3:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function view(_x) {
				return _ref.apply(this, arguments);
			}

			return view;
		}()
	}, {
		key: 'send',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(res) {
				var json = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								if (!(json != null)) {
									_context2.next = 2;
									break;
								}

								return _context2.abrupt('return', res.send(json));

							case 2:
								res.end('NO JSON request');

							case 3:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function send(_x4) {
				return _ref2.apply(this, arguments);
			}

			return send;
		}()
	}]);
	return Controller;
}();

module.exports = Controller;
// export default Controller