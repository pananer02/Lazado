<template>
  <div>
    <!-- Nave bar -->
    <nav
      class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <router-link to="/" class="navbar-brand float-left"
          >LAZADOE</router-link
        >
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link to="/history" class="nav-link pr-3"
              >History</router-link
            >
          </li>
          <li class="nav-item">
            <a href="" @click.prevent="Login()" class="nav-link pr-3">Login</a>
          </li>
          <li class="nav-item">
            <a href="" @click.prevent="Logout()" class="nav-link pr-3"
              >Logout</a
            >
          </li>
          <li class="nav-item">
            <router-link to="/Create" class="nav-link pr-3"
              >Register</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    Logout() {
      let token = localStorage.getItem("token");
      if (token) {
        if (window.confirm("ทำการ Logout หรือไม่?")) {
          localStorage.removeItem("token");
          this.login = false;
          alert("Logout เสร็จสิ้น");
          this.$router.push("/");
        }
      }else{
        alert("ท่านยังไม่ได้ Login");
      }
    },
    Login() {
      let token = localStorage.getItem("token");
      if (token) {
        //alert('don\'t have token')
        alert("ท่านได้ Login แล้ว");
      } else {
        this.$router.push("/login");
      }
    },
    created() {
      let token = localStorage.getItem("token");
      console.log(token);
    },
  },
};
</script>
