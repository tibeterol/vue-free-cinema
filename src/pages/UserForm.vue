<template>
     <div id="text">
     <h3>Fill The Form</h3>
 </div>
 <div class="card"> 
 <div class="container">
  <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="country">Selected Movie</label>
      </div>
      <div class="col-75">
        <select id="country" name="country">
          <option value="batman">The Batman</option>
          <option value="kolpacino">Kolpaçino Bomba</option>
          <option value="lastSamurai">The Last Samurai</option>
        </select>
      </div>
    </div>
     <div class="row">
      <div class="col-25">
        <label for="lname">Your email</label>
      </div>
      <div class="col-75">
        <input type="email" id="email" name="email" placeholder="Your email">
      </div>
    </div>
    <div class="row">
        <button class="button-submit">Submit Changes</button>
    </div>
  </form>
</div>

</div>
</template>

<style scoped>
#text {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  background-color : #5383D3;
  border-radius: 10px;
  box-shadow: 3px 5px #888888;
}

* {
  box-sizing: border-box;
}

input[type=text], select, textarea,input[type=email] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
  margin-top :50px;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #fffefeee;
  padding: 20px;
  color : black;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  background-color :rgb(255, 254, 254);
}

.button-submit {
 display: inline-block;
  padding: 25px 35px; /* 15px 25px */
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  margin-top : 40%;
  margin-left:30%;
    }

.button-submit:hover {background-color: #3e8e41}

.button-submit:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>