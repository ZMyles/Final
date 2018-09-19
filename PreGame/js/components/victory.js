"use strict";

const victory = {
  template: `
  <div class="movingBackground">
    <h1 class="winner">You Win!</h1>


    <div class="move">

      <div class="flip-container" ontouchstart="this.classList.toggle('hover')">
        <div class="flipper">
            <div class="front">
              <p>{{$ctrl.randomDranks.name}}</p>
              <img ng-src="{{$ctrl.randomDranks.image}}"/>
            </div>
            <div class="back"> 
              <h2>Ingredients</h2>
              <p class="ingreed">{{$ctrl.randomDranks.ingredient}}</p>   
            </div>         
        </div> 
      </div> 
      <nav
        <ul>
            <li class="tryAgain"><a href="#!/home">try again</a></li>
        </ul>
      </nav>

    </div>
  </div>

 
  
  `,
  controller:["Quiz", "$location" ,function(Quiz,$location){
    const vm=this;
    vm.dranks = Quiz.getDranks();

    vm.randomDranks = Quiz.dranks[Math.floor(Math.random()*vm.dranks.length)    ];

      }
    ]
}


angular.module("pregame")
        .component("victory", victory);