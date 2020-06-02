const express = require('express');

const userdControllers = require('../controllers/users-controllers');

const router = express.Router();

router.get('/', userdControllers.getUsers);

router.post('/signup', userdControllers.signup);

router.post('/login', userdControllers.login);

module.exports = router;
