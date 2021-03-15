const router = require('express').Router()
const userRoutes = require('./userRoutes')
const cryptoRoutes = require('./cryptoRoutes')
const etherRoutes = require('./etherRoutes')

router.use('/user', userRoutes)
router.use('/crypto', cryptoRoutes)
router.use('/ether', etherRoutes)

module.exports = router
