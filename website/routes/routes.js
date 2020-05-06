const express = require('express');

const viewsController = require('../controllers/viewscontroller');

const router = express.Router();

// Auth management
router.get('/login', viewsController.getLogin);

// Search management
router.get('/search', viewsController.getSearch);
router.post('/search', viewsController.postSearch);
// router.get('/search_result', viewsController.getSearchResults);

// Loans management
router.get('/loans', viewsController.getLoans);

// Data management
router.get('/book_details', viewsController.getBookDetails);
router.get('/', viewsController.getIndex);
module.exports = router;