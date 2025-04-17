import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, currentPage, totalPages, onPageChange, addFavorite, removeFavorite, isFavoriteView }) => {
  return (
    <div className="book-list">
      {books.length === 0 && <p>No books to display</p>}
      {books.map((book) => (
        <BookCard
          key={book.key}
          book={book}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          isFavoriteView={isFavoriteView}
        />
      ))}
    </div>
  );
};

export default BookList;