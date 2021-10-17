<template>
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container fluid class="fill-height">
        <v-row align="center">
            <v-col>
                <IndexCard />
            </v-col>
        </v-row>
    </v-container>
  </v-main>
</template>

<script>
import IndexCard from "../_components/IndexCard.vue";
export default {
  components: {
    IndexCard,
  },
};
</script>
