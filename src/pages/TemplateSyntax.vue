<template>
  <div>
    <header>
      <h1>Template syntax</h1>
    </header>
    <hr />
    <section>
      <h2>Interpolation</h2>
      <input type="text" v-model="message" />
      <p v-once>This is message never changing: {{ message }}</p>
      <p>This is message: {{ message }}</p>
    </section>
    <hr />
    <section>
      <h2>Raw HTML</h2>
      <p>Using mustaches: {{ rawHtml }}</p>
      <p>Using v-html directice: <span v-html="rawHtml"></span></p>
    </section>
    <hr />

    <section>
      <h2>Attributes</h2>
      <button :title="message" :disabled="btnDisabled">
        This is button disabled and with title
      </button>
    </section>
    <hr />
    <section>
      <h2>
        Directives
      </h2>
      <p>
        Conditional <strong>v-if</strong>: <em><span v-if="isShowMessage">You can see me</span></em>
      </p>
      <section>
        <h3>Arguments</h3>
        <div>
          <img src="../assets/logo.png" :alt="img.alt" :class="img.class" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eius.</p>
        </div>
        <hr />
        <h3>Dynamic arguments</h3>
        <div>
          <input :[type]="inputType" />
          <button @[eventName]="handleBtn">Click</button>
        </div>
      </section>
    </section>
    <hr />
    <section>
      <h2>Modifiers</h2>
      <form @submit.prevent="handleSubmit">
        <input type="text" name="username" />
        <br />
        <button>Send</button>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TemplateSyntax extends Vue {
  message = 'Hello world';

  rawHtml = '<span style="color: red">This should be red</span>';

  btnDisabled = true;

  isShowMessage = true;

  img = {
    alt: 'this is Vue framework logo',
    class: ['small'],
  };

  inputType = 'password';

  type = 'type';

  eventName = 'click';

  handleBtn() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
    this.eventName = this.eventName === 'click' ? 'mouseleave' : 'click';
  }

  handleSubmit(event: Event) {
    console.log('Event', event);
    console.log('This', this);
  }
}
</script>

<style lang="scss">
.small {
  height: 20px;
}
</style>
