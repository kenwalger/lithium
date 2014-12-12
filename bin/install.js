#!/usr/bin/env node

var path = require('path');
var fs   = require('fs');
var liDir = path.join(path.dirname(fs.realpathSync(__filename)), '../../../');

var configTargets = JSON.parse(fs.readFileSync(liDir + 'config/targets.json'));
configTargets["JavaScript"].push({
	"name" : "li2js",
	"js" : {
		"raw" : "compile($raw)"
	},
	"bash" : {
		"raw" : "compile $file"
	}
});
fs.writeFileSync(liDir + 'config/targets.json', JSON.stringify(configTargets));