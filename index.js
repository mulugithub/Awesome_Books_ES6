import Books, { bookTitle, bookAuthor } from './modules/Books.js';
import myTime from './modules/renderDateTime.js';
import singlePageApp from './modules/singlePageApp.js';

// Add event listener to click or submit button
const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  const title = bookTitle.value.trim();
  const author = bookAuthor.value.trim();
  if (title && author) {
    Books.addBook(title, author);
  }
});

// Load books from local storage and render it on the page
Books.loadBooks().forEach((book) => {
  // Display book in list
  Books.renderBooks(book.id, book.title, book.author);
});

singlePageApp();

const date = myTime();
document.getElementById('date-time').innerHTML = `${date}`;