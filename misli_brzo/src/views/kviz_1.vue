<template>
  <div class="body">
    <div class="container">
      <div class="prvi_red">
        <div class="izlaz">
        <a href="/about">Izlaz</a>
        </div>
        <h1>MisliBrzo</h1>
      </div>

      <h2>FILMOVI</h2>
      <div class="container">
        <div class="pitanje">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
        </div>
      </div>
      <!-- container -->
      <div class="odgovor">
        <p>Odgovor A</p>
      </div>
      <div class="odgovor">
        <p>Odgovor B</p>
      </div>
      <div class="odgovor">
        <p>Odgovor C</p>
      </div>
      <div class="odgovor">
        <p>Odgovor D</p>
      </div>
      <div class="formula_1_svg">
        <img src="@/assets/tema_formula_1.svg" alt="Formula 1 car" />
      </div>
    </div>
  </div>
  <!-- Body -->
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.body {
  background-color: #9d5cc2;
}

.izlaz {
  text-align: right;
}
h1 {
  margin: auto;
  width: 50%;
  font-size: 50px;
  color: #9D5CC2;
  -webkit-text-stroke: 0.4px white;
}
h2{
  color: white;
}
.pitanje {
  background-color: #804aa0;
  color: #c2a7d2;
  border-radius: 10px;
  padding: 5px;
  font-size: 25px;
}
img {
  width: 40%;
  opacity: 25%;
  transform: rotate(-90deg);
  padding-top: 20px;
  display: inline;
}
.odgovor {
  background-color: white;
  color: #9D5CC2;
  height: 35px;
  margin-top: 25px;
  border-radius: 15px;
}
</style>
