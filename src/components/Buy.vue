<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update goes here -->
            <h1>รายละเอียดสั่งชื้อ</h1>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="skateboard.name" required disabled>

                </div>
                <div class="form-group">
                    <label for="gen">gen</label>
                    <input type="text" class="form-control" v-model="skateboard.gen " required disabled>
                </div>
                <div class="form-group">
                    <label for="img">img</label>
                    <input type="text" class="form-control" v-model="skateboard.img"  required disabled>
                    <img :src="skateboard.img" width="500" />
                    
                </div>
                <div class="form-group">
                    <label for="baht">baht</label>
                    <input type="number" class="form-control" v-model="skateboard.baht" required disabled>
                </div>
                 <div class="form-group">
                    <label for="Status">Status</label>
                    <input type="text" class="form-control" v-model="skateboard.status" required disabled>
                </div>
                <div class="form-group">
                    <label for="Name">ชื่อ-นามสกุล</label>
                    <input type="text" class="form-control" v-model="history.nameBuy" required>
                </div>
                <div class="form-group">
                    <label for="Adrees">ที่อยู่</label><br>
                    <textarea name="message" rows="10" cols="70" v-model="history.address"></textarea>
                </div>
                <div class="form-group">
                    <label for="Pray">ชำระเงินทางใด</label><br>
                    <input type="radio" id="paypal" value="paypal" v-model="history.pay">
                    <label for="paypal"><img src='https://www.arcadier.com/learn/assets/uploads/payments/logo1511166968img.png' width="70"></label>
                    <br>
                    <input type="radio" id="visa" value="visa" v-model="history.pay">
                    <label for="visa"><img src='https://www.kasikornbank.com/SiteCollectionDocuments/personal/the-wisdom/articles/e-newsletter/issue/2020/issue47-nov/img/privileges-img-01.jpg' width=70></label>
                </div>
                <div class="form-group">
                    <div v-if="skateboard.status == 'Available'">
                         <button class="btn btn-primary btn-block">ชือสินค้า</button>
                    </div>
                    <div v-else>
                         <button class="btn btn-primary btn-block" disabled>สินค้าหมด</button>
                    </div>
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
            skateboard: {},
            history:{
                name: '',
                gen: '',
                baht:'',
                nameBuy:'',
                address:'',
                pay:'',
                Date:new Date()
            }
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
            this.history.name = this.skateboard.name;
            this.history.gen = this.skateboard.gen;
            this.skateboard.amount -= 1;
            if(this.skateboard.amount == 0){
                this.skateboard.status = "Unavailable";
            }else{
                this.skateboard.status = "Available";
            }
            this.history.baht = this.skateboard.baht;
            if (window.confirm("Do you really want to Buy?")) {
                let apiURL = 'http://localhost:4000/apiHistory/create-history';
                axios.post(apiURL, this.history).then(() => {
                this.history = {
                    name:'',
                    gen: '',
                    baht:'',
                    nameBuy:'',
                    address:'',
                    pay:'',
                    Date:'',
                }
            }).catch(error => {
                console.log(error)
            })
            apiURL = `http://localhost:4000/apiSB/update-skateboard/${this.$route.params.id}`;
            axios.put(apiURL, this.skateboard).then((res) => {
                console.log(res);
                alert("Thank you for Buy")
                this.$router.push('/');
            }).catch(error => {
                console.log(error)
            })

            }
            
        }
    }
}
</script>