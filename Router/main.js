const router = require("express").Router()
const sql = require("mssql")



router.get("/",(req,res,next)=>{
    if(req.user){
       if (req.user.firma == 1) res.render("main",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:1})
       else res.render("main",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:0})
    }
    else{
        res.render("main",{login:0})
    }
})

router.get("/project",async(req,res,next)=>{
    if(req.user){
        
        if (req.user.firma == 1) res.render("projeler",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:1})
       else res.render("projeler",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:0})
     }
     else{
         res.render("projeler",{login:0})
     }
})

router.get("/detail",(req,res,next)=>{
    if(req.user){
        if (req.user.firma == 1) res.render("detail",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:1})
            else res.render("detail",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:0})     }
     else{
         res.render("detail",{login:0})
     }
})

router.get("/tasarim",(req,res,next)=>{
        if(req.user){
            if (req.user.firma == 1) res.render("tasarim",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:1})
            else res.render("tasarim",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:0})     }
     else{
         res.render("tasarim",{login:0})
     }
})






module.exports = router