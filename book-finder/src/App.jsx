import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import useDebounce from './hooks/useDebounce';
import BookList from './components/BookList';
import Pagination from './components/Pagination';
import useFavorites from './hooks/useFavorites';
import { fetchBooks } from './services/bookService';
import useDarkMode from './hooks/useDarkMode.js';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [viewFavorites, setViewFavorites] = useState(false);

  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { isDark, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (debouncedSearchTerm && !viewFavorites) {
      const fetchData = async () => {
        const { books, totalPages } = await fetchBooks(debouncedSearchTerm, currentPage);
        setBooks(books);
        setTotalPages(totalPages);
      };
      fetchData();
    }
  }, [debouncedSearchTerm, currentPage, viewFavorites]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem' }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button className='theme-toggle' onClick={toggleDarkMode}>
          
          {isDark ? '☀️ Light mode' : '🌙 Dark mode'}
        </button>
      </div>

      <div style={{ margin: '1rem 0' }}>
        <button onClick={() => setViewFavorites(false)}>🔍 Search</button>
        <button onClick={() => setViewFavorites(true)}>⭐ Favorites</button>
      </div>

      <BookList
        books={viewFavorites ? favorites : books}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        isFavoriteView={viewFavorites}
      />

      {!viewFavorites && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default App;