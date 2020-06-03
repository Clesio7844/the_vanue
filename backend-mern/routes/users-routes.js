const express = require('express');
const { check } = require('express-validator');

const userdControllers = require('../controllers/users-controllers');

const router = express.Router();

router.get('/', userdControllers.getUsers);

router.post(
  '/signup',
  [
    check('name')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail() // Test@test.com => test@test.com
      .isEmail(),
    check('password').isLength({ min: 6 })
  ],
  userdControllers.signup
);

router.post('/login', userdControllers.login);

module.exports = router;
