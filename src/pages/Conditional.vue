<template>
  <div>
    <header>
      <h1>Conditional</h1>
    </header>
    <section>
      <h2>If</h2>
      <p v-if="isShowText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam voluptatem sit voluptate
        deleniti modi vero vel facilis ipsa esse. Unde temporibus quos aut ad repellat aliquam error
        ex provident!
      </p>
    </section>
    <section>
      <h2>If-Else</h2>
      <p v-if="isShowText2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam voluptatem sit voluptate
        deleniti modi vero vel facilis ipsa esse. Unde temporibus quos aut ad repellat aliquam error
        ex provident!
      </p>
      <p v-else>LOl</p>
    </section>

    <section>
      <h2>If-Else-If</h2>
      <p v-if="isShowText2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam voluptatem sit voluptate
        deleniti modi vero vel facilis ipsa esse. Unde temporibus quos aut ad repellat aliquam error
        ex provident!
      </p>
      <p v-else-if="isShowText2 || isShowText">
        Cool things!
      </p>
      <p v-else>LOl</p>
    </section>

    <section>
      <h2>If with &lsaquo;template&rsaquo;</h2>

      <template v-if="isShowText">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem, ipsum dolor.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quo aliquam ratione aut
          nostrum tenetur facere et provident quia voluptatum pariatur ex eos modi. Voluptatem,
          adipisci iste? Ipsam, laboriosam corrupti?
        </p>
        <p>
          Labore soluta perspiciatis temporibus numquam in rem vel voluptate eum, magni dicta,
          dolor, sunt animi unde perferendis quaerat ipsa voluptas deserunt exercitationem et ad ut.
          Reprehenderit hic ab totam dicta!
        </p>
        <p>
          Iusto, blanditiis. A ab placeat incidunt veritatis, voluptate delectus eaque porro laborum
          et quae assumenda quo minima adipisci aperiam numquam accusamus voluptas sed repellendus
          at aut cupiditate nihil nulla veniam?
        </p>
      </template>
    </section>

    <section>
      <h2>
        V-if and key
      </h2>

      <h3>First</h3>
      <template v-if="loginType === 'username'">
        <label>Input username</label><input type="text" />
      </template>
      <template v-else> <label>Input email</label><input type="email" /> </template>
      <br />
      <button @click="toggleButton">Toggle</button>
      <hr />
      <h3>Second</h3>
      <template v-if="loginType === 'username'">
        <label>Input username</label><input type="text" key="username" />
      </template>
      <template v-else> <label>Input email</label><input type="email" key="email" /> </template>
      <br />
      <button @click="toggleButton">Toggle</button>
    </section>

    <section>
      <h2>v-show</h2>
      <p v-show="isShowText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veritatis quas exercitationem
        ducimus vitae dolorum consectetur numquam modi facilis? Natus recusandae praesentium
        molestias, perferendis molestiae culpa corrupti ab reiciendis. Eius.
      </p>
      <p v-show="!isShowText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veritatis quas exercitationem
        ducimus vitae dolorum consectetur numquam modi facilis? Natus recusandae praesentium
        molestias, perferendis molestiae culpa corrupti ab reiciendis. Eius.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Conditional extends Vue {
  isShowText = true;

  isShowText2 = false;

  loginType = 'username';

  toggleButton() {
    this.loginType = this.loginType === 'username' ? 'email' : 'username';
  }
}
</script>
