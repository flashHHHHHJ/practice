let buffer = new Buffer('abc\r\nagagwegdsf\r\nsarewtsedgds')
// let buffer2 = new Buffer('\r\n')

function bufferSplit(buffer, delimiter){
    let arr = []
    let n=0

    while((n=buffer.indexOf(delimiter))!=-1){
        arr.push(buffer.slice(0, n))
        buffer = buffer.slice(n+delimiter.length)
    }
    arr.push(buffer)

    return arr
}

console.log(bufferSplit(buffer, '\r\n').map(b=>b.toString()))