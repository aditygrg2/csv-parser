const multer = require('multer');
const storage = require('../config/multer-storage');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
let results = [];

module.exports.upload = async (req,res) => {
    // I have the file now in req.file
    results = [];
    if(req.method=='POST'){
        const uploadPath = path.join(__dirname,'../uploads');
        fs.createReadStream(uploadPath + '/' + req.file.filename).pipe(csv()).on('data', (data) => {
            results.push(data);
        });

        return res.status(200).json({
            message: "File uploaded successfully!",
        })
    }
}

module.exports.sendData = (req,res) => {
    if(results){
        return res.status(200).json({
            data: results
        })
    }
}