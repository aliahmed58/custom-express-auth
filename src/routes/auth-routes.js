const express = require('express')
const router = express.Router()


// login route
router.get('/auth/login', (req, res) => {
    res.send('true')
})

// sign up route
router.get('/auth/signup', (req, res) => {
    
})

// logout route
router.get('/auth/logout', (req, res) => {

})

module.exports = router