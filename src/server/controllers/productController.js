const db = require('../database');


exports.createProduct = async (req, res) => {

    const { product_name, quantity, price } = req.body;

    await db.query(
        "INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)",
        [product_name, quantity, price ]
    );

    res.status(201).send({
        message: `Product ${product_name} added successfully.`,
        body: {
            product: { product_name, quantity, price }
        }
    });

};

exports.listAllProducts = async (req, res) => {
    const response = await db.query("SELECT * FROM products ORDER BY product_name ASC");
    res.status(200).send(response.rows);
};

exports.getProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    const response = await db.query("SELECT * FROM products WHERE product_id = $1", [productId]);
    res.status(200).send(response.rows);
};

exports.updateProductById = async (req, res) => {

    const productId = parseInt(req.params.id);
    const { product_name, quantity, price } = req.body;

    await db.query(
        "UPDATE products SET product_name = $1, quantity = $2, price = $3 WHERE product_id = $4",
        [product_name, quantity, price, productId]
    );

    res.status(200).send({
        message: `Product ${product_name} added successfully.`,
        body: {
            product: { product_name, quantity, price }
        }  
    });

}