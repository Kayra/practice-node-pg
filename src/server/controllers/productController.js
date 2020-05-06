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