const PORT = process.env.PORT || 5000;


const express = require('express');
const app = express();

app.set('view engine', 'ejs')
    .use(express.static(__dirname + '/public'))
    .use('/', require('./routes/route'))
    .listen(PORT, () => {
        console.log('listening on port 5000')
    });