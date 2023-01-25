var express = require('express')
var router = express.Router()
const { sign_up, sign_in } = require('./controller')
const multer = require('multer')
const os = require('os')

router.post('/signup',multer({ dest: os.tmpdir() }).single('image'), sign_up)
router.post('/signin',sign_in)

module.exports = router