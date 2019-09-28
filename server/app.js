// const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const NodeRSA = require('node-rsa');
// const fs = require('fs');
const app = express();
const prot = 3000;
app.listen(prot, function() {
    console.log('listen start' +' ' + prot)
});
//跨域访问
const cors = require('cors');
app.use(cors({
    origin: ['http://127.0.0.1:8080', 'http://127.0.0.1:8081', 'http://127.0.0.1:5000', 'http://localhost:8080'],
    credentials: true
}));
app.use('/icon', express.static('../public'));
//托管中间件
app.use(bodyParser.urlencoded({extended: false}));
const loginRoute = require('./router/login');
app.use('/login', loginRoute);