var express = require("express");
var bodyParser=require("body-parser");
var app=express();
var mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/fotos");


app.use("/public",express.static('public'));

app.use(bodyParser.json());///para peticiones aplication/Json
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "jade");

app.get("/",function(req,res){
   res.render("index");
});

app.get("/login",function(req,res){
    res.render("login");
});

app.post("/users",function(req,res){
    console.log("contrasesa:"+req.body.password);
    console.log("Email:"+req.body.email);
    res.send("recibimos tus datos");
});

app.listen(8080);