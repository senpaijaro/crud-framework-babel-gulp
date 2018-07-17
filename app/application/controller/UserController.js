'use strict'
import Controller from 'system/Controller'
import autobind from 'class-autobind'
import UserMod from 'model/UserModel'
class UserController extends Controller {

	constructor(){
		super()
	}
	
	async listAllUser(req, res){
		let msres = await UserMod.showMsUser()
		console.log(msres)
		const data = {
			title : 'Basic babel framework'
		}
		await this.view(res, 'index.htm', data)
	}

}
// export default new UserController
module.exports = new UserController