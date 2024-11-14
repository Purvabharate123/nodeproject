const { log } = require('console');
const fs = require('fs')
const http = require('http')
const path = require('path')

const targetpath = "C:\grocery shopping full\practice"

http.createServer((req, res)=>{
  console.log('server created');
    //file read
     //fs.readFile('index.js',(err, data)=>{
       // res.writeHead(200, {'content-type':'text/html'})
        //res.write(data)
        //return res.end()
        //})
     //append
    // fs.appendFile('inde.html', '<h1>this is append</h1>',(err, data)=>{
      //  if(err) throw err
        //console.log("file update");
        //return res.end()
    // })

     //delet file
     //fs.unlink('inde.html', (err)=>{
       // if (err) throw err
        //console.log("file deleted")
        //return res.end()
     //})

     //write file
    //fs.writeFile('mynewfile.txt', "hello world...!", (err)=>{
      //  if (err) throw err 
        //console.log("file save");
     //})

     //rename
    // fs.rename('mynewfile.txt', 'newfile.txt', (err)=>{
      //if (err) throw err
      //console.log("file rename")
     //})

     //file read and write
    // console.log("writing into file");

     //fs.writeFile('input.txt', 'hello good morning this is write file', (err)=>{
      //if(err){
        // return console.error(err);
      //}
      //console.log("file written succesfully");
      //console.log("lets read file")
      
      //fs.readFile('input.txt', (err, data)=>{
        // if (err){
          //  return console.error(err);
         //}
         //console.log("data.tostring()");
      //})
     //})

     //
    // let fileexist = fs.existsSync('input.txt')
     //console.log("file is available :", fileexist);


      //fileexist = fs.existsSync('inpu.txt')
     //console.log("file is available :", fileexist);

    // function getCurrentfilenames(){
      //console.log("current file name are :");
      //fs.readdirSync(__dirname).forEach(file=>{
      //   console.log(file);
      //})
      //console.log("\n");
    // }
     //getCurrentfilenames()
     

     //fs.open('server.js', "r", (err)=>{
      //if (err) throw err
      //console.log(" file open succesfully");
      //return res.end()
     //})

     //fs.open("example.txt", 'a+', (err, file)=>{
      //if (err){
        // console.error("error while opening file", err);
         //return
      //}
      //console.log("file is open for append");
      
     // fs.close(file)
     //})

    //fs.mkdir(targetpath, {recursive : true}, (err)=>{
      //if (err){
        //return console.error(err);
      //}
      //console.log("directory created");
     //})

}).listen(5000)