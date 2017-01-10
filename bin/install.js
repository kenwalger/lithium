module.exports = function install(program){
	return async function(save, ){
		let name = program.name;
		if(!program.name){
			name = process.cwd();
		}
	}
}