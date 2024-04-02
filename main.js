const newBook = document.querySelector("#newBook");
const dialog = document.querySelector(".dialog");
const closeDialog = document.querySelector("#close-button");
const confirmDialog = document.querySelector("#confirm-button");
const libraryWindow = document.querySelector(".library");

const myLibrary = [];

newBook.addEventListener("click", () => {
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});

confirmDialog.addEventListener("click", (event) => {
  event.preventDefault();
  handleConfirm();
  dialog.close();
});

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function handleConfirm() {
  const titleValue = document.querySelector("#bookTitle").value;
  const authorValue = document.querySelector("#bookAuthor").value;
  const pagesValue = document.querySelector("#bookPages").value;
  const readValue = document.querySelector("#isRead").checked;

  let isRead;
  if (readValue) {
    isRead = true;
  } else {
    isRead = false;
  }

  const book = new Book(titleValue, authorValue, pagesValue, isRead);
  myLibrary.push(book);
  createBookCard();
}

let booksInArray = 0;

function createBookCard() {
  const card = document.createElement("div");
  const cardHeader = document.createElement("h2");
  const cardAuthorName = document.createElement("p");
  const cardPagesNumber = document.createElement("p");
  const deleteCardButton = document.createElement("button");
  const bookReadButton = document.createElement("button");

  card.classList.add("card");
  bookReadButton.classList.add("bookRead");
  deleteCardButton.classList.add("delete");

  deleteCardButton.textContent = "Delete";

  cardHeader.textContent = myLibrary[booksInArray].title;
  cardAuthorName.textContent =
    "Written by" + " " + myLibrary[booksInArray].author;
  cardPagesNumber.textContent = myLibrary[booksInArray].pages + " " + "pages";

  if (myLibrary[booksInArray].read == true) {
    bookReadButton.textContent = "Read";
  } else {
    bookReadButton.textContent = "Unread";
    bookReadButton.style.backgroundColor = "rgb(255, 70, 70)";
  }

  card.appendChild(cardHeader);
  card.appendChild(cardAuthorName);
  card.appendChild(cardPagesNumber);
  card.appendChild(bookReadButton);
  card.appendChild(deleteCardButton);
  libraryWindow.appendChild(card);

  card.setAttribute("data-number", booksInArray);
  booksInArray++;

  bookReadButton.addEventListener("click", () => {
    let button = bookReadButton;
    const parent = button.parentNode;
    let parentNumber = parent.dataset.number;

    if (button.textContent == "Read") {
      button.textContent = "Unread";
      button.style.backgroundColor = "rgb(255, 70, 70)";
      myLibrary[parentNumber].read = false;
    } else {
      button.textContent = "Read";
      button.style.backgroundColor = "rgb(42, 161, 42)";
      myLibrary[parentNumber].read = true;
    }
  });

  deleteCardButton.addEventListener("click", () => {
    const parent = deleteCardButton.parentNode;
    let parentNumber = parent.dataset.number;

    parent.parentNode.removeChild(parent);
    myLibrary.splice(parentNumber, 1);

    updateDataNums(parentNumber);
  });

  function updateDataNums(num) {
    let cards = document.querySelectorAll(".card");
    for (let card of cards) {
      if (card.dataset.number > num) {
        card.dataset.number--;
      }
    }
  }
}