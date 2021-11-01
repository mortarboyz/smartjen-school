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
      student: [
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
          id: 63,
          username: "annette.abbott",
          email: "janessa.hand@bauch.org",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 96,
          username: "beer.arnold",
          email: "beer.karina@hotmail.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 15,
          username: "buford18",
          email: "jerdman@gmail.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 18,
          username: "cicero69",
          email: "kayli33@gmail.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 33,
          username: "coleman65",
          email: "stroman.zion@abshire.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 77,
          username: "crawford.cummerata",
          email: "cdenesik@yahoo.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 17,
          username: "edison.cremin",
          email: "morissette.lavina@hotmail.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 100,
          username: "edwin.herman",
          email: "jwyman@ritchie.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 83,
          username: "egreenholt",
          email: "natalie.pfeffer@crooks.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 4,
          username: "einar.kuhic",
          email: "dsimonis@gmail.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 71,
          username: "filiberto45",
          email: "roberto.dibbert@ohara.org",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 66,
          username: "gpowlowski",
          email: "roel.nienow@gmail.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 7,
          username: "graham.willow",
          email: "erempel@kassulke.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 24,
          username: "hbeahan",
          email: "watsica.nathanial@christiansen.info",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 93,
          username: "jacobs.conrad",
          email: "nkoelpin@anderson.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 79,
          username: "kaley.mccullough",
          email: "xnikolaus@cummerata.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 6,
          username: "kayleigh69",
          email: "sipes.jayne@koelpin.info",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 61,
          username: "kiarra.terry",
          email: "langosh.krystal@swaniawski.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 31,
          username: "kmcglynn",
          email: "pkulas@koss.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 99,
          username: "maymie60",
          email: "rschmitt@mckenzie.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 65,
          username: "mclaughlin.allison",
          email: "kay85@gmail.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 11,
          username: "mfahey",
          email: "sondricka@gmail.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 29,
          username: "nwilkinson",
          email: "serena64@hotmail.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 91,
          username: "oweber",
          email: "ernestine.wilderman@pacocha.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 64,
          username: "renner.helene",
          email: "rcruickshank@gmail.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 98,
          username: "richard15",
          email: "kamryn.cremin@hotmail.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 78,
          username: "rosa.renner",
          email: "nstoltenberg@yahoo.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 48,
          username: "runte.lavern",
          email: "mason.turcotte@klocko.biz",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 52,
          username: "shields.alexzander",
          email: "cklein@yahoo.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 1,
          username: "tillman.purdy",
          email: "francesca.schaden@rohan.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 87,
          username: "wyundt",
          email: "hessel.isaias@jaskolski.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
        {
          id: 59,
          username: "ywindler",
          email: "rosalind61@hotmail.com",
          roleId: 1,
          schoolId: 1,
          created_at: "2021-10-25T14:49:20.000000Z",
          updated_at: "2021-10-25T14:49:20.000000Z",
        },
      ],
      student: [
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
