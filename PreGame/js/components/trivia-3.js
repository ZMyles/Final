"use strict";

const triviaThree = {
        template:`
        <div class="movingBackground">
        <p class="questions">{{ $ctrl.trivia[2].question }}</p>
    
        <div class="bodyBlock">
        <form ng-submit="$ctrl.answer(userAnswer,$ctrl.trivia[2].correct_answer);">
            <input class="buttonTrue" type="button" ng-value="true" name="{{$index}}" ng-model="userAnswer">
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
                vm.trivia = response;
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
                console.log("Trivia 3 You're wrong. you suck");
                Quiz.lose();
            }
            Quiz.checkStats();
            $location.path("/trivia-four");
        };        
    }]
}

angular
.module("pregame")
.component("triviaThree",triviaThree);