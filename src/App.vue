<template>
  <nav>
    <router-link to="/">이부분은</router-link> |
    <router-link to="/about">App.vue에 있어용</router-link> |
    <router-link to="/work">Work</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 1rem;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
