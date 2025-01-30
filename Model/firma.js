const sql = require('mssql')




const addFirma = (data)=>{
    return new Promise((resolve,reject)=>{
        let result = new sql.Request()

        result
        .input("name",data.name)
        .input("logo",data.logo)
        .input("id",data.id)
        .input("pass",data.pass)
        .input("username",data.username)
        .query(`insert into firma(name,logo,id,pass,username)
            values(@name,@logo,@id,@pass,@username)
            `).then(response=>{
                resolve(200)
            }).catch(err=>{
                resolve(404)
            })
    })
}

const addProject = (data)=>{
    return new Promise((resolve,reject)=>{
        let result = new sql.Request()

        result
        .input("baslik",data.baslik)
        .input("html",data.html)
        .input("aciklama",data.aciklama)
        .input("kategori",data.kategori)
        .input("seviye",data.seviye)
        .input("id",data.id)
        .input("urunId",data.urunId)


        .query(`insert into project(baslik,html,aciklama,kategori,seviye,zaman,id,urunId)
            values(@baslik,@html,@aciklama,@kategori,@seviye,GETDATE(),@id,@urunId)
            `).then(response=>{
                resolve(200)
            }).catch(err=>{
                console.log(err)
                resolve(404)
                
            })
    })
}




module.exports = {addFirma,addProject}