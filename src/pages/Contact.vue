<template>
  <section>
    <h2>Contacts</h2>
    <p>Our company: {{ companyName }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aspernatur omnis
      consectetur et laborum, beatae veritatis in quae. Deleniti facilis, nihil consectetur eos
      repellat dolorum maxime accusantium labore odit delectus.
    </p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Contact extends Vue {
  companyName = 'My cool company';
}
</script>
