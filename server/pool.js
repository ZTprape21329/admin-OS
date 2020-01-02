const mysql = require('mysql');

// 2.创建连接池
let pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: '',
    database: 'dbuser',
    connectionLimit: '50'
});

// 3.导出连接池
module.exports = pool;
