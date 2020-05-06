const express = require('express');

const viewsController = require('../controllers/viewscontroller');

const router = express.Router();

router.get('/login', viewsController.getLogin);
router.get('/search', viewsController.getSearch);
router.get('/loans', viewsController.getLoans);
router.get('/', viewsController.getIndex);
module.exports = router;