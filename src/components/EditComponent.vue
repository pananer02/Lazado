<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update goes here -->
            <h1>Edit Data</h1>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="username.name" required>
                </div>
                <div class="form-group">
                    <label for="id">ID</label>
                    <input type="text" class="form-control" v-model="username.id" required>
                </div>
                <div class="form-group">
                    <label for="tel">Tel</label>
                    <input type="tel" class="form-control" v-model="username.tel" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            username: {}
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-username/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.username = res.data
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-username/${this.$route.params.id}`;
            axios.put(apiURL, this.username).then((res) => {
                console.log(res);
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>