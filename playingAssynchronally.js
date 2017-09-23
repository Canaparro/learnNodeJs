var http = require('http')
var url = []
url.push(process.argv[2])
url.push(process.argv[3])
url.push(process.argv[4])
function teste(url) {
    http.get(url[0], function(error, response) {
        var responseConcat
        if(error) {
            return console.error(error)
        }
        url.pop()
        if(url.length > 0) {
            response.on('end',teste(url))
        }
        response.pipe(bl(function(error, data) {
            if(error){
                return console.error(error)
            }
            responseConcat = data.toString()
        }))
    })
}