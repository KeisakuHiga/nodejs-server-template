const router = require('express').Router()
const bitFlyer = require('./bitFlyer')

router.use('/', bitFlyer)

module.exports = router
