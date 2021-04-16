<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!-- Display goes here -->
            <h1>Show Skateboard</h1>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Gen</th>
                                <th>IMG</th>
                                <th>Baht</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="skateboard in Skateboards" :key="skateboard._id">
                                <td>{{ skateboard.name }}</td>
                                <td>{{ skateboard.gen }}</td>
                                <td><img :src="skateboard.img" width="100" /></td>
                                <td>{{ skateboard.baht }}</td>
                                <td>{{ skateboard.amount }}</td>
                                <td>
                                    <router-link :to="{name: '', params: {id: skateboard._id}}" class="btn btn-success">
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
       
    }
}
</script>