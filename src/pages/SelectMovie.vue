
<template>
 <div class="text">
     <h3>Select A Movie</h3>
 </div>
    <div class="card" @click="selectMovie('batman')">
        <img src="https://www.timeturk.com/resim/detay/172/1725669.jpg" />
        <p>The Batman</p>   
    </div>
        <div class="card" @click="selectMovie('kolpacino')" >
        <img src="https://img3.aksam.com.tr/imgsdisk/2020/08/26/t25_260820208b91305d.jpg" />
        <p>Kolpaçino Bomba</p>   
    </div>
        <div class="card" @click="selectMovie('lastSamurai')">
        <img 
        src="https://hbomax-images.warnermediacdn.com/images/GXt52SQuo_sJHjQEAAAs3/tileburnedin?size=1280x720&partner=hbomaxcom&v=d9bab10c62791dc7eae5456fb5f0bebb&host=artist.api.cdn.hbo.com&w=1280" />
        <p>The Last Samurai</p>   
    </div>
</template>

<script>
export default {
    methods : {
     selectMovie(name){
         this.$store.dispatch('chooseMovie',name);
         this.$router.replace('/form');
     }
    }
}
</script>


<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  background-color :rgb(255, 254, 254);
}
.card:hover{
    box-shadow: 5px 10px #5383D3;
    cursor:pointer;
}
.text {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  background-color : #5383D3;
  border-radius: 10px;
  box-shadow: 3px 5px #888888;
}
h3 {
    color : black;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
img{
  width: 100%;
  height: auto;
     border-radius: 12px;
}
p{
    color : black;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>