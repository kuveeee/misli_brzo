<template>
  <div class="container ">
    <!-- Prvi dio stranice -->
    <div class="prvi_blok">
      <h1><b>Bok</b></h1>
      <br />
      <div class="button">
            <button onclick="window.location.href='/kviz_test'">Zaigraj kviz</button>
          </div>
      <!-- <div class="row">
        <div class="col-3">
          <img
            src="@/assets/tema_filmovi.jpg"
            class="img-fluid float-left"
            alt=""
          />
          <div class="naslov_teme">
            <p>Film i televizija</p>
          </div>
        </div>
        <div class="col-3">
          <img
            src="@/assets/tema_povijest.jpg"
            class="img-fluid float-left"
            alt=""
          />
          <p>Povijest</p>
        </div>
        <div class="col-3">
          <img
            src="@/assets/tema_formula_1.jpg"
            class="img-fluid float-left"
            alt=""
          />
          <p>Formula1</p>
        </div>
        <div class="col-3">
          <div class="tema_nedostupna">
            <img
              src="@/assets/tema_tehnologija.jpg"
              class="img-fluid float-left"
              alt="Responsive image"
            />
          </div>
          <p>Nedostupno</p>
        </div>
      </div> -->
      <!-- row -->

    </div>
    <!-- Prvi blok -->

    <!-- Drugi dio stranice -->
    <div class="drugi_blok">
      <div class="zanimljive_činjenice">
        <h4><b>Zanimljive činjenice</b></h4>
        <div class="naslov_zanimljivosti">
          <h3> Naslov</h3>
          <!--o čemu govore tjedne zanjmiljovsti, npr voda-->
        </div>
        <ol>
          <li>zanimljivost</li>
          <li>zanimljivost</li>
          <li>zanimljivost</li>
        </ol>

        <div class="zagonetke">
          <div class="naslov_zagonetki">
            <h3><b>Zagonetke</b></h3>
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
        </div>
      </div>
      <!-- Footer -->
      <Footer />
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
  height: 50vh;
}

h1 {
  font-size: 60px;
  color: #1f1235;
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
}

.tema_nedostupna {
  opacity: 50%;
}

//Dolje se nalaze zagonetke i zanimljive činjenice
.zagonetke_cinjenice {
  //position: absolute;
  bottom: 5px;
  padding-top: 200px;
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
  font-size: 40px;
}

h4 {
  //Podnaslov za svaki h3 naslov
  font-size: 20px;
  color: #77475e;
}
.naslov_zanimljivosti {
  padding-bottom: 50px;
}

ol {
  padding-left: 100px;
  font-size: 25px;
}
</style>
