module.exports = function(directory, extension, callback) {
    var fs = require('fs')
    var path = require('path')
    fs.readdir(directory, function(error, list) {
        if(error) {
            return callback(error)
        }
        var filteredList = []
        list.forEach(function(element) {
            if(path.extname(element) === '.' + extension) {
                filteredList.push(element)
            }
        })
        return callback(null, filteredList)
    })
}