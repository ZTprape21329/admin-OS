const express = require ('express');
// const pool = require('../pool.js');
let router = express.Router();
router.post('/login', (req, res) => {
    let uname = req.body.uname;
    let upwd = req.body.upwd;
    if(uname === 'admin' && upwd === '123456') {
        res.json({code: 200,uname})
    } else {
        res.json({code: 404})
    }
    // let sql = 'SELECT uname, upwd FROM info WHERE uname = ? AND upwd =?';
    // pool.query(sql, [uname, upwd], (err, result) => {
    //     if(err) throw err;
    //     if(result.length > 0)  {
    //         // console.log (result);
    //         res.setEncoding(result);
    //     }
    // });
});
module.exports = router;