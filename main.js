class Ship {
    constructor(shipName, hitPoints, damagePerHit) {
        this.shipName = shipName;
        this.hitPoints = hitPoints;
        this.damagePerHit = damagePerHit;
    }

        takeDamage() {
            this.hitPoints = this.hitPoints - this.damagePerHit;
        }

        die() {
            this.hitPoints = 0;
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

const noOfMotherShips = 1;
const noOfAttackShips = 5;
const noOfDefenceShips = 5;
const totalShips = noOfMotherShips + noOfAttackShips + noOfDefenceShips;

let alienArray = [];

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
    }
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
        alienArray.forEach(ship => ship.die());
        alert("You slaughtered our friends from across the stars");
    } else if (randomShip.hitPoints <= 0) {
        alienArray.splice(randomShipIndex, 1);
    }
};

// const everythingDiesOnMSDeath = () => {
//     // alienArray = [];
//     alert("You slaughtered the friends from across the stars");
// };

const checkIfAlive = (ship) => {
    if (ship.hitPoints >= 1) {
        return ship;
    };
};

const doDamageOnClick = () => {
    damageRandomShip(alienArray);
    printTheHTML();
};