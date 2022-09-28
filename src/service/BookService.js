import axios, { Axios } from "axios";

export default class BookService {
  url = "http://localhost:8080/books";
  delete = "http://localhost:8080/books/";

  getAll() {
    return axios.get(this.url);
  }
  save(book) {
    return axios.post(this.url, book);
  }
  destroy(id) {
    return axios.delete(this.delete + id);
  }
}
