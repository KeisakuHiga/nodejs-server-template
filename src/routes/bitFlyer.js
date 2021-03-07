const router = require('express').Router()
const publicServices = require('../services/publicServices')

router.get('/markets', publicServices.markets)
router.get('/board', publicServices.board)
router.get('/ticker', publicServices.ticker)
router.get('/executions', publicServices.executions)
router.get('/getboardstate', publicServices.getboardstate)
router.get('/gethealth', publicServices.gethealth)
router.get('/getchats', publicServices.getchats)

module.exports = router
