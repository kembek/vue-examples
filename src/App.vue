<template>
  <div id="app">
    <nav>
      <router-link :to="'/'">Home</router-link> |
      <router-link to="/template">Template</router-link> |
      <router-link to="/componentFuture">Component future</router-link> |
      <router-link to="/styles">Styles</router-link> |
      <router-link to="/conditional">Conditional</router-link>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}

%text-center {
  text-align: center;
}

$headDeep: 6;

@while $headDeep > 3 {
  h#{$headDeep} {
    @extend %text-center;
  }
  $headDeep: $headDeep - 1;
}

@for $i from 1 through 3 {
  h#{$i} {
    @extend %text-center;
  }
}

nav {
  @extend %text-center;
}
</style>
