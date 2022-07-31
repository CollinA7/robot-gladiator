// Player and enemy values

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Fight function start

var fight = function(enemyName) {

    while(playerHealth > 0 && enemyHealth > 0) {

        //ask player if they'd like to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
            // If player chooses to skip
            if (promptFight === "skip" || promptFight ==="SKIP") {
                    
                // confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                            
                // if yes (true), leave fight
                if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                                
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
                }
            }
                        
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
                break;
                
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
            break;
            }
                
            else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
            }
                    
            }else {
                window.alert("You need to choose a valid option. Try again!");
            }
        }
    };
    
    var startGame = function() {

        playerHealth = 100;

        playerAttack = 10;

        playerMoney = 10;

        for(var i = 0; i < enemyNames.length; i++) {

            if (playerHealth > 0) {
        
                //Let player know what round they are in, remmeber that arrays start at 0 so it needs to have 1 added to it
                window.alert("Welcome to Robot Gladiators! Round " + ( i + 1) );
        
                //pick new enemy to fight based on the index of the enemyNames array
                var pickedEnemyName = enemyNames[i];
        
                //Resets enemyHealth before starting new fight
                enemyHealth = 50;
        
                fight(pickedEnemyName);
            }

            else {
            window.alert("You have lost your robot in battle! Game Over!")
            
            
        }
        
    }
    
    endGame();
    
}
    
    var endGame = function() {

        //  If player is still alive
        if (playerHealth > 0) {
            
            window.alert("Great job, you've survived the game! you now have a score of "  + playerMoney + ".");
        }
        
        else {
            window.alert("You've lest your robot in battle")
        }
        
        var playAgainConfirm = window.confirm("Would you like to play again?");
        
        if (playAgainConfirm) {
            // restart the game
            startGame();
        }
        
        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
    }

//fight();

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
