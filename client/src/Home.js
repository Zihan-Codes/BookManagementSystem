
import React, { useState, useEffect } from 'react';
import BookForm from './components/bookForm/BookForm';
import BookList from './components/bookList/BookList';
import Header from './components/headerComponents/Header';
import Footer from './components/footerComponents/Footer';
import './index.css';

function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        
        fetch('http://127.0.0.1:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    const addBook = (book) => {

        fetch('http://127.0.0.1:5000/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        }).then(res => res.json())
          .then(newBook => setBooks([...books, newBook]));
    };

    const deleteBook = (isbn) => {
        
        fetch(`http://127.0.0.1:5000/books/${isbn}`, { method: 'DELETE' })
            .then(() => setBooks(books.filter(book => book.isbn !== isbn)));
    };

    return (
        <div>
            <Header />
            <BookForm onAdd={addBook} />
            <BookList books={books} onDelete={deleteBook} />
            <Footer />
        </div>
    );
}

export default Home;
