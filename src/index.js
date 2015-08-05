import utils from './util/index.js';

export compile from 'compile.js';
export run from 'run.js';
export repl from 'repl.js';

export async function options(){
	const config = await utils.getConfFile();
	
}