<template>
  <div id="app">
    <form class="form">
      <div class="field">
        <label class="field__label" for="username">Username:</label
        ><input class="field__control" type="text" name="username" id="username" />
      </div>
      <div class="field">
        <label class="field__label" for="password">Password:</label
        ><input class="field__control" type="password" name="password" id="password" />
      </div>
      <button class="button">{{ 'Submit' | uppercase }}</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
  filters: {
    uppercase(text: string) {
      console.log(this);
      return text.toUpperCase();
    },
  },
})
export default class App extends Vue {
  private beforeCreate() {
    console.log('before create', this);
  }

  private created() {
    console.log('created', this);
  }

  private beforeMount() {
    console.log('beforeMount', this);
  }

  private mounted() {
    console.log('mounted', this);
  }

  private beforeUpdate() {
    console.log('beforeUpdate', this);
  }

  private updated() {
    console.log('updated', this);
  }

  private beforeDestroy() {
    console.log('beforeDestroy', this);
  }

  private destroyed() {
    console.log('destroyed', this);
  }
}
</script>

<style lang="scss">
@import 'styles/variables';

#app {
  margin-top: 5rem;
}

.form {
  padding: 10px 5px;
  // height: 600px;
  border: 1px solid $form-title;
}

.field {
  margin-bottom: $space_medium;
  &__label {
    display: inline-block;
    width: 250px;
    color: $control_text;
    // background-color: $primary;
    font-size: 2rem;
    padding: 5px;
  }

  &__control {
    color: $primary;
    font-size: 2rem;
  }
}
</style>
