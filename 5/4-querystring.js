const querystring = require('querystring')

console.log(querystring.parse("a=1&b=2&c=5")) //将一串字符转变为JSON数据格式

console.log(querystring.stringify({a: 1, b: 2})) //将JSON数据转为字符串