<template>
  <div class="about">
    <!-- Drugi dio stranice -->
    <div class="prvi_blok">
      <h1><b>Bok, Korisnik</b></h1>
      <br />
      <h2>Zaigraj kviz.<br />Odaberi jednu od ponuđenih tema</h2>

      <div class="teme_kvizova">
        <img
          src="@/assets/tema_filmovi.jpg"
          class=" float-left"
          alt="Responsive image"
        />
        <img
          src="@/assets/tema_povijest.jpg"
          class=" float-left"
          alt="Responsive image"
        />
        <img
          src="@/assets/tema_formula_1.jpg"
          class=" float-left"
          alt="Responsive image"
        />
        <div class="tema_nedostupna">
          <img
            src="@/assets/tema_tehnologija.jpg"
            class=" float-left"
            alt="Responsive image"
          />
        </div>
      </div>
      <!-- Teme kvizova -->
    </div>
    <!-- Prvi blok -->

    <!-- Drugi dio stranice -->
    <div class="drugi_blok">
      <div class="zanimljive_činjenice">
        <h3><b>Zanimljive činjenice</b></h3>
        <div class="naslov_zanimljivosti">
          <h4>Naslov zanimljivosti</h4>
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
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
export default {
  components :{
    Footer,
  },
  
}
</script>

<style scoped lang="scss">
.prvi_blok {
  height: 1080px;
}

h1 {
  font-size: 90px;
  color: #1f1235;
}

h2 {
  font-size: 30px;
  color: #1b1425;
}

.teme_kvizova {
}

img {
  width: 15%;
  padding-top: 75px;
  padding-inline: 15px;
}
.tema_nedostupna {
  opacity: 50%;
}

//Drugi dio zaslona //Drugi dio zaslona //Drugi dio zaslona //Drugi dio zaslona
.drugi_blok {
  color: white;
  height: 1080px;
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
