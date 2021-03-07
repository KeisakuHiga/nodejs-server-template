const router = require('express').Router()
const homeServices = require('../services/homeServices')

router.get('/', homeServices.helloWorldService)
router.get('/getmarkets', homeServices.getMarketsService)

module.exports = router
