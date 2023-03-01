const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');
const verifyJWT =  require('../middleware/verifyJWT');

router.post('/',  loginController.handleLogin, );


module.exports = router
