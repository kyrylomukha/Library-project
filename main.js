const myLibrary = [];

const newBook = document.querySelector("#newBook");
const dialog = document.querySelector(".dialog");

newBook.addEventListener("click", () => {
  dialog.showModal();
});

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.isRead = this.read ? "read" : "not read yet"
};

function addBookToLibrary() {

}