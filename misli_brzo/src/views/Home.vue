<template>
  <div class="home">
    <HelloWorld msg="MisliBrzo" />
    <Footer />
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
