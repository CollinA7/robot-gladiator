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
                    
                } else {
                    window.alert("You need to choose a valid option. Try again!");
                }
            }
            };
            
for(var i = 0; i < enemyNames.length; i++) {

    var pickedEnemyName = enemyNames[i];

    enemyHealth = 50;

    fight(pickedEnemyName);
}

//fight();

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
