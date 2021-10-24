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
    </v-toolbar>
    <v-tabs v-model="tab" grow>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <TableList :headers="this.data.teacher.headers" :data="this.data.teacher.data" />
        </v-tab-item>
        <v-tab-item>
          <TableList :headers="this.data.student.headers" :data="this.data.student.data" />
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>
<script>
import TableList from "../../_components/TableList.vue";
import AddDialog from "./_components/AddDialog.vue";
export default {
  data() {
    return {
      tab: null,
      items: ["Teacher", "Student"],
      dialog: false,
      data: {
        teacher: {
          headers: [
            { text: "Username", value: "username" },
            { text: "Email", value: "email" },
          ],
          data: [
            {
              username: "Test",
              email: "email@example.com",
            },
          ],
        },
        student: {
          headers: [
            { text: "Username", value: "username" },
            { text: "Email", value: "email" },
          ],
          data: [
            {
              username: "Test",
              email: "email@example.com",
            },
          ],
        },
      },
    };
  },
  components: {
    TableList,
    AddDialog,
  },
  methods: {
    inc() {
      console.log(this.$store.state.count);
    },
  },
  computed: {
    getCount() {
      return this.$store.state.count;
    },
  },
};
</script>
