'use strict'
import "babel-polyfill";
//modules  
import express from 'express'
import requireAll from 'require.all'
import {compose} from 'compose-middleware'
import _ from 'underscore'
import validition from 'express-validator'
import path from 'path'
//files
import routes from './application/config/routes'
import policy from './application/config/policies'

const app = express(),
static_dir = __dirname+'/node_modules/',
node_plugins = static_dir.replace('dist/',''),
dist = static_dir.replace('/node_modules/','')
app.set('views',  path.join(__dirname, '/views/'))
app.use('/assets', express.static(node_plugins))
app.use('/dist', express.static(dist))

console.log(node_plugins)
// app.use('/view', express.static('public/template'))
app.use(validition())
app.engine('htm', require('ejs').renderFile)
app.set('view engine', 'htm')

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