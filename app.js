const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) =>
    res.send('Welcome to CRUD Project')
);

// Routers



app.listen(3000, () => console.log('server run listening on port 3000'));