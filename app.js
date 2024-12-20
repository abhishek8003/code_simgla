let http=require("http")
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("home")
        res.end();
    }
    else if(req.url=="/about"){
        res.write("about")
        res.end();
    }
    else{
        res.write(`<h1>Page not found!</h1>`)
        res.end()
    }
});
server.listen(5000,()=>{
    console.log(`Server is listening to 5000...`);
    
})