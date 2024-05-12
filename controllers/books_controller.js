const express = require('express')
const books = express.Router()
const Book = require('../models/book.js')
const seedData = require('./books/seed.js')

books.get('/seed', (req, res) => {
  Book.insertMany( seedData )
      .then(createdBooks => {
          res.json({
              message: "Seed successful!"
          })
      })
      .catch(err => {
        console.log(err) 
        res.send('error404')
      })
})

Index:
books.get('/', (req, res) => {
    Book.find()
    .then(foundBooks => {
            res.json(foundBooks)
    })
    .catch (err => {
      res.status(404)
    })
})

// Show:
books.get('/:id', (req, res) => {
    Book.findOne({ id: req.params.id .toLowerCase() })
        .then(foundbooks => {
            res.json(foundbooks)
        })
        .catch (err => {
          res.status(404)
        })
})

// CREATE
books.post('/', (req, res) => {
  Book.create(req.body).then(() => {
      res.redirect('/books')
  }).catch(err => {
    res.render('400')
  })
})

// PUT
books.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(updatedBook => {
    console.log(updatedBook) 
    res.status(303).redirect(`/books/${req.params.id}`)
  })
})

// DELETE:
books.delete('/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id) 
    .then(deletedBooks => { 
      console.log(deletedBooks);
      res.status(303).redirect('/books')
    })
})

module.exports = books
