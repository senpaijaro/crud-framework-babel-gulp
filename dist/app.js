'use strict';

require('C:\\node_file\\crud-framework-babel\\node_modules\\babel-polyfill');

var _express = require('C:\\node_file\\crud-framework-babel\\node_modules\\express');

var _express2 = _interopRequireDefault(_express);

var _require = require('C:\\node_file\\crud-framework-babel\\node_modules\\require.all');

var _require2 = _interopRequireDefault(_require);

var _composeMiddleware = require('C:\\node_file\\crud-framework-babel\\node_modules\\compose-middleware');

var _underscore = require('C:\\node_file\\crud-framework-babel\\node_modules\\underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _expressValidator = require('C:\\node_file\\crud-framework-babel\\node_modules\\express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _path = require('C:\\node_file\\crud-framework-babel\\node_modules\\path');

var _path2 = _interopRequireDefault(_path);

var _routes = require('./application/config/routes');

var _routes2 = _interopRequireDefault(_routes);

var _policies = require('./application/config/policies');

var _policies2 = _interopRequireDefault(_policies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//files

//modules  
var app = (0, _express2.default)(),
    static_dir = __dirname + '/node_modules/',
    node_plugins = static_dir.replace('dist/', ''),
    dist = static_dir.replace('/node_modules/', '');
app.set('views', _path2.default.join(__dirname, '/views/'));
app.use('/assets', _express2.default.static(node_plugins));
app.use('/dist', _express2.default.static(dist));

console.log(node_plugins);
// app.use('/view', express.static('public/template'))
app.use((0, _expressValidator2.default)());
app.engine('htm', require('ejs').renderFile);
app.set('view engine', 'htm');

var controllers = (0, _require2.default)({
	dir: './application/controller', //only files that end with 'controller.js' 
	match: /Controller\.js$/i,
	recursive: false,
	map: function map(name, path, isFile) {
		return _require2.default.map(name, path, isFile).replace(/Controller$/i, '');
	}
}),
    policies = (0, _require2.default)({
	dir: './application/policies',
	match: /Policy\.js$/i //only files that end with 'controller.js' 
});

_underscore2.default.each(_routes2.default, function (value, index) {
	var getApi = index.split(" "),
	    path = value.split("."),
	    middleware = [];

	_underscore2.default.each(_policies2.default["policies"], function (val, ind) {
		if (path[0] == ind && path[1] in val) {
			middleware = val[path[1]];
			return false;
		}
	});

	_underscore2.default.each(middleware, function (val, ind) {
		if (val.indexOf("Policy") > -1) {
			middleware[ind] = policies[val];
		}
	});

	var change = getApi[0];
	middleware.push(controllers[path[0]][path[1]]);
	app[change.toLowerCase()](getApi[1], (0, _composeMiddleware.compose)(middleware));
});

app.listen(4200, function () {
	console.log('running port ' + 4200);
});