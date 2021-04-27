<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!-- Display goes here -->
            <h1>Show skateboard</h1>
            <div class="row">
                <div class="col-md-12">
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
                                    <router-link :to="{name: 'edit2', params: {id: skateboard._id}}" class="btn btn-success">
                                        Edit
                                    </router-link>
                                    <button @click.prevent="deleteskateboard(skateboard._id)" class="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <router-link to="/admin">Back</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            Skateboards: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/apiSB';
        axios.get(apiURL).then(res => {
            this.Skateboards = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        deleteskateboard(id) {
            let apiURL = `http://localhost:4000/apiSB/delete-skateboard/${id}`;
            let indexOfArrayItem = this.Skateboards.findIndex(i => i._id === id);
            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.Skateboards.splice(indexOfArrayItem, 1)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>