import React from 'react';

const BookDetails = () => {
  const books = [
    { id: 1, title: "React Explained", author: "Zac Gordon" },
    { id: 2, title: "Learning React", author: "Alex Banks" }
  ];

  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;