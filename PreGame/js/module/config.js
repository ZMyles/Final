"use strict";

angular.module("pregame")
        .config(($routeProvider) => {
            $routeProvider
              .when("/home", {
                template:`<home-page></home-page>`
              })
              .when("/trivia", {
                template:`<trivia></trivia>`
              })
              .when("/trivia-two", {
                template: `<trivia-two></trivia-two>`
              })
              .when("/trivia-three", {
                template: `<trivia-three></trivia-three>`
              })
              .when("/trivia-four", {
                template: `<trivia-four></trivia-four>`
              })
              .when("/trivia-five", {
                template: `<trivia-five></trivia-five>`
              })
              .when("/victory", {
                template: `<victory></victory>`
              })
              .when("/defeat", {
                template: `<defeat></defeat>`
              })
              .otherwise({redirectTo:"/home"})
                
          })
