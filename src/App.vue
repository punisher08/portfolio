<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Sidebar from './components/AppSidebar.vue'
// import Login from './components/LoginPage.vue'

export default {
  name: 'App',
  components: {
    // Sidebar,
    // Login
  },
  data() {
    return {
      isUserLogin : true,
    }
  }
}
</script>

<style>
</style>
