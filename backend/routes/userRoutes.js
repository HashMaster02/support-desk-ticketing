const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require('../controlers/userController')

router.post('/', registerUser)
router.post('/login', loginUser )

// Export with CommonJS syntax
module.exports = router