const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.readInfo = this.read ? "read" : "not read yet"
};

function addBookToLibrary() {
  
}