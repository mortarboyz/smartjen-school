<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div
      class="
        d-flex
        justify-content-between
        flex-wrap flex-md-nowrap
        align-items-center
        pt-3
        pb-2
        mb-3
        border-bottom
      "
    >
      <h1 class="h2">Users</h1>
      <div class="btn-toolbar">
        <button
          type="button"
          style="margin-right: 10px"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#inviteModal"
        >
          Invite
        </button>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addModal"
        >
          Add
        </button>
      </div>
    </div>

    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="teacher-tab"
          data-bs-toggle="tab"
          data-bs-target="#teacher"
          type="button"
          role="tab"
          aria-controls="teacher"
          aria-selected="true"
        >
          Teacher
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="student-tab"
          data-bs-toggle="tab"
          data-bs-target="#student"
          type="button"
          role="tab"
          aria-controls="student"
          aria-selected="false"
        >
          Student
        </button>
      </li>
    </ul>
    <div class="tab-content" id="teacher-content">
      <div
        class="tab-pane fade show active"
        id="teacher"
        role="tabpanel"
        aria-labelledby="teacher-tab"
      >
        <div class="table-responsive">
          <Table
            :tableName="'teacher-table'"
            :headers="headers.teacher"
            :items="items.teacher"
          />
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="student"
        role="tabpanel"
        aria-labelledby="student-tab"
      >
        <div class="table-responsive">
          <Table
            :tableName="'student-table'"
            :headers="headers.student"
            :items="items.student"
          />
        </div>
      </div>
    </div>
  </main>

  <div
    class="modal fade"
    id="inviteModal"
    tabindex="-1"
    aria-labelledby="inviteModalLabel"
    aria-hidden="true"
  >
    <InviteModal />
  </div>

  <div
    class="modal fade"
    id="addModal"
    tabindex="-1"
    aria-labelledby="addModalLabel"
    aria-hidden="true"
  >
    <InviteModal />
  </div>
</template>

<script>
import Table from "../components/Table.vue";
import InviteModal from "../components/InviteModal.vue";
export default {
  components: {
    Table,
    InviteModal,
  },
  setup() {
    let headers = {
      teacher: [
        {
          text: "Username",
          value: "username",
        },
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Actions",
          value: "action",
        },
      ],
      student: [
        {
          text: "Username",
          value: "username",
        },
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Actions",
          value: "action",
        },
      ],
    };

    let items = {
      teacher: [],
      student: [],
    };

    return {
      headers,
      items,
    };
  },
};
</script>

<style scoped>
</style>
