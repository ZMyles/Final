"use strict";

const homePage = {
  template: `
  <div class="movingBackground">
        <div class="move container">
        <div class="box"><h1>Pre-Game</h3></div>

        <div class="instructions">
        <p >Instructions</p>
           <li>-User must get all 5 questions correct in order to Win Pregame</li>
           <li>-If user answers incorrectly you lose!</li>

           <li>-Winner receives drink recipe and bragging rights!</li>

           <li>-Losers try again!</li>
    </div>
       <nav
            <ul>
                <li><a href="#!/trivia">Start?</a></li>
            </ul>
        </nav>
        </div>
     </div>
  `
}


angular
.module("pregame")
.component("homePage",homePage);