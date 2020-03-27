<template>
  <li>{{ todo.text }}</li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export interface Todo {
  id: number;
  text: string;
}

@Component
export default class TodoItem extends Vue {
  @Prop() todo!: Todo;
}
</script>
