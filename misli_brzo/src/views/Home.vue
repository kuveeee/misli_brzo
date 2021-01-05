<template>
  <div class="home">
    <div class="hello">
      <div class="container_1">
        <h1><strong>MisliBrzo</strong></h1>
        <div class="controller_slika">
          <img src="@/assets/game-controller.svg" alt="Game controller image" />
        </div>
        <h2><strong>Uči kroz zabavu</strong></h2>
        <div class="o_stranici">
          <h3>
            MisliBrzo je web stranica na kojoj ćeš moći obogatiti svoje zanje
            <br />
            Ovdje ćemo kroz kvizove, zanimljive činjenice, zagonetke i kratke
            tekstove testirati vaše znanje. <br />Da bi pratili vaš napredak,
            molimo vas da se prijavite putem Google-a. Nakon toga,<br />stranica
            će vas odvesti na početni izbornik gdje ćete moći početi vašu
            "MisliBrzo" avanturu.
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
      <!-- container_1 -->

      <!-- Drugi dio stranice -->
      <div class="container_2">
        <div class="text">
          <ul>
            <h5>O stranici</h5>
            <li>
              <p>
                Stranica je napravljena kao projekt za kolegij "Programsko
                inženjerstvo" akademske godine 2020./2021. kod doc. dr. sc.
                Nikola Tanković.
              </p>
            </li>
            <br /><br />
            <h5>Cilj stranice</h5>
            <li>
              <p>
                Naš cilj je našim korisnicima pružiti zabavnu web lokaciju na
                kojoj će testirati svoje znanje na kvizovima, te naučiti i
                proširiti znanje sa zabavnim činjenicama, kratkim tekstovima i
                zagonetkama. Mi mislimo da će kroz našu stranicu svaka osoba
                moći u roku 10-15min naučiti nešto što nisu možda znali,
                proširiti već postojeće znanje ili ga samo testirati.
              </p>
            </li>
            <br /><br />
            <h5>O nama</h5>
            <li>
              <p>
                Mi smo dva studenta 3.godine Fakulteta Informatike u Puli.
                Izradili smo ovu stranicu u svrhu projekta, ali isto tako da
                testiramo naše znanje i sposobnosti.
              </p>
            </li>
          </ul>
          <br /><br />
        </div>
        <!-- Footer -->
        <Footer class="" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  min-height: 100%;
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

//Prvi dio zaslona //Prvi dio zaslona //Prvi dio zaslona //Prvi dio zaslona
.container_1 {
  height: 100vh;
}

//MisliBrzo naslov
h1 {
  font-size: 110px;
  color: #1f1235;
}

//   UCI KROZ ZABAVU   -podnaslov
h2 {
  display: inline-block;
  font-size: 45px;
  color: #1b1425;
}

h3 {
  margin: 40px 0 0;
  font-size: 20px;
  color: #000000;
}

// h5 - podnaslovi (O stranici, Cilj stranice, O nama)
h5 {
  font-size: 35px;
}

//Slika gaming controllera
.controller_slika {
  display: inline-block;
  position:relative;
  left: -200px;
  width: 10%;
  transform: rotate(-30deg);
}

//<!--.button {
//}

.prijava {
  padding-top: 30px;
}

.o_stranici {
  padding-left: 75px;
  padding-right: 75px;
}

.ukratko_o_kreatorima_i_projektu {
  //position: absolute;
  bottom: 5px;
  padding-left: 10px;
  padding-top: 50px;
  text-align: center;
}

//Drugi dio zaslona //Drugi dio zaslona //Drugi dio zaslona //Drugi dio zaslona
.container_2 {
  color: white;
  height: 100vh;
  background-image: linear-gradient(#ff6a00, #f0156a);
  padding-left: 80px;
  padding-right: 80px;
  font-size: 20px;
  text-align: left;
}

.text {
  padding-top: 25px;
}
</style>
