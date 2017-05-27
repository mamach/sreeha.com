const express = require('express');
const app = express();
// const path = require('path');


//serving static files and creating alias
app.use('/static', express.static('index_files'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
