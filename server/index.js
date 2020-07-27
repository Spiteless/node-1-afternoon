const express = require('express')
const products = require('../products.json')
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
app = express()

const port = 4041

app.listen(port, () => console.log(`Server listening on port ${port}`))

app.get(`/api/products`, getProducts)

app.get(`/api/product/:id`, getProduct)
