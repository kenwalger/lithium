lib:
	node --eval <<- SCRIPT
	var fs = require('fs');
	(function walk(startPath){
	    if (!fs.existsSync(startPath)) return;
	    for(var file of fs.readdirSync(startPath)){
	        var filename = require('path').join(startPath, file);
	        var stat = fs.lstatSync(filename);
	        if (stat.isDirectory()){
	            walk(filename);
	        } else if (filename.match(/\.md$/)) {
	            var readstream = fs.createReadStream(filename);
	            var writeStream = fs.createWriteStream(filename.slice(0, filename.length-2) + "li");
	            readstream.pipe(require('markdown-code-blocks')('lithium')).pipe(writeStream);
	        }
	    }
	})(require('path').join(process.cwd(), "./lib"));
	SCRIPT

docs:
	lithium document lib/ --out docs/stdlib/
	jekyll build

deliterate:
	cd bin/
	node diliterate.js