const daoProducts = require('../dao/mongoManager/BdProductManager')
const daoCarts = require('../dao/mongoManager/BdCartManager')
const daoSession = require('../dao/mongoManager/BdsessionManager')

const productService = require('../service/products.service.bd')
const cartsService = require('../service/carts.service.bd')
const sessionService = require('../service/session.service')

const productServices = new productService(daoProducts)
const cartsServices = new cartsService(daoCarts)
const sesionServices = new sessionService(daoSession)



module.exports ={
    productServices,
    cartsServices,
    sesionServices
}
