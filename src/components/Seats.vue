<template>
     <div class="row">
        <div class="seat" @click="selectSeat('A1')" :class="{'selected' : isSeatA1Selected}">1</div>
        <div class="seat" @click="selectSeat('A2')" :class="{'selected' : isSeatA2Selected}">2</div>
        <div class="seat" @click="selectSeat('A3')" :class="{'selected' : isSeatA3Selected}">3</div>
        <div class="seat" @click="selectSeat('A4')" :class="{'selected' : isSeatA4Selected}">4</div>
        <div class="seat" @click="selectSeat('A5')" :class="{'selected' : isSeatA5Selected}">5</div>
        <div class="seat" @click="selectSeat('A6')" :class="{'selected' : isSeatA6Selected}">6</div>
        <div class="seat" @click="selectSeat('A7')" :class="{'selected' : isSeatA7Selected}">7</div>
        <div class="seat" @click="selectSeat('A8')" :class="{'selected' : isSeatA8Selected}">8</div>
        <span id="alphabets">A</span>   
      </div>
      <div class="row">
        <div class="seat" @click="selectSeat('B1')" :class="{'selected' : isSeatB1Selected}">1</div>
        <div class="seat" @click="selectSeat('B2')" :class="{'selected' : isSeatB2Selected}">2</div>
        <div class="seat" @click="selectSeat('B3')" :class="{'selected' : isSeatB3Selected}">3</div>
        <div class="seat occupied" @click="selectSeat('B4')" :class="{'selected' : isSeatB4Selected}">4</div>
        <div class="seat occupied" @click="selectSeat('B5')" :class="{'selected' : isSeatB5Selected}">5</div>
        <div class="seat" @click="selectSeat('B6')" :class="{'selected' : isSeatB6Selected}">6</div>
        <div class="seat" @click="selectSeat('B7')" :class="{'selected' : isSeatB7Selected}">7</div>
        <div class="seat" @click="selectSeat('B8')" :class="{'selected' : isSeatB8Selected}">8</div>
        <span id="alphabets">B</span>   
      </div>
      <div class="row">
        <div class="seat" @click="selectSeat('C1')" :class="{'selected' : isSeatC1Selected}">1</div>
        <div class="seat" @click="selectSeat('C2')" :class="{'selected' : isSeatC2Selected}">2</div>
        <div class="seat" @click="selectSeat('C3')" :class="{'selected' : isSeatC3Selected}">3</div>
        <div class="seat" @click="selectSeat('C4')" :class="{'selected' : isSeatC4Selected}">4</div>
        <div class="seat" @click="selectSeat('C5')" :class="{'selected' : isSeatC5Selected}">5</div>
        <div class="seat" @click="selectSeat('C6')" :class="{'selected' : isSeatC6Selected}">6</div>
        <div class="seat occupied" @click="selectSeat('C7')" :class="{'selected' : isSeatC7Selected}">7</div>
        <div class="seat occupied" @click="selectSeat('C8')" :class="{'selected' : isSeatC8Selected}">8</div>
        <span id="alphabets">C</span>   
      </div>
      <div class="row">
        <div class="seat" @click="selectSeat('D1')" :class="{'selected' : isSeatD1Selected}">1</div>
        <div class="seat" @click="selectSeat('D2')" :class="{'selected' : isSeatD2Selected}">2</div>
        <div class="seat" @click="selectSeat('D3')" :class="{'selected' : isSeatD3Selected}">3</div>
        <div class="seat" @click="selectSeat('D4')" :class="{'selected' : isSeatD4Selected}">4</div>
        <div class="seat" @click="selectSeat('D5')" :class="{'selected' : isSeatD5Selected}">5</div>
        <div class="seat" @click="selectSeat('D6')" :class="{'selected' : isSeatD6Selected}">6</div>
        <div class="seat" @click="selectSeat('D7')" :class="{'selected' : isSeatD7Selected}">7</div>
        <div class="seat" @click="selectSeat('D8')" :class="{'selected' : isSeatD8Selected}">8</div>
        <span id="alphabets">D</span>   
      </div>
      <div class="row">
        <div class="seat" @click="selectSeat('E1')" :class="{'selected' : isSeatE1Selected}">1</div>
        <div class="seat" @click="selectSeat('E2')" :class="{'selected' : isSeatE2Selected}">2</div>
        <div class="seat" @click="selectSeat('E3')" :class="{'selected' : isSeatE3Selected}">3</div>
        <div class="seat occupied" @click="selectSeat('E4')" :class="{'selected' : isSeatE4Selected}">4</div>
        <div class="seat occupied" @click="selectSeat('E5')" :class="{'selected' : isSeatE5Selected}">5</div>
        <div class="seat" @click="selectSeat('E6')" :class="{'selected' : isSeatE6Selected}">6</div>
        <div class="seat" @click="selectSeat('E7')" :class="{'selected' : isSeatE7Selected}">7</div>
        <div class="seat" @click="selectSeat('E8')" :class="{'selected' : isSeatE8Selected}">8</div>
        <span id="alphabets">E</span>   
      </div>
      <div class="row">
        <div class="seat" @click="selectSeat('F1')" :class="{'selected' : isSeatF1Selected}">1</div>
        <div class="seat" @click="selectSeat('F2')" :class="{'selected' : isSeatF2Selected}">2</div>
        <div class="seat" @click="selectSeat('F3')" :class="{'selected' : isSeatF3Selected}">3</div>
        <div class="seat" @click="selectSeat('F4')" :class="{'selected' : isSeatF4Selected}">4</div>
        <div class="seat occupied" @click="selectSeat('F5')" :class="{'selected' : isSeatF5Selected}">5</div>
        <div class="seat occupied" @click="selectSeat('F6')" :class="{'selected' : isSeatF6Selected}">6</div>
        <div class="seat occupied" @click="selectSeat('F7')" :class="{'selected' : isSeatF7Selected}">7</div>
        <div class="seat" @click="selectSeat('F8')" :class="{'selected' : isSeatF8Selected}">8</div>
        <span id="alphabets">F</span>   
      </div>
