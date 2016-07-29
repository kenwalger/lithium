#!/usr/bin/env node

const program = require('commander');
const api = require('../src/index.js');

program
	.version(require('../package.json').version)
	.option('-o, --output <path>]', 'specify a output directory/file')
	.option('-f, --format [name]', 'specify the format of the input')
	.option('-t, --target [name]', 'specify a compile target')
	.option('-e, --engine [name]', 'specify which compiler/interpreter to use')

program
	.command('compile [script]')
	.action(function(script){
		if(!script){
			try {
				var pkg = yaml.parse(fs.readFileSync(path.join(process.cwd(), 'pacakge.lip'), {encoding: 'utf8'}));
			} catch(e){
				console.error("Please provide a file to compile or run this ");
				process.exit(1);
			}
		}
		api.compile()
	});

program
	.command('get <key>')
	.action(function(key){
		try {

		} catch(e){
			console.error("Try again in a directory with a package.lip file.")
		}
	});

program
	.command('install [packages...]')
	.action(function(packages){
		if(packages.length === 0){
			packages = process.cwd();
		}
		Promise.all(packages.map(package => api.install(package)));
	});

program
	.command('login')
	.action(require('login.js'));

program
	.command('logout')
	.action(require('logout.js'));

program
	.command('optimize')
	.option('-o, -optimizer <optimizer>')
	.action(require('optimize.js'));

program
	.command('parse [file]')
	.option('-p, --parser [parser]', 'The parser to use when parsing the file.')
	.action(require('parse.js'));

program
	.command('publish')
	.option('-r, --repository [repository]', 'The repository to publish the package to.')
	.action(require('publish.js'));

program
	.command('run [file]')
	.action(function(script){
		if(!file){
			
		}
		const script = fs.readFileSync(path.join(process.cwd(), script));
	});

program
	.command('set <key> [value]')
	.action(function(key, value){

	});

program
	.command('*')
	.action(function(){

	});

program.parse(process.argv);