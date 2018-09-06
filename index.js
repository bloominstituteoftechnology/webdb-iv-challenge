const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
// const cors = require('');
const port = 8080;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan());

app.get('/', (req, res)=>{
    res.send('Up and runnning.../');
})

app.listen(port, ()=>{console.log(`Yo, running dis on PORT ${port}`);
})