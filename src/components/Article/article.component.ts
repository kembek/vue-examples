import { Vue, Component, Prop } from 'vue-property-decorator';
import { IArticle } from '@/models/article.interface';

@Component
export default class Article extends Vue {
  @Prop() private article!: IArticle;

  @Prop() private company!: string;
}
