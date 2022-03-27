<template>
    <div id="ticket-container"> 
  <div class="movie-container">
      <label>Pick a movie:</label>
      <select id="movie">
        <option value="10">Avengers: Endgame ($10)</option>
        <option value="12">Joker ($12)</option>
        <option value="8">Toy Story 4 ($8)</option>
        <option value="9">The Lion King ($9)</option>
      </select>
    </div>

  <seat-information></seat-information>
    <div class="container">
     <screen></screen>
     <seats></seats>
    </div>

    <p class="text">
      You have selected <span id="count">0</span> seats for a price of $<span
        id="total"
        >0</span
      >
    </p>
</div>
</template>
<script>
import SeatInformation from '../components/SeatInformation.vue';
import Screen from '../components/Screen.vue';
import Seats from '../components/Seats.vue';
export default {
    components : {
    SeatInformation,
    Screen,
    Seats
    }
}
</script>

<style scoped>
#ticket-container{
    background-color: #242333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Lato', sans-serif;
  margin: 0;
}

.movie-container {
  margin: 20px 0;
}

.movie-container select {
  background-color: #fff;
  border: 0;
  border-radius: 5px;
  font-size: 14px;
  margin-left: 10px;
  padding: 5px 15px 5px 15px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

.container {
  perspective: 1000px;
  margin-bottom: 30px;
}

p.text {
  margin: 5px 0;
}

p.text span {
  color: #6feaf6;
} 
</style>