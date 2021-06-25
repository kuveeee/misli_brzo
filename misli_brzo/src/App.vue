<template>
  <div id="app">
    <div id="nav">
      </header>
      <router-link to="/">Početna</router-link> |
      <router-link to="/about">Igra</router-link> |
      <router-link v-if="!store.currentUser" to="/signup">Registracija</router-link> |  
      <router-link v-if="!store.currentUser" to="/Login">Prijava</router-link> |
      <a v-if="store.currentUser" href="#" @click="logout" class="nav-link">Odjava</a>
    </div>
    <router-view />
  </div>
</template>

<script>
//import header from "@/components/header.vue";
import store from '@/store';
import { firebase } from "@/firebase";

firebase.auth().onAuthStateChanged((user) => {
  //Metoda koja prati jel user prijavljen ili odjavljen
  if (user) {
    // Korisnik je prijavljen.
    console.log("***", user.email);
    store.currentUser = user.email;
  } else {
    // Korisnik nije prijavljen.
    console.log("*** No user");
    store.currentUser = '';
  }
});

export default {
  name: "App",
  data() {
    return {
      store,
    };
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Splash" });
        });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
