const sql = require('mssql')




const firmaLoginControl = (username,pass)=>{
    return new Promise((resolve,reject)=>{
        let query = new sql.Request()

        query.input('username',username)
        .input('pass',pass)
        .query(`IF EXISTS (SELECT 1 FROM firma WHERE username = @username and pass = @pass)
                BEGIN
                SELECT *, 1 AS result FROM firma WHERE username = @username AND pass = @pass
                END
                ELSE
                BEGIN
                    select 0 as result
                END`).then(response=>{
                   
                    if(response.recordset[0].result == 1) resolve({status:200,data:response.recordset[0]})
                    else resolve(404)
                })



    })

}


module.exports = {firmaLoginControl}