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

// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after the loop ends, player is either out of health or enemies, run endGame
    endGame();

    // play again
    //startGame();
}

var endGame = function() {
    // if player is alive, player wins
    if(playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they want to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
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
                break;
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

// start the game when the page loads
startGame();