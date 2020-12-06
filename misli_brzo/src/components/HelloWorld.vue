<template>
  <div class="hello">
    <div class="container_1">
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
        <div class="button">
          <button type="button">Započni</button>
        </div>
        <p>Google prijava</p>
      </div>

      <div class="ukratko_o_kreatorima_i_projektu">
        <h4>Ukratko o kreatorima i projektu</h4>
      </div>
    </div>

    <!-- Drugi dio stranice -->
    <div class="container_2">
      <div class="text">
        <h3>O stranici</h3>
        <ul>
          <li>
            <p>
              Stranica je napravljena kao projekt za kolegij "Programsko
              inženjerstvo" akademske godine 2020./2021. kod doc. dr. sc. Nikola
              Tanković.
            </p>
          </li>

          <h3>Cilj stranice</h3>

          <li>
            <p>
              Naš cilj je našim korisnicima pružiti zabavnu web lokaciju na
              kojoj će testirati svoje znanje na kvizovima, te naučiti i
              proširiti znanje sa zabavnim činjenicama, kratkim tekstovima i
              zagonetkama. Mi mislimo da će kroz našu stranicu svaka osoba moći
              u roku 10-15min naučiti nešto što nisu možda znali, proširiti već
              postojeće znanje ili ga samo testirati.
            </p>
          </li>

          <h3>O nama</h3>

          <li>
            <p>
              Mi smo dva studenta 3.godine Fakulteta Informatike u Puli.
              Izradili smo ovu stranicu u svrhu projekta, ali isto tako da
              testiramo naše znanje i sposobnosti.
            </p>
          </li>
        </ul>
      </div>
    </div>
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
//Prvi dio zaslona
.container_1 {
  height: 1080px;
}

.button {
}

.prijava {
  padding-top: 100px;
}

.o_stranici {
  padding-left: 75px;
}
.ukratko_o_kreatorima_i_projektu {
  position: absolute;
  bottom: 5px;
}

//Drugi dio zaslona
.container_2 {
  color: white;
  height: 1080px;
  background-color: #ff6902;
  padding-left: 75px;

  text-align: left;
}
.text {
  padding-top: 25px;
}
</style>
