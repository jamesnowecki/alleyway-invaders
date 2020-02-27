class Ship {
    constructor(id, shipName, hitPoints, damagePerHit) {
        this.id = id;
        this.shipName = shipName;
        this.hitPoints = hitPoints;
        this.damagePerHit = damagePerHit;
    }

        takeDamage() {
            this.hitPoints = this.hitPoints - this.damagePerHit;
        }
}

class AttackShip extends Ship {
    constructor(id) {
        super(id, "Attack Ship", 45, 12);
        this.id = id;
    }
}

class DefenceShip extends Ship {
    constructor(id) {
    super(id, "Defence Ship", 80, 10);
    this.id = id;
    }
}

class MotherShip extends Ship {
    constructor(id) {
        super(id, "Mother Ship", 100, 9);
        this.id = id;
        }
    
        everythingDiesOnDeath() {
            if(this.hitPoints <= 0) {
                alert("You slaughtered the peaceful aliens!")
            
            }
        }
}

const ms1 = new MotherShip("ms1");
const ds1 = new DefenceShip("ds1");
const ds2 = new DefenceShip("ds2");
const ds3 = new DefenceShip("ds3");
const ds4 = new DefenceShip("ds4");
const ds5 = new DefenceShip("ds5");
const as1 = new AttackShip("as1");
const as2 = new AttackShip("as2");
const as3 = new AttackShip("as3");
const as4 = new AttackShip("as4");
const as5 = new AttackShip("as5");

const alienArray = [ms1, ds1, ds2, ds3, ds4, ds5, as1, as2, as3, as4, as5];

const getRandomElement = (shipArray) => {
    return shipArray[Math.floor(Math.random() * shipArray.length)]
};

const damageRandomShip = (aliveArray) => {
    const randomShip = getRandomElement(aliveArray);
    randomShip.takeDamage();
};

const printTheHitPoints = (ship) => {
    const shipID = ship.id;
    const shipHP = ship.hitPoints
    const shipHTML = document.getElementById(shipID);
    if (ship.hitPoints >= 0){
    return shipHTML.innerHTML = shipHP;
    } else {
        return shipHTML.innerHTML = "FRIEND FROM ACROSS THE STARS DESTROYED!"
    };
};

const checkIfAlive = (ship) => {
    if (ship.hitPoints >= 1) {
        return ship;
    };
};

const doDamageOnClick = () => {
    const alienArrayOfAliveShips = alienArray.filter(checkIfAlive)
    damageRandomShip(alienArrayOfAliveShips);
    alienArray.forEach(printTheHitPoints);
    ms1.everythingDiesOnDeath();
};