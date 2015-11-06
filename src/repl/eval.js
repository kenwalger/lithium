import * as lithium from '../index.js';
import vm from 'vm';

export default function evalBuilder(options){
	return function eval(code, context, filename, callback){

		try {

			return callback(undefined, vm.runInThisContext(lithium.compile(code, {
				...options,
				filename,
				target: 'Node.js'
			}), {filename}));

		} catch(error) {

			return callback(error, undefined);

		}
		
	}

}