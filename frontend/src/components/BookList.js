import React, { useState, useEffect } from 'react';
import API from '../api';

function BookList() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const fetchBooks = async () => {
    try {
      const res = await API.get('/books');
      setBooks(res.data);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch books');
    }
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      // This route is protected, needs valid token
      await API.post('/books', { title, author });
      setTitle('');
      setAuthor('');
      fetchBooks();
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to add book (maybe not logged in?)');
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/books/${id}`);
      fetchBooks();
    } catch (error) {
      alert('Failed to delete book (maybe not logged in?)');
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <form onSubmit={handleAddBook}>
        <input 
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required 
        />
        <input 
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required 
        />
        <button type="submit">Add Book</button>
      </form>

      <ul>
        {books.map((b) => (
          <li key={b._id}>
            {b.title} by {b.author}{' '}
            <button onClick={() => handleDelete(b._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
