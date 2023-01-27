const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const multer = require('multer');
const storage = require('../config/multer-storage');

router.post('/handleFile', multer({storage:storage}).single('file'), fileController.upload);
router.get('/data', fileController.sendData);

module.exports = router;