#!/usr/bin/env node

import * as lithium from '../src/index.js';

import {readFileSync} from 'fs';
import {resolve, parse} from 'path';

import program from 'commander';
import * as YAML from 'yamljs';

program
	.version(require('../package.json').version)
	.option('-o, --output [path]', 'specify a output directory/file')
	.option('-f, --format [name]', 'specify the format of the input')
	.option('-t, --target [name]', 'specify a compile target')
	.option('-e, --engine [name]', 'specify which compiler/interpreter to use')

program
	.command('install <pkg>')
	.action(function(pkg){
		throw new Error(`Install ain't implemented yet.`);
	});

program
	.command('run <script>')
	.action(function(script){

		const path = resolve(process.cwd(), script);
		const {dir, base, name} = parse(path);

		// If a file path was specified, open the file and run it.
		if(base){

			const file = readFileSync(path);

			return lithium.run(file, {
				format: program.format,
				target: program.target,
				engine: program.engine
			});

		// Else, if a directory was specified, find the package.yml file.
		} else {

			const pkg = YAML.parse(readFileSync(join(path, 'package.yml')));

			const 

		}

	});

program
	.command('compile <script>')
	.action(function(script){

	})

program
	.command('*')
	.action(function(){

	});

program.parse(process.argv);