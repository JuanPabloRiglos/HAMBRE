let express = require('express');
let router = express.Router();
let usuariosController = require('../controllers/usuarios');

router.get('/', usuariosController.ir);//ir te lleva a la vista de formulario p registrar
router.post('/', usuariosController.crear);

module.exports = router;