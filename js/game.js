// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You wake in a cold cell",
            choices: [
                {
                    text: "Aggressive",
                    nextLevel: "guardEncounter1",
                },

                {
                    text: "Patient",
                    nextLevel: "guardEncounter2",
                },
            ]
        },

        guardEncounter1: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Guards enter the cell, demanding you stand.",
            choices: [
                {
                    text: "grab guard weapon",
                    nextLevel: "agressiveFight",
                },
            ]
        },
         agressiveFight: {
            message:"One guard is disabled, only one left.",
            choices: [
                {
                    text:"Tackle the remaining guard.",
                    nextLevel: "takedown",
                }
            ]
        },
        takedown: {
            message: "The guard goes down with a tough fight."
            choices: [
                {
                    
                }
            ]
        }
        guardEncounter2: {
            message: "Some adventurer you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
       

    }
};
