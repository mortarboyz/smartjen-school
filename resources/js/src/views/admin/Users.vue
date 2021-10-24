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
        <AddDialog @closeDialog="dialog = false" />
      </v-dialog>
      <!-- Invite User Dialog -->
      <v-dialog max-width="500px">
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
      </v-dialog>
      <!-- Delete Dialog -->
      <v-dialog v-model="deleteDialog" max-width="500px">
        <DeleteDialog @OKPressed="deleteConfirm" @closePressed="closeDeleteDialog"/>
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
            :data="getTeacherFromStore" @delete="openDeleteDialog" @edit="openEditDialog()"
          />
        </v-tab-item>
        <v-tab-item>
          <TableList
            :headers="this.data.student.headers"
            :data="getStudentFromStore" @delete="openDeleteDialog" @edit="openEditDialog()"
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
      deleteDialog: false,
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
      openDeleteDialog() {
          this.deleteDialog = true;
      },
      deleteConfirm() {

      },
      closeDeleteDialog() {
          this.deleteDialog = false;
      },
      openEditDialog() {
          console.log('openedit')
      }
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
