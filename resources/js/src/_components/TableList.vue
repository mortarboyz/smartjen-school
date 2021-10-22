<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="10"
    class="elevation-1"
  >
  </v-data-table>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        { text: "Username", value: "username" },
        { text: "Email", value: "email" },
      ],
      users: [
        {
          username: "Test",
          email: "email@example.com",
        },
      ],
    };
  },
};
</script>
