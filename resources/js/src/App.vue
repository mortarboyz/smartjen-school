<template>
  <!-- App.vue -->
  <v-app>
    <router-view></router-view>
    <v-btn @click="increase">
        TEST BUTTON
    </v-btn>
  </v-app>
</template>

<script>
export default {
    methods: {
        increase() {
            this.$store.commit('increment');
            console.log(this.$store.state.count);
        }
    }
}
</script>
