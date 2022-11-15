let express = require('express');
let router = express.Router();
let deliveryController = require('../controllers/delivery');

router.get('/', deliveryController.ir);

module.exports = router;