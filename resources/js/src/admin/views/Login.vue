<template>
  <v-container fluid class="fill-height">
    <v-row align="center">
      <v-card class="mx-auto" width="450">
        <v-card-title>Login Admin</v-card-title>
        <v-card-text>
          <form>
            <!-- email -->
            <v-text-field
              type="email"
              label="E-mail"
              required
            ></v-text-field>
            <!-- password -->
            <v-text-field
              type="password"
              label="Password"
              hint="At least 8 characters."
              required
            ></v-text-field>
            <!-- button and action -->
            <v-btn class="mr-4" color="success" @click="submit()">Login</v-btn>
            <v-btn>Register</v-btn>
          </form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  setup() {},
  //   data() {
  //     return {
  //       form: {
  //         email: null,
  //         password: null,
  //       },
  //     };
  //   },

  //   mixins: [validationMixin],

  //   validations: {
  //     email: { required, email },
  //     password: { required, minLength: minLength(8) },
  //   },

  //   computed: {
  //     emailErrors() {
  //       const errors = [];
  //       if (!this.$v.email.$dirty) return errors;
  //       !this.$v.email.email && errors.push("Must be valid e-mail.");
  //       !this.$v.email.required && errors.push("E-mail is required.");
  //       return errors;
  //     },
  //     passwordErrors() {
  //       const errors = [];
  //       if (!this.$v.password.$dirty) return errors;
  //       !this.$v.password.minLength &&
  //         errors.push("Password must be at most 8 characters long.");
  //       !this.$v.password.required && errors.push("Password is required.");
  //       return errors;
  //     },
  //   },

  //   methods: {
  //       submit() {
  //           window.alert('submit');
  //       }
  //   }
};
</script>
