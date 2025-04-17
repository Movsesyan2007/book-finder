import React from 'react';

const BookCard = ({ book, addFavorite, removeFavorite, isFavoriteView }) => {
  const { title, author_name, first_publish_year, cover_i, key } = book;
  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : 'https://via.placeholder.com/150x200?text=No+Cover';

  return (
    <div className="book-card">
      <img src={coverUrl} alt={title} />
      <h3>{title}</h3>
      <p>{author_name?.join(', ')}</p>
      <p>{first_publish_year}</p>
      {isFavoriteView ? (
        <button onClick={() => removeFavorite(key)}>❌Remove from favorites</button>
      ) : (
        <button onClick={() => addFavorite(book)}>⭐favorites</button>
      )}
    </div>
  );
};

export default BookCard;