<template>
  <navbarComp/>
  <router-view/>
</template>
<script>
import smoothScroller from "../public/smoothScroll.js";
import navbarComp from "./components/navbarComp.vue";
export default{
  components: {navbarComp},
  methods: {
    call(){
      smoothScroller();
    }
   
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital@0;1&family=Cormorant:ital,wght@1,300&display=swap');
#app,html {
  font-family: 'Archivo Narrow', sans-serif;
font-family: 'Cormorant', serif;
  color: #FFFF; 
  overflow-x: hidden;
  background: radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%); 
}
html::-webkit-scrollbar{
  display: none !important;
}

nav {
  padding: 30px;
  z-index: 999 !important;
  padding: 0 !important;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
