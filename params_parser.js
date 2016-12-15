function parse(req){
     var arreglo_parametros=[],parametros={};
     if(req.url.indexOf("?")>0){
            var url_data=req.url.split("?");
            var arreglo_parametros=url_data[1].split("&");

        }
}