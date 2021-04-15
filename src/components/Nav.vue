<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
     <div class="container"> 
      <router-link to="/home" class="navbar-brand float-left">Lazadoe</router-link>
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <router-link to="/Login" class="nav-link pr-3">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Create" class="nav-link pr-3">Sign up</router-link>
        </li>

      </ul>

     </div>
    </nav>
</template>

<script>
    export default{
        name:"Nav"
    }
</script>
