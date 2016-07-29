const li2js = require('li2js');

module.exports = class REPL {

	constructor(stdin, stdout){

		this.context = require('vm').createContext(Object.create(li2js.runtime));

		this.interface = equire('readline').createInterface({
			input: stdin,
			output: stdout,
			prompt: ">"
		});

		this.interface.on('line', function(line){
			console.log(li2js.eval(line, {context: this.context}));
			this.interface.prompt();
		});

		this.interface.prompt();

	}

}