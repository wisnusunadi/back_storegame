var express = require('express')
var router = express.Router()
const { sign_up } = require('./controller')
const multer = require('multer')
const os = require('os')

router.post('/signup',multer({ dest: os.tmpdir() }).single('image'), sign_up)

module.exports = router