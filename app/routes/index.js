var express = require('express');
var router = express.Router();

// Require controllers.
var usersController   = require('../controllers/users');
var activitiesController   = require('../controllers/activities');

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// users resource paths:
router.get('/users',                                      usersController.index);
router.get('/users/:id',                                  usersController.show);
router.post('/users/new',                                 usersController.create);
router.post('/login',                                     usersController.userAuth);
router.put('/users/:id',    usersController.tokenVerify, usersController.update);
router.delete('/users/:id', usersController.tokenVerify, usersController.destroy);

// activities resource paths:
router.get('/activities',                                      activitiesController.index);
router.get('/activities/:id',                                  activitiesController.show);
router.post('/activities/new',   usersController.tokenVerify, activitiesController.create);
router.put('/activities/:id',    usersController.tokenVerify, activitiesController.update);
router.delete('/activities/:id', usersController.tokenVerify, activitiesController.destroy);

router.post('/activities/:id/comments', usersController.tokenVerify, activitiesController.createComment);


module.exports = router;
