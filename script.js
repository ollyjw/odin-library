let myLibrary = ['The Hobbit', 'Lord of the Rings', 'Song of Ice and Fire'];
// let myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Loop through array and display each book on the page
function displayBooks() {
    let str = '<ul>';
    myLibrary.forEach(function (Book) {
        str += '<li>' + Book + '</li>';
    })
    str += '</ul>';
    document.getElementById("books").innerHTML = str;
}

displayBooks();

function grabFormData(event) {
    let newBook = new Book(title.value, author.value, pages.value, read.value);

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

// SUBMITING NOT WORKING YET REEEEE

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
