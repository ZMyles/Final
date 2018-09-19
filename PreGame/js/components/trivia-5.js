"use strict";

const triviaFive = {
  template:`
  <div class="movingBackground">
  <p class="questions">{{ $ctrl.trivia[4].question }}</p>

  <div class="bodyBlock">
  <form ng-submit="$ctrl.answer(userAnswer,$ctrl.trivia[4].correct_answer);">
      <button class="buttonTrue" type="button" ng-value="true" name="{{$index}}" ng-model="userAnswer"></button>
      <input class="buttonFalse" type="button" ng-value="false" name="{{$index}}" ng-model="userAnswer">
      <button class="submitBtn">Submit</button>
  </form>
  </div>
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