<template>
  <div class="home">
    <HelloWorld msg="MisliBrzo"/>
    <footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import footer from '@/components/footer.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    footer,
  },
}
</script>
