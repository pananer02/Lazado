<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Content goes here -->
            <h1>Create skateboard</h1>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="skateboard.name" required> 
                </div>
                <div class="form-group">
                    <label for="gen">gen</label>
                    <input type="text" class="form-control" v-model="skateboard.gen" required> 
                </div>
                <div class="form-group">
                    <label for="img">img</label>
                    <input type="text" class="form-control" v-model="skateboard.img" required> 
                </div>
                <div class="form-group">
                     <label for="baht">Baht</label>
                    <input type="number" class="form-control" v-model="skateboard.baht" required> 
                </div>
                <div class="form-group">
                     <label for="Status">Status</label>
                    <input type="text" class="form-control" v-model="skateboard.status" required> 
                </div>
                <div class="form-group">
                     <label for="amount">amount</label>
                    <input type="number" class="form-control" v-model="skateboard.amount" required> 
                </div>

                <div class="form-group">
                    <button class="btn btn-success btn-block">Create</button>
                </div>
            </form>
            <router-link to="/admin">Back</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            skateboard: {
                name: '',
                gen: '',
                img: '',
                baht: '',
                status:'',
                amount:'',
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:4000/apiSB/create-skateboard';
            axios.post(apiURL, this.skateboard).then(() => {
                this.$router.push('/view3');
                this.skateboard = {
                    name: '',
                    gen: '',
                    img: '',
                    baht: '',
                    status:'',
                    amount:''
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>