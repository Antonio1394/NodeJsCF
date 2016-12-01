var http=require("http"),
    fs=require("fs");

http.createServer(function(req,res){
    fs.readFile("./index.html",function(err,html){
        var i=0;
        while(true){
            i++;
            res.write(i+"");
        }
            
          
    });
}).listen(8080)

