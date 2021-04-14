<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Content goes here -->
            <h1>Create Student</h1>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="username.name" required> 
                </div>
                <div class="form-group">
                    <label for="ID">ID</label>
                    <input type="text" class="form-control" v-model="username.id" required> 
                </div>
                <div class="form-group">
                     <label for="Tel">Tel</label>
                    <input type="number" class="form-control" v-model="username.tel" required> 
                </div>

                <div class="form-group">
                    <button class="btn btn-success btn-block">Create</button>
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
            username: {
                name: '',
                id: '',
                tel: ''
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:4000/api/create-username';
            axios.post(apiURL, this.username).then(() => {
                this.$router.push('/view');
                this.username = {
                    name: '',
                    id: '',
                    tel: ''
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>