const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Books = require("./models/Book.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/newdabase")
  .then(console.log("Connect successfully"))
  .catch((error) => console.log(error));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/books", async (req, res) => {
  try {
    const books = await Books.find({});
    return res.status(200).json({
      books: books,
    });
  } catch (error) {
    console.error("Error fetching books:", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

app.post("/books/add_book", async (req, res) => {
  try {
    const book = {
      title: req.body[0].title,
      description: req.body[0].description,
    };
    console.log(book);
    await Books.create(book);
    return res.status(200).json({
      message: "Succesfully insert",
      book,
    });
  } catch (error) {
    console.error("Error insert books:", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

app.put("/books/edit_book", (req, res) => {
  res.json("Edit Book");
});

app.delete("/books/delete_book/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const book = await Books.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({
        error: "Book not found",
      });
    }
    return res.status(200).json({
      message: "Book successfully deleted",
    });
  } catch (error) {
    console.error("Error deleting book:", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

app.listen(3000, (req, res) => {
  console.log("alldldl");
});
