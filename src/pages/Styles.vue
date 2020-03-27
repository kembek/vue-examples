<template>
  <div>
    <header>
      <h1>Component styles</h1>
    </header>
    <section>
      <h2>Class style</h2>
      <p class="red" :class="{ active: isActive, 'text-huge': isHuge }">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam neque quod,
        animi laudantium saepe commodi, ullam amet nihil fugiat harum? Recusandae eaque deserunt at
        dolorem rerum libero maiores dolor.
      </p>
      <hr />
      <p :class="textStyle">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptatem officia tempore
        unde magni earum aliquid. Odio saepe doloremque vitae voluptatem numquam dolor dolore
        libero, ullam necessitatibus reiciendis est distinctio!
      </p>
      <hr />
      <p :class="[textHuge, active]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptatem officia tempore
        unde magni earum aliquid. Odio saepe doloremque vitae voluptatem numquam dolor dolore
        libero, ullam necessitatibus reiciendis est distinctio!
      </p>
      <hr />
      <p :class="[{ textHuge: isHuge }, active]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptatem officia tempore
        unde magni earum aliquid. Odio saepe doloremque vitae voluptatem numquam dolor dolore
        libero, ullam necessitatibus reiciendis est distinctio!
      </p>
      <h2>Component</h2>
      <CustomText :class="{ red: isRed }" />
    </section>

    <section>
      <h2>Inline styles</h2>
      <p :style="{ color: activeColor, fontSize: `${fontSize}px` }">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reprehenderit inventore iure
        dicta incidunt officiis eveniet, dolores facilis nulla! Aperiam suscipit sapiente odit
        reiciendis neque architecto perferendis numquam et quos.
      </p>
      <hr />
      <p :style="textInlineStyle">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reprehenderit inventore iure
        dicta incidunt officiis eveniet, dolores facilis nulla! Aperiam suscipit sapiente odit
        reiciendis neque architecto perferendis numquam et quos.
      </p>
      <hr />
      <p :style="[textInlineStyle, otherInlineStyle]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reprehenderit inventore iure
        dicta incidunt officiis eveniet, dolores facilis nulla! Aperiam suscipit sapiente odit
        reiciendis neque architecto perferendis numquam et quos.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CustomText from '@/components/CustomText.vue';

@Component({
  components: {
    CustomText,
  },
})
export default class Styles extends Vue {
  isActive = true;

  isHuge = false;

  textStyle = {
    'text-huge': true,
  };

  textHuge = 'text-huge';

  active = 'active';

  isRed = true;

  fontSize = 18;

  activeColor = 'green';

  textInlineStyle = { color: 'green', fontSize: '20px' };

  otherInlineStyle = { backgroundColor: 'black', fontWidth: 'bolder', padding: '8px' };
}
</script>

<style lang="scss">
.red {
  background-color: red;
}

.active {
  padding: 15px;
  animation: blink 3s linear infinite;
  transition: all;
}

.text-huge {
  font-size: 2rem;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
