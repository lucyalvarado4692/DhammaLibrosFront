<script>
import BookService from "../service/BookService";
export default {
  name: "CardBook",
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    book: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  bookService: null,
  created() {
    this.bookService = new BookService();
  },
  methods: {
    destroy() {
      this.bookService.destroy(this.book.id).then((data) => {
        if (data.status === 200) {
          return "/";
        }
      });
    },
  },
};
</script>
<template>
  <div class="relative">
    <!-- <a href="">
      <button class="absolute p-1 w-full flex justify-end" type="button">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6684/6684701.png"
          alt="information"
          class="w-7 h-auto items-center p-0"
        />
      </button>
    </a> -->
    <a href="">
      <img class="rounded-t-lg p-0" :src="img" alt="" />
    </a>
  </div>
  <div class="d-flex flex-column justify-content-end p-3">
    <div>
      <a href="#">
        <h2 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-black">
          {{ id }}-{{ title }}
        </h2>
      </a>
      <p class="mb-1 text-black-700 dark:text-black-400">
        {{ author }}
      </p>
      <p class="mb-1 text-black-700 dark:text-black-400">
        {{ price }}<i class="fas fa-euro-sign"></i>
      </p>
    </div>

    <div class="d-flex">
      <a
        href=""
        class="me-auto items-center py-2 px-3 ml-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-red-800"
      >
        Añadir al carrito
      </a>
      <a href="">
      </a>
      <form @submit.prevent="destroy">
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
    </div>
  </div>
</template>
<style></style>
