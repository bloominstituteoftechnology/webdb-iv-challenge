const express = require('express');
const app = express();
const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');   
const port = 8080;  
// https://github.com/LambdaSchool/db-recipe-book/pull/73

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan());

app.get('/', (req, res)=>{
    res.send('Up and runnning.../');
})

app.listen(port, ()=>{console.log(`Yo, running dis on PORT ${port}`);
})