const http = require('http');

main_server = http.createServer((req,res)=>{console.log('request made')});
main_server.listen(3000,'localhost',()=>{console.log('Server listening at port 3000')});
