var inquirer = require('inquirer');
var request = require('superagent');

module.exports = function(program){
	return async function(){
		
		var auth = await inquirer.prompt([{
			type: "input",
			name: "registry",
			message: "Registry:"
		},{
			type: "input",
			name: "username",
			message: "Username:"
		}, {
			type: "password",
			name: "password",
			message: "Password:"
		}]);

		var response = await request.post(`https://${auth.registry}/api/login`)
			.send(auth)
			.set("Accept", "application/json")

		

	}
}