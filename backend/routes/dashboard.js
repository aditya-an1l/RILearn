
require('dotenv').config();
const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.sendStatus(401);
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

router.get('/books', authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('savedBooks.bookId');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user.savedBooks);
    } catch(err) {
        res.status(500).json({ message: 'Failed to fetch saved books' });
    }
});

router.post('/books/save', authenticate, async (req, res) => {
    const { bookId, status = 'READ LATER' } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        if (!user.savedBooks.some(b => String(b.bookId) === bookId)) {
            user.savedBooks.push({ bookId, status });
            await user.save();
        }
        res.status(201).json(user.savedBooks);
    } catch(err) {
        res.status(500).json({ message: 'Failed to save book' });
    }
});

router.post('/books/updateStatus', authenticate, async (req, res) => {
    const { bookId, status } = req.body;
    const validStatus = ['FAVOURITE', 'READ LATER', 'ALREADY READ'];
    if (!validStatus.includes(status)) {
        return res.status(400).json({ message: 'Invalid status' });
    }
    try {
        const user = await User.findById(req.user.id);
        const savedBook = user.savedBooks.find(b => String(b.bookId) === bookId);
        if (!savedBook) return res.status(404).json({ message: 'Book not found in saved list' });
        savedBook.status = status;
        await user.save();
        res.json({ message: 'Status updated' });
    } catch(err) {
        res.status(500).json({ message: 'Failed to update status' });
    }
});

router.post('/books/rate', authenticate, async (req, res) => {
    const { bookId, rating } = req.body;
    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
        return res.status(400).json({ message: 'Invalid rating value' });
    }
    try {
        const user = await User.findById(req.user.id);
        const savedBook = user.savedBooks.find(b => String(b.bookId) === bookId);
        if (!savedBook) return res.status(404).json({ message: 'Book not found in saved list' });
        savedBook.rating = rating;
        await user.save();
        res.json({ message: 'Rating updated' });
    } catch(err) {
        res.status(500).json({ message: 'Failed to update rating' });
    }
});

module.exports = router;
