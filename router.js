const express = require("express")
const router = express.Router(); 
const books = require("./booksController")

router.get("/books", books.getAllBooks);
router.post("/books/add", books.addBook);
router.get("/books/:id", books.getBookById);
router.delete("/books/:id", books.deleteBook);
router.put("/books/:id", books.updateBook);
router.delete("/books", books.deleteAllBooks);  
router.delete("/books/bytitle/:title", books.deleteBookByTitle); 

module.exports = router;


// types of requests (end points)
// get - used to retrieve data
// post - create a new todo data
// put - update exisiting data
// delete - deletes data