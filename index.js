const express=require("express"); 
var app=express();
app.get("/",(req,res)=>{
    res.sendFile("/Users/vishalveera.reddy/Desktop/jalak/yjs123/index.html");
});
app.listen(8080,(req,res)=>{
console.log("started");
}); 