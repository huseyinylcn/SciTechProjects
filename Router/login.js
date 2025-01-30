const router = require('express').Router()
const {firmaLoginControl} = require('../Model/controlLogin')




router.post('/',async(req,res,next)=>{


    try {
        let result = await firmaLoginControl(req.body.id,req.body.pass)
        console.log(result)
        if(result.status == 200){
            
            req.logIn(
                {username:result.data.name,
                    userimg:result.data.logo,
                    firma:1,
                    id:result.data.id
                },()=>{
                res.json({status:200})
            })
        }else{
            // bu firma değil api ile control ve bilgiler oradan gelecek
            res.json({status:404})
        }
    } catch (error) {
        res.json({status:404})
    }

})



module.exports = router