import Model from 'system/Model'

class UserModel extends Model{
	constructor(){
		super()
		this.conn = 'default'
		this.table = 'tbluser'
		this.mainBrCode = 'srsn'
		this.mainMsBrCode = 'srsnms'
	}
	async showUser(){
		let field = 'tfname,tlname',
		res = await this.select(this.conn,this.table,field)
		return res
	}

	async insertUser(){
		let data = {
			tfname: 'Jade',
			tlname: 'Batal',
		},
		res = await this.insert(this.conn, this.table, data)
		return res
	}
	async updateUser(){
		let data = {
			tfname: 'Jades',
			tlname: 'Batals',
		},
		condition = {
			id: 1
		},
		res = await this.update(this.conn, this.table, condition, data)
		return res
	}

	async showMsUser(){
		let res = await this.query(this.mainMsBrCode,`SELECT * FROM tbluser`)
		return res
	}
}

export default new UserModel