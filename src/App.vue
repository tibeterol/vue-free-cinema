<template>
<the-header></the-header>
<get-ticket></get-ticket>
<the-footer></the-footer>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import GetTicket from './pages/GetTicket.vue';
import TheFooter from './components/layout/TheFooter.vue';
export default {
  components : {
    TheHeader,
    GetTicket,
    TheFooter
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
