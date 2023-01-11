import axios from 'axios';

export class BooksAPI {
  #BASE_URL = 'http://localhost:3000/books';

  getBooks() {
    return fetch(this.#BASE_URL).then(res => res.json());
  }

  createBook(newBook) {
    return fetch(this.#BASE_URL, {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }).then(res => res.json());
  }

  createBookByAxios(newBook) {
    return axios.post(this.#BASE_URL, newBook).then(data => {
      console.log(data);
      return data;
    });
  }

  updateBook(book) {
    const id = book.id;
    return fetch(`${this.#BASE_URL}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }).then(res => res.json());
  }

  resetBook(book) {
    const id = book.id;
    return fetch(`${this.#BASE_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }).then(res => res.json());
  }

  deleteBook(id) {
    return fetch(`${this.#BASE_URL}/${id}`, {
      method: 'DELETE',
    });
  }
}
