export const fetchBooks = async (searchTerm, page = 1) => {
    const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}&page=${page}`);
    const data = await response.json();
    return {
      books: data.docs,
      totalPages: Math.ceil(data.num_found / 100),
    };
  };
  const FAVORITE_BOOKS_KEY = 'favoriteBooks';

export const getFavoriteBooks = () => {
  const favoriteBooks = localStorage.getItem(FAVORITE_BOOKS_KEY);
  return favoriteBooks ? JSON.parse(favoriteBooks) : [];
};

export const saveFavoriteBooks = (books) => {
  localStorage.setItem(FAVORITE_BOOKS_KEY, JSON.stringify(books));
};

export const addBookToFavorites = (book) => {
  const currentFavorites = getFavoriteBooks();
  if (!currentFavorites.some((b) => b.key === book.key)) {
    currentFavorites.push(book);
    saveFavoriteBooks(currentFavorites);
  }
};