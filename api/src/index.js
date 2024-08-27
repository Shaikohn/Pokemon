require('dotenv').config();
const express = require('express')
const { PORT, MONGO_URL } = process.env
const routes = require('./routes/index') ;
const mongoose = require('mongoose') ; 

const app = express()

app.use("/", routes);

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}/`)
})