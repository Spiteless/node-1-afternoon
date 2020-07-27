const products = require('../products.json')

const getProducts = (req, res) => {

    if (req.query.price) {
        const items = products.filter( item => item.price >= Number(req.query.price))
        res.status(200).send(items.filter( prod => {
            return prod.price >= Number(req.query.price)
        }))
    }

    res.status(200).send(products);
}

module.exports = getProducts;