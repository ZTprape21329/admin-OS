const express = require ('express');
const pool = require('../pool.js');
let router = express.Router();
router.post('/login', (req, res) => {
    let uname = req.body.uname;
    let upwd = req.body.upwd;
    let sql = 'SELECT uname, upwd FROM USER WHERE uname = ? AND upwd =?';
    pool.query(sql, [uname, upwd], (err, result) => {
        if(err) throw err;
        if(result.length == 0) {
            res.send({code: 404})
        }else {
        let uname = result[0].uname;
        let upwd = result[0].upwd;
            if(uname == uname && upwd == upwd) {
                res.send({code: 200, uname})
            }
        }
    });
});
module.exports = router;