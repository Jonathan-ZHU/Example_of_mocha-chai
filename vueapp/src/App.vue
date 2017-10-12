<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <hello-world/> -->
    <!-- <Test msg="hello"></Test> -->
    <Users></Users>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import Test from './components/Test'
import Users from './components/Users'

export default {
  name: 'app',
  components: {
    // HelloWorld
    Test,
    Users
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
