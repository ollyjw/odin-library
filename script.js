const theHobbit = new Book('The Hobbit', 'JRR Tolkein', '256', 0, false);
const lotr = new Book('The Lord of the Rings', 'JRR Tolkein', '2561', 1, true);
const nameOfWind = new Book('The Name of Wind', 'Rothfuss', '12345145', 2, false);

let myLibrary = [theHobbit, lotr, nameOfWind];

// Book constructor
function Book(title, author, pages, id, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
    this.status = Boolean(status);
}

Book.prototype.read = function () {
    this.status = true;
}
Book.prototype.unread = function () {
    this.status = false;
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

    // add checkbox that shows read status
    const addP = document.createElement('p');
    let readStatusLabel = document.createElement('label');
    readStatusLabel.textContent = "Read";
    readStatusLabel.htmlFor = "read";

    const readStatus = document.createElement('input');
    readStatus.type = "checkbox";
    readStatus.id = "read-check";
    readStatus.name = "read";
    readStatus.disabled = true;

    const readBtn = document.createElement('button');
    readBtn.classList.add('read-btn');
    readBtn.textContent = 'Read';

    // store status from library array
    let currentStatus = myLibrary[id].status;
    // Initial check if item is read or unread
    if (currentStatus === true) {
        hasRead();
    } else {
        hasntRead();
    }

    // if "read" add 'checked' attribute to input tag
    // if "unread" remove any 'checked' attribute

    // updates read status
    function hasRead() {
        readStatus.checked = true;
        readStatusLabel.textContent = 'Read';
        currentStatus = !currentStatus;
    }
    function hasntRead() {
        readStatus.checked = false;
        readStatusLabel.textContent = 'Unread';
        currentStatus = !currentStatus;
    }

    // Read btn
    readBtn.addEventListener('click', () => {
        if (currentStatus === true) {
            hasRead();
            myLibrary[id].read();
            console.log(myLibrary[id].status);
        } else {
            hasntRead();
            myLibrary[id].unread();
            console.log(myLibrary[id].status);
        }
    })

    newDiv.appendChild(bookTitle);
    newDiv.appendChild(bookAuthor);
    newDiv.appendChild(bookPages);
    newDiv.appendChild(addP);
    addP.appendChild(readStatusLabel);
    addP.appendChild(readStatus);
    newDiv.appendChild(removeBtn);
    newDiv.appendChild(readBtn);
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

// Grab data from modal form
function grabFormData(event) {
    let newBook = new Book(title.value, author.value, pages.value, status);

    // ///////////////////////////////////////////////////
    // Clicking the read input on the form isnt currently adding 'checked' attribute to html input tag
    // ///////////////////////////////////////////////////
    // Does it need a different id to when it's displayed on the cards despite being the same?
    //////////////////////////////////////////////////////
    
    let readCheck = document.getElementById('read-check');

    readCheck.addEventListener('click', function () {
        readCheck.checked = true;

        if (this.checked) {
            console.log("Checkbox is checked..");
        } else {
            console.log("Checkbox is not checked..");
        }
    });

    
    if (readCheck.checked) {
        console.log('checked');
        status = newBook.read();
    }
    else {
        console.log('not checked');
        status = newBook.unread();
    }

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