const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const url = require('url')

let server = http.createServer((req, res)=>{
    let arr = []
    req.on('data', buffer=>{
        arr.push(buffer)
    })
    req.on('end', ()=>{
        let buffer = Buffer.concat(arr)
        let post = querystring.parse(buffer.toString())
        console.log(post)
    })
})

server.listen(8080)