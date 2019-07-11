const fs = require('fs')

// fs.writeFile(path, data, callback)
// fs.readFile(path, callback)

// fs.writeFile('./a.txt', 'abcdefg', err=>{
//     if(err){
//         console.log('失败')
//     }else{
//         console.log('成功')
//     }
// })

fs.readFile('./a.txt', (err, data)=>{
    if(err){
        console.log('失败', err)
    }else{
        console.log('成功', data)
    }
})