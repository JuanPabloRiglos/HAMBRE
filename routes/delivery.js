let express = require('express');
let router = express.Router();
let deliveryController = require('../controllers/delivery');

router.get('/', deliveryController.ir);
router.get('/registroDelivery', deliveryController.cargarProducto);
router.post('/registroDelivery', deliveryController.guardarProducto);
router.get('/dProducts', deliveryController.showProducts);
router.get('/dProductDetail/:id', deliveryController.ProductDetail);
router.patch('/dProductDetail/:id', deliveryController.editProduct);
router.delete('/dProductDetail/:id', deliveryController.destroyProduct);
module.exports = router;