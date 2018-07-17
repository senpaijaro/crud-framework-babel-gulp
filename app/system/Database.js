'use strict'
import bluebird from 'bluebird'
import mysql from 'mysql'
import sql from 'mssql'
import Promise from 'promise'
class Database  {

	async connectdb(db=null){
		if(db != null){
			switch(db){
				//default connection 
				case 'default': return await this.mysqlExecute("localhost","root","password!@#$",'test')
				//mysql
				case 'srsn': return await this.mysqlExecute("localhost","root","password!@#$","test")
				break;
				//mssql
				case 'srsnms': return await this.mssqlExecute("192.168.0.148","markuser","tseug","NOVA_JADE")
				break;
			}
		}
	}

	async mysqlExecute(host,user,password,database){
		let conn = await this.connjson(host,user,password,database)
		return await this.connection(conn)
	}

	async mssqlExecute(host,user,password,database){
		let conn = await this.msConnJson(host,user,password,database)
		return await this.msconnection(conn)
	}

	async connection(conn){
		return bluebird.promisifyAll(mysql.createConnection(conn))
	}

	async msconnection(conn){
		let mssql = bluebird.promisifyAll(sql),
		pool = await new mssql.ConnectionPool(conn).connect(),
		request = await pool.request(),
		result = await Promise.all([request, pool])
		return result
	}

	async msConnJson(host,user,password,database){
		let connms = {
			user: user,
			password: password,
			server: host, 
			database: database,
			options: {
				abortTransactionOnError: true // <-- SET XACT_ABORT ON
			}
		}
		return connms
	}

	async connjson(host,user,password,database){
		return { 
			host: host,
			user: user,
			password: password,
			database: database,
			connectionLimit: 1000,
			queueLimit: -1, acquireTimeout: 2
		}
	}

}

module.exports = Database