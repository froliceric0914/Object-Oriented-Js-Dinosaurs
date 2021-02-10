// const rawDinos = [
//     {
//         species: 'Triceratops',
//         weight: 13000,
//         height: 114,
//         diet: 'herbavor',
//         where: 'North America',
//         when: 'Late Cretaceous',
//         fact: 'First discovered in 1889 by Othniel Charles Marsh',
//     },
//     {
//         species: 'Tyrannosaurus Rex',
//         weight: 11905,
//         height: 144,
//         diet: 'carnivor',
//         where: 'North America',
//         when: 'Late Cretaceous',
//         fact: 'The largest known skull measures in at 5 feet long.',
//     },
//     {
//         species: 'Anklyosaurus',
//         weight: 10500,
//         height: 55,
//         diet: 'herbavor',
//         where: 'North America',
//         when: 'Late Cretaceous',
//         fact: 'Anklyosaurus survived for approximately 135 million years.',
//     },
//     {
//         species: 'Brachiosaurus',
//         weight: 70000,
//         height: '372',
//         diet: 'herbavor',
//         where: 'North America',
//         when: 'Late Jurasic',
//         fact: 'An asteroid was named 9954 Brachiosaurus in 1991.',
//     },
//     {
//         species: 'Stegosaurus',
//         weight: 11600,
//         height: 79,
//         diet: 'herbavor',
//         where: 'North America, Europe, Asia',
//         when: 'Late Jurasic to Early Cretaceous',
//         fact:
//             'The Stegosaurus had between 17 and 22 seperate places and flat spines.',
//     },
//     {
//         species: 'Elasmosaurus',
//         weight: 16000,
//         height: 59,
//         diet: 'carnivor',
//         where: 'North America',
//         when: 'Late Cretaceous',
//         fact: 'Elasmosaurus was a marine reptile first discovered in Kansas.',
//     },
//     {
//         species: 'Pteranodon',
//         weight: 44,
//         height: 20,
//         diet: 'carnivor',
//         where: 'North America',
//         when: 'Late Cretaceous',
//         fact: 'Actually a flying reptile, the Pteranodon is not a dinosaur.',
//     },
//     {
//         species: 'Pigeon',
//         weight: 0.5,
//         height: 9,
//         diet: 'herbavor',
//         where: 'World Wide',
//         when: 'Holocene',
//         fact: 'All birds are living dinosaurs.',
//     },
// ];

// // all creature here are vertebrate
// let dinosData = rawDinos.map((dino) => {
//     let modifiedFacts;
//     if (dino.species === 'Pigeon') {
//         modifiedFacts = [`${dino.fact}`];
//     } else {
//         modifiedFacts = [
//             `${dino.fact}`,
//             `${dino.species} used to live in ${dino.when}`,
//             `${dino.species} used to live during ${dino.where}`,
//         ];
//     }
//     return new Dino(
//         dino.species,
//         dino.weight,
//         dino.height,
//         dino.diet,
//         modifiedFacts
//     );
// });

fetch('dino.json', {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})
    .then((res) => res.json())
    .then(
        (data) =>
            (dinosData = data.Dinos.map((dino) => {
                let modifiedFacts;
                if (dino.species === 'Pigeon') {
                    modifiedFacts = [`${dino.fact}`];
                } else {
                    modifiedFacts = [
                        `${dino.fact}`,
                        `${dino.species} used to live in ${dino.when}`,
                        `${dino.species} used to live during ${dino.where}`,
                    ];
                }
                return new Dino(
                    dino.species,
                    dino.weight,
                    dino.height,
                    dino.diet,
                    modifiedFacts
                );
            }))
    );

// Create Dino Constructor
/* ???how to define prototype to the Constructor funciton? */
function Vertebrate(species, weight, height, diet, facts) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.facts = facts;
    this.newFact;
    this.image = `images/${species.toLowerCase()}.png`;
}

// Create Dino Objects
function Dino(species, weight, height, diet, facts) {
    Vertebrate.call(this, species, weight, height, diet, facts);
}

// add all the necessary comparison functions to Dino prototype
Dino.prototype.addFact = function (fact) {
    this.facts.push(fact);
    console.log('this add fact', this);
};

Dino.prototype.compareHeight = function (humanHeight) {
    if (humanHeight >= this.height) {
        this.newFact = `You are ${Math.round(
            humanHeight / this.height
        )} times higher than ${this.species}`;
    } else {
        this.newFact = `${this.species} are ${Math.round(
            this.height / humanHeight
        )} times higher than you`;
    }

    this.addFact(this.newFact);
};

Dino.prototype.compareDiet = function (humanDiet) {
    this.newFact =
        this.compareDiet === humanDiet
            ? `We are both ${humanDiet}`
            : `${this.species} are ${this.diet}, while you are ${humanDiet}`;
    this.addFact(this.newFact);
};

Dino.prototype.compareWeight = function (humanWeight) {
    if (humanWeight >= this.weight) {
        this.newFact = `You are ${Math.round(
            humanWeight / this.weight
        )} times heavier than ${this.species}`;
    } else {
        this.newFact = `${this.species} are ${Math.round(
            this.weight / humanWeight
        )} times heavier than you`;
    }
    this.addFact(this.newFact);
};

// Create Human Object
function Human(name, weight, height, diet) {
    this.name = name;
    Vertebrate.call(this, 'human', weight, height, diet, null);
}

// Use IIFE to get human data from form
let getHumanData = function () {
    let name, height, weight, diet;
    return (function () {
        name = parseValue('name');
        height =
            parseInt(parseValue('feet')) * 12 + parseInt(parseValue('inches'));
        weight = parseValue('weight');
        diet = parseValue('diet');
        return new Human(name, weight, height, diet);
    })();
};

// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', function () {
    const human = getHumanData();

    //insert human in the center
    dinosData.splice(4, 0, human);

    dinosData.map((dino) => {
        // generate 3 new facts compared to human info
        if (dino.facts) {
            dino.compareHeight(human.height);
            dino.compareWeight(human.weight);
            dino.compareDiet(human.diet);
        }

        //generate the tile
        dinoCard = generateTiles(
            dino.species,
            dino.image,
            dino.facts,
            dino.name
        );

        // Add each tile to DOM
        document.getElementById('grid').appendChild(dinoCard);
    });

    // Remove form from screen
    document.getElementById('dino-compare').style.display = 'none';
});

/* helper functions */

//parse the value from form input
const parseValue = (e) => document.getElementById(e).value;

// Generate Tiles for each Dino in Array
function generateTiles(species, imagePath, facts, name) {
    let gridTile = document.createElement('div');
    gridTile.className = 'grid-item';

    let speciesDiv = document.createElement('h3');
    speciesDiv.innerText = species === 'human' ? name : species;
    gridTile.appendChild(speciesDiv);

    let imagesDiv = document.createElement('img');
    imagesDiv.src = imagePath;
    gridTile.appendChild(imagesDiv);

    // only dinosaurs include facts
    if (facts) {
        //pick up a random from the 6 facts from the facts array unless it is a pigeon
        let fact =
            species === 'Pigeon'
                ? facts[0]
                : facts[Math.floor(Math.random() * 6)];
        let factDiv = document.createElement('p');
        factDiv.innerText = fact;
        gridTile.appendChild(factDiv);
    }

    return gridTile;
}

//
// function errorMsg(value) {
//     if (value === ''{
//        errorMsg.innerHTML = <>
//    })
// }
