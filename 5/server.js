//原生实现基础表单上传服务器的功能

const http = require('http')
const utils = require('utils')
const fs = require('fs')

http.createServer((req, res)=>{
    let boundary = '--' + req.headers['content-type'].split('; ')[1].split('=')[1]

    let arr = []
    req.on('data', buffer=>{
        arr.push(buffer)
    })
    req.on('end', ()=>{
        let buffer = Buffer.concat(arr)

        let result = utils.bufferSplit(buffer, boundary)
        result.pop()
        result.shift()
        
        result.forEach(buffer=>{
            buffer = buffer.slice(2, buffer.length-2)
            let n = buffer.indexOf('\r\n\r\n')
            let info = buffer.slice(0, n).toString()
            let data = buffer.slice(n+4)

            if(info.indexOf('\r\n')!=-1){
                //文件
                let res2 = info.split('\r\n')[0].split('; ')
                let name = res2[1].split('=')[1]
                let filename = res2[2].split('=')[1]

                name = name.substring(1, name.length-1)
                filename = filename.substring(1, filename.length-1)

                fs.writeFile(`upload/${filename}`, data, err=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log('上船成功')
                    }
                })
            }else{
                //普通信息
                let name = info.split('; ')[1].split('=')[1]
                name = name.substring(1, name.length-1)
            }
        })

    })
}).listen(8080)