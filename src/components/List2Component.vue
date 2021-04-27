<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <!-- Display goes here -->
      <h1>สินค้าทั้งหมด</h1>
      <div class="row">
        <div class="col-sm-4" style="background-color:lavender;">
          <router-link to="/view2" class="nav-link pr-3">All Gen</router-link>
        </div>
        <div class="col-sm-4" style="background-color:lavenderblush;">
          <router-link to="/Cosone" class="nav-link pr-3">Cosone</router-link>
        </div>
        <div class="col-sm-4" style="background-color:lavender;">
          <router-link to="/Geele" class="nav-link pr-3">Geele</router-link>
        </div>
        <br /><br />
        <div class="col-md-12">
          <br /><br />
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th>Name</th>
                <th>Gen</th>
                <th>IMG</th>
                <th>Baht</th>
                <th>Status</th>
                <th>amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="skateboard in Skateboards" :key="skateboard._id">
                <td>{{ skateboard.name }}</td>
                <td>{{ skateboard.gen }}</td>
                <td><img :src="skateboard.img" width="100" /></td>
                <td>{{ skateboard.baht }}</td>
                <td>{{ skateboard.status }}</td>
                <td>{{ skateboard.amount }}</td>
                <td>
                  <router-link
                    :to="{ name: 'buy', params: { id: skateboard._id } }"
                    class="btn btn-success"
                  >
                    Buy
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Skateboards: [],
    };
  },
  created() {
    let token = localStorage.getItem("token");
    if (!token) {
      alert("โปรดทำการ Login");
      this.$router.push("/Login");
    }
    let apiURL = "http://localhost:4000/apiSB";
    axios
      .get(apiURL)
      .then((res) => {
        this.Skateboards = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {},
};
</script>
