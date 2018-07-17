import trim from 'trim'
import autobind from 'class-autobind'
class Controller {

	constructor(){
		autobind(this)
	}

	async view(res,view=null,json=null){
		if(view != null){
			return res.render(view,(json != null) ? json : {})
		}
		res.end('No file loaded')
	}

	async send(res,json=null){
		if(json != null){
			return res.send(json)
		}
		res.end('NO JSON request')
	}
}
module.exports = Controller
// export default Controller