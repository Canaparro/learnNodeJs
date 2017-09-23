var modular = require('./modular.js')
var path = process.argv[2]
var extension = process.argv[3]
modular(path, extension, function(error, list) {
    if(error) {
        return console.log(error)
    }
    list.forEach(function(element) {
        console.log(element)
    }, this);
})