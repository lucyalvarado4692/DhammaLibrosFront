<script>
import BookService from "../service/BookService";
export default {
  name: "EditBook",
  emits: ["bookUpdate"],
  props: {
    id: {
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
        <form @submit="update" class="space-y-6">
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
                  v-model="book.title"
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
                  v-model="book.author"
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
                  v-model="book.description"
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
                  v-model="book.img"
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
                  v-model="book.year"
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
                  v-model="book.price"
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
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style></style>
