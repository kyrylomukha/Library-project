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

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
};

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

function createBookCard() {
  let booksInArray = 0;

  const card = document.createElement("div");
  const cardHeader = document.createElement("h2");
  const cardAuthorName = document.createElement("p");
  const cardPages = document.createElement("p");
  const deleteCardButton = document.createElement("button");
  const bookRead = document.createElement("button");

  card.classList.add("card");
  bookRead.classList.add("bookRead");
  deleteCardButton.classList.add("delete");

  deleteCardButton.textContent = "Delete";
  
  cardHeader.textContent = myLibrary[booksInArray].title;
  cardAuthorName.textContent = "Written by" + " " + myLibrary[booksInArray].author;
  cardPages.textContent = myLibrary[booksInArray].pages + " " + "pages";

  if(myLibrary[booksInArray].read == true) {
    bookRead.textContent = "Read";
  } else {
    bookRead.textContent = "Unread";
    bookRead.style.backgroundColor = "red";
  }

  card.appendChild(cardHeader);
  card.appendChild(cardAuthorName);
  card.appendChild(cardPages);
  card.appendChild(bookRead);
  card.appendChild(deleteCardButton);
 
  libraryWindow.appendChild(card);
  booksInArray++;

}