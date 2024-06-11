const express = require('express');

const router = express.Router();

const PolicyController = require('../app/controllers/PolicyController');

router.get('/gioi-thieu/', PolicyController.introduce);
router.get('/huong-dan-download-tele/', PolicyController.downTeleguide);
router.get('/huong-dan-book-gai-goi/', PolicyController.bookguide);
router.get('/thanh-toan/', PolicyController.payment);
router.get('/doi-tra/', PolicyController.replacement);
router.get('/bao-mat/', PolicyController.security);
router.get('/giao-hang/', PolicyController.shipment);


module.exports = router;
