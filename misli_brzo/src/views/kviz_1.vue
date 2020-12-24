<template>
  <div class="body">
    <h1>MisliBrzo</h1>
    <h2>Kviz FILMOVI</h2>
    <div class="pitanje d-flex w-50">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
    </div>
    <!-- Pitanje -->

    <!-- <div class="formula_1_svg">
        <img src="@/assets/tema_formula_1.svg" alt="Formula 1 car" />
      </div> -->

    <div class="odgovor align-middle w-25">
      <p>Odgovor A</p>
    </div>
    <div class="odgovor w-25">
      <p>Odgovor B</p>
    </div>
    <div class="odgovor w-25">
      <p>Odgovor C</p>
    </div>
    <div class="odgovor w-25">
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
.pitanje {
  background-color: #804aa0;
}
.odgovor {
  background-color: white;
  /* width: 200px; */
  height: 40px;
  margin-top: 25px;
  margin-bottom: 10px;
}
</style>
