let express = require('express');
let router = express.Router();
let deliveryController = require('../controllers/delivery');

router.get('/', deliveryController.ir);
router.get('/registroDelivery', deliveryController.cargarProducto);
router.post('/registroDelivery', deliveryController.guardarProducto);

module.exports = router;