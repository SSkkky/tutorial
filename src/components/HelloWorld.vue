<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div v-html='htmlString'></div>
    <div class="color">클래스 1</div>
    <div v-bind:class="isActive ? 'color' : ''">클래스 2</div>
    <div v-bind:class="{ color: isActive }">클래스 3</div>
    <div v-bind:class="['color', 'active']">클래스 4</div>
    <div v-bind:class="isActive ? ['color5', { color: isActive }] : 'noColor'">클래스 5</div>

    <hr />
    <h2> v-if, v-else</h2>
    <div v-if="isActive === false"> v-if </div>
    <div v-else> v-else </div>

    <hr />
    <h2> v-for </h2>
    <ul>
      <li v-for="(item, i) in data" :key="i">
        {{ item.name }}
      </li>
    </ul>

    <hr />
    <p>{{ count }}</p>
    <button @click="countIncre()">카운트 증가</button>

    <hr />
    <h2>{{ msg }}{{ msg2 }}</h2>
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
          rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank"
          rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
          rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
      </li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
  <div>헬로의 아래에 있어용</div>
</template>

<script>
export default {

  data() {
    return {
      title: "tutorial",
      isActive: false,
      data: [{ name: 'data1' }, { name: 'data2' }],
      htmlString: '<p> 뭔가... 적는다.... </p>',
      count: 0
    }
  },

  // 함수
  methods: {
    countIncre() {
      this.count++;
    }
  },

  beforeUpdate() {
    console.log(this.count)
  },

  updated() {
    console.log(this.count)
  },

  name: 'HelloWorld',
  props: {
    msg: String,
    msg2: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.color {
  color: red;
}

.noColor {
  color: #ddd;
}

/*
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
*/
</style>
