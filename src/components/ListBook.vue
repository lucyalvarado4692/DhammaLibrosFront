<script>
import BookService from "../service/BookService";
import CardBook from "./CardBook.vue";
import AddBook from "./AddBook.vue";
import EditBook from "./EditBook.vue";
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
  components: { CardBook, AddBook, EditBook },
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
  },
};
</script>

<template>
  <AddBook @bookInsert="bookInsert" />
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
  <div id="box" class="grid md:grid-cols-4 justify-items-center mx-4">
    <div
      class="d-flex flex-column justify-content-between w-auto h-auto m-8 bg-white border border-gray-800 shadow-2xl rounded-sm"
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
      <div class="d-flex">
        <a
          href=""
          class="me-auto items-center py-2 px-3 ml-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-red-800"
        >
          Añadir al carrito
        </a>
        <form @submit.prevent="bookEdit(book, index)">
          <button
            type="submit"
            class="text-sm px-2 py-2 mr-1"
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
          <button type="submit" class="px-2 py-2 mr-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              alt="delete event"
              class="w-5 h-auto p-0"
            />
          </button>
        </form>
      </div>
      <EditBook :id="book.id" :book="book" @bookUpdate="bookUpdate" />
    </div>
  </div>
</template>

<style scoped>
main {
  background-image: url("https://c8.alamy.com/compes/r6mhyf/la-medicina-alternativa-enfoque-holistico-hierbas-curativas-y-flores-sobre-fondo-amarillo-vista-superior-copia-plano-de-espacio-laical-banner-r6mhyf.jpg");
}
</style>
