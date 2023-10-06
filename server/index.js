const express = require('express');
const mongoose = require('mongoose');
const Book = require('./Models/Book');

const cors = require('cors');

const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/bookManagement', { useNewUrlParser: true, useUnifiedTopology: true });
console.log("db connected");

app.use(express.json());
app.use(cors());




app.get('/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

app.post('/books', async (req, res) => {

    console.log(req.body)
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.json(newBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/books/:isbn', async (req, res) => {
    await Book.deleteOne({ isbn: req.params.isbn });
    res.json({ message: 'Book deleted' });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
