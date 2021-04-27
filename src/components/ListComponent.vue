<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!-- Display goes here -->
            <h1>Show User</h1>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>ID</th>
                                <th>Tel</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="username in Usernames" :key="username._id">
                                <td>{{ username.name }}</td>
                                <td>{{ username.id }}</td>
                                <td>{{ username.tel }}</td>
                                <td>
                                    <router-link :to="{name: 'edit', params: {id: username._id}}" class="btn btn-success">
                                        Edit
                                    </router-link>
                                    <button @click.prevent="deleteUsername(username._id)" class="btn btn-danger">
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
            Usernames: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/apiUser';
        axios.get(apiURL).then(res => {
            this.Usernames = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        deleteUsername(id) {
            let apiURL = `http://localhost:4000/apiUser/delete-username/${id}`;
            let indexOfArrayItem = this.Usernames.findIndex(i => i._id === id);
            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.Usernames.splice(indexOfArrayItem, 1)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>