<template>
<the-header></the-header>
<router-view></router-view>
<BackToTop text="Go To Top" v-if="$route.path==='/movies'" />
<the-footer></the-footer>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import BackToTop from 'vue-backtotop';
export default {
  components : {
    TheHeader,
    TheFooter,
    BackToTop
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

* {
  box-sizing: border-box;
}

body {
  background-color: #242333;
  color: #fff;
}
</style>
