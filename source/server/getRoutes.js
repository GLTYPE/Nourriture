module.exports = function(router, filedir){
    var walk    = require('walk');
    var files   = [];
    var walker  = walk.walk(filedir, { followLinks: false });

    walker.on('file', function(root, stat, next) {
    	if (stat.name[stat.name.length - 1] != "~" && stat.name[0] != "#")
    	    files.push(root + '/' + stat.name);
    	next();
    });
    walker.on('end', function() {
    	files.forEach(function(file){
    	    require(file)(router);
    	});
    });
}
