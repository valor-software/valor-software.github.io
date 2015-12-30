var express = require('express');                   //загрузил фрейворк 'express'
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));                  // указали статич папку с public файлами

app.post('/form/data',function(req,res){
    console.log(req.body)
    var mailObj=req.body//Routing get/post запрос на сервер
    transporter.sendMail({
        from: mailObj.email,
        to: 'alexander.skrypnyk@valor-software.com',
        subject: 'Notification from valor-software site',
        text: "Hellow. i'm"+mailObj.name+'. '+ mailObj.message
    },function(err, info){
        res.json({success: !err, msg: [], data: true, error: err});
    });
})

app.listen(4343, function () {                      //слушай меня на порту,поднимай
    console.log('server start on port 4343 good')
})