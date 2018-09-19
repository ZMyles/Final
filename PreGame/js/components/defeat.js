"use strict";

const defeat = {
  template: `
  <div class="defeatPage">
    <h1 class="lose">You lose</h1>
    <li class="wrapper"><a href="#!/home">Try Again?</a></li>
  </div>


  <div class="wrapper">
      <li><a href="#!/home">Try Again?</a></li>
       <p>{{$ctrl.stats}}</p>
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