<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update goes here -->
            <h1>Edit Data</h1>
            <form @submit.prevent="handleUpdateForm">
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
                    <img :src="skateboard.img" width="100" />
                </div>
                <div class="form-group">
                    <label for="baht">baht</label>
                    <input type="number" class="form-control" v-model="skateboard.baht" required>
                </div>
                 <div class="form-group">
                    <label for="Status">Status</label>
                    <input type="text" class="form-control" v-model="skateboard.status" disabled>
                </div>
                <div class="form-group">
                     <label for="amount">amount</label>
                    <input type="number" class="form-control" v-model="skateboard.amount" required> 
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
            skateboard: {}
        }
    },
    created() {
        let apiURL = `http://localhost:4000/apiSB/edit-skateboard/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.skateboard = res.data
        })
    },
    methods: {
        handleUpdateForm() {
            if(this.skateboard.amount == 0){
                this.skateboard.status = "Unavailable";
            }else{
                this.skateboard.status = "Available";
            }
            let apiURL = `http://localhost:4000/apiSB/update-skateboard/${this.$route.params.id}`;
            axios.put(apiURL, this.skateboard).then((res) => {
                console.log(res);
                this.$router.push('/view3')
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>