var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName,playerAttack,playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index")
}


var fight = function(enemyName) {
    // repeat and execute as long as enemy is alive
    while(playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player  chooses to skip
        if (promptFight == "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from player
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

        // if player chooses to fight
        if(promptFight === "fight"  || promptFight === "FIGHT") {
            // enemyHealth minus playerAttack then update enemyHealth value
            enemyHealth = enemyHealth - playerAttack;

            // log result to console to verify
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                // award player for winning
                playerMoney = playerMoney + 20
                
                // leave while loop since enemy is dea
                break;
            }
            else{
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // playerHealth minus enemyAttack then update playerHealth value
            playerHealth = playerHealth - enemyAttack;

            // log result to console to verify
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            // check player's health
            if (playerHealth <=0) {
                window.alert(playerName + " has died!");
                //break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }

        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    } // end of while loop
} // end of fight function

for(var i = 0; i < enemyNames.length; i++) {
    if(playerHealth > 0) {
        // let player know what round
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

        // pick new enemy
        var pickedEnemyName = enemyNames[i];
    
        // reset enemy health
        enemyHealth = 50;

        // use debugger
        // debugger;

        //pass the pickedEnemyName to fight function
        fight(pickedEnemyName);
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}