<template>
  <div>
    <section>
      <h2>Computed value</h2>
      <input type="text" v-model="fullName" />
      <p>Username: {{ fullName }}</p>
    </section>
    <hr />
    <section>
      <h2>Watcher value</h2>
      <p>Ask a yes/no question: <input type="text" v-model="question" /></p>
      <p>{{ answer }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import capitalize from 'lodash/capitalize';
import debounce from 'lodash/debounce';
import { AxiosResponse } from 'axios';
import { Cancelable } from 'lodash';

@Component
export default class ComponentFuture extends Vue {
  firstName = 'Luke';

  lastName = 'Skywalker';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newName: string) {
    const [firstName, lastName] = newName.split(/\W+/gi);

    this.firstName = firstName.trim();
    this.lastName = lastName.trim();
  }

  question = '';

  answer = 'I cannot give you an answer until you ask a question!';

  debouncedGetAnswer!: (() => void) & Cancelable;

  created() {
    this.debouncedGetAnswer = debounce(this.getAnswer, 500);
  }

  @Watch('question')
  onQuestion() {
    this.answer = 'Waiting for you to stop typing...';
    this.debouncedGetAnswer();
  }

  getAnswer() {
    if (!this.question.includes('?')) {
      this.answer = 'Question usually contain a question mark. ;-)';
      return;
    }

    this.answer = 'Thinking...';
    this.$http
      .get('https://yesno.wtf/api')
      .then((response: AxiosResponse) => {
        this.answer = capitalize(response.data.answer);
      })
      .catch((error) => {
        this.answer = `Error! Could not reach the API. ${error}`;
      });
  }
}
</script>
