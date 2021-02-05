const express = require('express')

const router = express.Router()


//testing route 
//posts routes
router.get('/',(req, res) => {
    res.send("we are posts man")
})
router.get('/specific',(req, res) => {
    res.send("some specific route")
})

module.exports = router
