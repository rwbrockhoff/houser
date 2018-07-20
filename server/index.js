const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');


//---Imports----//
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECT).then(dbInstance => {
    app.set('db', dbInstance)
}).catch( (error) => {
    console.log('Massive Error: ', error)
})

//---Endpoints----//
app.get('/api/houses', controller.read);
app.post('/api/houses', controller.post);




const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Making magic @ Port: ${port}`)
})