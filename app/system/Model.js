import Database from './Database'
import _ from 'lodash'
import trim from 'trim'
class Model extends Database {
	constructor(){
		super()
	}
	/**
		@param connection string 
		@param table string 
		@param fields string 
		@param where json 
	*/
	async select(connection,table,fields='*',where=""){
		let field = [], value = [],
		sql = `SELECT ${fields} FROM ${table} `
		if(where != ""){
			await _.each(where, function(values,fields){
				field.push(fields + ' = ?')
				value.push(trim(values.toString()))
			})
			sql += `WHERE ${field.join(' AND ')}`
		}
		return await this.execute(connection,sql,value)
	}
	/**
		@param connection string 
		@param table string 
		@param data json 
		@param ignore boolean 
	*/
	async insert(connection,table,data,ignore=false){
		let field = [], setVal = [], values = []
		await _.each(data, function(val, fld){
			field.push(fld)
			setVal.push('?')			
			values.push(trim(val.toString()))			
		})
		let sql = `INSERT ${(ignore == false) ? "" : "IGNORE"} INTO ${table} (${field.join(',')}) VALUES (${setVal})`
		return await this.execute(connection, sql, values)
	}
	/**
		@param connection string 
		@param table string 
		@param condition json 
		@param data json 
	*/
	async update(connection,table,condition,data){
		let field = [], setVal = [], values = [], where=[]
		await _.each(data, function(val, fld){
			field.push(fld + " = ?")
			values.push(val)			
		})
		await _.each(condition, function(val, fld){
			where.push(fld + ' = ?')
			values.push(trim(val.toString())) 			
		})
		let sql = `UPDATE ${table} SET ${field.join(',')} WHERE ${where.join(' AND ')}`
		return await this.execute(connection, sql, values)
	}
	/**
		@param connection string 
		@param table string 
		@param condition array 
	*/
	async delete(connection, table, condition){
		let where =[], values = [];
		await _.each(condition, function(val, fld){
			where.push(fld + ' = ?');
			values.push(trim(val.toString()));
	  	});
	  	let sql = `DELETE FROM ${table} WHERE ${where.join(' AND ')}`
		return await this.execute(connection, sql, values)
	}
	/**
		@param connection string 
		@param sql string 
		@param values array 
	*/
	async query(connection,sql,values=null){
		return await this.execute(connection,sql,values)
	}
	/**
		@param connection string 
		@param sql string 
		@param value array 
	*/
	async execute(connection,sql,value=null){
		try{
			let conn = await this.connectdb(connection)
			if(value == null){
				let res = await conn[0].queryAsync(sql) //mssql
				conn[1].close()
				return res
			}else{
				return await conn.queryAsync(sql,value) //mysql
			}
		}catch(err){
			console.log(err)
			return false
		}
	}
}

module.exports = Model