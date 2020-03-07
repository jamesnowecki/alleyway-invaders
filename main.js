class Ship {
    constructor(shipName, hitPoints, damagePerHit) {
        this.shipName = shipName;
        this.hitPoints = hitPoints;
        this.damagePerHit = damagePerHit;
    }

        takeDamage() {
            this.hitPoints = this.hitPoints - this.damagePerHit;
        }
}

class AttackShip extends Ship {
    constructor() {
        super("AttackShip", 45, 12);
    };
};

class DefenceShip extends Ship {
    constructor() {
    super("DefenceShip", 80, 10);
    };
};

class MotherShip extends Ship {
    constructor() {
        super("MotherShip", 1, 9);
        };
};

const shipContainer = document.getElementById("prints-ships");
let noOfMotherShips;
let noOfAttackShips;
let noOfDefenceShips;
let totalShips;

const getNoOfShips = () => {
    return noOfMotherShips = document.getElementById("mothership-input").value, 
    noOfAttackShips = document.getElementById("attackship-input").value, 
    noOfDefenceShips = document.getElementById("defenceship-input").value,
    totalShips = noOfMotherShips + noOfAttackShips + noOfDefenceShips;
};

// let totalShips = noOfMotherShips + noOfAttackShips + noOfDefenceShips;

let alienArray = [];

const populateAlienArray = (noOfMotherShips, ) => {
    for (let index = 0; index < totalShips; index++) {

        let newMotherShip;
        let newAttackShip;
        let newDefenceShip;

        if (index < noOfMotherShips) {
            newMotherShip = new MotherShip();
        alienArray.push(newMotherShip);
        } else if (index <= noOfAttackShips) {
            newAttackShip = new AttackShip(); 
            alienArray.push(newAttackShip)
        } else if (index <= totalShips) {
            newDefenceShip = new DefenceShip();
            alienArray.push(newDefenceShip);
        };
    };
}

const printTheHTML = () => {
    shipContainer.innerHTML = "";

    alienArray.forEach(ship => {
        shipContainer.innerHTML += `<p>${ship.shipName}: ${ship.hitPoints}</p>`;
    })
}

const damageRandomShip = () => {
    const randomShipIndex = [Math.floor(Math.random() * alienArray.length)]
    const randomShip = alienArray[randomShipIndex];
    randomShip.takeDamage();
    if (randomShip.hitPoints <= 0 && randomShip.shipName === "MotherShip") {
        alienArray = [];
        alert("You slaughtered our friends from across the stars");
        printTheHTML();
    } else if (randomShip.hitPoints <= 0) {
        alienArray.splice(randomShipIndex, 1);
    }
};

const doDamageOnClick = () => {
    printTheHTML();
    damageRandomShip(alienArray);
};

const startGame = () => {
    console.log(noOfMotherShips);
    console.log(noOfAttackShips);
    console.log(noOfDefenceShips);
    console.log(totalShips);
    populateAlienArray();
    printTheHTML();
}