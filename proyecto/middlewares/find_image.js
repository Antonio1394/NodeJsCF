var Imagen=require("../models/imagenes");
module.exports=function(req,res,next){
    Imagen.findById(req.params.id,function(err,imagen){
        if(imagen!=null){
            console.log("encotre la iamgen"+ imagen.title);
            res.locals.imagen=imagen;
            next();
        }else{
            res.redirect("/app");
        }
    })
}