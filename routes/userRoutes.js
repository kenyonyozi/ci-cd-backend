const router  = require('express').Router()
const ClientController = require('../controllers/ClientControllers')

router.post('/registerClient', ClientController.registerClient)

router.get('/allClients', ClientController.allClients)

module.exports = router;