
    // Create Dino Constructor


    // Create Dino Objects

    // Create Human Object

    // Use IIFE to get human data from form
const parseValue = (value) =>{
    document.getElementById(value).value
}

const getHumanData = function(){
    const humanData= { //this will be refined as the object above
        name: parseValue("name"),
        height: parseValue("feet") + parseValue("inches"),
        weight: parseValue("inches"),
        diet: parseValue("diet")
    }

    // console.log("humanData", humanData)
    return (function(){
        return humanData;  
    })()
}

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
    const human = getHumanData();
    console.log("humanData", human)
    console.log("hello")
  }
  

  (function (){
      document.getElementById('btn').addEventListener('click', logSubmit)
  })()