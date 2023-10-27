<template>
  <nav>
    <router-link to="/">主Home</router-link> |
    <router-link to="/about">主About</router-link> |
    <a href="#/bi/viewer">子应用viewer</a> |
    <a href="#/bi/about">子应用about（动态）</a> |
    <a href="#/bi/list">子应用list</a>
  </nav>
  <router-view />
  <div style="min-width: 400px; min-height: 400px" id="qiankunView"></div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
