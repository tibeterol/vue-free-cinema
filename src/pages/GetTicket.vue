<template>
 <div id="text">
     <h3>Choose Your Seats</h3>
 </div>
    <div id="ticket-container"> 
  <div class="movie-container">
      <label>Selected movie : </label>
      <input id="movie" disabled  :value="selectedMovie" />
    </div>

  <seat-information></seat-information>
    <div class="container">
     <screen></screen>
     <seats @seat-counter="setCounter"></seats>
    </div>

    <p class="text">
      You have selected <span id="count">{{seatCounter}}</span> seats.
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
    },
    mounted(){
      const movieName = this.$store.getters.chosenMovie;
      if(movieName ==='kolpacino')
      this.selectedMovie = 'Kolpaçino Bomba';
      else if(movieName ==='batman')
      this.selectedMovie = 'The Batman';
      else if(movieName ==='lastSamurai')
      this.selectedMovie = 'The Last Samurai';
    },
    data(){
      return {
        selectedMovie : '',
        counter : '0'
      }
    },
    methods: {
      setCounter(cnt){
        this.counter = cnt;
      }
    },
    computed : {
      seatCounter(){
        //return this.$store.getters.seatCounter;
        return this.counter;
      }
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


#text {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  background-color : #5383D3;
  border-radius: 10px;
  box-shadow: 3px 5px #888888;
}
</style>