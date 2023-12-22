const fs = require('fs');
const readStream = fs.createReadStream('./texts/blog.txt');
const writeStream = fs.createWriteStream('./texts/piped.txt');
// readStream.on('data',(chunk)=>{

//  console.log('-----New chunk-------');
//  console.log(chunk.toString());
//  writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream)