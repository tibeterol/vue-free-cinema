<template>
     <div class="row">
        <div class="seat" @click="selectSeat('A1')" :class="{'selected' : isSeatA1Selected,'occupied' : isSeatA1Reserved}">1</div>
        <div class="seat" @click="selectSeat('A2')" :class="{'selected' : isSeatA2Selected,'occupied' : isSeatA2Reserved}">2</div>
        <div class="seat" @click="selectSeat('A3')" :class="{'selected' : isSeatA3Selected,'occupied' : isSeatA3Reserved}">3</div>
        <div class="seat" @click="selectSeat('A4')" :class="{'selected' : isSeatA4Selected,'occupied' : isSeatA4Reserved}">4</div>
        <div class="seat" @click="selectSeat('A5')" :class="{'selected' : isSeatA5Selected,'occupied' : isSeatA5Reserved}">5</div>
        <div class="seat" @click="selectSeat('A6')" :class="{'selected' : isSeatA6Selected,'occupied' : isSeatA6Reserved}">6</div>
        <div class="seat" @click="selectSeat('A7')" :class="{'selected' : isSeatA7Selected,'occupied' : isSeatA7Reserved}">7</div>
        <div class="seat" @click="selectSeat('A8')" :class="{'selected' : isSeatA8Selected,'occupied' : isSeatA8Reserved}">8</div>
        <span id="alphabets">A</span>   
      </div>
      <div class="row">
        <div class="seat" @click="selectSeat('B1')" :class="{'selected' : isSeatB1Selected,'occupied' : isSeatB1Reserved}">1</div>
        <div class="seat" @click="selectSeat('B2')" :class="{'selected' : isSeatB2Selected,'occupied' : isSeatB2Reserved}">2</div>
        <div class="seat" @click="selectSeat('B3')" :class="{'selected' : isSeatB3Selected,'occupied' : isSeatB3Reserved}">3</div>
        <div class="seat" @click="selectSeat('B4')" :class="{'selected' : isSeatB4Selected,'occupied' : isSeatB4Reserved}">4</div>
        <div class="seat" @click="selectSeat('B5')" :class="{'selected' : isSeatB5Selected,'occupied' : isSeatB5Reserved}">5</div>
        <div class="seat" @click="selectSeat('B6')" :class="{'selected' : isSeatB6Selected,'occupied' : isSeatB6Reserved}">6</div>
        <div class="seat" @click="selectSeat('B7')" :class="{'selected' : isSeatB7Selected,'occupied' : isSeatB7Reserved}">7</div>
        <div class="seat" @click="selectSeat('B8')" :class="{'selected' : isSeatB8Selected,'occupied' : isSeatB8Reserved}">8</div>
        <span id="alphabets">B</span>   
      </div>
      <div class="row">
        <div class="seat" @click="selectSeat('C1')" :class="{'selected' : isSeatC1Selected,'occupied' : isSeatC1Reserved}">1</div>
        <div class="seat" @click="selectSeat('C2')" :class="{'selected' : isSeatC2Selected,'occupied' : isSeatC2Reserved}">2</div>
        <div class="seat" @click="selectSeat('C3')" :class="{'selected' : isSeatC3Selected,'occupied' : isSeatC3Reserved}">3</div>
        <div class="seat" @click="selectSeat('C4')" :class="{'selected' : isSeatC4Selected,'occupied' : isSeatC4Reserved}">4</div>
        <div class="seat" @click="selectSeat('C5')" :class="{'selected' : isSeatC5Selected,'occupied' : isSeatC5Reserved}">5</div>
        <div class="seat" @click="selectSeat('C6')" :class="{'selected' : isSeatC6Selected,'occupied' : isSeatC6Reserved}">6</div>
        <div class="seat" @click="selectSeat('C7')" :class="{'selected' : isSeatC7Selected,'occupied' : isSeatC7Reserved}">7</div>
        <div class="seat" @click="selectSeat('C8')" :class="{'selected' : isSeatC8Selected,'occupied' : isSeatC8Reserved}">8</div>
        <span id="alphabets">C</span>   
      </div>
      <div class="row">
        <div class="seat" @click="selectSeat('D1')" :class="{'selected' : isSeatD1Selected,'occupied' : isSeatD1Reserved}">1</div>
        <div class="seat" @click="selectSeat('D2')" :class="{'selected' : isSeatD2Selected,'occupied' : isSeatD2Reserved}">2</div>
        <div class="seat" @click="selectSeat('D3')" :class="{'selected' : isSeatD3Selected,'occupied' : isSeatD3Reserved}">3</div>
        <div class="seat" @click="selectSeat('D4')" :class="{'selected' : isSeatD4Selected,'occupied' : isSeatD4Reserved}">4</div>
        <div class="seat" @click="selectSeat('D5')" :class="{'selected' : isSeatD5Selected,'occupied' : isSeatD5Reserved}">5</div>
        <div class="seat" @click="selectSeat('D6')" :class="{'selected' : isSeatD6Selected,'occupied' : isSeatD6Reserved}">6</div>
        <div class="seat" @click="selectSeat('D7')" :class="{'selected' : isSeatD7Selected,'occupied' : isSeatD7Reserved}">7</div>
        <div class="seat" @click="selectSeat('D8')" :class="{'selected' : isSeatD8Selected,'occupied' : isSeatD8Reserved}">8</div>
        <span id="alphabets">D</span>   
      </div>
      <div class="row">
        <div class="seat" @click="selectSeat('E1')" :class="{'selected' : isSeatE1Selected,'occupied' : isSeatE1Reserved}">1</div>
        <div class="seat" @click="selectSeat('E2')" :class="{'selected' : isSeatE2Selected,'occupied' : isSeatE2Reserved}">2</div>
        <div class="seat" @click="selectSeat('E3')" :class="{'selected' : isSeatE3Selected,'occupied' : isSeatE3Reserved}">3</div>
        <div class="seat" @click="selectSeat('E4')" :class="{'selected' : isSeatE4Selected,'occupied' : isSeatE4Reserved}">4</div>
        <div class="seat" @click="selectSeat('E5')" :class="{'selected' : isSeatE5Selected,'occupied' : isSeatE5Reserved}">5</div>
        <div class="seat" @click="selectSeat('E6')" :class="{'selected' : isSeatE6Selected,'occupied' : isSeatE6Reserved}">6</div>
        <div class="seat" @click="selectSeat('E7')" :class="{'selected' : isSeatE7Selected,'occupied' : isSeatE7Reserved}">7</div>
        <div class="seat" @click="selectSeat('E8')" :class="{'selected' : isSeatE8Selected,'occupied' : isSeatE8Reserved}">8</div>
        <span id="alphabets">E</span>   
      </div>
      <div class="row">
        <div class="seat" @click="selectSeat('F1')" :class="{'selected' : isSeatF1Selected,'occupied' : isSeatF1Reserved}">1</div>
        <div class="seat" @click="selectSeat('F2')" :class="{'selected' : isSeatF2Selected,'occupied' : isSeatF2Reserved}">2</div>
        <div class="seat" @click="selectSeat('F3')" :class="{'selected' : isSeatF3Selected,'occupied' : isSeatF3Reserved}">3</div>
        <div class="seat" @click="selectSeat('F4')" :class="{'selected' : isSeatF4Selected,'occupied' : isSeatF4Reserved}">4</div>
        <div class="seat" @click="selectSeat('F5')" :class="{'selected' : isSeatF5Selected,'occupied' : isSeatF5Reserved}">5</div>
        <div class="seat" @click="selectSeat('F6')" :class="{'selected' : isSeatF6Selected,'occupied' : isSeatF6Reserved}">6</div>
        <div class="seat" @click="selectSeat('F7')" :class="{'selected' : isSeatF7Selected,'occupied' : isSeatF7Reserved}">7</div>
        <div class="seat" @click="selectSeat('F8')" :class="{'selected' : isSeatF8Selected,'occupied' : isSeatF8Reserved}">8</div>
        <span id="alphabets">F</span>   
      </div>
      <div>
        <button @click="save" id="approve">Approve</button>
      </div>
