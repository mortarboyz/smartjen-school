<template>
  <!-- App.vue -->
  <v-app>
    <Header></Header>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "../_components/Header.vue";
import Footer from "../_components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
