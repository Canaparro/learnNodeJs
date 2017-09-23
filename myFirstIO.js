var fs = require('fs')
var path = process.argv[2]
fs.readFile(path, 'utf-8', function(error, data) {
    if(error) {
        return console.log(error)
    }
    console.log(data.split('\n').length-1)
})