const express = require('express')
const products = require('../products.json')
app = express()

const port = 4041

app.listen(port, () => console.log(`Server listening on port ${port}`))

app.get(`/api/products`, (req, res) => {
    res.status(200).send(products)
})

//this is a useless comment