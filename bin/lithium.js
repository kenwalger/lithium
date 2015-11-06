#!/usr/bin/env node

import * as lithium from '../src/index.js';

import * as fs from 'fs';
import * as path from 'path';

import program from 'commander';

program
	.version(require('../package.json').version)
	.option('-o, --out', 'specify a ');
	.option('-t, --target', '')
	.option('-e, --engine', '')

program
	.command('install')
	.action(function(options){

	});

program
	.command('run')
	.action(function(options){

	});

program
	.command('compile')
	.action()

program.parse(process.argv);