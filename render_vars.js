var http=require("http"),
    fs=require("fs");

http.createServer(function(req,res){
    fs.readFile("./index.html",function(err,html){
        var html_string=html.toString();
        var variables=html_string.match(/[^\{\}]+(?=\})/g);
        var nombre="Antonio";
            res.writeHead(200,{"Content-type":"text/html"})
            res.write(html);
            res.end();  
    });
}).listen(8080)

