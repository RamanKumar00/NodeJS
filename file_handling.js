 const fs = require("fs");

 fs.writeFileSync("./test.txt", "hey there"); // this is sync module

 fs.writeFile("./test.txt" , "Hello World" ,(err)=>{});  // this is for async file

 const result = fs.readFileSync("./contact.txt","utf8"); // this is for sync module 
 console.log(result);

 fs.readFile("./contact.txt","utf8",(err, result) => {
    if(err){
        console.log("error hai");
    }
    else{
        console.log(result);
    }
 })

 fs.appendFileSync("./test.txt","hey there");