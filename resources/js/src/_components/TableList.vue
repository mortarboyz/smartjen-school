<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :items-per-page="10"
    class="elevation-1"
  >
    <template v-slot:item.actions="{ item }">
      <v-btn small class="mr-2" @click="$emit('edit', item)"> Edit </v-btn>
      <v-btn small @click="$emit('delete', item)"> Delete </v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  props: ["headers", "data"],
};
</script>
