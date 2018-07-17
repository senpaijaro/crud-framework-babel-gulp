'use strict'
import "babel-polyfill";
//modules  
import express from 'express'
import requireAll from 'require.all'
import {compose} from 'compose-middleware'
import _ from 'underscore'
import validition from 'express-validator'
//files
import routes from 'application/config/routes'
import policy from 'application/config/policies'

const app = express()
app.set('views', 'public/template')
app.use('/public', express.static('public/plugins'))
app.use('/partials', express.static('public/template/includes')),
app.use('/view', express.static('public/template'))
app.use(validition())
app.engine('html', require('ejs').renderFile)

let controllers = requireAll({
	dir: './application/controller', //only files that end with 'controller.js' 
	match: /Controller\.js$/i,
	recursive: false,
	map: (name, path, isFile ) => requireAll.map(name, path, isFile).replace(/Controller$/i,'')
}),
policies = requireAll({
	dir: './application/policies',
  	match: /Policy\.js$/i, //only files that end with 'controller.js' 
})

_.each(routes, function(value, index){
	let getApi = index.split(" "),
	path = value.split("."),
	middleware = []

	_.each(policy["policies"], function(val, ind){
		if(path[0] == ind && path[1] in val){
			middleware = val[path[1]];
			return false;
		}
	});

	_.each(middleware, function(val, ind){
		if(val.indexOf("Policy") > -1 ){
			middleware[ind] = policies[val];
		}
	});

	const change = getApi[0]
	middleware.push(controllers[path[0]][path[1]])
	app[change.toLowerCase()](getApi[1], compose(middleware))
})

app.listen(4200, function(){
	console.log('running port ' + 4200)
})