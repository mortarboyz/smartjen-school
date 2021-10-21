<template>
  <v-tabs v-model="tab" align-with-title>
    <v-tab v-for="item in items" :key="item">
      {{ item }}
    </v-tab>
    <v-tabs-items v-model="tab">
      <v-tab-item>
          <TableList />
      </v-tab-item>
      <v-tab-item>
          <TableList />
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>
<script>
import TableList from '../../_components/TableList.vue';
export default {
  data() {
    return {
      tab: null,
      items: ["Teacher", "Student"],
    };
  },
  components: {
      TableList,
  }
};
</script>
