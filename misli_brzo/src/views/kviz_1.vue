<template>
  <div class="body">
    <div class="prvi_red">
      <div class="izlaz col-1"></div>
      <a href="/about">Izlaz</a>
      <h1>MisliBrzo</h1>
    </div>

    <h2>Kviz FILMOVI</h2>
    <div class="pitanje d-flex w-50">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
    </div>
    <!-- Pitanje -->

    <div class="formula_1_svg">
      <img src="@/assets/tema_formula_1.svg" alt="Formula 1 car" />
    </div>

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
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.body {
  background-color: #9d5cc2;
  height: 100vh;
}
.prvi_red {
}
.izlaz{
}
h1 {
  -webkit-text-stroke: 2px;
  margin: auto;
  width: 50%;
}
.pitanje {
  background-color: #804aa0;
  color: #c2a7d2;
  border-radius: 10px;
}
img {
  width: 40%;
  opacity: 25%;
  transform: rotate(-90deg);
}
.odgovor {
  background-color: white;
  color: #727272;
  width: 20%;
  height: 40px;
  margin-top: 25px;
  border-radius: 10px;
}
</style>
