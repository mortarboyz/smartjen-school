<template>
  <v-container fluid class="fill-height">
    <v-row align="center">
      <v-card class="mx-auto" width="450">
        <v-card-title>Login Admin Dashboard</v-card-title>
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
              v-model="schoolId"
              :error-messages="schoolIdErrors"
              label="School ID"
              required
              @input="$v.schoolId.$touch()"
              @blur="$v.schoolId.$touch()"
            ></v-text-field>

            <v-btn
              class="mr-4"
              color="success"
              :disabled="submitBtn"
              @click="submit"
            >
              login
            </v-btn>
            <v-btn to="/admin/register"> register </v-btn>
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
import AuthService from "../services/AuthService";

export default {
  data: () => ({
    email: null,
    password: null,
    schoolId: null,
    submitBtn: false,
    snackbar: {
      state: {
        show: false,
        text: "",
        color: "",
      },
      text: {
        success: {
          text: "Login success.",
          color: "success",
        },
        failed: {
          text: "Login failed.",
          color: "red",
        },
      },
    },
  }),

  mixins: [validationMixin],

  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8) },
    schoolId: { required, minLength: minLength(10) },
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
    schoolIdErrors() {
      const errors = [];
      if (!this.$v.schoolId.$dirty) return errors;
      !this.$v.schoolId.minLength &&
        errors.push("School ID must be at most 10 characters long.");
      !this.$v.schoolId.required && errors.push("School ID is required.");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.submitBtn = true;
        AuthService.login({
          email: this.email,
          password: this.password,
          schoolId: this.schoolId,
        })
          .then((res) => {
            this.snackbar.state.show = true;
            this.snackbar.state.text = this.snackbar.text.success.text;
            this.snackbar.state.color = this.snackbar.text.success.color;
            this.email = null;
            this.password = null;
            this.schoolId = null;
            this.$store.commit('auth/login/success', res.data)
          })
          .catch(() => {
            this.snackbar.state.show = true;
            this.snackbar.state.text = this.snackbar.text.failed.text;
            this.snackbar.state.color = this.snackbar.text.failed.color;
            this.$store.commit('auth/login/failed')
          })
          .finally(() => {
            this.submitBtn = false;
          });
      }
    },
  },
};
</script>
