const { json } = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer')
const {validationResult} = require('express-validator')
const usuariosFilePath = path.join(__dirname, "../jsonDB/usuariosDB.json");
let usuariosEnDB = JSON.parse(fs.readFileSync(usuariosFilePath ,"utf-8"));



let usuariosController = {

    ir : function(req, res){// renderiza el formulario de registro por get
        res.render('usuarios/usuariosRegister.ejs') 
    },
    crear: function(req, res){// guarda los datos del usuario
            // primero proceso de capturar los resultado de la validacion y mandar errores a la vista
           
            const userValidationResult = validationResult(req); 
            
            if(userValidationResult.errors.length > 0){
                res.render('usuarios/usuariosRegister.ejs', {uservalidations : userValidationResult.mapped(), oldData : req.body}) ;
                
                // el .mapped() convierte el array en un objeto litera con objeto literales... como se fuera la base de datos que usamos que es un JSON parseado 

            } else { // si no hay errores sigue el proceso


            let id ;
            if(usuariosEnDB.length == []){
                id = 1; 
                } else {
                id =  usuariosEnDB[usuariosEnDB.length - 1 ].id + 1}; // se genero id para usar en newUser.

                let avatar = 'userDefault.png';
                if(req.file){
                    avatar = req.file.filename;
                }; // AVATAR (imagen) = se da por default, o se guarda en public/users

            let newUser = {
                    id,
                    ...req.body ,
                    avatar,
                };
             
         let usuariosExistentes ;
            if(usuariosEnDB.length == []){
           usuariosExistentes = []; 
        }else{
           usuariosExistentes = usuariosEnDB
        };
        usuariosExistentes.push(newUser);
           

        // ya tengo usuarios actualizados, ahora debo sobrescribir el json.
        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuariosExistentes, 'utf8') ) ;
        res.redirect('/')


        
    };
    ///*****************EDITAR USUARIO PENDIENTE******************************/
},
}
module.exports = usuariosController;