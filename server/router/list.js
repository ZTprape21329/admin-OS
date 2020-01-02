const express = require ('express');
const pool = require('../pool.js');
let router = express.Router();
router.get('/userList',(req, res) =>{
    let obj = req.query;
    let sql = 'SELECT uname, name, sex, time, email, address FROM dbuser.userlist';
    pool.query(sql,[],(err, result) => {
        if(err) throw err;
        res.send(result)
    });
});
module.exports = router;