require('dotenv').config();
const express = require('express')
const { PORT } = process.env
const routes = require('./routes/index') ; 

const app = express()

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}/`)
})