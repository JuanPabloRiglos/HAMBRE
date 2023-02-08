let express = require('express');
let router = express.Router();
let usuariosController = require('../controllers/usuarios');
let multer = require('multer');

//************** configuro multer para usuarios ***********************/
const userStorage = multer.diskStorage({
    destination : function(req, file, cb){
        let folder = path.join(__dirname, '../public/images/users');// declara la carpeta destino
        cb(null , folder);
    },
     filename : function (req, file, cb){
        let newName = Date.now() + '' + file.originalname ; // setea el nombre de la imagen
        cb(null, newName);
    },
});
    const usersUpload = multer({userStorage}); // defino la funcioon ejecutando multer

//**** Crea usuario get/post  ****/
router.get('/', usuariosController.ir);//ir te lleva a la vista de formulario p registrar
router.post('/usuariosRegister', usersUpload.single('avatar'),usuariosController.crear);

// *** Vista de perfil de usuario // 

// **** edicion y delete de usuario ? ****//
module.exports = router;