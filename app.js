
    // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form
    const getHumanData = (function (){
        const humanData = {
            name: document.getElementById("name"),
            height: document.getElementById("feet") + document.getElementById("inches"),
            weight: document.getElementById("inches"),
            diet: document.getElementById("diet"),
        }
        
        return humanData
    })()

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
function logSubmit(event) {
    event.preventDefault();
    console.log("hello")
  }
  

  (function (){
      document.getElementById('btn').addEventListener('click', logSubmit)
  })()