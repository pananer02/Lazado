<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!-- Display goes here -->
            <h1>Show history</h1>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Gen</th>
                                <th>Baht</th>
                                <th>NameBuy</th>
                                <th>Address</th>
                                <th>Pay</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="history in historys" :key="history._id">
                                <td>{{ history.name }}</td>
                                <td>{{ history.gen }}</td>
                                <td>{{ history.baht }}</td>
                                <td>{{ history.nameBuy }}</td>
                                <td>{{ history.address }}</td>
                                <td>{{ history.pay}}</td>
                                <td>{{ history.Date}}</td>
                                <td>
                                    <button @click.prevent="deletehistory(history._id)" class="btn btn-danger">
                                        Delete
                                    </button>
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
            historys: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/apiHistory';
        axios.get(apiURL).then(res => {
            this.historys = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        deletehistory(id) {
            let apiURL = `http://localhost:4000/apiHistory/delete-history/${id}`;
            let indexOfArrayItem = this.historys.findIndex(i => i._id === id);
            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.historys.splice(indexOfArrayItem, 1)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>