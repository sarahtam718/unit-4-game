// document ready
$(document).ready(function() {
  // console.log("ready!");
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
  var randomizer = function() {
    var targetRandomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log("randomizer go: " + targetRandomNumber);
    $("#number-to-guess").html("Target: " + targetRandomNumber);
  };

  // assign each crystal random number between 1-12 x4 - also a function!
  //   include object?
  var randomCrystal = function() {
    crystal.blue.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystal.green.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystal.orange.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystal.yellow.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  };

  //   console.log(crystalRandomizer());

  //   // how to make this a function??? I think I figured it out ?
  //   //   var blue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  //   //   var orange = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  //   //   var green = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  //   //   var yellow = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  //   //   console.log(blue, orange, green, yellow);

  //   // to start the game
  var begin = function() {
    userTotalScore = 0;
    randomizer();
    // crystalRandomizer(crystal.blue.value);
    // crystalRandomizer(crystal.green.value);
    // crystalRandomizer(crystal.orange.value);
    // crystalRandomizer(crystal.yellow.value);
    randomCrystal();

    // console.log(crystalRandomizer(crystal.blue.value));
  };

  begin();

  //    click on individual crystal which will add to user input counter
  $("#blue").on("click", function() {
    // console.log("BLUE!");
    // console.log(crystal.blue);
    // link addNum to object rather than "this," which is just the image
    // console.log(this);
    addNum(crystal.blue.value);
  });

  $("#green").on("click", function() {
    // console.log("GREEN!");
    addNum(crystal.green.value);
  });

  $("#orange").on("click", function() {
    // console.log("ORANGE!");
    addNum(crystal.orange.value);
  });

  $("#yellow").on("click", function() {
    addNum(crystal.yellow.value);
    // console.log("YELLOW!");
  });

  //   clicking the crystals to add to user score
  function addNum(value) {
    userTotalScore = userTotalScore + value;
    // you'll want to check after each click if you've won or lost yet
    // console.log("this is the total: " + userTotalScore);
    $("#user-total-score").text("User Total Score: " + userTotalScore);
    winning(userTotalScore);
    // console.log(userTotalScore);
  }

  // console.log(userTotalScore);

  //   to win or lose...MORE functions!!! BUT something is terribly wrong with my scope regarding the updated target random number...it's local, and stuck inside the randomizer function...At least this way, everyone is a winner?
  var winning = function() {
    console.log("it's working " + userTotalScore + targetRandomNumber);
    // compare user current score to target
    if (userTotalScore > targetRandomNumber) {
      console.log("you win");
      //   add one win to counter
      wins++;
      //   display win increase on page
      $("#wins-text").text("Wins: " + wins);
      //   // reset game to starting conditions
      begin();
      //   // if user score is under, then user still has a chance to win...
    } else if (userTotalScore === targetRandomNumber) {
      console.log("you lose");
      //   //   add one loss to counter
      losses++;
      //   //   display loss increase on page
      $("#losses-text").text("Losses: " + losses);
      //   //   //   reset game to starting conditions
      begin();
    } else {
      console.log("keep going");
    }
  };
  // };
  // let the games begin!
  // begin();
});
