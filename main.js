class Ship {
    constructor(id, shipName, hitPoints, damagePerHit) {
        this.id = id;
        this.shipName = shipName;
        this.hitPoints = hitPoints;
        this.damagePerHit = damagePerHit;
    }

        takeDamage() {
            this.hitpoints = this.hitPoints - damagePerHit;
        }

        die() {
            if (this.hitpoints >= 0)
            // THIS THING WILL DIE
        }
}

class AttackShip extends Ship {
    constructor(id) {
        super(id, shipName, hitPoints, damagePerHit);
        this.id = id;
        this. shipName = "Attack Ship"
        this.hitPoints = 45;
        this.damagePerHit = 12;
    }
}

class DefenceShip extends Ship {
    constructor(id) {
    super(id, shipName, hitPoints, damagePerHit);
    this.id = id;
    this. shipName = "Defence Ship"
    this.hitPoints = 80;
    this.damagePerHit = 10;
    }
}

class MotherShip extends Ship {
    constructor(id) {
        super(id, shipName, hitPoints, damagePerHit);
        this.id = id;
        this. shipName = "Mother Ship"
        this.hitPoints = 100;
        this.damagePerHit = 9;
        }
    
        everythingDiesOnDeath() {

        }
}

const ms1 = new MotherShip("ms1");
const ds1 = new DefenceShip("ds1");
const ds1 = new DefenceShip("ds2");
const ds1 = new DefenceShip("ds3");
const ds1 = new DefenceShip("ds4");
const ds1 = new DefenceShip("ds5");
const as1 = new AttackShip("as1");
const as2 = new AttackShip("as2");
const as3 = new AttackShip("as3");
const as4 = new AttackShip("as4");
const as5 = new AttackShip("as5");

const alienArray = [ms1, ds1, ds2, ds3, ds4, ds5, as1, as2, as3, as4, as5];