<template>
  <div>
    <!-- Nave bar -->
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
     <div class="container"> 
      <router-link to="/home" class="navbar-brand float-left">Lazadoe</router-link>
      <ul class="nav navbar-nav flex-row float-right">
       <!-- 
         <li class="nav-item">
          <router-link to="/Create" class="nav-link pr-3">Create Username</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin" class="nav-link pr-3">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/view2" class="nav-link">Shop skateboard</router-link>
        </li>
        -->
        <li class="nav-item">
          <router-link to="/Login" class="nav-link pr-3">Login</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/Create" class="nav-link pr-3">Register</router-link>
        </li>

      </ul>

     </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>