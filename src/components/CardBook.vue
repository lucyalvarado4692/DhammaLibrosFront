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
    <a href="">
      <button class="absolute p-1 w-full flex justify-end" type="button">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6684/6684701.png"
          alt="information"
          class="w-7 h-auto items-center p-0"
        />
      </button>
    </a>
    <a href="">
      <img class="m-4 h-80 w-48" :src="img" alt="" />
    </a>
  </div>
  <div class="d-flex flex-column justify-content-end p-3">
    <div>
      <a href="#">
        <h2 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-black">
          {{ book.title }}
        </h2>
      </a>
      <p class="mb-1 text-black-700 dark:text-black-400">
        {{ author }}
      </p>
      <p class="mb-1 text-black-700 dark:text-black-400">
        {{ price }}<i class="fas fa-euro-sign"></i>
      </p>
    </div>
  </div>
</template>
<style></style>
