<template>
  <table :id="tableName" class="table table-striped table-sm">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col" v-for="header of headers" :key="header.text">
          {{ header.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) of items" :key="item.id">
        <td>{{ index+1 }}</td>
        <td v-for="header of headers" :key="header.value">
          {{ item[header.value] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
.dataTables_filter,
.dataTables_paginate {
  float: right;
}
</style>

<script>
export default {
  props: ["tableName", "headers", "items"],
  mounted() {
    $(`#${this.$props["tableName"]}`).dataTable();
  },
};
</script>
