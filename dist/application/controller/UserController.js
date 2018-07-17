'use strict';

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

var _Controller2 = require('C:\\node_file\\crud-framework-babel\\dist\\system\\Controller');

var _Controller3 = _interopRequireDefault(_Controller2);

var _classAutobind = require('C:\\node_file\\crud-framework-babel\\node_modules\\class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

var _UserModel = require('C:\\node_file\\crud-framework-babel\\dist\\application\\model\\UserModel');

var _UserModel2 = _interopRequireDefault(_UserModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserController = function (_Controller) {
	(0, _inherits3.default)(UserController, _Controller);

	function UserController() {
		(0, _classCallCheck3.default)(this, UserController);
		return (0, _possibleConstructorReturn3.default)(this, (UserController.__proto__ || (0, _getPrototypeOf2.default)(UserController)).call(this));
	}

	(0, _createClass3.default)(UserController, [{
		key: 'listAllUser',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
				var msres, data;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _UserModel2.default.showMsUser();

							case 2:
								msres = _context.sent;

								console.log(msres);
								data = {
									title: 'Basic babel framework'
								};
								_context.next = 7;
								return this.view(res, 'index.htm', data);

							case 7:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function listAllUser(_x, _x2) {
				return _ref.apply(this, arguments);
			}

			return listAllUser;
		}()
	}]);
	return UserController;
}(_Controller3.default);
// export default new UserController


module.exports = new UserController();