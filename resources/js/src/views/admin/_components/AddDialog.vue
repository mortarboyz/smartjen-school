<template>
  <form>
    <v-card>
      <v-card-title class="text-h5 grey lighten-2"> Add User </v-card-title>

      <v-card-text>
        <v-text-field
          v-model="form.email"
          :error-messages="emailErrors"
          label="Email"
          required
          @input="$v.form.email.$touch()"
          @blur="$v.form.email.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="form.username"
          :error-messages="usernameErrors"
          label="Username"
          required
          @input="$v.form.username.$touch()"
          @blur="$v.form.username.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="form.password"
          :error-messages="passwordErrors"
          label="Password"
          type="password"
          required
          @input="$v.form.password.$touch()"
          @blur="$v.form.password.$touch()"
        ></v-text-field>
        <v-select
          v-model="form.role"
          :items="this.$store.getters['users/getRoles']"
          :error-messages="roleErrors"
          label="Role"
          required
          @change="$v.form.role.$touch()"
          @blur="$v.form.role.$touch()"
        ></v-select>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" class="mr-4" @click="submit"> submit </v-btn>
        <v-btn @click="$emit('closeDialog')"> cancel </v-btn>
      </v-card-actions>
    </v-card>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength, integer } from "vuelidate/lib/validators";

export default {
  props: {
    invite: Boolean,
  },
  data() {
    return {
      form: {
        email: null,
        username: null,
        password: null,
        role: null,
      },
    };
  },

  mixins: [validationMixin],

  validations: {
    form: {
      email: { required, email },
      username: { required, minLength: minLength(8) },
      password: { required, minLength: minLength(8) },
      role: { required, integer },
    },
  },

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.email && errors.push("Must be valid e-mail.");
      !this.$v.form.email.required && errors.push("E-mail is required.");
      return errors;
    },
    usernameErrors() {
      const errors = [];
      if (!this.$v.form.username.$dirty) return errors;
      !this.$v.form.username.minLength &&
        errors.push("Username must be at most 8 characters long.");
      !this.$v.form.username.required && errors.push("Username is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.form.password.$dirty) return errors;
      !this.$v.form.password.minLength &&
        errors.push("Password must be at most 8 characters long.");
      !this.$v.form.password.required && errors.push("Password is required.");
      return errors;
    },
    roleErrors() {
      const errors = [];
      if (!this.$v.form.role.$dirty) return errors;
      !this.$v.form.role.integer && errors.push("Must be a number.");
      !this.$v.form.role.required && errors.push("Role is required.");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        // Add API
        console.log(this.form);
        this.reset();
      }
    },

    reset() {
      this.$data.form.email = null;
      this.$data.form.username = null;
      this.$data.form.password = null;
      this.$data.form.role = null;
    },
  },
};
</script>
