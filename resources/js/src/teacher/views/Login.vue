<template>
  <div style="height: 100vh;" class="d-flex align-items-center">
    <div class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal text-center">
        Login Teacher Dashboard
      </h1>
      <input
        type="email"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      />
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        required
      />
      <input
        type="text"
        class="form-control"
        placeholder="School ID"
        required
      />
      <div class="d-flex justify-content-between">
          <router-link to="/users"><button class="btn btn-success">Login</button></router-link>
      </div>
    </div>
  </div>
</template>

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
