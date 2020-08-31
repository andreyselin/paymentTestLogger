const express = require('express');
const app = express();

// app.use(bodyParser.json());
app.use(express.json());

// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
});

app.listen(25252);
