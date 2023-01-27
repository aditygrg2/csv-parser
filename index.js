const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', require('./router'));
app.use('/uploads',express.static(__dirname + '/uploads'));

app.listen(PORT, (err) => {
    if(err) console.log("Error : ", err);
})

