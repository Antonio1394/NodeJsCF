var Imagen=require("../models/imagenes");

module.exports=function(image,req,res){
    //TRUE-TIene Permisos
    //Falso-Si no tienes Permisos

    if(req.method==="GET" && req.path.indexOf("edit")<0){
        return true;
    }
}