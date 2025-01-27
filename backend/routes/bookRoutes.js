const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById
} = require('../controllers/bookController');

// Public routes
router.get('/', getAllBooks);
router.get('/:id', getBookById);

// Protected routes
router.post('/', authMiddleware, createBook);
router.put('/:id', authMiddleware, updateBookById);
router.delete('/:id', authMiddleware, deleteBookById);

module.exports = router;
