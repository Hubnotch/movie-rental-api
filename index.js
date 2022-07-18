const express = require('express')
const app = express()
const Joi = require('joi')
app.use(express.json())

const genres = [
    { id: 1, genre: "sci-fi" },
    { id: 1, genre: "anime" },
    { id: 1, genre: "epic" },
    { id: 1, genre: "horror" },
    { id: 1, genre: "Action" }
]






const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`)
})