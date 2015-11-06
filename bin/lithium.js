#!/usr/bin/env node

import * as lithium from '../src/index.js';

import * as fs from 'fs';
import * as path from 'path';

import program from 'commander';

program
	.version(require('../package.json').version)
	.option('-i, --input [path]', 'specify an input directory/file')
	.option('-o, --output [path]', 'specify a output directory/file')
	.option('-t, --target [name]', 'compile target')
	.option('-e, --engine [name]', 'specify which compiler/interpreter to use')

program
	.command('install <pkg>')
	.action(function(options){

	});

program
	.command('run <script>')
	.action(function(options){

	});

program
	.command('compile')
	.action()

program
	.command('*')

program.parse(process.argv);