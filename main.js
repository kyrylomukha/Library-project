const newBook = document.querySelector("#newBook");
const dialog = document.querySelector(".dialog");
const closeDialog = document.querySelector("#close-button");
const confirmBtn = document.querySelector("#confirm-button");
const libraryWindow = document.querySelector(".library");

const myLibrary = [];

newBook.addEventListener("click", () => {
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
})

confirmBtn.addEventListener("click",(event) => {
  event.preventDefault();
  handleConfirm();
  dialog.close();
})

function handleConfirm() {
  const titleValue = document.querySelector("#bookTitle").value;
  const authorValue = document.querySelector("#bookAuthor").value;
  const pagesValue = document.querySelector("#bookPages").value;
  const readValue = document.querySelector("#isRead").checked;

  let isRead;
  if(readValue) {
    isRead = true;
  } else {
    isRead = false;
  }
  
  const book = new Book(titleValue,authorValue,pagesValue,isRead);
  myLibrary.push(book);
  createBookCard();
}

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
};

function createBookCard() {
  const card = document.createElement("div");
  card.classList.add(".card");
  libraryWindow.appendChild(card);
}

function addBookToLibrary(book) {

}