</template>

<script>
export default {
  emits : ['seat-counter'],
    data(){
        return {
            //isDataSaved : false,
            isApproved : false,
            seatIds : [], 
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
            //
            isSeatA1Reserved: false,
            isSeatA2Reserved: false,
            isSeatA3Reserved: false,
            isSeatA4Reserved: false,
            isSeatA5Reserved: false,
            isSeatA6Reserved: false,
            isSeatA7Reserved: false,
            isSeatA8Reserved: false,
            isSeatB1Reserved: false,
            isSeatB2Reserved: false,
            isSeatB3Reserved: false,
            isSeatB4Reserved: false,
            isSeatB5Reserved: false,
            isSeatB6Reserved: false,
            isSeatB7Reserved: false,
            isSeatB8Reserved: false,
            isSeatC1Reserved: false,
            isSeatC2Reserved: false,
            isSeatC3Reserved: false,
            isSeatC4Reserved: false,
            isSeatC5Reserved: false,
            isSeatC6Reserved: false,
            isSeatC7Reserved: false,
            isSeatC8Reserved: false,
            isSeatD1Reserved: false,
            isSeatD2Reserved: false,
            isSeatD3Reserved: false,
            isSeatD4Reserved: false,
            isSeatD5Reserved: false,
            isSeatD6Reserved: false,
            isSeatD7Reserved: false,
            isSeatD8Reserved: false,
            isSeatE1Reserved: false,
            isSeatE2Reserved: false,
            isSeatE3Reserved: false,
            isSeatE4Reserved: false,
            isSeatE5Reserved: false,
            isSeatE6Reserved: false,
            isSeatE7Reserved: false,
            isSeatE8Reserved: false,
            isSeatF1Reserved: false,
            isSeatF2Reserved: false,
            isSeatF3Reserved: false,
            isSeatF4Reserved: false,
            isSeatF5Reserved: false,
            isSeatF6Reserved: false,
            isSeatF7Reserved: false,
            isSeatF8Reserved: false
        }
    },
    methods : {
       save(){
         this.isApproved = true;
         if(this.seatIds.length ===0){
           return;
         }
         for(let s =0 ;s<this.seatIds.length;s++){
           if(this.seatIds[s]==='A1')
           this.isSeatA1Reserved=true;
           if(this.seatIds[s]==='A2')
           this.isSeatA2Reserved=true;
           if(this.seatIds[s]==='A3')
           this.isSeatA3Reserved=true;
           if(this.seatIds[s]==='A4')
           this.isSeatA4Reserved=true;
           if(this.seatIds[s]==='A5')
           this.isSeatA5Reserved=true;
           if(this.seatIds[s]==='A6')
           this.isSeatA6Reserved=true;
           if(this.seatIds[s]==='A7')
           this.isSeatA7Reserved=true;
           if(this.seatIds[s]==='A8')
           this.isSeatA8Reserved=true;
           if(this.seatIds[s]==='B1')
           this.isSeatB1Reserved=true;
           if(this.seatIds[s]==='B2')
           this.isSeatB2Reserved=true;
           if(this.seatIds[s]==='B3')
           this.isSeatB3Reserved=true;
           if(this.seatIds[s]==='B4')
           this.isSeatB4Reserved=true;
           if(this.seatIds[s]==='B5')
           this.isSeatB5Reserved=true;
           if(this.seatIds[s]==='B6')
           this.isSeatB6Reserved=true;
           if(this.seatIds[s]==='B7')
           this.isSeatB7Reserved=true;
           if(this.seatIds[s]==='B8')
           this.isSeatB8Reserved=true;
           if(this.seatIds[s]==='C1')
           this.isSeatC1Reserved=true;
           if(this.seatIds[s]==='C2')
           this.isSeatC2Reserved=true;
           if(this.seatIds[s]==='C3')
           this.isSeatC3Reserved=true;
           if(this.seatIds[s]==='C4')
           this.isSeatC4Reserved=true;
           if(this.seatIds[s]==='C5')
           this.isSeatC5Reserved=true;
           if(this.seatIds[s]==='C6')
           this.isSeatC6Reserved=true;
           if(this.seatIds[s]==='C7')
           this.isSeatC7Reserved=true;
           if(this.seatIds[s]==='C8')
           this.isSeatC8Reserved=true;
           if(this.seatIds[s]==='D1')
           this.isSeatD1Reserved=true;
            if(this.seatIds[s]==='D2')
           this.isSeatD2Reserved=true;
            if(this.seatIds[s]==='D3')
           this.isSeatD3Reserved=true;
            if(this.seatIds[s]==='D4')
           this.isSeatD4Reserved=true;
           if(this.seatIds[s]==='D5')
           this.isSeatD5Reserved=true;
           if(this.seatIds[s]==='D6')
           this.isSeatD6Reserved=true;
            if(this.seatIds[s]==='D7')
           this.isSeatD7Reserved=true;
            if(this.seatIds[s]==='D8')
           this.isSeatD8Reserved=true;
            if(this.seatIds[s]==='E1')
           this.isSeatE1Reserved=true;
            if(this.seatIds[s]==='E2')
           this.isSeatE2Reserved=true;
            if(this.seatIds[s]==='E3')
           this.isSeatE3Reserved=true;
            if(this.seatIds[s]==='E4')
           this.isSeatE4Reserved=true;
            if(this.seatIds[s]==='E5')
           this.isSeatE5Reserved=true;
            if(this.seatIds[s]==='E6')
           this.isSeatE6Reserved=true;
            if(this.seatIds[s]==='E7')
           this.isSeatE7Reserved=true;
            if(this.seatIds[s]==='E8')
           this.isSeatE8Reserved=true;
            if(this.seatIds[s]==='F1')
           this.isSeatF1Reserved=true;
           if(this.seatIds[s]==='F2')
           this.isSeatF2Reserved=true;
           if(this.seatIds[s]==='F3')
           this.isSeatF3Reserved=true;
            if(this.seatIds[s]==='F4')
           this.isSeatF4Reserved=true;
            if(this.seatIds[s]==='F5')
           this.isSeatF5Reserved=true;
           if(this.seatIds[s]==='F6')
           this.isSeatF6Reserved=true;
           if(this.seatIds[s]==='F7')
           this.isSeatF7Reserved=true;
            if(this.seatIds[s]==='F8')
           this.isSeatF8Reserved=true;

          //this.isDataSaved = true;
          setTimeout(()=>{
            this.seatIds =[];
            this.$store.dispatch('clearSeats');
            this.$router.replace('/movies');
          },3000);
         }
        // console.log(seats);
        //alert("saved"); //duzenlenecek
        },
        selectSeat(idx){
           if(this.isApproved){
             return;
           }
            if(!this.seatIds.includes(idx)){
              this.seatIds.push(idx);
              this.$store.dispatch('addSelectedSeats',idx);
            }
            else{
              this.seatIds = this.seatIds.filter(s=>s!==idx);
              this.$store.dispatch('setSelectedSeats',idx);
            }
            //console.log(this.seatIds);
            //console.log(this.$store.getters.getSelectedSeats);
            this.$emit('seat-counter',this.seatIds.length);
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
#approve {
  margin-top : 14%;
  margin-left : 25%;
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
}
#approve:hover{
  cursor : pointer;
  background-color : rgb(94, 148, 14);
}
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