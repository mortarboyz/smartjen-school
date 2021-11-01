<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>

        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="example"
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="********"
          />
        </div>

        <div class="mb-3">
          <label for="role" class="form-label">Role</label>
          <select class="form-select" aria-label="Select Role">
            <option selected>-select role-</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Cancel
        </button>
        <button type="button" class="btn btn-primary">Invite</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    setup() {

    },
}
</script>
