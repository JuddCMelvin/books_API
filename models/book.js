// require mongoose: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema:
const bookSchema = new Schema({
    title: { type: String, required: true },
	description: { type: String },
	year: { type: Number, required: true },
	quantity: { type: Number },
	imageURL: { type: String, }
})

// model and export: 
const Book = mongoose.model('Book', bookSchema)
module.exports = Book