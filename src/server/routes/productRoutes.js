const router = require('express-promise-router')();
const productController = require('../controllers/productController');


router.post('/products', productController.createProduct);
router.get('/products', productController.listAllProducts);

module.exports = router;
