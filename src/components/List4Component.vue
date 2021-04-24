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
                                <th>สินค้าที่ชื้อ</th>
                                <th>รุ่น</th>
                                <th>บาท</th>
                                <th>ชื่อคนที่สั่งชื้อ</th>
                                <th>ที่อยู่</th>
                                <th>ช่องทางชำระเงิน</th>
                                <th>วันที่สั่งชื้อ</th>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
                <router-link to="/">Back</router-link>
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