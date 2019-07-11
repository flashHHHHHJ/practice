const url = require('url')
const path = require('path')

str = 'http://www.bing.com/a/b/1.html?username=JJ&password=123456&username=JJF'

// console.log(url.parse(str, true))
// console.log(path.dirname(str))
// console.log(path.extname(str))
// console.log(path.basename(str))
console.log(path.resolve(__dirname, str))