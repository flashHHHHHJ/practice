const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const url = require('url')

let server = http.createServer((req, res)=>{
    let {query, pathname} = url.parse(req.url, true)
    console.log(query, pathname)
})

server.listen(8080)