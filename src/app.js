const express = require('express');
const cors = require('cors');

const indexRoute = require('./server/routes/index');
const productRoutes = require('./server/routes/productRoutes'); 


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(indexRoute);
app.use(productRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Application listening on port ${port}.`);
});
