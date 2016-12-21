var express = require("express");

var app=express();
app.set("view engine", "jade");

app.get("7",function(req,res){
   res.render("index");
});

app.get("7login",function(req,res){
   res.render("login");
});

app.listen(8080);