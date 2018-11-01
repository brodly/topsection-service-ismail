const express = require('express');
const bodyParser = require('body-parser');
const Models = require('../db/Models.js');

const app = express();

const port = process.env.PORT || 7777;

app.use(bodyParse.json());
app.use(bodyParse.urlEncoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => res.render('index.html'));

app.get('/course', (req, res) => {
// return course requested in req
});

app.listen(port, () => consol.log('listening on port ' + port));
