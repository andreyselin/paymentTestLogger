const express = require('express');
const app = express();
const axios = require('axios');

// app.use(bodyParser.json());
app.use(express.json());

// POST method route
app.post('/', async function (req, res) {
    console.log('request', req);
    const result = await axios.get('https://getnotifiedbot.com/notify/vL4eRFqNO/?message=okayMAN');
    res.send('req.body');
});

app.listen(2525);
