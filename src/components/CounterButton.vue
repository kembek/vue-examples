<template>
  <button @click="handleCountBtnClick">You clicked me {{ count }} times.</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'button-counter',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleCountBtnClick() {
      this.count += 1;
    },
  },
});
</script>
