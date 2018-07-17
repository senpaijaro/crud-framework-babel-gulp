'use strict'
import Controller from 'system/Controller'
import autobind from 'class-autobind'
import UserMod from 'model/UserModel'
class UserController extends Controller {

	constructor(){
		super()
	}
	
	async listAllUser(req, res){
		// let row = await UserMod.showUser()
		// let insert = await UserMod.insertUser()
		// let update = await UserMod.updateUser()
		// mssql
		let msres = await UserMod.showMsUser()
		console.log(msres)
		const data = {
			title : 'Basic babel framework'
		}
		await this.view(res, 'index.html', data)
	}

	async listDataUser(req, res){
		const user = {
			fname: 'jade',
			lname: 'batal'
		}
		const data = {
			title: 'basic framework'
		}
		const result = {
			result: user,
			data: data
		}
		await this.send(res, result)
	}


}
// export default new UserController
module.exports = new UserController