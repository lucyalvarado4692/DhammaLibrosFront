<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: { Header, Footer }
  /* mounted() {
    fetch("http://localhost:8080/books")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, */
};
</script>

<template>
  <Header></Header>
  <main>
    <RouterView></RouterView>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped></style>
