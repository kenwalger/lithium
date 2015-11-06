import eval from './eval.js';

export default function start({prompt = '> ', input = process.stdin, output = process.stdin, ...options} = {}){
	
	return repl.start({
		prompt,
		input,
		output,
		eval(options),
		useGlobal: true
	});

}