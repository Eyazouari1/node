//console.log(global)
const path=require('path')
//console.log(path)
//console.log(path.parse(__filename))
const fs=require('fs')
//console.log(fs)
//console.log('start')
let data=fs.readFileSync("hello.txt")
//console.log(data.toString())
//console.log('finish')
const welcome=fs.writeFile("welcome.txt","Hello Node" ,
function (err) {   if (err) throw err;   console.log("file is created successfully");});
