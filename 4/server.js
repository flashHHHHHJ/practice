const http = require('http')
const fs = require('fs')

let server = http.createServer((request, response)=>{
    fs.readFile(`www${request.url}`, (err, buffer)=>{
        if(err){
            response.writeHeader(404)
            response.write('Not Found')
            response.end()
        }else{
            response.write(buffer)
            response.end()
        }
    })
})

server.listen(8080)