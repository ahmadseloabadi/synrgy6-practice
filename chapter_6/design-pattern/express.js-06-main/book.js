let books = [];

function createBook(book) {
  book.id = books.sort((a, b) => b.id - a.id)[0]?.id || 1;
  books.push(book);
  return book;
}

function updateBook(id, ubook) {
  let book;

  books = books.map((i) => {
    if (i.id !== Number(id)) return i;
    book = {
      ...i,
      ...ubook,
    };
    return book;
  });

  return book;
}

function listBooks() {
  return books;
}

function deleteBook(id) {
  books = books.filter((i) => i.id !== Number(id));
}

function getBook(id) {
  return books.find((i) => i.id === Number(id));
}

module.exports = {
  listBooks,
  createBook,
  updateBook,
  deleteBook,
  getBook,
};
