"use strict";

const victory = {
  template: `
  <div class="movingBackground">

   <h1 class="winner">You Win!</h1>

   <nav
   <ul>
       <li class="tryAgain"><a href="#!/home">Try again?</a></li>
   </ul>
</nav>

  <div class="move adjust">

  <p class="stats">Correct: {{$ctrl.stats.wins}}</p>
  <p class="stats">Incorrect: {{$ctrl.stats.losses}}</p>
   <div class="flip-container" ontouchstart="this.classList.toggle('hover')">
                <div class="flipper">
                    <div class="front">
<<<<<<< HEAD
              <p>{{$ctrl.randomDranks.name}}<p>
              <img src="{{$ctrl.randomDranks.image}}">

=======
              <p><p>{{$ctrl.randomDranks.name}}<p></p>
                <img ng-src="{{$ctrl.randomDranks.image}}"/>
>>>>>>> 059b6c3cdbaefdb37c328ffc4ac53926f4884001
              
                    </div>
                  <div class="back"> 
                  <h2>Ingredients</h2>
                  <p class="ingreed">{{$ctrl.randomDranks.ingredient}}</p>
              
                    </div>
             </div>
   
             
   </div>
</div>
    

   
   </div>
</div>

   

 
  
  `,
  controller:["Quiz", "$location" ,function(Quiz,$location){
    const vm=this;
    vm.dranks = Quiz.getDranks();
    
    vm.stats = Quiz.getStats();
    console.log(vm.stats);
    
    vm.randomDranks = Quiz.dranks[Math.floor(Math.random()*vm.dranks.length)    ];

      }
    ]
}


angular.module("pregame")
        .component("victory", victory);