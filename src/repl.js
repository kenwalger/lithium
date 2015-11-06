import {* as repl} from './repl/index.js';

export default class REPL {
	
	constructor(options){

		this.instance = repl.start(options);

	}


	get context(){
		return this.instance.context;
	}

}