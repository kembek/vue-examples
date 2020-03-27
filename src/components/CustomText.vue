<template>
  <div class="yellow">
    <h2>Text</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, laboriosam excepturi. Eius
      cumque omnis praesentium tempore quasi sit dolor, neque similique, accusamus accusantium ullam
      quos porro repellat est, qui aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Voluptates temporibus vel maxime sint praesentium labore asperiores, quo velit cumque
      pariatur ad explicabo est, nisi corporis ex illo maiores optio earum!
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CustomText extends Vue {}
</script>

<style lang="scss">
.yellow {
  color: yellow;
}
</style>
