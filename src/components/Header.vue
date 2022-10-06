<script>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div>
    <nav
      class="bg-orange-500 border-orange-500 px-2 sm:px-4 py-2.5 dark:bg-orange-500"
    >
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <a href="#" class="flex items-center">
          <img
            src="./img/libro.png"
            class="mr-3 h-6 sm:h-9"
            alt="Medicina Holistica"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap text-white"
            >Dhamma Libros</span
          >
        </a>
        <div>
          <p class="text-white font-mono">
            Tu librería especializada en Medicina Natural
          </p>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:text-gray-400 dark:hover:bg-orange-600 dark:focus:ring-orange-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="flex flex-col p-4 mt-4 bg-orange-100 rounded-lg border border-orange-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-orange-400 md:dark:bg-orange-500 dark:border-orange-500"
          >
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-white bg-orange-700 rounded md:bg-transparent md:text-orange-900 md:p-0 dark:text-white"
                aria-current="page"
              >
                <RouterLink to="/">Home</RouterLink></a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-white rounded hover:bg-orange-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-orange-700 dark:hover:text-white md:dark:hover:bg-transparent"
                ><RouterLink to="/shoppingcart">Shopping Cart</RouterLink></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped></style>
