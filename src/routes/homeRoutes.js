const router = require('express').Router()
const homeServices = require('../services/homeServices')

router.get('/', homeServices.helloWorldService)

module.exports = router
