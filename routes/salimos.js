let express = require('express');
let router = express.Router();
let salimosController = require('../controllers/salimos');

router.get('/', salimosController.ir);

module.exports = router;