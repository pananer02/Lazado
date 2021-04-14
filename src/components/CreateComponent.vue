<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1> Create Student </h1>
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="user.name" required> 
                </div>
                <div class="form-group">
                    <label for="name">ID</label>
                    <input type="text" class="form-control" v-model="user.ID" required> 
                </div>
                <div class="form-group">
                    <label for="name">password</label>
                    <input type="password" class="form-control" v-model="user.password" required> 
                </div>

                <div class="form-group">
                    <button class="btn btn-success btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:{
                name:'',
                ID:'',
                password:''
            }
        }
    },
    methos:{
        handleSubmitForm(){

        }
    }

}
</script>