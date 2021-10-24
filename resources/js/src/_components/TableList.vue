<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :items-per-page="10"
    class="elevation-1"
  >
  </v-data-table>
</template>
<script>
export default {
  props: ["headers", "data"],
};
</script>
