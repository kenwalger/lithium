var join = require('path').join;
var fs = require('fs');
var parse = require('markdown-code-blocks');

(function walk(startPath){

    if (!fs.existsSync(startPath)){
        return;
    }

    var files = fs.readdirSync(startPath);

    for(var i = 0; i < files.length; i++){

        var filename = join(startPath, files[i]);

        var stat = fs.lstatSync(filename);

        if (stat.isDirectory()){

            console.log("Walking ", filename);

            walk(filename); //recurse

        } else if (filename.match(/\.md$/)) {

            var readstream = fs.createReadStream(filename);
            var writeStream = fs.createWriteStream(filename.slice(0, filename.length-2) + "li");

            console.log("Converting ", filename);

            readstream.pipe(parse('lithium')).pipe(writeStream);

        }
    }

})(join(process.cwd(), "./lib"));