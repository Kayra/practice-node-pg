const router = require('express-promise-router')();
const productController = require('../controllers/productController');


router.post('/products', productController.createProduct);
router.get('/products', productController.listAllProducts);
router.get('/products/:id', productController.getProductById);

module.exports = router;
