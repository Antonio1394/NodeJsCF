var mongoose=require("mongoose");
var Schema=mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos");

var posibles_valores=["M","F"];
var email_match=[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Coloca un email valido"];



var user_schema=new Schema({
    name:String,
    last_name: String,
    username:{type:String,maxlength:[50,"Usuario muy grande"]},
    password:{type:String,
              minlength:[8, "el passwor es muy corto"],
              validate:{
                  validator:function(p){
                    return this.password_confirmation==p;
                },
                message:"Las contraseñas no son iguales"
              }
            },
    age:{type:Number, min:[5,"La edad no puede ser menor a 5"],max:[100,"la edad no puede ser mayr  a 100"]},
    email:{type:String,required:"El correo es Obligatorio",match:email_match},
    date_of_birth:Date,
    sex:{type:String, enum:{values:posibles_valores,message:"Opcion invalida"}}
});

user_schema.virtual("password_confirmation").get(function(){
    return this.p_c;
}).set(function(password){
    this.p_c=password;
});

var User=mongoose.model("User",user_schema);

module.exports.User=User;

/** 
 * String
 * NUmber
 * date
 * buffer
 * boolean
 * mixed
 * objectid
 * array
*/
