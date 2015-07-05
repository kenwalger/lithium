#!/usr/bin/env node

import colors from 'colors/safe';
import ArgumentParser from 'argparse';

import * as lithium from '../src/index.js';

const parser = new ArgumentParser();
const subparsers = parser.addSubparsers({
	title : 'sub-commands',

});

