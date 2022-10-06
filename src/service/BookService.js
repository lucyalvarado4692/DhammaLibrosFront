import axios, { Axios } from "axios";

export default class BookService {
  url = "http://localhost:8080/books/";

  getAll() {
    return axios.get(this.url);
  }
  save(book) {
    return axios.post(this.url, book);
  }
  destroy(id) {
    return axios.delete(this.url + id);
  }
  update(book, id) {
    return axios.put(this.url + id, book);
  }
  show(id) {
    return axios.get(this.url + id);
  }
}
