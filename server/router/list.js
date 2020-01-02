const express = require ('express');
const pool = require('../pool.js');
let router = express.Router();
router.get('/userList',(req, res) =>{
    let obj = req.query;
    let sql = 'SELECT id, uname, name, sex, time, email, address FROM dbuser.userlist';
    // let sqlList = {
    //     select: `SELECT uname, name, sex, time, email, address FROM dbuser.userlist`,
    //     insert: `INSERT INTO dbuser.userlist(NULL,uname, name, sex, time, email, address) VALUES (${uname}, ${name}, ${sex}, ${time}, ${email}, ${address})`,
    //     update: `UPDATE dbuser.userlist SET uname = '${uname}', name = '${name}', sex = '${sex}', time = '${time}', address = '${address}' WHERE id = ${id}` 
    // };
    pool.query(sql,[],(err, result) => {
        if(err) throw err;
        res.send(result)
    });
});
module.exports = router;