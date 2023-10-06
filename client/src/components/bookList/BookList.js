
import React from 'react';
import './bookList.css';

function BookList({ books, onDelete }) {
    return (
        <div>
            <table>
    <thead>
        <tr>
            <th></th>
            <th>Book Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {books.map((book, index) => (
            <tr key={book.isbn}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td className='delete-btn'><button onClick={() => onDelete(book.isbn)}>Delete</button></td>
            </tr>
        ))}
    </tbody>
</table>

        </div>
    );
}

export default BookList;
