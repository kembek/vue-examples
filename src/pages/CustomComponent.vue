<template>
  <div>
    <header>
      <h1>Component</h1>
    </header>

    <section>
      <h2>custom component | button-counter</h2>

      <div>
        <button-counter></button-counter> |
        <button-counter />
      </div>
    </section>
    <hr />

    <section :style="postStyles">
      <h2>custom component with v-for | blog-post</h2>
      <blog-post
        v-for="post of posts"
        :key="post.id"
        :post="post"
        @enlarge-text="handleEnlargeText"
      />
    </section>
    <hr />

    <section>
      <h2>custom v-model</h2>
      <p>Search text: {{ searchText }}</p>
      <custom-input v-model="searchText" />
    </section>
    <hr />
    <section>
      <h2>Slot</h2>
      <alert-box>Something wrong</alert-box>
    </section>
    <section>
      <h2>Dynamic component</h2>

      <div>
        <div>
          <button @click="handleTabClick(tab)" v-for="tab of tabs" :key="tab">{{ tab }}</button>
        </div>
        <component :is="currentTab" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export interface Post {
  id: number;
  title: string;
  content: string;
  publishedAt: Date;
  comments?: string;
}

export interface PostStyles {
  fontSize: string;
}

export default Vue.extend({
  data() {
    const posts: Post[] = [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        content: `
          <p>Lorem ipsum dolor sit, <strong>amet consectetur</strong> adipisicing elit. Sapiente eveniet at architecto placeat ad   consequatur corporis deserunt <em>nihil officiis</em> sit laborum ullam ea iste, minima voluptatibus dolore minus maiores   vel!</p>
        `,
        publishedAt: new Date(2020, 2, 10),
        comments: 'Lorem ipsum dolor sit amet.',
      },
      {
        id: 2,
        title: 'Ex veniam placeat, dignissimos dolorem recusandae.',
        content: `
          <p>Lorem ipsum dolor sit, <strong>amet consectetur</strong> adipisicing elit. Sapiente eveniet at architecto placeat ad consequatur corporis deserunt <em>nihil officiis</em> sit laborum ullam ea iste, minima voluptatibus dolore minus maiores vel!</p>
        `,
        publishedAt: new Date(2020, 2, 8),
      },
      {
        id: 3,
        title: 'Voluptas veniam fugiat omnis.',
        content: `
          <p>Lorem ipsum dolor sit, <strong>amet consectetur</strong> adipisicing elit. Sapiente eveniet at architecto placeat ad consequatur corporis deserunt <em>nihil officiis</em> sit laborum ullam ea iste, minima voluptatibus dolore minus maiores vel!</p>
        `,
        publishedAt: new Date(2020, 2, 5),
      },
    ];
    const tabs: string[] = ['hello', 'world', 'vue'];

    return {
      posts,
      postFontSize: 16,
      searchText: '',
      tabs,
      currentTab: 'cus-hello',
    };
  },
  methods: {
    handleEnlargeText(value: string, event: Event) {
      this.postFontSize += Number(value);
      console.log('Event', event);
    },
    handleTabClick(tabName: string) {
      this.currentTab = `cus-${tabName}`;
    },
  },
  computed: {
    postStyles(): PostStyles {
      return {
        fontSize: `${this.postFontSize}px`,
      };
    },
  },
});
</script>
