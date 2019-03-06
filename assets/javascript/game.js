// document ready
$(document).ready(function() {
  console.log("ready!");
  //   everything nested in here

  // random number, user input, wins, losses counter
  var targetRandomNumber = 0;
  var userTotalScore = 0;
  var wins = 0;
  var losses = 0;

  //   object that contains all the crystals
  var crystal = {
    blue: {
      name: "blue",
      value: 0
    },
    green: {
      name: "green",
      value: 0
    },
    orange: {
      name: "orange",
      value: 0
    },
    yellow: {
      name: "yellow",
      value: 0
    }
  };
  //  console.log(crystal.orange.name);

  // number to guess (target random number) between 19-120
  //   make this a function so we can reset the game this time!!!
  var randomizer = function(targetRandomNumber) {
    console.log(Math.floor(Math.random() * (120 - 19 + 1)) + 19);
    console.log("target number above");
    $("#number-to-guess").text("Target: " + targetRandomNumber);
  };

  randomizer(targetRandomNumber);

  // assign each crystal random number between 1-12 x4 - also a function!
  //   include object?
  //   var crystalRandomNumber = function() {
  //     console.log(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
  //   };

  //   //   console.log(crystalRandomNumber(crystal.blue.value));

  //   // how to make this a function??? I think I figured it out above
  //   //   var blue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  //   //   var orange = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  //   //   var green = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  //   //   var yellow = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  //   //   console.log(blue, orange, green, yellow);

  //   $("#number-to-guess").text(targetRandomNumber);
  //   $("#user-total-score").text(userTotalScore);

  //   // to start the game
  //   var begin = function() {
  //     userTotalScore = 0;
  //     randomizer();
  //     crystalRandomNumber(crystal.blue.value);
  //     crystalRandomNumber(crystal.green.value);
  //     crystalRandomNumber(crystal.orange.value);
  //     crystalRandomNumber(crystal.yellow.value);
  //     // this console log is not giving me what i expected...
  //     // console.log(crystalRandomNumber(crystal.blue.value));
  //     // console.log(crystalRandomNumber(crystal.green.value));
  //     // console.log(crystalRandomNumber(crystal.orange.value));
  //     // console.log(crystalRandomNumber(crystal.yellow.value));
  //   };

  //   // let the games begin!
  //   begin();

  //   //    click on individual crystal which will add to user input counter
  //   $("#blue").on("click", function() {
  //     console.log("BLUE!");
  //     // increase userTotalScore
  //     addNum(crystal.blue);
  //   });

  //   $("#green").on("click", function() {
  //     console.log("GREEN!");
  //     // increase userTotalScore
  //     addNum(crystal.green);
  //   });

  //   $("#orange").on("click", function() {
  //     console.log("ORANGE!");
  //     // increase userTotalScore
  //     addNum(crystal.orange);
  //   });

  //   $("#yellow").on("click", function() {
  //     // increase userTotalScore
  //     // addNum(crystal.value);
  //     console.log("YELLOW!" + userTotalScore);
  //   });

  //   //   to win or lose...MORE functions!!!
  //   //   var winning = function() {
  //   //     //   compare user current score to target
  //   //     if (userTotalScore === targetRandomNumber) {
  //   //       console.log("you win");
  //   //       //   add one win to counter
  //   //       wins++;
  //   //       //   display win increase on page
  //   //       $("#wins-text").text(wins);
  //   //       //   reset game to starting conditions
  //   //       begin();
  //   //       //   if user score is under, then user still has a chance to win...
  //   //     } else if (userTotalScore > targetRandomNumber) {
  //   //       console.log("you lose");
  //   //       //   add one loss to counter
  //   //       losses++;
  //   //       //   display loss increase on page
  //   //       $("#losses-text").text(losses);
  //   //       //   reset game to starting conditions
  //   //       begin();
  //   //     }
  //   //   };

  //   //   clicking the crystals to add to user score
  //   //   var addNum = function(crystal.value) {
  //   //     userTotalScore += crystal.value;
  //   //     // you'll want to check after each click if you've won or lost yet
  //   //     // winning();
  //   //     console.log(crystal.value);
  //   //   };
});
