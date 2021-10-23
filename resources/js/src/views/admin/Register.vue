<template>
  <v-container fluid class="fill-height">
    <v-row align="center">
      <v-card class="mx-auto" width="450">
        <v-card-title>Register Admin Account</v-card-title>
        <v-card-text>
          <form>
            <v-text-field
              v-model="email"
              type="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              :error-messages="passwordErrors"
              label="Password"
              hint="At least 8 characters"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="schoolName"
              :error-messages="schoolNameErrors"
              label="School Name"
              required
              @input="$v.schoolName.$touch()"
              @blur="$v.schoolName.$touch()"
            ></v-text-field>

            <v-btn class="mr-4" color="success" @click="submit">
              register
            </v-btn>
            <v-btn to="/admin/login"> login </v-btn>
          </form>
        </v-card-text>
      </v-card>
    </v-row>
    <v-snackbar
      v-model="snackbar.state.show"
      :color="snackbar.state.color"
      elevation="24"
    >
      {{ snackbar.state.text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.state.show"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data: () => ({
    email: null,
    password: null,
    schoolName: null,
    snackbar: {
      state: {
        show: false,
        text: "",
        color: "",
      },
      text: {
        success: {
          text: "Your account has been activated successfully. You can now login.",
          color: "success",
        },
        failed: {
          text: "Create account failed. Please try again.",
          color: "red",
        },
      },
    },
  }),

  mixins: [validationMixin],

  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8) },
    schoolName: { required, minLength: minLength(10) },
  },

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail.");
      !this.$v.email.required && errors.push("E-mail is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at most 8 characters long.");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    schoolNameErrors() {
      const errors = [];
      if (!this.$v.schoolName.$dirty) return errors;
      !this.$v.schoolName.minLength &&
        errors.push("School Name must be at most 10 characters long.");
      !this.$v.schoolName.required && errors.push("School Name is required.");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.login.dispatch('register', {
            email: this.email,
            password: this.password,
            schoolName: this.schoolName,
        });
        this.snackbar.state.text = this.snackbar.text.success.text;
        this.snackbar.state.color = this.snackbar.text.success.color;
        this.snackbar.state.show = true;
      }
    },
  },
};
</script>
