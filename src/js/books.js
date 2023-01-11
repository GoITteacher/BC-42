import '../css/common.css';
import { BooksAPI } from './modules/booksAPI';

const booksAPI = new BooksAPI();

const refs = {
  createForm: document.querySelector('.js-create-form'),
  updateForm: document.querySelector('.js-update-form'),
  resetForm: document.querySelector('.js-reset-form'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  bookList: document.querySelector('.js-articl-list'),
  deleteForm: document.querySelector('.js-delete-form'),
};

// =====================================================

refs.resetForm.addEventListener('submit', onResetBook);
function onResetBook(e) {
  e.preventDefault();

  const data = new FormData(e.target);
  const book = {};

  for (let [key, value] of data.entries()) {
    key = key.replace('book', '').toLowerCase();
    book[key] = value;
  }

  booksAPI.resetBook(book).then(newBook => {
    const bookElem = refs.bookList.querySelector(`[data-id='${newBook.id}']`);
    bookElem.insertAdjacentHTML('afterend', bookTemplate(newBook));
    bookElem.remove();
  });
}
// =====================================================

refs.updateForm.addEventListener('submit', onResetBook);
function onResetBook(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const book = {};

  for (let [key, value] of data.entries()) {
    key = key.replace('book', '').toLowerCase();
    if (value.trim() !== '') book[key] = value;
  }

  booksAPI.updateBook(book).then(newBook => {
    const bookElem = refs.bookList.querySelector(`[data-id='${newBook.id}']`);
    bookElem.insertAdjacentHTML('afterend', bookTemplate(newBook));
    bookElem.remove();
    console.log(bookElem);
  });
}

// =====================================================

refs.deleteForm.addEventListener('submit', e => {
  e.preventDefault();

  const bookID = e.target.elements.bookId.value;

  booksAPI.deleteBook(bookID).then(() => {
    const bookElem = refs.bookList.querySelector(`[data-id='${bookID}']`);
    bookElem.remove();
  });
});

// =====================================================

refs.createForm.addEventListener('submit', onCreateBook);

function onCreateBook(e) {
  e.preventDefault();

  const data = new FormData(e.target);
  const book = {};

  for (let [key, value] of data.entries()) {
    key = key.replace('book', '').toLowerCase();
    book[key] = value;
  }

  booksAPI.createBookByAxios(book).then(response => {
    let { data: newBook } = response;
    const markup = bookTemplate(newBook);
    refs.bookList.insertAdjacentHTML('beforeend', markup);
  });
  e.target.reset();
}

// =====================================================
booksAPI.getBooks().then(books => {
  renderBooks(books);
});

const bookTemplate = ({ title, author, desc, id }) => {
  return `
  <li data-id="${id}" class="card articles">
  - ${title}<br>
  - ${author}<br>
  - ${desc}<br>
  </li>
  `;
};

function renderBooks(books) {
  const markup = books.map(bookTemplate).join('');
  refs.bookList.innerHTML = markup;
}
