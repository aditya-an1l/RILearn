
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    savedBooks: [{
        bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
        status: { type: String, enum: ['FAVOURITE', 'READ LATER', 'ALREADY READ'], default: 'READ LATER' },
        rating: { type: Number, min: 1, max: 5 }
    }]
});

module.exports = mongoose.model('User', userSchema);
