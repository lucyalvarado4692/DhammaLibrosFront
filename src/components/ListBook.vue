<script>
import BookService from "../service/BookService";
import CardBook from "./CardBook.vue";
import SaveBook from "./SaveBook.vue";
import ShowBook from "./ShowBook.vue";
import AddBook from "./AddBook.vue";
export default {
  name: "ListBook",
  data() {
    return {
      books: null,
      book: "",
      bookSave: {
        id: null,
        title: null,
        author: null,
        description: null,
        img: null,
        year: null,
        price: null,
      },
      bookShow: "",
      bookIndex: 0,
    };
  },
  bookService: null,
  created() {
    this.bookService = new BookService();
  },
  mounted() {
    this.getAll();
  },
  components: { CardBook, SaveBook, ShowBook, AddBook },
  methods: {
    getAll() {
      this.bookService.getAll().then((data) => {
        this.books = data.data;
      });
    },
    bookInsert: function (book) {
      console.log(book);
      this.books.push(book);
    },
    bookEdit: function (book, index) {
      this.bookIndex = index;
      this.book = book;
      console.log("editar");
    },
    bookUpdate: function (book) {
      this.books[this.bookIndex].title = book.title;
      this.books[this.bookIndex].author = book.author;
      this.books[this.bookIndex].description = book.description;
      this.books[this.bookIndex].img = book.img;
      this.books[this.bookIndex].year = book.year;
      this.books[this.bookIndex].price = book.price;
    },
    destroy(book) {
      this.bookService.destroy(book.id).then((data) => {
        if (data.status === 200) {
          this.getAll();
          return "/";
        }
      });
    },
    edit(book) {
      this.bookSave.id = book.id;
      this.bookSave.title = book.title;
      this.bookSave.author = book.author;
      this.bookSave.description = book.description;
      this.bookSave.img = book.img;
      this.bookSave.year = book.year;
      this.bookSave.price = book.price;
      console.log(this.bookSave);
    },
    store() {
      this.bookService.update(this.bookSave, this.bookSave.id).then((data) => {
        if (data.status === 200) {
          console.log(this.bookSave);
          this.getAll();
          return "/";
        }
      });
    },
  },
};
</script>

<template>
  <AddBook @bookInsert="bookInsert" />
  --> -->
  <section class="m-6 grid justify-items-center text-2xl">
    <h1 class="font-serif text-xl font-bold m-6">COLECCIÓN DE LIBROS</h1>
  </section>
  <div class="flex item-center m-4 text-center">
    <button
      type="button"
      class="font-medium px-2 py-2 mr-1"
      @click="book = ''"
      data-modal-toggle="add-modal"
    >
      <img src="./img/agregar.png" alt="edit event" class="w-10 h-auto p-0" />
    </button>
    <p class="m-2 text-lg">Añadir a la Colección</p>
  </div>
  <div id="box" class="grid md:grid-cols-4 justify-items-center m-2">
    <div
      class="d-flex flex-column justify-content-between w-72 m-4 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 mb-4"
      v-for="(book, index) in books"
      :key="book.id"
    >
      <CardBook
        :id="book.id"
        :title="book.title"
        :author="book.author"
        :description="book.description"
        :img="book.img"
        :price="book.price"
        :year="book.year"
        :book="book"
      />
      <form @submit.prevent="edit(book)">
        <button
          type="submit"
          class="focus:outline-none bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2 mr-1 dark:bg-green-800 dark:hover:bg-blue-700 dark:focus:ring-green-800"
          data-bs-toggle="modal"
          :data-bs-target="'#exampleModal' + book.id"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3601/3601685.png"
            alt="edit event"
            class="w-5 h-auto p-0"
          />
        </button>
      </form>
      <form @submit.prevent="destroy(book)">
        <button
          type="submit"
          class="focus:outline-none bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-2 py-2 mr-1 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-red-900"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            alt="delete event"
            class="w-5 h-auto p-0"
          />
        </button>
      </form>
      -->
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary">Launch demo modal</button>
      <!-- Modal -->
      <div
        class="modal fade"
        :id="'exampleModal' + book.id"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                <h2 class="mb-4 text-xl font-medium text-gray-900">
                  Registrar productos
                </h2>
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form @submit.prevent="store" class="space-y-6">
              <div class="modal-body">
                <div class="py-6 px-6 lg:px-8">
                  <div>
                    <label
                      for="title"
                      class="block mb-2 text-sm font-medium text-gray-900"
                      >Titulo del libro</label
                    >
                    <input
                      type="text"
                      name="title"
                      id="title"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      v-model="bookSave.title"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="author"
                      class="block mb-2 text-sm font-medium text-gray-900"
                      >Autor del libro</label
                    >
                    <input
                      type="text"
                      name="author"
                      id="author"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      v-model="bookSave.author"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="description"
                      class="block mb-2 text-sm font-medium text-gray-900"
                      >descripcion del libro</label
                    >
                    <input
                      type="textarea"
                      name="description"
                      id="description"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      v-model="bookSave.description"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="img"
                      class="block mb-2 text-sm font-medium text-gray-900"
                      >Url imagen portada del libro</label
                    >
                    <input
                      type="text"
                      name="img"
                      id="img"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      v-model="bookSave.img"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="year"
                      class="block mb-2 text-sm font-medium text-gray-900"
                      >Año de edición</label
                    >
                    <input
                      type="text"
                      name="year"
                      id="year"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      v-model="bookSave.year"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="price"
                      class="block mb-2 text-sm font-medium text-gray-900"
                      >Precio</label
                    >
                    <input
                      type="text"
                      name="price"
                      id="price"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      v-model="bookSave.price"
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      -->
    </div>
  </div>
  <SaveBook
    :key="book"
    :bookUpdate="book"
    :bookEdit="book"
    @bookUpdate="bookUpdate"
  />
</template>

<style scoped>
main {
  background-image: url("https://c8.alamy.com/compes/r6mhyf/la-medicina-alternativa-enfoque-holistico-hierbas-curativas-y-flores-sobre-fondo-amarillo-vista-superior-copia-plano-de-espacio-laical-banner-r6mhyf.jpg");
}
</style>
