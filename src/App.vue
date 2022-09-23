<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header1 from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header1></Header1>
  <main>
    <RouterView />
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped></style>
