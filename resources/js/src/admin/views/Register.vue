<template>
  <div style="height: 100vh" class="d-flex align-items-center">
    <div class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal text-center">
        Register Admin Dashboard
      </h1>
      <Form @submit="submit" :validation-schema="registerSchema">
        <Field name="Email" type="email" v-slot="{ field, meta, errorMessage }">
          <div class="input-group has-validation">
            <input
              v-bind="field"
              class="form-control"
              :class="{
                'is-invalid': !meta.valid && meta.touched,
                'is-valid': meta.valid && meta.touched,
              }"
              placeholder="Email Address"
            />
            <div v-if="errorMessage" class="invalid-feedback">
              {{ errorMessage }}
            </div>
          </div>
        </Field>

        <!-- <div class="input-group has-validation">
          <Field
            name="email"
            type="email"
            placeholder="Email"
            class="form-control"
            :class="{'is-invalid': isFieldValid(field)}"
            required
          />
          <ErrorMessage name="email" as="div" class="invalid-feedback" v-slot="{ message }">
            {{ message }}
          </ErrorMessage>
        </div> -->

        <!-- <Field
          name="password"
          type="password"
          placeholder="Password"
          class="form-control"
        />
        <ErrorMessage
          name="password"
          component="div"
          class="invalid-feedback"
        />

        <Field
          name="schoolName"
          type="text"
          placeholder="School Name"
          class="form-control"
        />
        <ErrorMessage
          name="schoolName"
          component="div"
          class="invalid-feedback"
        /> -->

        <div class="d-flex justify-content-between">
          <button class="btn btn-success">Register</button>
          <router-link to="/login"
            ><button class="btn btn-secondary">Login</button></router-link
          >
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  setup() {
    const registerSchema = yup.object({
      Email: yup.string().required().email(),
    });

    const isFieldValid = (field) => {
      console.log(field);
    };

    return {
      registerSchema,
      isFieldValid,
    };
  },
  computed: {},
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    submit() {
      window.alert("Form submitted!");
    },
  },
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 350px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-signin input[type="text"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
