"use strict"
const trivia = {
    template:`
    <div class="movingBackground">
        <div class="questionHeader">
        <p class="questions">{{ $ctrl.trivia[0].question }}</p>
        </div>
    
        <div class="bodyBlock">
        <form ng-submit="$ctrl.answer(userAnswer,$ctrl.trivia[0].correct_answer);">
            <input ng-class="{ 'isOn': $ctrl.isOn}" ng-click="$ctrl.toggle();" class="buttonTrue" type="button" ng-value="true" name="{{$index}}" ng-model="userAnswer">

            <input ng-click="$ctrl.toggle();" class="buttonFalse" type="button" ng-value="false" name="{{$index}}" ng-model="userAnswer">
            
            <button class="submitBtn">Submit</button>
        </div>
        </form>
    
        
    </div>
    `,
    //Injected Our "Quiz" services and "$location" to use their properties 
    controller:["Quiz", "$location" ,function(Quiz,$location){
        const vm=this;
        vm.isOn = true;

        vm.questions=()=>{
            Quiz.triviaSearch().then((response)=>{
                vm.trivia = Quiz.results;
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
                console.log("Trivia 1 You're wrong. you suck");
                Quiz.lose();
            }
            $location.path("/trivia-two");


        vm.toggle=() => {
            if(vm.isOn) {
                vm.isOn = false;
            } else {
                vm.isOn = true;
            }
            console.log(vm.isOn); 
        }
        };     
    }]
};

angular
.module("pregame")
.component("trivia",trivia);