const http = require('http')
const uc = require('uppercase')

http.createServer((req, res)=>{
    
    console.log("server created");
    res.writeHead(200, {'content-type':'text/plain'})
    res.write(uc("Hello world"))
    res.end()
}).listen(5000) 

