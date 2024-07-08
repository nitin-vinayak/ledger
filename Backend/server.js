const express = require('express');
const cors = require('cors');
const db = require('./database'); 
const routes = require('./Routes/login');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(8081, () => {
   console.log('Listening on port 8081');
});
