let express = require('express');
let router = express.Router();
let usuariosController = require('../controllers/usuarios');
let multer = require('multer');
let path = require('path')
const { body } = require('express-validator'); 
//************** configuro multer para usuarios ***********************/
const userStorage = multer.diskStorage({
    destination : function(req, file, cb){
        let userFolder = path.join(__dirname, '../public/images/users');// declara la carpeta destino
        cb(null , userFolder);
    },
     filename : function (req, file, cb){
        let newName = Date.now() + '' + file.originalname ; // setea el nombre de la imagen
        cb(null, newName);
    },
});
    const usersUpload = multer({userStorage}); // defino la funcioon ejecutando multer


// ver si  las validaciones despues las puedo pasar a un middleware, en ese caso deberia requerir la carpeta de midelware desde aca. 

const userValidation = [
    body('nombre').notEmpty().withMessage('No puedes dejar el campo para Nombre vacio'),
    body('email').notEmpty().withMessage('No puedes dejar el campo para Email vacio').bail().isEmail().withMessage('Debes escribir un formato de correo valido'),
    body('contraseña').notEmpty().withMessage('No puedes dejar el campo para Contraseña vacio'),
    body('edad').notEmpty().withMessage('No puedes dejar el campo para Edad vacio')
    
];



//**** Crea usuario get/post  ****/
router.get('/', usuariosController.ir);//ir te lleva a la vista de formulario p registrar
router.post('/usuariosRegister', usersUpload.single('avatar'), userValidation , usuariosController.crear);

// *** Vista de perfil de usuario // 

// **** edicion y delete de usuario ? ****//
module.exports = router;