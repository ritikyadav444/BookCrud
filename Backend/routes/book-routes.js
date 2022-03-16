const express = require('express');
const Book = require('../model/Book');
const router = express.Router();
const Books = require("../model/Book");
const bookControllers = require("../controllers/books-controller");


router.get("/", bookControllers.getAllBooks);
router.post("/", bookControllers.addBook);
router.get("/:id", bookControllers.getById);
router.put("/:id", bookControllers.updateBook);
router.delete("/:id", bookControllers.deleteBook);

module.exports = router;