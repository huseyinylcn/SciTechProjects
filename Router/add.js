const { addFirma, addProject } = require('../Model/firma')

const router = require('express').Router()

const crypto = require("crypto");



router.post('/firma',(req,res,next)=>{
    req.body.id = crypto.randomBytes(10).toString("hex")
    addFirma(req.body).then(result=>{
        if (result == 200) res.json(200)
        else res.json(404)
    })
})



router.post('/project',(req,res,next)=>{
    if(!req.user) return res.json('Giriş Yapılmamış')
    if (req.user.firma != 1) return res.json("yetkiniz Yok")

        req.body.id = req.user.id
        req.body.urunId = crypto.randomBytes(10).toString("hex")

        addProject(req.body).then(result=>{
            if (result == 200) res.json(200)
            else res.json(404)
        })



})













module.exports = router