var express = require("express");
var Imagen=require("./models/imagenes");
var Student=require("./models/students");
var router=express.Router();

var image_finder_middleware=require("./middlewares/find_image");

router.get("/",function(req,res){
    res.render("app/home")
});

/* REST */

router.get("/imagenes/new",function(req,res){
    res.render("app/imagenes/new");
});

router.all("/imagenes/:id*",image_finder_middleware);

router.get("/imagenes/:id/edit",function(req,res){
     res.render("app/imagenes/edit");
});

router.route("/imagenes/:id")
    .get(function(req,res){
        res.render("app/imagenes/show");
    })
    .put(function(req,res){
       res.locals.imagen.title=req.body.title;
       res.locals.imagen.save(function(err){
                if(!err){
                    res.render("app/imagenes/show");
                }else{
                    res.render("app/imagenes/"+req.params.id+"/edit");
                }
            })
    })
    .delete(function(req,res){
        Imagen.findOneAndRemove({_id:req.params.id},function(err){
            if(!err){
                res.redirect("/app/imagenes");
            }else{
                console.log(err);
                res.redirect("/app/imagenes"+req.parmas.id);
            }
        });
    });

router.route("/imagenes")
    .get(function(req,res){
        Imagen.find({},function(err,imagenes){
            if(err){res.redirect("/app");return;}
            res.render("app/imagenes/index",{imagenes:imagenes});
        });
    })
    .post(function(req,res){
        var data={
            title:req.body.title,
            creator: res.locals.user._id
        }
        var imagen=new Imagen(data);
        imagen.save(function(err){
            if(!err){
                console.log("correcto");
                res.redirect("/app/imagenes/"+imagen._id);
            }
            else{
                res.render(err);
            }
        });
    });

 /**RUtas de Students */

 router.get("/students/new",function(req,res){
     res.render("app/students/new");
 }); 

router.route("/students")
    .get(function(req,res){
        Student.find({},function(err,students){
            if(err){
                res.redirect("/app");
                return;
            }
            console.log(students);
            res.render("app/students/index",{students:students});
        });
    })

    .post(function(req,res){
        var data={
            name:req.body.name,
            last_name:req.body.last_name,
            address:req.body.address,
            phone:req.body.phone,
            birthdate:req.body.birthdate,
            grade:req.body.grade
        }
        var student=new Student(data);
        student.save(function(err){
            if(!err){
                console.log("correcto");
                res.redirect("/app/students");
            }else{
                res.render(err);
            }
        });
    });

module.exports=router;