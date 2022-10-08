import axios, { Axios } from "axios";

export default class BookService {
  url = "http://localhost:8080/books/";
  url1 = "http://localhost:8000/api/addLogicTestToEscaperoom/";

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

  id1 = 1;
  idlist = [1,3,4];
  getAttach(id1, idlist) {
    return axios.get(this.url1 + id1 + "/" + idlist);
  }
}
