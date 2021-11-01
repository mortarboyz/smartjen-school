<template>
  <table :id="tableName" class="table table-striped table-sm">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col" v-for="header of headers" :key="header.text">
          {{ header.text }}
        </th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) of items" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td v-for="header of headers" :key="header.value">
          {{ item[header.value] }}
        </td>
        <td>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-three-dots-vertical"></i>
            </button>
            <ul class="dropdown-menu">
              <li>
                <button
                  class="dropdown-item"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                >
                  Edit
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div
    class="modal fade"
    id="editModal"
    tabindex="-1"
    aria-labelledby="editModalLabel"
    aria-hidden="true"
  >
    <AddModal />
  </div>
  <div
    class="modal fade"
    id="deleteModal"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
  >
    <DeleteModal />
  </div>
</template>

<style>
.dataTables_filter,
.dataTables_paginate {
  float: right;
}
</style>

<script>
import AddModal from "../components/AddModal.vue";
import DeleteModal from "../components/DeleteModal.vue";
export default {
  props: ["tableName", "headers", "items"],
  components: {
    AddModal,
    DeleteModal,
  },
  mounted() {
    $(`#${this.$props["tableName"]}`).dataTable();
  },
};
</script>
