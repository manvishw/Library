const table = document.querySelector(".main table");
const submitbtn = document.querySelector("#submit");
const form = document.querySelector("form");
const main = document.querySelector(".main");
const clearList = document.querySelector('#clear');
let list;

const myLibrary = [];

document.addEventListener("DOMContentLoaded", () => {
  updateList();
});

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function removeLibrary() {
  myLibrary.pop();
}
const fifShadesOfGray = new Book(
  "Fifty Shades of Grey",
  "E. L. James",
  514,
  false
);
const deadlyHollows = new Book(
  "Harry Potter and the Deathly Hallows",
  "J. K. Rowling",
  607,
  false
);
const goatLife = new Book("Aadujeevitham", "Benyamin", 255, false);

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

addBookToLibrary(fifShadesOfGray);
addBookToLibrary(deadlyHollows);
addBookToLibrary(goatLife);

submitbtn.addEventListener("click", (event) => {
  const input = document.querySelectorAll("input");
  event.preventDefault();
  if (input[0].value === "" || input[1].value === "" || input[2].value === "") {
    console.log("Working");
    return;
  } else {
    removeList();

    let formData = [];
    for (let i = 0; i <= 3; i++) {
      formData.push(form[i].value);
    }

    const newBook = new Book(
      formData[0],
      formData[1],
      formData[2],
      formData[3]
    );
    addBookToLibrary(newBook);
    updateList();
  }
});

function updateList() {
  list = document.createElement("div");
  list.className = "list";
  myLibrary.forEach((book) => {
    const title = document.createElement("h2");
    title.innerText = book.title;
    const author = document.createElement("p");
    author.innerText = book.author;
    const pages = document.createElement("p");
    pages.innerText = book.pages;
    const read = document.createElement("p");
    read.innerText = book.read;
    list.append(title);
    list.append(author);
    list.append(pages);
    list.append(read);
  });

  main.append(list);
}

function removeList() {
  list.remove();
}

clearList.addEventListener('click',()=>{
  myLibrary.forEach(()=>{
    removeLibrary();
  })
  removeList();
})