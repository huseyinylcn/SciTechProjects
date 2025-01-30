const sql = require('mssql')



const projectGET = (search ,kategori,seviye,siralama,pagenumber,) =>{
    return new Promise((resolve,reject)=>{
        let result = new sql.Request()
        console.log(search)

        result
        .input('search', search)
        .input('kategori', kategori)
        .input('seviye', seviye)
        .input('gelenSayi', pagenumber) // Gelen sayıyı SQL sorgusuna parametre olarak ekle
        .input('siralama', siralama) // Tarih sıralama yönü için yeni parametre (ASC/DESC)

        
        .query(`
            SELECT f.name, f.logo, p.* 
            FROM firma f 
            INNER JOIN project p ON f.id = p.id
            WHERE 
                p.baslik LIKE N'%${search}%' AND 
                (p.kategori = @kategori OR @kategori = ' ') AND 
                (p.seviye = @seviye OR @seviye = ' ')


           ORDER BY p.zaman ${siralama}, p.baslik ASC 
            OFFSET (@gelenSayi * 10) -10 ROWS 
            FETCH NEXT 10 ROWS ONLY; 
        `).then(response=>{
            resolve(response.recordset)
        }).catch(err=>{
            resolve(404)
        })
    })
}


const detailGET = (urunId)=>{
    return new Promise((resolve,reject)=>{
        let result = new sql.Request()

        result
        .input("urunId",urunId)
        .query(`
            select f.name, f.logo, p.* from firma  f inner join project p on f.id = p.id and p.urunId = @urunId `).then(response=>{
            resolve(response.recordset[0])
        }).catch(err=>{
            resolve(404)
        })
    })
}







module.exports = {projectGET,detailGET}



