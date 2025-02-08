const express = require('express');

const router = express.Router();

const CtvsController = require('../app/controllers/CtvsController');

router.post('/postCTV', CtvsController.postCTV);



module.exports = router;
