var Imagen=require("../models/imagenes");

module.exports=function(image,req,res){

    if(typeof image.creator=="undefined") return false;
    //TRUE-TIene Permisos
    //Falso-Si no tienes Permisos
    if(req.method==="GET" && req.path.indexOf("edit")<0){
        return true;
    }

    if(image.creator._id.toString()==res.locals.user._id){
        //esta imagen yo la subi
        return true
    }

    return false;
}