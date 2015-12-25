var express = require('express');                   //загрузил фрейворк 'express'
var app = express();                                //создать сервер
app.use(express.static('public'));                  // указали статич папку с public файлами

app.get('/form/data',function(req,res){        //Routing get/post запрос на сервер
    res.json({a:'hellow'})
})

app.listen(4343, function () {                      //слушай меня на порту,поднимай
    console.log('server start on port 4343 good')
})