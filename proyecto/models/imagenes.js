var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var img_schema=new Schema({
    title:{type:String,require:true}
});
var Imagen=moongose.model("Imagen",img_schema);
module.exports=Imagen;