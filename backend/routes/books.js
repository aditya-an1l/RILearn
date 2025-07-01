
const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch(err) {
        res.status(500).json({ message: 'Failed to fetch books' });
    }
});

router.post('/', async (req, res) => {
    const { title, author, coverImage, description } = req.body;
    try {
        const newBook = new Book({ title, author, coverImage, description });
        await newBook.save();
        res.status(201).json(newBook);
    } catch(err) {
        res.status(500).json({ message: 'Failed to add book' });
    }
});

module.exports = router;
