"use strict";

const defeat = {
  template: `
  <div class="defeatPage">
    <h1 class="lose">You lose</h1>

   
    
    <div class="wrapper">
    <nav
    <ul >
    <p class="stats statsHeight">{{$ctrl.stats}}</p>
        <li class="tryAgain"><a href="#!/home">Try Again?</a></li>
    </ul>
</nav>

<div style="width:40%px;height:15px;padding-bottom:40%;position:relative;"><iframe src="https://giphy.com/embed/NRXleEopnqL3a" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/NRXleEopnqL3a"></a></p>
    
      
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