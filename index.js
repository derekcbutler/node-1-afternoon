const express = require('express')
const getProducts = require('./server/getProducts')
const getProduct = require('./server/getProduct')


const app = express();


app.get('/api/products/', getProducts);

app.get('/api/products/:id', getProduct);

app.listen(4444, () => {console.log(`Server Running on 4444`)});