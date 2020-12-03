<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Uči kroz zabavu</h2>
    <div class="o_stranici">
      <h3>
        MisliBrzo je web stranica na kojoj ćeš moći obogatiti svoje znanje.
        Ovdje ćemo kroz kvizove, zanimljive činjenice, zagonetke i kratke
        tekstove testirati vaše znanje. Da bi pratili vaš napredak, molimo vas
        da se prijavite putem Google-a. Nakon toga, stranica će vas odvesti na
        početni izbornik gdje ćete moći početi vašu "MisliBrzo" avanturu.
      </h3>
    </div>
    <!-- Button za prijavu -->
    <div class="prijava">
      <button type="button">Započni</button>
      <p>Google prijava</p>
    </div>

    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
</style>
