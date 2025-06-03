const express = require('express');
const Book = require('../models/Book');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const router = express.Router();

const extractUser = (req, res, next) => {
    const authHeader = req.headers['authorization'] || req.cookies?.token;
    if (!authHeader) {
        req.userId = null;
        return next();
    }
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
    try {
        let payload = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = payload.id;
    } catch {
        req.userId = null;
    }
    next();
};

// Render homepage (public books)
router.get('/', extractUser, async (req, res) => {
    const books = await Book.find();
    let savedBookIds = [];
    if (req.userId) {
        const user = await User.findById(req.userId);
        if (user) savedBookIds = user.savedBooks.map(b => String(b.bookId));
    }
    res.render('home', { books, savedBookIds });
});

// Render dashboard page - requires login
router.get('/dashboard', async (req, res) => {
    try {
        let token = req.cookies?.token || req.headers['authorization'];
        if (token?.startsWith('Bearer ')) token = token.slice(7);
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(payload.id);
        if (!user) return res.redirect('/login');

        const bookIds = user.savedBooks.map(b => b.bookId);
        const books = await Book.find({ _id: { $in: bookIds } });
        const savedBooks = user.savedBooks.map(saved => ({
            book: books.find(b => String(b._id) === String(saved.bookId)),
            status: saved.status,
            rating: saved.rating || 0
        }));

        const filter = req.query.filter || 'ALL';
        const sortRating = req.query.sortRating || 'NONE';

        res.render('dashboard', { savedBooks, filter, sortRating, token });
    } catch (e) {
        return res.redirect('/login');
    }
});

// Render login/signup page
router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;

