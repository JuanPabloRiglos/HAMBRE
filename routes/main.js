let express = require('express');
let router = express.Router();
let mainController = require('../controllers/main');

router.get('/', mainController.indice);

module.exports = router;