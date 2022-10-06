<script>
import BookService from "../service/BookService";
export default {
  name: "CardBook",
  props: {
    props: ["bookShow"],
  },
  data() {
    return {
      book: "",
    };
  },
  bookService: null,
  updated() {
    console.log("me ejecuta update");
      this.bookService = new BookService();
      this.id = this.bookShow.id;
      this.show(this.id);
  },
  methods: {
    show() {
      this.bookService.show(this.id).then((data) => {
        this.book = data.data;
        console.log(this.book);
        console.log("me coge el dato");
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
      <img class="rounded-t-lg p-0" :src="book.img" alt="" />
    </a>
  </div>
  <div class="d-flex flex-column justify-content-end p-3">
    <div>
      <a href="#">
        <h2 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-black">
          {{ book.id }}-{{ book.title }}
        </h2>
      </a>
      <p class="mb-1 text-black-700 dark:text-black-400">
        {{ book.author }}
      </p>
      <p class="mb-1 text-black-700 dark:text-black-400">
        {{ book.price }}<i class="fas fa-euro-sign"></i>
      </p>
    </div>
  </div>
</template>
<style></style>
