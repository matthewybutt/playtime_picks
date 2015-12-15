var express = require('express');
var router = express.Router();

// Require controllers.
var usersController   = require('../controllers/users');
var activitiesController   = require('../controllers/activities');
var commentsController = require('../controllers/comments');

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// users resource paths:
router.get('/users',     usersController.index);
router.get('/users/:id', usersController.show);// users resource paths:

//activities resource paths:
router.get('/activities',     activitiesController.index);
router.get('/activities/:id', activitiesController.show);
router.post('/activities/new', activitiesController.create);

module.exports = router;
