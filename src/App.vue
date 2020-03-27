<template>
  <div id="app">
    <nav>
      <router-link :to="'/'">Home</router-link> |
      <router-link to="/template">Template</router-link>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Basic from '@/pages/Basic.vue';

@Component({
  components: {
    Basic,
  },
})
export default class App extends Vue {}
</script>

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
