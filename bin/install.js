var lithium = require('../');

module.exports = function install(packages){
	var program = this;
	return Promise.all(packages.map(function(package){
		lithium.install(package, program);
	})).then(function(packages){
		console.log('Successfully installed:\n')
		return packages.forEach(function(package){
			console.log('\t' + package.name + '@' + package.version + '\n');
			package.dependencies.forEach(function(dependency){
				console.log('\t\s-\s' + dependency.name + '@' + dependency.version + '\n');
			});
		});
	}, function(errors){
		console.log('Failed to install package(s):\n');
		return error.forEach(function(error){
			console.log('\t' + error)
		})
	});

}