var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;

// Fight function start

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  

    //If the player chooses to fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    
    // Player attack function 
    enemyHealth = enemyHealth - playerAttack;

    console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //enemy health check
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }

    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Enemy attack function
  playerHealth = playerHealth - enemyAttack;

    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //Player Health check
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else{
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // If player chooses to skip
} else if (promptFight === "skip" || promptFight ==="SKIP") {
    
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerName + " has chosen to skip the fight!");
    
    playerMoney = playerMoney - 2;
    }
    
    //if no (false), ask question again by running fight() again
    else {
        fight();
    }
    
    
} else {
    window.alert("You need to choose a valid option. Try again!");
}

};

fight();
