const express = require ('express');
const app = express();
const path = require('path');
let rutaMain = require('./routes/main');
let rutaDelivery = require('./routes/delivery');
let rutaSalimos = require('./routes/salimos');
let rutaUsuarios = require('./routes/usuarios');
let methodOverride = require('method-override');
app.use(express.static(path.join(__dirname , './public')));



app.set('view engine', 'ejs');
//seteo el modelo de motor de vistas con EJS



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//lineas previas NECESARIAS para poder guardar lo que venga por post, y para poder pasarlo a JSON
app.use(methodOverride('_method'));
//seteo para usar put y delete

app.set('views', path.resolve(__dirname , './views'));
//app.get('/', (req,res)=>{res.sendFile(path.join(__dirname , '/views/index.html'));});
//app.get('/', (req, res)=>{res.send('HAMBRE');});

app.listen(5005, ()=> console.log('corriendo en puerto 5005'));

app.use('/', rutaMain);
app.use('/delivery', rutaDelivery);
app.use('/salimos', rutaSalimos);
app.use('/usuarios', rutaUsuarios);