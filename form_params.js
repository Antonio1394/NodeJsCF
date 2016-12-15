var http=require("http"),
    fs=require("fs");

http.createServer(function(req,res){

    if(req.url.indexOf("favicon.ico")>0){return;}
    fs.readFile("./index.html",function(err,html){
        var html_string=html.toString();
       
        var variables=html_string.match(/[^\{\}]+(?=\})/g);
        var nombre="";
        

        for(var i=arreglo_parametros.length-1;i>=0;i--){
            var parametro =arreglo_parametros[i];
            var param_data=parametro.split("=");
            parametros[param_data[0]=param_data[1]];
            
        };
        
        for(var i=variables.length-1;i>=0;i--)
        {
            var variable=variables[i];
            html_string=html_string.replace("{"+variables[i]+"}",parametros[variable]);
        }
            res.writeHead(200,{"Content-type":"text/html"})
            res.write(html_string);
            res.end();  
    });
}).listen(8080)

