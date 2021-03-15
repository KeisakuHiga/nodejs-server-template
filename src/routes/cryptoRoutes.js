const router = require('express').Router()
const { markets, board, ticker, executions, boardstate, health, chats } = require('../services/publicServices')

router.get('/markets', markets)
router.get('/board', board)
router.get('/ticker', ticker)
router.get('/executions', executions)
router.get('/boardstate', boardstate)
router.get('/health', health)
router.get('/chats', chats)

module.exports = router
