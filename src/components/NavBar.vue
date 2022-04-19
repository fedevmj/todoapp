<template>
<!-- 상단메뉴 -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
      <router-link class="nav-link" :to="{name: 'todos'}">Todos</router-link>
      <router-link class="nav-link" :to="{name: 'about'}">About</router-link>
      <router-link class="nav-link" :to="{name:'profile'}">Profile</router-link>      
    </div>
  </nav>

</template>

<script>

    export default {

    }
</script>

<style>

</style>