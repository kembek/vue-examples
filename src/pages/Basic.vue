<template>
  <div>
    <header>
      <h1>Basic</h1>
    </header>
    <hr />
    <section>
      <h2>Interpolation</h2>
      <p>Message: {{ message }}</p>
      <p :title="message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt assumenda eaque suscipit
        placeat, eius asperiores et, ducimus nulla autem delectus labore aperiam. Blanditiis quidem
        ipsam molestiae voluptates earum nesciunt facilis.
      </p>
    </section>
    <hr />
    <section>
      <h2>
        Conditional If |
        <button @click="toggleMessage">{{ isShowMessage ? 'Hide' : 'Show' }}</button>
      </h2>

      <p
        :style="{
          height: isShowMessage ? '' : '18px',
        }"
      >
        <span v-if="isShowMessage">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, assumenda.
        </span>
      </p>
    </section>
    <hr />

    <section>
      <h2>Loops</h2>

      <ul>
        <li v-for="(product, index) in products" :key="index">idx: {{ index }} - {{ product }}</li>
      </ul>
    </section>

    <section>
      <h2>V-model (two way binding)</h2>
      <div>
        <p>{{ inputMessage }}</p>
        <input type="text" v-model="inputMessage" />
      </div>
    </section>

    <section>
      <h2>Vue component</h2>
      <ol>
        <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"></todo-item>
      </ol>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import TodoItem, { Todo } from '@/components/TodoItem.vue';

@Component({
  components: {
    HelloWorld,
    'todo-item': TodoItem,
  },
})
export default class Basic extends Vue {
  message = 'Lorem ipsum dolor sit amet.';

  inputMessage = 'Hello Vue';

  isShowMessage = true;

  products: string[] = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];

  todos: Todo[] = [
    {
      id: 1,
      text: 'Lorem ipsum',
    },
    {
      id: 2,
      text: 'ipsum',
    },
    {
      id: 3,
      text: 'dolor',
    },
  ];

  toggleMessage() {
    this.isShowMessage = !this.isShowMessage;
  }

  beforeCreate() {
    console.log('beforeCreate', this);
  }

  created() {
    console.log('created', this);
  }

  beforeMount() {
    console.log('beforeMount', this);
  }

  mounted() {
    console.log('mounted', this);
  }

  beforeUpdate() {
    console.log('beforeUpdate', this);
  }

  updated() {
    console.log('updated', this);
  }

  beforeDestroy() {
    console.log('beforeDestroy', this);
  }

  destroyed() {
    console.log('destroyed', this);
  }
}
</script>
