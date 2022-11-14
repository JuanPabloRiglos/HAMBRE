const express = require ('express');
const app = express();
const path = require('path');
let rutaMain = require('./routes/main');
let rutaDelivery = require('./routes/delivery');
let rutaSalimos = require('./routes/salimos');



app.set('views', path.resolve(__dirname , './views'));
//app.get('/', (req,res)=>{res.sendFile(path.join(__dirname , '/views/index.html'));});
//app.get('/', (req, res)=>{res.send('HAMBRE');});

app.listen(5005, ()=> console.log('corriendo en puerto 5005'));

app.use('/', rutaMain);
app.use('/delivery', rutaDelivery);
app.use('/salimos', rutaSalimos);