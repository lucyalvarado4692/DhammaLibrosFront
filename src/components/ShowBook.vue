<script>
export default {
  name: "CardBook",
  props: ["bookShow"],
  mounted() {
    if (this.bookShow != "") {
      this.book.id = this.bookShow.id;
      this.book.title = this.bookShow.title;
      this.book.author = this.bookShow.author;
      this.book.description = this.bookShow.description;
      this.book.img = this.bookShow.img;
      this.book.year = this.bookShow.year;
      this.book.price = this.bookShow.price;
    }
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
      <img class="rounded-t-lg p-0" alt="" />
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
