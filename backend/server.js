const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');
const dashboardRoutes = require('./routes/dashboard');
const pagesRoutes = require('./routes/pages');

const app = express();
connectDB();

app.use(bodyParser.json());
app.use(cookieParser());

// Setup EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files if any (optional)
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/', pagesRoutes);

// for the pages
app.use('/page', express.static(path.join(__dirname, '..', 'pages')));
app.use('/pages', express.static(path.join(__dirname, '..', 'pages')));
// for the media pages
app.use('/media', express.static(path.join(__dirname, '..', 'media')));
app.use('/media/fav_media', express.static(path.join(__dirname, '..', 'media', "fav_media")));
app.use('/mob2_files', express.static(path.join(__dirname, '..', 'mob2_files')));
app.get(['/', '/home'], (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
