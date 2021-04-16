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
                    <input type="text" class="form-control" v-model="skateboard.gen" required disabled>
                </div>
                <div class="form-group">
                    <label for="img">img</label>
                    <input type="text" class="form-control" v-model="skateboard.img" required disabled>
                    <img :src="skateboard.img" width="500" />
                    
                </div>
                <div class="form-group">
                    <label for="baht">baht</label>
                    <input type="number" class="form-control" v-model="skateboard.baht" required disabled>
                </div>
                 <div class="form-group">
                    <label for="amount">amount</label>
                    <input type="number" class="form-control" v-model="skateboard.amount" required disabled>
                </div>
                <div class="form-group">
                    <label for="Name">ชื่อ-นามสกุล</label>
                    <input type="text" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="Adrees">ที่อยู่</label><br>
                    <textarea name="message" rows="10" cols="70"></textarea>
                </div>
                <div class="form-group">
                    <label for="else">หมายเหตุ</label><br>
                    <textarea name="message" rows="5" cols="70"></textarea>
                </div>

                <div class="form-group">
                    <div v-if="skateboard.amount != 0">
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
            if (window.confirm("Do you really want to Buy?")) {
                if (window.confirm("Thank you for Buy")) {
                this.$router.push('/');
                }
                this.$router.push('/');
            }
            
        }
    }
}
</script>