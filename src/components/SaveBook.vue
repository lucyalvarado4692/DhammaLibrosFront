<script>
import BookService from "../service/BookService";
export default {
  name: "ListBook",
  props: ["bookEdit"],
  emits: ["bookInsert", "bookUpdate"],
  data() {
    return {
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
    if (this.bookEdit != "") {
      this.book.id = this.bookEdit.id;
      this.book.title = this.bookEdit.title;
      this.book.author = this.bookEdit.author;
      this.book.description = this.bookEdit.description;
      this.book.img = this.bookEdit.img;
      this.book.year = this.bookEdit.year;
      this.book.price = this.bookEdit.price;
    }
  },
  methods: {
    sendForm() {
      if (this.bookEdit == "") {
        this.save();
      } else {
        this.update();
      }
    },
    save() {
      this.bookService.save(this.book).then((data) => {
        if (data.status === 200) {
          this.$emit("bookInsert", this.book),
            (this.book = {
              title: null,
              author: null,
              description: null,
              img: null,
              year: null,
              price: null,
            });
        }
      });
    },
    update() {
      this.bookService.update(this.book, this.book.id).then((data) => {
        if (data.status === 200) {
          this.$emit(
            "bookUpdate",
            this.book
          )(
            (this.book = {
              title: null,
              author: null,
              description: null,
              img: null,
              year: null,
              price: null,
            })
          );
        }
      });
    },
  },
};
</script>
<template>
  <div class="py-6 px-6 lg:px-8">
    <h2 class="mb-4 text-xl font-medium text-gray-900">Registrar productos</h2>
    <form @submit.prevent="sendForm" class="space-y-6">
      <div>
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900"
          >Titulo del libro</label
        >
        <input
          type="text"
          name="title"
          id="title"
          v-model="book.title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required=""
        />
      </div>
      <div>
        <label for="author" class="block mb-2 text-sm font-medium text-gray-900"
          >Autor del libro</label
        >
        <input
          type="text"
          name="author"
          id="author"
          v-model="book.author"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
          v-model="book.description"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required=""
        />
      </div>
      <div>
        <label for="img" class="block mb-2 text-sm font-medium text-gray-900"
          >Url imagen portada del libro</label
        >
        <input
          type="text"
          name="img"
          id="img"
          v-model="book.img"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required=""
        />
      </div>
      <div>
        <label for="year" class="block mb-2 text-sm font-medium text-gray-900"
          >Año de edición</label
        >
        <input
          type="text"
          name="year"
          id="year"
          v-model="book.year"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required=""
        />
      </div>
      <div>
        <label for="price" class="block mb-2 text-sm font-medium text-gray-900"
          >Precio</label
        >
        <input
          type="text"
          name="price"
          id="price"
          v-model="book.price"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required=""
        />
      </div>
      <div class="p-6 text-center">
        <button
          type="submit"
          class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
        >
          Yes, I'm sure
        </button>
        <button
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          No, cancel
        </button>
      </div>
    </form>
  </div>
  --->
  
</template>
<style></style>
