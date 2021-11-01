<template>
  <div>
    <Header />
    <div class="container-fluid">
      <div class="row">
        <Nav />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Nav from "../components/Nav";
export default {
  components: {
    Header,
    Nav,
  },
  setup() {},
};
</script>

<style scoped>
body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}
</style>
