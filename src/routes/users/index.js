const express = require('express');
const router = express.Router();
const security = require('../../middleware/security');

router.post('/register', require('./register'));
router.post('/authenticate', require('./authenticate'));
router.use(security);

module.exports = router;
