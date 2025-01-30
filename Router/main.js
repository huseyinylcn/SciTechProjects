const router = require("express").Router()
const sql = require("mssql")
const { projectGET, detailGET } = require("../Model/get")




router.get("/",(req,res,next)=>{
    if(req.user){
       if (req.user.firma == 1) res.render("main",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:1})
       else res.render("main",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:0})
    }
    else{
        res.render("main",{login:0})
    }
})




router.get("/tanitim",(req,res,next)=>{
    if(req.user){
       if (req.user.firma == 1) res.render("tanitim",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:1})
       else res.render("tanitim",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:0})
    }
    else{
        res.render("tanitim",{login:0})
    }
})





router.get("/detail/:id",async(req,res,next)=>{
    req.params.id
    let data = await detailGET(req.params.id)
    console.log(data)
    if(req.user){
   
        if (req.user.firma == 1) res.render("detail",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:1, data:data})
            else res.render("detail",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:0,data:data})     }
     else{
         res.render("detail",{login:0,data:data})
     }
})



router.get("/tasarim",(req,res,next)=>{
        if(req.user){
            if (req.user.firma == 1) res.render("tasarim",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:1})
            else res.redirect("/");
        }else{
        res.redirect("/")
     }
})






module.exports = router