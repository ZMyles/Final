"use strict";

const defeat = {
  template: `
  <div class="defeatPage">
    <h1 class="lose">You lose</h1>
  </div>

  <div class="wrapper">
 
      <li><a href="#!/home">Try Again?</a></li>
   </div>
  `
}

angular.module("pregame")
        .component("defeat", defeat);