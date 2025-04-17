import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'favorites';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (book) => {
    if (!favorites.some(f => f.key === book.key)) {
      setFavorites([...favorites, book]);
    }
  };

  const removeFavorite = (bookKey) => {
    setFavorites(favorites.filter(b => b.key !== bookKey));
  };

  return { favorites, addFavorite, removeFavorite };
};

export default useFavorites;