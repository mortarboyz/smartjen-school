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
      <h1 class="h2">Teacher List</h1>
    </div>

    <div class="table-responsive">
      <Table
        :tableName="'student-table'"
        :headers="headers.teacher"
        :items="items.teacher"
      />
    </div>
  </main>
</template>

<script>
import Table from "../components/Table.vue";
export default {
  components: {
    Table,
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
      ],
    };

    let items = {
      teacher: [
        {
          id: 45,
          username: "aleen.thompson",
          email: "ruth.lesch@larkin.com",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 43,
          username: "aliza.bashirian",
          email: "bert.crist@gmail.com",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 72,
          username: "boconnell",
          email: "fay.janis@yahoo.com",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 81,
          username: "carolyne.altenwerth",
          email: "emmanuelle.mcglynn@larson.com",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 8,
          username: "dale75",
          email: "kshlerin.matilde@hotmail.com",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 84,
          username: "daniella.bosco",
          email: "domenic.barrows@hotmail.com",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 34,
          username: "frederique18",
          email: "caitlyn.volkman@heller.info",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 30,
          username: "fsatterfield",
          email: "rodger.moen@cremin.info",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 60,
          username: "hamill.columbus",
          email: "wmorissette@yahoo.com",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 2,
          username: "juana.hermiston",
          email: "zemlak.mckenna@becker.com",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 57,
          username: "leila.zboncak",
          email: "lorena79@gmail.com",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 27,
          username: "margie.lang",
          email: "tiara56@will.com",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 26,
          username: "mdooley",
          email: "jazmin22@gmail.com",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 67,
          username: "nathaniel07",
          email: "annabell.mante@yahoo.com",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 73,
          username: "retta.lueilwitz",
          email: "delores.hudson@nikolaus.org",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 89,
          username: "sarah76",
          email: "dmante@mayert.biz",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 20,
          username: "stacy37",
          email: "harry.rempel@hotmail.com",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 40,
          username: "tondricka",
          email: "orville.abernathy@gmail.com",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 28,
          username: "wolf.giovanna",
          email: "harris.emma@gmail.com",
          roleId: 2,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
      ],
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
