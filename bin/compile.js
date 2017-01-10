var path = require('path');

module.exports = function compile(program){
	return async function(compiler, format, target, output){
		output = path.join(process.cwd(), output);

	}
}