<template>
  <v-card class="mx-auto" max-width="250">
    <v-card-text>
      <v-list dense>
        <v-subheader>Menu</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiAccount, mdiFlag, mdiLaptop } from '@mdi/js'
  export default {
    data: () => ({
      items: [
        { text: 'Admin', icon: mdiLaptop, link: '/admin' },
        { text: 'Teacher', icon: mdiAccount, link: '/teacher' },
        { text: 'Student', icon: mdiFlag, link: '/student' },
      ],
    }),
  }
</script>