</template>

<script>
export default {
    data(){
        return {
            seatIds : [], // sonra vuexe tasi
            isSeatA1Selected: false,
            isSeatA2Selected: false,
            isSeatA3Selected: false,
            isSeatA4Selected: false,
            isSeatA5Selected: false,
            isSeatA6Selected: false,
            isSeatA7Selected: false,
            isSeatA8Selected: false,
            isSeatB1Selected: false,
            isSeatB2Selected: false,
            isSeatB3Selected: false,
            isSeatB4Selected: false,
            isSeatB5Selected: false,
            isSeatB6Selected: false,
            isSeatB7Selected: false,
            isSeatB8Selected: false,
            isSeatC1Selected: false,
            isSeatC2Selected: false,
            isSeatC3Selected: false,
            isSeatC4Selected: false,
            isSeatC5Selected: false,
            isSeatC6Selected: false,
            isSeatC7Selected: false,
            isSeatC8Selected: false,
            isSeatD1Selected: false,
            isSeatD2Selected: false,
            isSeatD3Selected: false,
            isSeatD4Selected: false,
            isSeatD5Selected: false,
            isSeatD6Selected: false,
            isSeatD7Selected: false,
            isSeatD8Selected: false,
            isSeatE1Selected: false,
            isSeatE2Selected: false,
            isSeatE3Selected: false,
            isSeatE4Selected: false,
            isSeatE5Selected: false,
            isSeatE6Selected: false,
            isSeatE7Selected: false,
            isSeatE8Selected: false,
            isSeatF1Selected: false,
            isSeatF2Selected: false,
            isSeatF3Selected: false,
            isSeatF4Selected: false,
            isSeatF5Selected: false,
            isSeatF6Selected: false,
            isSeatF7Selected: false,
            isSeatF8Selected: false,
        }
    },
    methods : {
        selectSeat(idx){
            this.seatIds.push(idx);
            console.log(this.seatIds);
            if(idx ==='A1')
            this.isSeatA1Selected = !this.isSeatA1Selected;
            if(idx ==='A2')
            this.isSeatA2Selected = !this.isSeatA2Selected;
            if(idx ==='A3')
            this.isSeatA3Selected = !this.isSeatA3Selected;
            if(idx ==='A4')
            this.isSeatA4Selected = !this.isSeatA4Selected;
            if(idx ==='A5')
            this.isSeatA5Selected = !this.isSeatA5Selected;
            if(idx ==='A6')
            this.isSeatA6Selected = !this.isSeatA6Selected;
            if(idx ==='A7')
            this.isSeatA7Selected = !this.isSeatA7Selected;
            if(idx ==='A8')
            this.isSeatA8Selected = !this.isSeatA8Selected;
            if(idx ==='B1')
            this.isSeatB1Selected = !this.isSeatB1Selected;
            if(idx ==='B2')
            this.isSeatB2Selected = !this.isSeatB2Selected;
            if(idx ==='B3')
            this.isSeatB3Selected = !this.isSeatB3Selected;
            if(idx ==='B4')
            this.isSeatB4Selected = !this.isSeatB4Selected;
            if(idx ==='B5')
            this.isSeatB5Selected = !this.isSeatB5Selected;
            if(idx ==='B6')
            this.isSeatB6Selected = !this.isSeatB6Selected;
            if(idx ==='B7')
            this.isSeatB7Selected = !this.isSeatB7Selected;
            if(idx ==='B8')
            this.isSeatB8Selected = !this.isSeatB8Selected;
            if(idx ==='C1')
            this.isSeatC1Selected = !this.isSeatC1Selected;
            if(idx ==='C2')
            this.isSeatC2Selected = !this.isSeatC2Selected;
            if(idx ==='C3')
            this.isSeatC3Selected = !this.isSeatC3Selected;
            if(idx ==='C4')
            this.isSeatC4Selected = !this.isSeatC4Selected;
            if(idx ==='C5')
            this.isSeatC5Selected = !this.isSeatC5Selected;
            if(idx ==='C6')
            this.isSeatC6Selected = !this.isSeatC6Selected;
            if(idx ==='C7')
            this.isSeatC7Selected = !this.isSeatC7Selected;
            if(idx ==='C8')
            this.isSeatC8Selected = !this.isSeatC8Selected;
             if(idx ==='D1')
            this.isSeatD1Selected = !this.isSeatD1Selected;
             if(idx ==='D2')
            this.isSeatD2Selected = !this.isSeatD2Selected;
             if(idx ==='D3')
            this.isSeatD3Selected = !this.isSeatD3Selected;
             if(idx ==='D4')
            this.isSeatD4Selected = !this.isSeatD4Selected;
             if(idx ==='D5')
            this.isSeatD5Selected = !this.isSeatD5Selected;
             if(idx ==='D6')
            this.isSeatD6Selected = !this.isSeatD6Selected;
             if(idx ==='D7')
            this.isSeatD7Selected = !this.isSeatD7Selected;
             if(idx ==='D8')
            this.isSeatD8Selected = !this.isSeatD8Selected;
             if(idx ==='E1')
            this.isSeatE1Selected = !this.isSeatE1Selected;
             if(idx ==='E2')
            this.isSeatE2Selected = !this.isSeatE2Selected;
             if(idx ==='E3')
            this.isSeatE3Selected = !this.isSeatE3Selected;
             if(idx ==='E4')
            this.isSeatE4Selected = !this.isSeatE4Selected;
             if(idx ==='E5')
            this.isSeatE5Selected = !this.isSeatE5Selected;
             if(idx ==='E6')
            this.isSeatE6Selected = !this.isSeatE6Selected;
             if(idx ==='E7')
            this.isSeatE7Selected = !this.isSeatE7Selected;
             if(idx ==='E8')
            this.isSeatE8Selected = !this.isSeatE8Selected;
             if(idx ==='F1')
            this.isSeatF1Selected = !this.isSeatF1Selected;
             if(idx ==='F2')
            this.isSeatF2Selected = !this.isSeatF2Selected;
             if(idx ==='F3')
            this.isSeatF3Selected = !this.isSeatF3Selected;
             if(idx ==='F4')
            this.isSeatF4Selected = !this.isSeatF4Selected;
             if(idx ==='F5')
            this.isSeatF5Selected = !this.isSeatF5Selected;
             if(idx ==='F6')
            this.isSeatF6Selected = !this.isSeatF6Selected;
             if(idx ==='F7')
            this.isSeatF7Selected = !this.isSeatF7Selected;
             if(idx ==='F8')
            this.isSeatF8Selected = !this.isSeatF8Selected;

        }
    }
}
</script>


<style scoped>
body {
  background-color: #242333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Lato', sans-serif;
  margin: 0;
	padding:0; /*yeni*/ 
}
.seat {
  background-color: rgb(141, 35, 35); /* #444451; */
  height: 20px; /*12px */
  width: 23px;  /*15px */
  margin: 3px; /*3px */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
}

.seat.selected {
  background-color: #6feaf6;
}

.seat.occupied {
  background-color: #fff;
}

.seat:nth-of-type(2) {
  margin-right: 18px;
}

.seat:nth-last-of-type(2) {
  margin-left: 18px;
}

.seat:not(.occupied):hover {
  cursor: pointer;
  transform: scale(1.2);
}

.row {
  display: flex;
}

#alphabets {
    margin-left : 10px;
}
</style>