"use strict";

const defeat = {
  template: `
  <div class="defeatPage">
    <h1 class="lose">You lose</h1>
<<<<<<< HEAD

   
    
    <div class="wrapper">
    <nav
    <ul >
    <p class="stats">Correct: {{$ctrl.stats.wins}}</p>
    <p class="stats">Incorrect: {{$ctrl.stats.losses}}</p>
        <li class="tryAgain"><a href="#!/home">Try Again?</a></li>
    </ul>
</nav>

<div style="width:40%px;height:15px;padding-bottom:40%;position:relative;"><iframe src="https://giphy.com/embed/NRXleEopnqL3a" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/NRXleEopnqL3a"></a></p>
    
      
=======
    <li class="wrapper"><a href="#!/home">Try Again?</a></li>
  </div>


  <div class="wrapper">
      <li><a href="#!/home">Try Again?</a></li>
       <p>{{$ctrl.stats}}</p>
>>>>>>> 059b6c3cdbaefdb37c328ffc4ac53926f4884001
   </div>

   


    <nav
    
</nav>



  </div>


  

  
     
  `,
  controller:["Quiz", "$location" ,function(Quiz,$location){
    const vm=this;
    vm.stats = Quiz.getStats();
    console.log(vm.stats);
   }
]

}

angular.module("pregame")
        .component("defeat", defeat);