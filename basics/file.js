const fs = require('fs')


//reading files
//asynchronous function it needs sometime
fs.readFile('./texts/blog.txt',(e,d)=>{
 if(e){console.log}
 console.log(d.toString())
})
//writing files
fs.writeFile('./texts/blog1.txt',"Hi, this is me",()=>{
    console.log('file overite')
})

// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(e)=>{
        if(e){console.log(e)}
        console.log("folder")
    })
}else{
    fs.rmdir('./assets',(e)=>{
        if(e){
            console.log(e)
        }
        console.log('folder deleted')
    })
}
//deleting files
 if (fs.existsSync('./texts/blog1.txt')){
    fs.unlink('./texts/blog1.txt',(e)=>{
        if (e) {
            console.log(e)
        }
        console.log('file deleted')
    })
 }else{
    
 }
