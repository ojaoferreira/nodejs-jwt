const express = require('express');
const router = express.Router();

router.get('/', require('./project'));

module.exports = router;
