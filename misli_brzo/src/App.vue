<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Splash</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="!store.currentUser" to="/signup">Signup</router-link> |  
      <router-link v-if="!store.currentUser" to="/Login">Login</router-link> |
      <router-link to="/kviz_1">Kviz 1</router-link> |
      <a v-if="store.currentUser" href="#" @click="logout" class="nav-link">Logout</a>
    </div>
    <router-view />
  </div>
</template>

<script>
import store from '@/store';
import { firebase } from "@/firebase";

firebase.auth().onAuthStateChanged((user) => {
  //Metoda koja prati jel user prijavljen ili odjavljen
  if (user) {
    // User is signed in.
    console.log("***", user.email);
    store.currentUser = user.email;
  } else {
    // No user is signed in.
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
