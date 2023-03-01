const express = require('express');

const userController = require('../controller/userController')
const router = express.Router();
const verifyJWT =  require('../middleware/verifyJWT');
router.route('/')
.get(verifyJWT,userController.getAllUsers )

.delete(verifyJWT, userController.deleteUser);

router.route('/:id')
.get( userController.getOneUser);   

module.exports = router;


