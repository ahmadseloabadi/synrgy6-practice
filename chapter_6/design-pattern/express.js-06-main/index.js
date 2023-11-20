const express = require("express");
const path = require("path");
const {
  createBook,
  updateBook,
  listBooks,
  getBook,
  deleteBook,
} = require("./book");
const app = express();

// Ambil port dari environment variable
// Dengan nilai default 8000
const PORT = process.env.PORT || 8000;

// Path ke directory public
// Yang bakal kita jadikan public
// Sehingga user bisa akses CSS dan Javascript
// Di browser
const PUBLIC_DIRECTORY = path.join(__dirname, "public");

// Set format request
app.use(express.urlencoded({ extended: true }));

// Set PUBLIC_DIRECTORY sebagai
// static files di express
app.use(express.static(PUBLIC_DIRECTORY));

// Bilang ke express kalo kita mau
// pake EJS sebagai view engine
app.set("view engine", "ejs");

// GET /?name=Fikri
app.get("/", (req, res) => {
  res.render("index", {
    name: req.query.name || "Guest",
  });
});

// GET /books
app.get("/books", (req, res) => {
  const books = listBooks();
  res.render("books/index", {
    books,
  });
});

app.post("/books/create", (req, res) => {
  const book = createBook(req.body);
  res.redirect(200, "/books/" + book.id);
});

// GET /books/create
app.get("/books/create", (req, res) => {
  res.render("books/create");
});

// GET /books/:id
app.get("/books/:id", (req, res) => {
  const book = getBook(req.params.id);

  if (!book) return res.status(404).send("Book not found!");

  res.render("books/:id/index", book);
});

// GET /books/:id/update
app.get("/books/:id/update", (req, res) => {
  const book = getBook(req.params.id);
  if (!book) return res.status(404).send("Book not found!");

  res.render("books/:id/update", book);
});

// POST /books/:id/update
app.post("/books/:id/update", (req, res) => {
  const book = getBook(req.params.id);
  if (!book) return res.status(404).send("Book not found!");

  updateBook(book.id, req.body);

  res.redirect(200, "/books/" + book.id);
});

// GET /books/:id/delete
app.get("/books/:id/delete", (req, res) => {
  const book = getBook(req.params.id);
  if (!book) return res.status(404).send("Book not found!");

  deleteBook(book.id);

  res.redirect(200, "/books");
});

app.listen(PORT, () => {
  console.log(`Server nyala di http://localhost:${PORT}`);
});
