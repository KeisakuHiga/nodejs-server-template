const router = require('express').Router()
const publicServices = require('../services/publicServices')

router.get('/getUsers', publicServices.getUsers)
router.get('/markets', publicServices.markets)
router.get('/board', publicServices.board)
router.get('/ticker', publicServices.ticker)
router.get('/executions', publicServices.executions)
router.get('/boardstate', publicServices.boardstate)
router.get('/health', publicServices.health)
router.get('/chats', publicServices.chats)

module.exports = router
