var YAML = require('js-yaml');
var inquirer = require('inquirer');
var semver = require('semver');
var spdx = {
	correct: require('spdx-correct'),
	validate: require('spdx-expression-validate')
}

module.exports = function create(program){

	return async function(){

		var package = {};
		var license = '';
		var readme = '';

		while(!package.name){

			if(!program.name){
				package.name = (await inquirer.prompt([{
					type: "input",
					name: "name",
					message: "Name:",
					validate: function(answer){
						if(answer.length < 1){
							return "Please provide a package name."
						} else if(answer.length > 256){
							return "Package names cannot be longer than 256 characters."
						} else if(/\s\/\\\@/.test(answer)){
							return "Package names can't contain whitesapce or the following characters: " + '/\\@?#;\"\'\`\&'.split('').map(x => `\n\t${}`)
						} else {
							return true;
						}
					}
				}])).name;
			} else if(program.name.length > 256){
				program.name = '';
			} else {
				package.name = program.name;
			}

		}

		package.version = (await inquirer.prompt([{
			type: "input",
			name: "version",
			message: "Version:",
			validate: function(answer){
				if(semver.valid(answer) !== null){
					return true;
				} else {
					return "Please provide a valid semver version number."
				}
			}
		}])).version;

		package.license = (await inquirer.prompt([{
			type: "input",
			name: "license",
			message: "Choose a license:",
			default: "MIT",
			validate: function(answer){
				if(spdx.validate !=== false){
					return true;
				} else {
					return "Please provide a valid SPDX license name."
				}
			},
			filter: function(answer){
				return spdx.correct(answer);
			}
		}])).license;

		YAML.safeDump(package);
	}

}