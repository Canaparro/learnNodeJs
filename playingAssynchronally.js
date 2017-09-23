var http = require('http')
var bl = require('bl')
var url = []

url.push(process.argv[2])
url.push(process.argv[3])
url.push(process.argv[4])

var list = []
var count = 0

function printResults(list) {
    list.forEach(function(element) {
        console.log(element)
    }, this);
}

function httpGet(index) {
    http.get(url[index], function(response) {
        response.pipe(bl(function(error, data) {
            if(error){
                return console.error(error)
            }
            list[index] = data.toString()
            count++
            if(count === 3) {
                printResults(list)
            }
        }))
    })    
}

for(let i = 0; i < 3; i++) {
    httpGet(i)
}