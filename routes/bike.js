const express = require('express')
const router = express.Router()

const BikeController = require('../controllers/BikeController')
const authenticate = require('../middleware/authenticate')

router.get('/', authenticate, BikeController.index)
router.post('/show', BikeController.show)
router.post('/store', BikeController.store)
router.post('/update', BikeController.update)
router.post('/delete', BikeController.destroy)

module.exports = router
