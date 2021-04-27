<template>
  <form @submit.prevent="handlesubmit">
    <h3>Login</h3>

    <div class="form-group">
      <label>Name</label>
      <input
        type="text"
        class="form-control"
        v-model="Usernames.name"
        placeholder="Name"
      />
    </div>
    <div class="form-group">
      <label>ID</label>
      <input
        type="password"
        class="form-control"
        v-model="Usernames.id"
        placeholder="ID"
      />
    </div>

    <button class="btn btn-success btn-block">Login</button>
  </form>
  <router-link to="/">Back</router-link>
</template>
<script>
import axios from "axios";

export default {
  name: "username",
  data() {
    return {
      Usernames: [],
    };
  },
  created() {
    let token = localStorage.getItem("token");
    if (token) {
      //alert('don\'t have token')
       alert("ท่านได้ Login แล้ว");
      this.$router.push("/");
    }
    let apiURL = "http://localhost:4000/apiUser";
    axios
      .get(apiURL)
      .then((res) => {
        this.Usernames = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    handlesubmit() {
      if (this.Usernames.name == "admin" && this.Usernames.id == "pananer02") {
        this.$router.push("admin");
      } else {
        let test = false;
        for (let i = 0; i < this.Usernames.length; i++) {
          if (
            this.Usernames.name == this.Usernames[i].name &&
            this.Usernames.id == this.Usernames[i].id
          ) {
            test = true;
          }
        }
        if (test) {
          localStorage.setItem("token", this.Usernames.name);
          location.reload();
          alert("ยินดีต้อนรับ " + this.Usernames.name + " เข้าสู่ระบบ");
          this.$router.push("/");
        } else {
          alert("Name หรือ ID ไม่ถูกต้อง");
          this.$router.push("/login");
        }
      }
    },
  },
};
</script>
