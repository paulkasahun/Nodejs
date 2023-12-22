const http = require('http');
const fs = require('fs');
const _ = require('lodash')
//create server
server = http.createServer((req,res)=>{
    // console.log(req.url);
    let  path = './views/';
    //set respose header
    res.setHeader('Content-Type','text/html');

    switch (req.url) {
        case '/':
            path+='index.html';
            res.statusCode =200;
            break;
        case '/about':
            path+='about.html'
            res.statusCode =200;
            break;
        case '/about-me': 
            res.statusCode =301;
            res.setHeader('Location','/about')
            res.end();
            break;
     
        default:
            path+='404.html'
            res.statusCode =400
            break;
    }
    console.log(path)
    //read file from the server and send/write it to front end
     
    fs.readFile(path,(e,data)=>{
        if(e){console.log(e),res.end()}else{
          res.write(data);
          res.end()
        }
    });
});

server.listen(3000,'localhost',()=>{
    console.log('server listening on port 3000 ')
})