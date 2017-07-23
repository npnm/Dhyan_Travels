var express = require('express')
var app = express()
var bodyparser = require('body-parser');
var cors = require('cors');
var business = require('./business');
var Promise = require('promise');
var req = res = {};
var allowedOrigins = ['http://localhost:3000'];
var corsOptions = {
    origin: function (origin, callback) {
        var originIsWhitelisted = allowedOrigins.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};

app.use(cors(corsOptions));

app.use(bodyparser.urlencoded({
    extended: false
}));

app.post('/', function (req, res) {
    console.log(req.body);
    res.send('Empty Route');
})
app.get('/', function (req, res) {
    res.send('Empty Route')
})


app.get('/ReadApplicationContentFile', function () { business.readApplicationContentFileCallback(req, res) });
// app.post('/NotifyCustomer', business.notifyCustomerCallback());

app.listen(8082, function () {
    console.log('Example app listening on port 3000!')
})