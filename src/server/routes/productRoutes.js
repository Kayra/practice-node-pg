const router = require('express-promise-router')();
const productController = require('../controllers/productController');


router.post('/products', productController.createProduct);

module.exports = router;
