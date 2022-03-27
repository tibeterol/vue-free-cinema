<template>
    <div class="text">
     <h3>Fill The Form</h3>
 </div>

  <form>
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
      />
    </div>
    <div class="form-control,element-control">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
      />
    </div>
    <div class="form-control,element-control" >
      <label for="email">Email</label>
      <input type="email" id="email"  />
    </div>
        <div class="form-control,element-control" >
      <label for="phone">Phone</label>
      <input type="number" id="number"  />
    </div>
    <div class="form-control,element-control" >
        <span>Choosen Movie :</span>
        <select name="movies" id="movies">
        <option value="batman">The Batman</option>
        <option value="kolpacino">Kolpaçino Bomba</option>
        <option value="lastSamurai">The Last Samurai</option>
        </select>
    </div>
    <div id="button"> 
    <button>Choose Seats</button>
    </div>
  </form>
</template>

<style scoped>
#form-wrapper{
    box-shadow: 5 12px 8px rgb(32, 206, 174);
}
form{
  border-radius: 12px;
  box-shadow: 5 12px 8px rgb(32, 206, 174);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  background-color :rgb(255, 254, 254);
  color : black;
}
#button{
    align-items: center;
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

.form-control {
  margin: 1rem 0;
}
.element-control {
  margin-top: 3rem 0;
}
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}
input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}
input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}
input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}
input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}
h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}
.invalid label {
  color: red;
}
.invalid input {
  border: 1px solid red;
}
#button{
    margin-top : 25%;
    margin-left : 40%;
    border-radius: 15px;
}
</style>