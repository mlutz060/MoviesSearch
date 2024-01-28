


<template>
  <div id="app">
    <SearchMovies />
  </div>
</template>

<script>
import SearchMovies from '@/components/SearchMovies.vue';

export default {
  name: 'App',
  components: {
    SearchMovies,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #2c3e50;
  height: 100%;
  width: 100vw;
  margin: 0;
  padding: 0;  

}
</style>

