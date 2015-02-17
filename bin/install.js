#!/usr/bin/env node

var exec = require('child_process').exec;
var fs = require('fs');

fs.mkdirSync("/usr/local/lib/lithium_packages");
fs.mkdirSync("/etc/lithium");
fs.mkdirSync("/etc/lithium/implementations");
fs.mkdirSync("/etc/lithium/implementations/lithium.js");
fs.mkdirSync("/etc/lithium/implementations/lithium.js/temporary");

fs.writeFileSync("/etc/lithium/targets.json", JSON.stringify({}));
fs.writeFileSync("/etc/lithium/parsers.json", JSON.stringify({}));
fs.writeFileSync("/etc/lithium/interpreters.json", JSON.stringify({}));
fs.writeFileSync("/etc/lithium/compilers.json", JSON.stringify({}));

process.chdir('/etc/lithium/implementations/lithium.js/temporary');

exec("git clone https://github.com/thomasfoster96/lithium.js.git");
exec("npm install");