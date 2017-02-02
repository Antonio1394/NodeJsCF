var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var student_schema=new Schema({
    name:{type:String,require:true},
    last_name:{type:String,require:true},
    address:{type:String,require:true},
    phone:{type:String},
    birthdate:{type:Date,require:true},
    grade:{type:String,require:true}
});

var Student=mongoose.model("Student",student_schema);
module.exports=Student;