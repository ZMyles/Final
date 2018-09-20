"use strict";

const triviaFive = {
  template:`
  <div class="movingBackground">
  <p class="questions">{{ $ctrl.trivia[4].question }}</p>

  <div class="bodyBlock">
    <form>
            <input class="buttonTrue" type="button" ng-click="$ctrl.answer('true', $ctrl.trivia[4].correct_answer)" value="true">
            <input class="buttonFalse" type="button" ng-click="$ctrl.answer('false', $ctrl.trivia[4].correct_answer)" value="false">
    </form>
  </div>
  <nav
    <ul >
        <li class="tryAgain"><a href="#!/trivia">Quit</a></li>
    </ul>
</nav>
</div>
      

     `,
     controller:["Quiz", "$location", function(Quiz, $location){
        const vm=this;
        vm.questions=()=>{
            Quiz.triviaSearch().then((response)=>{
                vm.trivia = response
                console.log(vm.trivia)
            });
        };
        vm.questions();
  
        vm.answer=(userAnswer, correctAnswer)=> {
            console.log(userAnswer);
            console.log(correctAnswer);
            
          if (userAnswer + '' === correctAnswer.toLowerCase()) {
              console.log("Correct");
              Quiz.win(); 
          } else {
              Quiz.lose();
          }
          Quiz.checkStats();
        };        
    }]
};

angular
.module("pregame")
.component("triviaFive",triviaFive);