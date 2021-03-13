const router = require('express').Router()
const userRoutes = require('./userRoutes')
const cryptoRoutes = require('./cryptoRoutes')

router.use('/user', userRoutes)
router.use('/crypto', cryptoRoutes)

module.exports = router
