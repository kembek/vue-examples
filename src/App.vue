<template>
  <div>
    <nav class="center">
      <router-link :to="ROUTE.home">Home</router-link> |
      <router-link :to="ROUTE.posts">Posts</router-link> |
      <router-link :to="ROUTE.contact">Contact </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ROUTE from './router/paths';

export default Vue.extend({
  name: 'App',
  data: () => ({
    ROUTE,
  }),
});
</script>
