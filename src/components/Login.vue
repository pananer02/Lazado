<template>
    <form @submit.prevent="handlesubmit">
        <h3>Login</h3>

        <div class="form-group">
           <label>Name</label>
            <input type="text" class="form-control" v-model="Usernames.name" placeholder="Name"/>
        </div>
        <div class="form-group">
            <label>ID</label>
             <input type="text" class="form-control" v-model="Usernames.id" placeholder="ID"/>
         </div>

        <button class="btn btn-success btn-block">Login</button>

    </form>
    <router-link to="/">Back</router-link>
</template>
<script>
   
import axios from 'axios'

export default {
    name: 'username',
    data() {
        return {
            Usernames: [],
            name:'',
            id:''
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
    methods:{
        handlesubmit(){
            if(this.Usernames.name == "admin" && this.Usernames.id == "pananer02"){
                this.$router.push('admin');
            }else{
            alert("ระบบยังไม่สามารถใช้งานได้...")
                this.$router.push('/');
            }
        }
    }
}
</script>
