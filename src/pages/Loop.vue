<template>
  <div>
    <header>
      <h1>Loop</h1>
    </header>
    <section>
      <h2>v-for</h2>
      <ul>
        <li v-for="(num, idx) of numbers" :key="idx">
          Idx: <em>{{ idx }}</em> - value: {{ num }}
        </li>
      </ul>
    </section>
    <section>
      <h2>v-for for objects</h2>
      <ul>
        <li v-for="(value, key, idx) in user" :key="idx">
          Value: {{ value }} - Key: {{ key }} - Idx: {{ idx }}
        </li>
      </ul>
    </section>
    <section>
      <h2>v-for computed</h2>
      <ul>
        <li v-for="(num, idx) of evenNumbers" :key="idx">
          Idx: <em>{{ idx }}</em> - value: {{ num }}
        </li>
      </ul>
    </section>
    <section>
      <h2>v-for range</h2>
      <ul>
        <li v-for="(num, idx) of 10" :key="idx">
          Idx: <em>{{ idx }}</em> - value: {{ num }}
        </li>
      </ul>
    </section>
    <section>
      <h2>v-for range</h2>
      <ul>
        <template v-for="(num, idx) in evenNumbers">
          <li :key="idx">
            <strong><em>STRONG</em></strong> Idx: <em>{{ idx }}</em> - value: {{ num }}
          </li>
        </template>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Loop extends Vue {
  numbers = Array(10)
    .fill(null)
    .map((v, idx) => idx + 1);

  user = {
    name: 'Luke',
    age: 21,
    work: 'Developer',
  };

  get evenNumbers() {
    return this.numbers.filter((num) => !(num % 2));
  }
}
</script>
