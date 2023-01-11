const theHobbit = new Book('The Hobbit', 'JRR Tolkein', '256');
const lotr = new Book('The Lord of the Rings', 'JRR Tolkein', '2561');

let myLibrary = [theHobbit, lotr];

// Book constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const bookContainer = document.getElementById("books");

function printInfo(title, author, pages) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('book-card');
    bookContainer.appendChild(newDiv);

    const bookTitle = document.createElement('h2');
    bookTitle.textContent = title;

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = author;

    const bookPages = document.createElement('p');
    bookPages.textContent = pages + " pages";

    newDiv.appendChild(bookTitle);
    newDiv.appendChild(bookAuthor);
    newDiv.appendChild(bookPages);
}

// Loop through array and display each book on the page
function displayBooks() {
    bookContainer.innerHTML = '';
    myLibrary.forEach(book => {
        printInfo(book.title, book.author, book.pages);
    });
    
}

displayBooks();

function grabFormData(event) {
    let newBook = new Book(title.value, author.value, pages.value);

    console.log(myLibrary);
    addBookToLibrary(newBook);
    displayBooks();

    // submit input tries to send data to a server by default
    event.preventDefault();
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

let submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', grabFormData);

console.log(myLibrary);


// ///////////////////////////////////
// MODAL FORM
// ///////////////////////////////////
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



// function Book(title, author, pages, read) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
//     this.info = function() {
//         return `${title} by ${author}, ${pages} pages, ${author}`;
//     }
// }
