<script>
import BookService from "../service/BookService";
import CardBook from "./CardBook.vue";
export default {
  name: "ListBook",
  data() {
    return {
      books: null,
      book: {
        id: null,
        title: null,
        author: null,
        description: null,
        img: null,
        year: null,
        price: null,
      },
    };
  },
  bookService: null,
  created() {
    this.bookService = new BookService();
  },
  mounted() {
    this.getAll();
  },
  components: { CardBook },
  methods: {
    getAll() {
      this.bookService.getAll().then((data) => {
        this.books = data.data;
      });
    },
    save() {
      this.bookService.save(this.book).then((data) => {
        if (data.status === 200) {
          (this.book = {
            title: null,
            author: null,
            description: null,
            img: null,
            year: null,
            price: null,
          }),
            this.getAll();
          return "/";
        }
      });
    },
    delete() {
      this.bookService.delete(this.book.id).then(data => {
        if (data.status === 200) {
          console.log("listo, eliminado")
          return "/";
        }
      })
    }
  },
};
</script>

<template>
  <main>
    <!-- Modal toggle -->
    <button
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
      data-modal-toggle="add-modal"
    >
      Añadir a Colección
    </button>

    <!-- Main modal -->
    <div
      id="add-modal"
      tabindex="-1"
      aria-hidden="true"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="add-modal"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="py-6 px-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Agregar libro
            </h3>
            <form @submit.prevent="save" class="space-y-6">
              <div>
                <label
                  for="title"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Titulo del libro</label
                >
                <input
                  type="text"
                  name="title"
                  id="title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  v-model="book.title"
                  required=""
                />
              </div>
              <div>
                <label
                  for="author"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Autor del libro</label
                >
                <input
                  type="text"
                  name="author"
                  id="author"
                  v-model="book.author"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div>
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >descripcion del libro</label
                >
                <input
                  type="textarea"
                  name="description"
                  id="description"
                  v-model="book.description"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div>
                <label
                  for="img"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Url imagen portada del libro</label
                >
                <input
                  type="text"
                  name="img"
                  id="img"
                  v-model="book.img"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div>
                <label
                  for="year"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Año de edición</label
                >
                <input
                  type="text"
                  name="year"
                  id="year"
                  v-model="book.year"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div>
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Precio</label
                >
                <input
                  type="text"
                  name="price"
                  id="price"
                  v-model="book.price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div class="p-6 text-center">
                <button
                  data-modal-toggle="add-modal"
                  type="submit"
                  class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Yes, I'm sure
                </button>
                <button
                  data-modal-toggle="add-modal"
                  type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <h1>This is an Listbook</h1>

    <div id="box" class="grid md:grid-cols-4 justify-items-center m-2">
      <div
        class="d-flex flex-column justify-content-between w-72 m-4 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 mb-4"
        v-for="(book, id) in books"
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
        <button
          type="submit"
          class="focus:outline-none bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-2 py-2 mr-1 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-red-900"
          @click="delete(book.id)"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            alt="delete event"
            class="w-5 h-auto p-0"
          />
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background-image: url("https://c8.alamy.com/compes/r6mhyf/la-medicina-alternativa-enfoque-holistico-hierbas-curativas-y-flores-sobre-fondo-amarillo-vista-superior-copia-plano-de-espacio-laical-banner-r6mhyf.jpg");
}
</style>
