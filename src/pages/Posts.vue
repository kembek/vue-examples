<template>
  <section>
    <h1>Posts</h1>
    <div>
      <button @click="toggleReadArticles($event)">
        {{ showIsRead ? 'Hide' : 'Show' }} read articles
      </button>
    </div>
    <Article
      v-for="article of visibleArticles"
      :key="article.id"
      :article="article"
      :company="companyName"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { IArticle } from '@/models/article.interface';
import Article from '@/components/Article/article.component.vue';
import { AxiosResponse } from 'axios';

@Component({
  components: {
    Article,
  },
})
export default class Posts extends Vue {
  articles: IArticle[] = [];

  get visibleArticles() {
    return this.articles.filter(
      (article) => article.isRead === undefined || article.isRead === this.showIsRead,
    );
  }

  companyName = 'Some';

  showIsRead = true;

  public toggleReadArticles(event: Event) {
    console.log(event);
    this.showIsRead = !this.showIsRead;
  }

  private created() {
    this.$http.get('http://localhost:3000/articles').then((response: AxiosResponse) => {
      this.articles = response.data;
    });
  }
}
</script>
