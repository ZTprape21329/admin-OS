const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const prot = 3000;
app.listen(prot, function() {
    // console.log('connected to' +' ' + prot)
});
//跨域访问
const cors = require('cors');
app.use(cors({
    'Access-Control-Allow-Origin': '*',
    credentials: true
}));
app.use('/icon', express.static('../public'));
app.use(bodyParser.urlencoded({extended: false}));
const loginRoute = require('./router/login');
app.use('/login', loginRoute);