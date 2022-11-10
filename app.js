const express = require ('express');
const app = express();
const path = require('path');

app.get('/', (req,res)=>{res.sendFile(path.join(__dirname , '/views/index.html'));});
//app.get('/', (req, res)=>{res.send('HAMBRE');});


app.listen(5005, ()=> console.log('corriendo en puerto 5005'));

