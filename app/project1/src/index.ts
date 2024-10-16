require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {
    console.log('Data Source has been intialized')
}).catch(error => console.log(error))

app.use(cors({origin: process.env.CORS_WHITELIST}));
app.use(express.json())
const port = process.env.PORT;


const teamController = require('./controller/team-controller');
app.use('/teams', teamController);

const coachController = require('./controller/coach-controller');
app.use('/coaches', coachController);

const playerController = require('./controller/player-controller');
app.use('/players', playerController);


app.listen(port, () => {
    console.log(`My first Express app is up and running on port ${port}!`);
});

