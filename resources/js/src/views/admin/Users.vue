<template>
  <div>
    <v-toolbar flat>
      <v-spacer></v-spacer>
      <!-- Add User Dialog -->
      <v-dialog max-width="500px" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
            Add User
          </v-btn>
        </template>
        <AddDialog v-if="dialog" @closeDialog="dialog = false" />
      </v-dialog>
      <!-- Edit Dialog -->
      <v-dialog max-width="500px" v-model="dialogEdit">
        <AddDialog v-if="dialogEdit"
          @closeDialog="closeEditDialog"
          :editableItem="editData"
          :editableIndex="editId"
        />
      </v-dialog>
      <!-- Invite User Dialog -->
      <v-dialog max-width="500px" v-model="dialogInvite">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            class="mb-2 ml-2"
            v-bind="attrs"
            v-on="on"
          >
            Invite User
          </v-btn>
        </template>
        <AddDialog @closeDialog="dialogInvite = false" :invite="true" />
      </v-dialog>
      <!-- Delete Dialog -->
      <v-dialog v-model="deleteDialog.show" max-width="500px">
        <DeleteDialog
          @OKPressed="deleteConfirm"
          @closePressed="closeDeleteDialog"
        />
      </v-dialog>
    </v-toolbar>
    <v-tabs v-model="tab" grow>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <TableList
            :headers="this.data.teacher.headers"
            :data="getTeacherFromStore"
            @delete="openDeleteDialog"
            @edit="openEditDialog"
          />
        </v-tab-item>
        <v-tab-item>
          <TableList
            :headers="this.data.student.headers"
            :data="getStudentFromStore"
            @delete="openDeleteDialog"
          />
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>
<script>
import TableList from "../../_components/TableList.vue";
import AddDialog from "./_components/AddDialog.vue";
import DeleteDialog from "../../_components/DeleteDialog.vue";
export default {
  data() {
    return {
      tab: null,
      items: ["Teacher", "Student"],
      dialog: false,
      dialogInvite: false,
      deleteDialog: {
        selectedId: -1,
        show: false,
      },
      dialogEdit: false,
      editId: -1,
      editData: {},
      data: {
        teacher: {
          headers: [
            { text: "Username", value: "username" },
            { text: "Email", value: "email" },
            { text: "Actions", value: "actions", sortable: false },
          ],
        },
        student: {
          headers: [
            { text: "Username", value: "username" },
            { text: "Email", value: "email" },
            { text: "Actions", value: "actions", sortable: false },
          ],
        },
      },
    };
  },
  components: {
    TableList,
    AddDialog,
    DeleteDialog,
  },
  methods: {
    openDeleteDialog(item) {
      this.deleteDialog.show = true;
      this.deleteDialog.selectedId = item.id;
    },
    closeDeleteDialog() {
      this.deleteDialog.show = false;
      this.deleteDialog.selectedId = -1;
    },
    deleteConfirm() {
      this.deleteDialog.show = false;
      this.$store.dispatch("users/deleteUser", this.deleteDialog.selectedId);
    },
    openEditDialog(item) {
      this.editData = item;
      this.editId = item.id;
      this.dialogEdit = true;
    },
    closeEditDialog() {
      this.editData = {};
      this.editId = -1;
      this.dialogEdit = false;
    },
  },
  computed: {
    getTeacherFromStore() {
      return this.$store.getters["users/getTeacher"];
    },
    getStudentFromStore() {
      return this.$store.getters["users/getStudent"];
    },
  },
  mounted() {
    this.$store.dispatch("users/getTeacherData");
    this.$store.dispatch("users/getStudentData");
  },
};
</script>
