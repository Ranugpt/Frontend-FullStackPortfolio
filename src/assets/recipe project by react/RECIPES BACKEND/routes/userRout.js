const userController = require('../Controller/userController');
const express = require('express');
const {application} = require('express');

const router = express.Router();

router.post('/saveuser', userController.saveUser);
module.exports = router;