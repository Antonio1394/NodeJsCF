var express = require("express");

var router=express.Router();

router.get("/",function(req,res){
    res.render("app/home")
});

/* REST */

router.route("imagenes/:id")
    .get(function(req,res){

    })
    .put(function(req,res){

    })
    .delete(function(req,res){

    });

module.exports=router;