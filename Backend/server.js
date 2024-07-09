const express = require('express');
const cors = require('cors');
const db = require('./database'); 
const loginRoute = require('./Routes/login');
const signupRoute = require('./Routes/signup')

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', loginRoute);
app.use('/', signupRoute)

app.listen(8081, () => {
   console.log('Listening on port 8081');
});
