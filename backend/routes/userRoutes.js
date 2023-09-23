const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getMe} = require('../controlers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser )
router.get('/me', protect, getMe )  // put 'protect' as second argument to use on this sepecific route

// Export with CommonJS syntax
module.exports = router