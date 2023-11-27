const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BookSchema = new Schema({
    title: String,
    description: String,
})

const Books = mongoose.model('Books',BookSchema)

module.exports = Books;