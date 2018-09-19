"use strict";

const defeat = {
  template: `
  <div class="defeatPage">
    <h1 class="lose">You lose</h1>
  </div>

  <div class="wrapper">
 
      <li><a href="#!/home">Try Again?</a></li>
   </div>
   <p>{{$ctrl.stats}}</p>
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