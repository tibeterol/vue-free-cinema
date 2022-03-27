<template>
<the-header></the-header>
<get-ticket v-if="1===2"></get-ticket>
<user-form></user-form>
<select-movie v-if="1===2"></select-movie>
<the-footer></the-footer>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import GetTicket from './pages/GetTicket.vue';
import TheFooter from './components/layout/TheFooter.vue';
import SelectMovie from './pages/SelectMovie.vue';
import UserForm from './pages/UserForm.vue';
export default {
  components : {
    TheHeader,
    GetTicket,
    TheFooter,
    SelectMovie,
    UserForm
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
