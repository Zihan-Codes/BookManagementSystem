
import React, { useState } from 'react';
import './bookForm.css';

function BookForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setISBN] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ title, author, isbn });
        setTitle('');
        setAuthor('');
        setISBN('');
    };

    return (
        <div class="form-box">
          <form onSubmit={handleSubmit}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
            <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" required />
            <input value={isbn} onChange={e => setISBN(e.target.value)} placeholder="ISBN" required />
            <button type="submit">Add Book</button>
          </form>
        </div>
    );
}

export default BookForm;
