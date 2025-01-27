const Book = require('../models/Book');

// Create a book
exports.createBook = async (req, res) => {
  try {
    const { title, author, read, amazonLink, storyline } = req.body;

    // Optionally associate with user
    const createdBy = req.user ? req.user.userId : null;

    const newBook = await Book.create({
      title,
      author,
      read,
      amazonLink,
      storyline,
      createdBy
    });

    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get book by ID
exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found!' });
    }
    res.json(book);
  } catch (error) {
    res.status(404).json({ error: 'Invalid ID or book not found' });
  }
};

// Update book by ID
exports.updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, read, amazonLink, storyline } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, read, amazonLink, storyline },
      { new: true, runValidators: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found!' });
    }

    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete book by ID
exports.deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found!' });
    }
    res.json({ message: 'Book deleted successfully.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
