<template>
  <div class="container ">
    <!-- Prvi dio stranice -->
    <div class="prvi_blok">
      <h1><b>Odaberi jednu od ponuđenih tema<br>i zaigraj kviz!</b></h1>
       <br />
      
      <!--                 
      <div class="button">
            <button onclick="window.location.href='/kviz_test'">Zaigraj kviz</button>
      </div>
      -->
      
       <div class="row">
         <div class="col-4">
          <img
            src="@/assets/tema_filmovi.jpg"
            class="img-fluid float-left"
            alt=""
          />
          <div class="naslov_teme">
            <p>Film i televizija</p>
          </div>
        </div>
        <div class="col-4">
          <img
            src="@/assets/tema_povijest.jpg"
            class="img-fluid float-left"
            alt=""
          />
          <div class="naslov_teme">
            <p>Povijest</p>
          </div>
        </div>
        <div class="col-4">
          <a href="/kviz_formula_1">
            <img
              src="@/assets/tema_formula_1.jpg"
              class="img-fluid float-left"
              alt=""
            />
          </a>
          <div class="naslov_teme">
            <p>Formula 1</p>
          </div>
        </div>
      </div>
      <!-- row -->

      <div class="najava">
          <h4>Scrollaj dolje i pročitaj nekoliko zanimljivih činjenica koje možda nisi znao</h4>
        </div>
    </div>
    <!-- Prvi blok -->

    <!-- Drugi dio stranice -->
    <div class="drugi_blok">
      <div class="zanimljive_činjenice">
        <h4><b>Zanimljive činjenice</b></h4>
        <h3>O čovjeku</h3>
        <ol>
          <div class="water_image">
            <img
              src="@/assets/water.svg"
              alt=""
            />
          </div>
          <li>Voda čini 50-70% našeg tijela,<br>a čak 75% našeg mozga</li>
          <li>Za žene je potrebno dnevno 2.7l,<br>a za muškarce 3.7l vode.</li>
          <li>20% dnevnih potreba vode<br>unosimo kroz hranu</li>
        </ol>

        <!--
        <div class="zagonetke">
            <div class="naslov_zanimljivosti">
              <h4>
                Zabavi se i sa nekoliko zagonetki koje možda nisi nikad
                čuo/la.<br />Za otkrivanje odgovora pređi mišem preko "Rješenje"
              </h4>
            </div>
            <ol>
              <li>Zagonetka</li>
              <li>Zagonetka</li>
              <li>Zagonetka</li>
              <li>Zagonetka</li>
            </ol>
        </div>
        -->

      </div>
      <!-- Footer -->
      <!-- <Footer /> -->
    </div>
    <!-- /Drugi dio stranice -->
  </div>
  <!-- /Container -->
</template>

<script>
import Footer from "@/components/footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style scoped lang="scss">

.prvi_blok {
  height: 100vh;
}

h1 {
  font-size: 40px;
  color: #1f1235;
  padding-bottom: 30px;
}

h2 {
  font-size: 30px;
  color: #1b1425;
}

button{
  color: white;
  background-color: #EE8EBD;
  border-radius: 15px;
  border-color: #EE8EBD;
  padding: 3px 18px;
  font-size: 20px;
}

img {
  float: left;
  padding: 5px;
  width: 100%;
}

.tema_nedostupna {
  opacity: 50%;
}

.najava {
  position: absolute;
  bottom: 5px;
  padding-left: 10px;
  padding-top: 50px;
  text-align: center;
}

//Drugi dio zaslona //Drugi dio zaslona //Drugi dio zaslona //Drugi dio zaslona
.drugi_blok {
  color: white;
  height: 100vh;
  background-image: linear-gradient(#ee96c1, #ec358f);
  padding-top: 50px;
  padding-left: 80px;
  padding-right: 80px;
  text-align: left;
}

h3 {
  //Zanimljive činjenice, Zagonetke
  font-size: 30px;
}

h4 {
  //Podnaslov za svaki h3 naslov
  font-size: 20px;
  color: #77475e;
  padding-bottom: 30px;
}
.naslov_zanimljivosti {
  padding-bottom: 50px;
}

.water_image{
  width: 20%;
  float: right;
}

ol {
  padding-left: 100px;
  font-size: 25px;
}
</style>
