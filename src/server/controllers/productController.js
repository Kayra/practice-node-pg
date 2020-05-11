const db = require('../database');


exports.createProduct = async (req, res) => {

    const { productName, quantity, price } = req.body;

    await db.query(
        "INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)",
        [productName, quantity, price ]
    );

    res.status(201).send({
        message: `Product ${productName} added successfully.`,
        body: {
            product: { productName, quantity, price }
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
