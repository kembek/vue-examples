<template>
  <article>
    <h3>
      {{ post.title }} | Published: <span>{{ post.publishedAt | date }}</span>
    </h3>
    <div>
      <button @click="$emit('enlarge-text', 0.1, $event)">Enlarge text</button>
    </div>
    <p v-html="post.content"></p>
    <p v-if="post.comments"><strong>Comment:</strong> {{ post.comments }}</p>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    post: Object,
  },
  filters: {
    date(publishedAt: Date) {
      return `${publishedAt.getDate()}.${publishedAt.getMonth() + 1}.${publishedAt.getFullYear()}`;
    },
  },
});
</script>
