'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('C:\\node_file\\crud-framework-babel\\node_modules\\babel-runtime\\regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('C:\\node_file\\crud-framework-babel\\node_modules\\babel-runtime\\helpers\\asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('C:\\node_file\\crud-framework-babel\\node_modules\\babel-runtime\\core-js\\object\\get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('C:\\node_file\\crud-framework-babel\\node_modules\\babel-runtime\\helpers\\classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('C:\\node_file\\crud-framework-babel\\node_modules\\babel-runtime\\helpers\\createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('C:\\node_file\\crud-framework-babel\\node_modules\\babel-runtime\\helpers\\possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('C:\\node_file\\crud-framework-babel\\node_modules\\babel-runtime\\helpers\\inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _Model2 = require('C:\\node_file\\crud-framework-babel\\dist\\system\\Model');

var _Model3 = _interopRequireDefault(_Model2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserModel = function (_Model) {
	(0, _inherits3.default)(UserModel, _Model);

	function UserModel() {
		(0, _classCallCheck3.default)(this, UserModel);

		var _this = (0, _possibleConstructorReturn3.default)(this, (UserModel.__proto__ || (0, _getPrototypeOf2.default)(UserModel)).call(this));

		_this.conn = 'default';
		_this.table = 'tbluser';
		_this.mainBrCode = 'srsn';
		_this.mainMsBrCode = 'srsnms';
		return _this;
	}

	(0, _createClass3.default)(UserModel, [{
		key: 'showUser',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var field, res;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								field = 'tfname,tlname';
								_context.next = 3;
								return this.select(this.conn, this.table, field);

							case 3:
								res = _context.sent;
								return _context.abrupt('return', res);

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function showUser() {
				return _ref.apply(this, arguments);
			}

			return showUser;
		}()
	}, {
		key: 'insertUser',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				var data, res;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								data = {
									tfname: 'Jade',
									tlname: 'Batal'
								};
								_context2.next = 3;
								return this.insert(this.conn, this.table, data);

							case 3:
								res = _context2.sent;
								return _context2.abrupt('return', res);

							case 5:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function insertUser() {
				return _ref2.apply(this, arguments);
			}

			return insertUser;
		}()
	}, {
		key: 'updateUser',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
				var data, condition, res;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								data = {
									tfname: 'Jades',
									tlname: 'Batals'
								};
								condition = {
									id: 1
								};
								_context3.next = 4;
								return this.update(this.conn, this.table, condition, data);

							case 4:
								res = _context3.sent;
								return _context3.abrupt('return', res);

							case 6:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function updateUser() {
				return _ref3.apply(this, arguments);
			}

			return updateUser;
		}()
	}, {
		key: 'showMsUser',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
				var res;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.next = 2;
								return this.query(this.mainMsBrCode, 'SELECT * FROM tbluser');

							case 2:
								res = _context4.sent;
								return _context4.abrupt('return', res);

							case 4:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function showMsUser() {
				return _ref4.apply(this, arguments);
			}

			return showMsUser;
		}()
	}]);
	return UserModel;
}(_Model3.default);

exports.default = new UserModel();