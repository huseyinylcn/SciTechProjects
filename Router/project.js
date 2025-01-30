const { projectGET } = require("../Model/get");

let router = require("express").Router()



router.get("/:search/:kategori/:seviye/:siralama/:page",async(req,res,next)=>{


    console.log(req.params)
    let data = await projectGET(req.params.search,req.params.kategori,req.params.seviye,req.params.siralama,req.params.page)


    if(data == 404) {data = [];console.log("hata veri gelmedi")}
    

    if(req.user){
        
        if (req.user.firma == 1) res.render("projeler",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:1, data:data })

       else res.render("projeler",{login:1,username:req.user.username,userimg:req.user.userimg ,firma:0,data:data  })
     }
     else{

         res.render("projeler",{login:0,data:data})
     }
})








module.exports = router