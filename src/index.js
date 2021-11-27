const dotenv = require('dotenv');
const cors = require("cors");
dotenv.config();

const express = require("express");
const routes = require('./Routes');


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log("Aberto na porta 3333");
});