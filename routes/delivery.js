let express = require('express');
let router = express.Router();
let multer = require('multer');
let path = require ('path')
let deliveryController = require('../controllers/delivery');

//**** configuracion de Multer para carga de imagenes  = muler Delivery*/
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        let folder = path.join(__dirname, '../public/images/delivery');// declara la carpeta destino
        cb(null , folder);
    },
     filename : function (req, file, cb){
        let newName = Date.now() + '' + file.originalname ; // setea el nombre de la imagen
        cb(null, newName);
    },
});
    const upload = multer({storage}); // defino la funcioon ejecutando multer

//********* Inicio delivery**********//
router.get('/', deliveryController.ir);

//********* delivery Storage- vista de carga y guardado de producto*********//
router.get('/registroDelivery', deliveryController.cargarProducto);
router.post('/registroDelivery', upload.single('image'), deliveryController.guardarProducto);

//********** Vista todos los productos ***********************//
router.get('/dProducts', deliveryController.showProducts);

//********** Detalle de producto, boton de edicion y delete************/
router.get('/dProductDetail/:id', deliveryController.ProductDetail);
router.patch('/dProductDetail/:id', upload.single('image'), deliveryController.editProduct);
router.delete('/dProductDetail/:id', deliveryController.destroyProduct);

module.exports = router;