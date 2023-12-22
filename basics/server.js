const http = require('http');
const server=http.createServer((req,res)=>{
    // console.log('server created');
    console.log(req.method);
    console.log(req.url)
    res.setHeader('Content-Type',"text/plain")
    res.write('Hi, Paul');
    res.end()
});

server.listen(3000,'localhost',()=>{
    console.log('listening on port 3000')
})