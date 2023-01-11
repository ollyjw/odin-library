const theHobbit = new Book('The Hobbit', 'JRR Tolkein', '256');
const lotr = new Book('The Lord of the Rings', 'JRR Tolkein', '2561');
const nameOfWind = new Book('The Name of Wind', 'Rothfuss', '12345145');

let myLibrary = [theHobbit, lotr, nameOfWind];

// Book constructor
function Book(title, author, pages, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
}

// store books div
const bookContainer = document.getElementById("books");

// Create html tags & populate with book properties
function printInfo(title, author, pages, id) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('book-card');
    // add data-index to html tag
    newDiv.dataset.index = id;
    bookContainer.appendChild(newDiv);

    const bookTitle = document.createElement('h2');
    bookTitle.textContent = title;

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = author;

    const bookPages = document.createElement('p');
    bookPages.textContent = pages + " pages";

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', () => {
        // give the book-card divs a data-attribute that corresponds to the index of the library array
        let index = newDiv.getAttribute('data-index');
        myLibrary.splice(index, 1);
        displayBooks();
    })

    newDiv.appendChild(bookTitle);
    newDiv.appendChild(bookAuthor);
    newDiv.appendChild(bookPages);
    newDiv.appendChild(removeBtn);
}

// updates index no. of each book in myLibrary array
// start index from 0 & add 1 for every book added
function updateIndex() {
    let i = 0;
    myLibrary.forEach(book => {
        book.id = i;
        i += 1;
    })
}

// Loop through array and display each book's properties on 'book-card' div & update its index number
function displayBooks() {
    updateIndex();
    bookContainer.innerHTML = '';
    myLibrary.forEach(book => {
        printInfo(book.title, book.author, book.pages, book.id);
    });
    //updateIndex();
}

displayBooks();

function grabFormData(event) {
    let newBook = new Book(title.value, author.value, pages.value);

    //console.log(myLibrary);
    addBookToLibrary(newBook);
    displayBooks();

    // submit input tries to send data to a server by default
    event.preventDefault();
}

// Push new book entries to the library array
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

let submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', grabFormData);

console.log(myLibrary);


/////////////////////////////////////
// MODAL FORM
/////////////////////////////////////
const newBookBtn = document.querySelector('.new-book-btn');
const overlay = document.getElementById('overlay');

// Click new book btn to open modal
newBookBtn.addEventListener('click', () => {
    const modal = document.querySelector('.modal')
    openModal(modal);
})
// click the overlay to close modal
overlay.addEventListener('click', () => {
    const modals = document.querySelector('.modal.active')
    closeModal(modals);
})
// open modal adds active class
function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}
// close modal removes active class
function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}