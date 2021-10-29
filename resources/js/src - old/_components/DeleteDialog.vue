<template>
  <v-card>
    <v-card-title class="text-h5"
      >Are you sure you want to delete this item?</v-card-title
    >
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="$emit('closePressed')">Cancel</v-btn>
      <v-btn color="blue darken-1" text @click="$emit('OKPressed')">OK</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>
