const express = require('express')
const genres = require('./routes/genres')
const app = express()
const Joi = require('joi')
app.use(express.json())

app.use('/api/genres', genres)


const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`)
})