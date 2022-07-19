const express = require('express')
const router = express.Router()


const genres = [
    { id: 1, genre: "sci-fi" },
    { id: 2, genre: "anime" },
    { id: 3, genre: "epic" },
    { id: 4, genre: "horror" },
    { id: 5, genre: "Action" }
]

//get all genres
router.get('/', (req, res) => {
    res.send(genres)
})

//get a genre by id
router.get('/:id', (req, res) => {
    const id = req.params.id
    const genre = genres.find(movie => movie.id === parseInt(id))
    if (!genre) return res.status(400).send(`Genre was not found`)

    res.send(genre)
})

//post a genre
router.post('/', (req, res) => {
    const { error } = validateGenre(req.body)
    if (error) return res.status(404).send(error.details[0].message)

    const genre = {
        id: genres.length + 1,
        genre: req.body.genre
    }
    genres.push(genre)
    res.send(genre)

})

//update a genre
router.put('/:id', (req, res) => {
    const id = req.params.id
    let genre = genres.find(movie => movie.id === parseInt(id))
    if (!genre) return res.status(400).send(`Genre was not found`)

    const { error } = validateGenre(req.body)
    if (error) return res.status(400).send(error.details[0].message)


    genre.name = req.body.name
    res.send(genre)
})

//delete a genre
router.delete('/:id', (req, res) => {
    const id = req.params.id
    let genre = genres.find(item => item.id === parseInt(id))
    if (!genre) return res.status(400).send(`Genre not found`)
    const index = genres.indexOf(genre)
    genres.splice(index, 1)
    res.send(genre)
})



//validation function 
function validateGenre(genre) {
    const schema = {
        genre: Joi.string().min(3).required()
    }

    return Joi.validate(genre, schema)
}


module.exports = router