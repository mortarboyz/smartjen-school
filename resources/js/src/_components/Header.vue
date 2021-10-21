<template>
  <div>
    <v-navigation-drawer app>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="users">
            <v-list-item-icon>
              <v-icon>{{ icon.users }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Users</v-list-item-title>
          </v-list-item>

          <v-list-item @click="logout">
            <v-list-item-icon>
              <v-icon>{{ icon.logout }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import { mdiLogout, mdiAccountGroup } from "@mdi/js";
export default {
  data: () => ({
    drawer: false,
    group: null,
    icon: {
      users: mdiAccountGroup,
      logout: mdiLogout,
    },
  }),
  props: ["title"],
  methods: {
    logout() {
      this.$router.push('/login');
    },
  },
};
</script>
