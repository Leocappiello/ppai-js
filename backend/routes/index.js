const { Router } = require('express')
const router = Router()
const dataRT = require('../../data/dataRT.json')

//routes
router.get('/', (req, res) => {
    res.json(dataRT)
})

module.exports = router