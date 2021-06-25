<template>
  <div class="home">
      <div class="container_1">
        <h1>MisliBrzo</h1>
        <div class="controller_slika">
          <img src="@/assets/game-controller.svg" alt="Game controller image" />
        </div>
        <br>
        <h2><strong>Uči kroz zabavu</strong></h2>
        <div class="o_stranici">
          <h3>
            MisliBrzo je web stranica na kojoj ćeš moći obogatiti svoje znanje.
            <br />
            Ovdje ćemo kroz kvizove, zanimljive činjenice i kratke
            tekstove testirati vaše znanje. <br />Molimo vas da se registrirate i
            počnete vašu MisliBrzo avanturu.
          </h3>
        </div>

        <!-- Button za registraciju -->
        <div class="prijava">
          <div class="button">
            <button onclick="window.location.href='/signup'">Započni</button>
          </div>
          <p>Registracija</p>
        </div>
        
        <div class="ukratko_o_kreatorima_i_projektu">
          <h4>Scrollaj dolje i saznaj više o kreatorima i ovom projektu</h4>
        </div>
      </div>
      <!-- container_1 -->

      <!-- Drugi dio stranice -->
      <div class="container_2">
        <div class="humanbrain">
          <img src="@/assets/human-brain.svg" style="width: 40%" alt="image of a human connected to a computer" />
        </div>

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
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
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
  font-size: 90px;
  color: #1f1235;
}

//   UCI KROZ ZABAVU   -podnaslov
h2 {
  display: inline-block;
  font-size: 38px;
  color: #1b1425;
}

h3 {
  margin: 40px 0 0;
  font-size: 20px;
  color: #272727;
}

h4{
  font-size: 20px;
}

// h5 - podnaslovi (O stranici, Cilj stranice, O nama)
h5 {
  font-size: 30px;
}

//Slika gaming controllera
.controller_slika {
  display: inline-block;
  position:relative;
  left: -500px;
  width: 5%;
  transform: rotate(-30deg);
}

.prijava {
  padding-top: 30px;
  p{
    color: rgb(134, 134, 134);
    font-size: 15px;
  }
}

button{
  color: white;
  background-color: #250058;
  border-radius: 15px;
  border-color: #250058;
  padding: 3px 18px;
  font-size: 20px;
}

.humanbrain {
  height: 1px;
  opacity:abs($number: 0.1);
}

.o_stranici {
  padding-left: 75px;
  padding-right: 75px;
}

.ukratko_o_kreatorima_i_projektu {
  position: absolute;
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
  p{
    font-size: 20px;
  }
}

.text {
  padding-top: 100px;
  font-size: 20px;
}
</style>
