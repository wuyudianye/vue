<template>
  <div id="app">
    <v-header></v-header>
  </div>
</template>

<script>
import vHeader from '@/components/header.vue'
export default {
  name: 'app',
  components: {
    vHeader
  },
  computed: {
        showList() {
             return this.$store.state.showList;           
        }
  },
  mounted() {
  }
}
</script>

<style lang="css">
@import 'assets/css/reset.css';

</style>
